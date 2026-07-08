import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const [referencePath, currentPath, name = 'comparison', outputDir = 'reference/comparisons'] = process.argv.slice(2);
if (!referencePath || !currentPath) {
  console.error('Usage: npm run visual:compare -- <reference.png> <current.png> [name] [output-dir]');
  process.exit(1);
}
const [referenceMeta, currentMeta] = await Promise.all([sharp(referencePath).metadata(), sharp(currentPath).metadata()]);
const width = Math.min(referenceMeta.width ?? 0, currentMeta.width ?? 0);
const height = Math.min(referenceMeta.height ?? 0, currentMeta.height ?? 0);
if (!width || !height) throw new Error('Unable to read comparison images.');
const read = file => sharp(file).extract({ left:0, top:0, width, height }).removeAlpha().raw().toBuffer();
const [reference, current] = await Promise.all([read(referencePath), read(currentPath)]);
const overlay = Buffer.alloc(reference.length);
const diff = Buffer.alloc(reference.length);
for (let i = 0; i < reference.length; i += 1) {
  overlay[i] = Math.round((reference[i] + current[i]) / 2);
  diff[i] = Math.min(255, Math.abs(reference[i] - current[i]) * 4);
}
await mkdir(outputDir, { recursive:true });
const raw = { width, height, channels:3 };
const side = await sharp({ create:{ width:width * 2, height, channels:3, background:'#fff' } })
  .composite([{ input:reference, raw, left:0, top:0 }, { input:current, raw, left:width, top:0 }]).png().toBuffer();
await Promise.all([
  sharp(overlay, { raw }).png().toFile(path.join(outputDir, `${name}-overlay-50.png`)),
  sharp(diff, { raw }).png().toFile(path.join(outputDir, `${name}-diff-amplified.png`)),
  sharp(side).toFile(path.join(outputDir, `${name}-side-by-side.png`)),
]);
console.log(`Compared ${width}x${height}px and wrote QA artifacts to ${path.resolve(outputDir)}`);
