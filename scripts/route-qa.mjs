import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const root = process.cwd();
const previewPort = process.env.QA_PORT ?? '4324';
const baseURL = process.env.QA_BASE_URL ?? `http://127.0.0.1:${previewPort}/abcd-restaurant-v6/`;
const requested = new Set(process.argv.slice(2).filter(value => !value.startsWith('--')));
const all = process.argv.includes('--all');
const entries = JSON.parse(await readFile(path.join(root, 'reference/manifest.json'), 'utf8'));
const manifest = all ? entries : entries.filter(entry => requested.has(entry.id));

if (!manifest.length) {
  console.error('Usage: npm run qa:route -- <route-id...> | --all');
  console.error(`Available route IDs: ${entries.map(entry => entry.id).join(', ')}`);
  process.exit(1);
}

const viewports = {
  desktop: entry => ({ width: entry.width, height: 1000 }),
  tablet: () => ({ width: 834, height: 1112 }),
  mobile: () => ({ width: 390, height: 844 }),
};

const outputRoot = path.join(root, 'reference/comparisons/routes');
await mkdir(outputRoot, { recursive: true });

let preview;
if (!process.env.QA_BASE_URL) {
  preview = spawn(`npm run preview -- --port ${previewPort}`, {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
    windowsHide: true,
  });
  const output = [];
  preview.stdout.on('data', chunk => output.push(chunk.toString()));
  preview.stderr.on('data', chunk => output.push(chunk.toString()));
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(baseURL);
      if (response.ok) break;
    } catch {}
    if (attempt === 79) throw new Error(`Preview did not start.\n${output.join('')}`);
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}

function routeURL(route) {
  return new URL(route.replace(/^\//, ''), baseURL.endsWith('/') ? baseURL : `${baseURL}/`).href;
}

async function compare(referencePath, currentPath, outputDir, targetWidth) {
  const [referenceMeta, currentMeta] = await Promise.all([sharp(referencePath).metadata(), sharp(currentPath).metadata()]);
  const width = targetWidth;
  const referenceHeight = Math.round((referenceMeta.height ?? 0) * width / (referenceMeta.width ?? width));
  const currentHeight = Math.round((currentMeta.height ?? 0) * width / (currentMeta.width ?? width));
  const height = Math.min(referenceHeight, currentHeight);
  if (!width || !height) throw new Error('Unable to read comparison images.');

  const raw = { width, height, channels: 3 };
  const pixels = width * height;
  const normalize = file => sharp(file).resize({ width }).extract({ left: 0, top: 0, width, height }).removeAlpha();
  const [reference, current] = await Promise.all([
    normalize(referencePath).raw().toBuffer(),
    normalize(currentPath).raw().toBuffer(),
  ]);
  const overlay = Buffer.alloc(reference.length);
  const diff = Buffer.alloc(reference.length);
  let changedPixels = 0;
  let deltaTotal = 0;

  for (let index = 0; index < reference.length; index += 3) {
    let pixelChanged = false;
    for (let channel = 0; channel < 3; channel += 1) {
      const offset = index + channel;
      const delta = Math.abs(reference[offset] - current[offset]);
      overlay[offset] = Math.round((reference[offset] + current[offset]) / 2);
      diff[offset] = Math.min(255, delta * 4);
      deltaTotal += delta;
      if (delta > 25) pixelChanged = true;
    }
    if (pixelChanged) changedPixels += 1;
  }

  const side = await sharp({ create: { width: width * 2, height, channels: 3, background: '#fff' } })
    .composite([{ input: reference, raw, left: 0, top: 0 }, { input: current, raw, left: width, top: 0 }])
    .png().toBuffer();

  await Promise.all([
    sharp(overlay, { raw }).png().toFile(path.join(outputDir, 'overlay-50.png')),
    sharp(diff, { raw }).png().toFile(path.join(outputDir, 'diff-amplified-4x.png')),
    sharp(side).toFile(path.join(outputDir, 'side-by-side.png')),
  ]);

  return {
    source: {
      reference: { width: referenceMeta.width, height: referenceMeta.height },
      current: { width: currentMeta.width, height: currentMeta.height },
    },
    compared: { width, height },
    changedPixelRatio: Number((changedPixels / pixels).toFixed(4)),
    meanAbsoluteError: Number((deltaTotal / reference.length).toFixed(2)),
  };
}

const browser = await chromium.launch({ channel: 'chrome' });
const results = [];

try {
  for (const entry of manifest) {
    const routeDir = path.join(outputRoot, entry.id);
    const result = { id: entry.id, route: entry.route, authority: entry.authority, viewports: {} };

    for (const [name, getViewport] of Object.entries(viewports)) {
      const viewport = getViewport(entry);
      const directory = path.join(routeDir, name);
      await mkdir(directory, { recursive: true });
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const errors = [];
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      page.on('pageerror', error => errors.push(error.message));

      await page.goto(routeURL(entry.route), { waitUntil: 'networkidle' });
      const currentPath = path.join(directory, 'current.png');
      await page.screenshot({ path: currentPath, fullPage: true, animations: 'disabled' });
      const layout = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      }));
      await context.close();

      result.viewports[name] = {
        ...viewport,
        capturedHeight: layout.height,
        horizontalOverflow: Math.max(0, layout.scrollWidth - layout.clientWidth),
        consoleErrors: [...new Set(errors)],
        screenshot: path.relative(root, currentPath),
      };
    }

    const referencePath = path.join(root, 'reference/mockups', entry.file);
    result.comparison = await compare(referencePath, path.join(routeDir, 'desktop/current.png'), path.join(routeDir, 'desktop'), entry.width);
    results.push(result);
    console.log(`${entry.id}: MAE ${result.comparison.meanAbsoluteError}, changed ${result.comparison.changedPixelRatio}, overflow D/T/M ${Object.values(result.viewports).map(item => item.horizontalOverflow).join('/')}`);
  }
} finally {
  await browser.close();
  if (preview) {
    if (process.platform === 'win32') spawnSync('taskkill', ['/pid', String(preview.pid), '/T', '/F'], { stdio: 'ignore' });
    else preview.kill('SIGTERM');
  }
}

const summaryPath = path.join(outputRoot, requested.size === 1 ? [...requested][0] : 'summary', 'qa-summary.json');
await mkdir(path.dirname(summaryPath), { recursive: true });
await writeFile(summaryPath, `${JSON.stringify(results, null, 2)}\n`);
console.log(`QA artifacts: ${path.dirname(summaryPath)}`);
