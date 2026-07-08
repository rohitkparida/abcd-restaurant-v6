import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const root = process.cwd();
const baseURL = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4322';
const manifestEntries = JSON.parse(await readFile(path.join(root, 'reference/manifest.json'), 'utf8'));
const only = new Set((process.env.QA_ONLY ?? '').split(',').map(value => value.trim()).filter(Boolean));
const manifest = only.size ? manifestEntries.filter(entry => only.has(entry.id)) : manifestEntries;
const outputRoot = path.join(root, 'reference/comparisons/routes');
await mkdir(outputRoot, { recursive: true });

function compareBuffers(reference, current) {
  const overlay = Buffer.alloc(reference.length);
  const diff = Buffer.alloc(reference.length);
  let changed = 0;
  for (let index = 0; index < reference.length; index += 1) {
    overlay[index] = Math.round((reference[index] + current[index]) / 2);
    const delta = Math.abs(reference[index] - current[index]);
    diff[index] = Math.min(255, delta * 4);
    if (delta > 25) changed += 1;
  }
  return { overlay, diff, changed };
}

const browser = await chromium.launch({ channel: 'chrome' });
const results = [];
try {
  for (const entry of manifest) {
    const directory = path.join(outputRoot, entry.id);
    await mkdir(directory, { recursive: true });
    const context = await browser.newContext({
      viewport: { width: entry.width, height: Math.min(entry.height, 1000) },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const deploymentRoot = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
    const routeURL = new URL(entry.route.replace(/^\//, ''), deploymentRoot).href;
    await page.goto(routeURL, { waitUntil: 'networkidle' });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const currentPath = path.join(directory, 'current.png');
    await page.screenshot({ path: currentPath, fullPage: true, animations: 'disabled' });
    await context.close();

    const referencePath = path.join(root, 'reference/mockups', entry.file);
    const [referenceMeta, currentMeta] = await Promise.all([
      sharp(referencePath).metadata(), sharp(currentPath).metadata(),
    ]);
    const width = Math.min(referenceMeta.width ?? 0, currentMeta.width ?? 0);
    const height = Math.min(referenceMeta.height ?? 0, currentMeta.height ?? 0);
    const raw = { width, height, channels: 3 };
    const read = file => sharp(file).extract({ left: 0, top: 0, width, height }).removeAlpha().raw().toBuffer();
    const [reference, current] = await Promise.all([read(referencePath), read(currentPath)]);
    const { overlay, diff, changed } = compareBuffers(reference, current);
    const side = await sharp({ create: { width: width * 2, height, channels: 3, background: '#fff' } })
      .composite([{ input: reference, raw, left: 0, top: 0 }, { input: current, raw, left: width, top: 0 }])
      .png().toBuffer();
    await Promise.all([
      sharp(overlay, { raw }).png().toFile(path.join(directory, 'overlay-50.png')),
      sharp(diff, { raw }).png().toFile(path.join(directory, 'diff-amplified-4x.png')),
      sharp(side).toFile(path.join(directory, 'side-by-side.png')),
    ]);
    const pixelRatio = changed / reference.length;
    results.push({
      id: entry.id, route: entry.route, authority: entry.authority,
      reference: { width: referenceMeta.width, height: referenceMeta.height },
      current: { width: currentMeta.width, height: currentMeta.height },
      compared: { width, height }, changedChannelRatio: Number(pixelRatio.toFixed(4)),
    });
    console.log(`${entry.id}: ${width}x${height}, changed-channel ratio ${pixelRatio.toFixed(4)}`);
  }
} finally {
  await browser.close();
}

const summaryName = only.size ? `summary-${[...only].join('-')}.json` : 'summary.json';
await writeFile(path.join(outputRoot, summaryName), `${JSON.stringify(results, null, 2)}\n`);
console.log(`Wrote ${results.length} route comparison sets to ${outputRoot}`);
