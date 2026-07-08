import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const [referencePath, currentPath, name, topValue, heightValue, outputRoot = 'reference/comparisons/sections/home'] = process.argv.slice(2);
if (!referencePath || !currentPath || !name || topValue == null || heightValue == null) {
  console.error('Usage: node scripts/section-compare.mjs <reference> <current> <name> <top> <height> [output-root]');
  process.exit(1);
}
const top = Number(topValue);
const requestedHeight = Number(heightValue);
const [referenceMeta, currentMeta] = await Promise.all([sharp(referencePath).metadata(), sharp(currentPath).metadata()]);
const width = Math.min(referenceMeta.width ?? 0, currentMeta.width ?? 0);
const height = Math.min(requestedHeight, (referenceMeta.height ?? 0) - top, (currentMeta.height ?? 0) - top);
if (!width || !height || top < 0) throw new Error('Invalid crop geometry.');
const outputDir = path.join(outputRoot, name);
await mkdir(outputDir, { recursive: true });
const crop = file => sharp(file).extract({ left: 0, top, width, height }).removeAlpha();
const [referencePng, currentPng, reference, current] = await Promise.all([
  crop(referencePath).png().toBuffer(), crop(currentPath).png().toBuffer(),
  crop(referencePath).raw().toBuffer(), crop(currentPath).raw().toBuffer(),
]);
const overlay = Buffer.alloc(reference.length);
const diff = Buffer.alloc(reference.length);
let changed = 0;
for (let index = 0; index < reference.length; index += 1) {
  overlay[index] = Math.round((reference[index] + current[index]) / 2);
  const delta = Math.abs(reference[index] - current[index]);
  diff[index] = Math.min(255, delta * 4);
  if (delta > 25) changed += 1;
}
const raw = { width, height, channels: 3 };
const side = await sharp({ create: { width: width * 2, height, channels: 3, background: '#fff' } })
  .composite([{ input: referencePng, left: 0, top: 0 }, { input: currentPng, left: width, top: 0 }]).png().toBuffer();
await Promise.all([
  sharp(referencePng).toFile(path.join(outputDir, 'reference.png')),
  sharp(currentPng).toFile(path.join(outputDir, 'current.png')),
  sharp(side).toFile(path.join(outputDir, 'side-by-side.png')),
  sharp(overlay, { raw }).png().toFile(path.join(outputDir, 'overlay-50.png')),
  sharp(diff, { raw }).png().toFile(path.join(outputDir, 'diff-amplified-4x.png')),
]);
console.log(JSON.stringify({ name, top, width, height, changedChannelRatio: Number((changed / reference.length).toFixed(4)), outputDir: path.resolve(outputDir) }));
