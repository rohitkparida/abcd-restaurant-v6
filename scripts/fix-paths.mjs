/**
 * Post-build path fixer for GitHub Pages deployment.
 * Rewrites all root-absolute /assets/, /favicon, etc. in dist HTML files
 * to be prefixed with the repository base path.
 */
import { readFileSync, writeFileSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const BASE = '/abcd-restaurant-v6';
const DIST = new URL('../dist', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

function walk(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (entry.endsWith('.html')) {
      fix(full);
    }
  }
}

function fix(file) {
  let html = readFileSync(file, 'utf8');
  // Replace src="/ and href="/ with base-prefixed versions
  // but leave external http/https and already-prefixed paths alone
  html = html
    .replace(/(src|href)="\/((?!\/|abcd-restaurant-v6\/|http|https)[^"]*)/g,
      (_, attr, rest) => `${attr}="${BASE}/${rest}`)
    .replace(/(src|href)='\/(?!\/|abcd-restaurant-v6\/|http|https)([^']*)/g,
      (_, attr, rest) => `${attr}='${BASE}/${rest}`);
  writeFileSync(file, html, 'utf8');
  console.log('Fixed:', file.replace(DIST, ''));
}

console.log('Fixing paths in dist HTML files...');
walk(DIST);
console.log('Done.');
