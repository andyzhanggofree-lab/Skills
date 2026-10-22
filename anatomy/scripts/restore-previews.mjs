import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, sep } from 'node:path';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const args = process.argv.slice(2);
if (args.some(arg => arg !== '--check')) {
  console.error('Usage: node restore-previews.mjs [--check]');
  process.exit(2);
}
const checkOnly = args.includes('--check');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const entries = JSON.parse(readFileSync(resolve(root, 'previews.manifest.json'), 'utf8'));
const hash = data => createHash('sha256').update(data).digest('hex');
const checked = [];

// Validate every archive and target before writing any preview.
for (const entry of entries) {
  const target = resolve(root, entry.path);
  const archive = resolve(root, entry.archive);
  if (!target.startsWith(root + sep) || !archive.startsWith(root + sep)) {
    throw new Error(`Path outside skill directory: ${entry.path}`);
  }
  const data = gunzipSync(readFileSync(archive));
  if (data.length !== entry.size || hash(data) !== entry.sha256) {
    throw new Error(`Archive integrity check failed: ${entry.archive}`);
  }
  const present = existsSync(target);
  if (!checkOnly && present && hash(readFileSync(target)) !== entry.sha256) {
    throw new Error(`Existing preview differs; preserved without changes: ${entry.path}`);
  }
  checked.push({ target, data, present });
}

let restored = 0;
if (!checkOnly) {
  for (const { target, data, present } of checked) {
    if (present) continue;
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, data, { flag: 'wx' });
    restored++;
  }
}
console.log(checkOnly
  ? `Verified ${checked.length} preview archives.`
  : `Verified ${checked.length} previews; restored ${restored} missing files.`);
