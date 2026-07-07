import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [inputDir, outputFile] = process.argv.slice(2);
if (!inputDir || !outputFile) throw new Error('Usage: node scripts/asset-contact-sheet.mjs <input-dir> <output.png>');

const files = (await readdir(inputDir)).filter(file => /\.(png|jpe?g|webp)$/i.test(file)).sort();
const cellWidth = 320;
const cellHeight = 280;
const columns = 4;
const rows = Math.ceil(files.length / columns);
const composites = [];

for (const [index, file] of files.entries()) {
  const image = sharp(path.join(inputDir, file));
  const metadata = await image.metadata();
  const thumbnail = await image.resize(280, 220, { fit: 'contain', background: '#f8f0e4' }).flatten({ background: '#f8f0e4' }).png().toBuffer();
  const label = Buffer.from(`<svg width="${cellWidth}" height="60"><rect width="100%" height="100%" fill="#fffaf1"/><text x="12" y="22" font-family="Arial" font-size="13" fill="#351d20">${file.slice(0, 12)}…</text><text x="12" y="43" font-family="Arial" font-size="12" fill="#715f55">${metadata.width}×${metadata.height}</text></svg>`);
  const left = (index % columns) * cellWidth;
  const top = Math.floor(index / columns) * cellHeight;
  composites.push({ input: thumbnail, left: left + 20, top });
  composites.push({ input: label, left, top: top + 220 });
}

await mkdir(path.dirname(outputFile), { recursive: true });
await sharp({ create: { width: columns * cellWidth, height: rows * cellHeight, channels: 3, background: '#f8f0e4' } })
  .composite(composites)
  .png()
  .toFile(outputFile);
console.log(`Wrote ${files.length} assets to ${outputFile}`);
