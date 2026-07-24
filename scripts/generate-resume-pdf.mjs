// Prints the home page (EN + FR) to PDF using the site's @media print styles,
// which strip the header/footer. Requires a prior `bun run build` and Playwright
// (available via `bunx playwright install chromium` if missing).
//
// Usage: node dist/server/entry.mjs &  then  bun scripts/generate-resume-pdf.mjs
// or simply: bun scripts/generate-resume-pdf.mjs  (starts the built server itself)

import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright';

const BASE = 'http://localhost:4321';
const TARGETS = [
  { path: '/', out: 'public/valentin-dosimont-resume-en.pdf' },
  { path: '/fr/', out: 'public/valentin-dosimont-cv-fr.pdf' },
];

async function serverUp() {
  try {
    const res = await fetch(BASE + '/');
    return res.ok;
  } catch {
    return false;
  }
}

let server;
if (!(await serverUp())) {
  server = spawn('node', ['dist/server/entry.mjs'], { stdio: 'ignore' });
  for (let i = 0; i < 20 && !(await serverUp()); i++) await sleep(500);
  if (!(await serverUp())) {
    console.error('Server did not start. Run `bun run build` first.');
    process.exit(1);
  }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1120, height: 1400 } });

for (const { path, out } of TARGETS) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await sleep(500);
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    // Lay the page out at ~1120px CSS width (A4 / 0.71) so the desktop
    // grid renders instead of the stacked mobile breakpoint.
    scale: 0.71,
  });
  console.log('wrote', out);
}

await browser.close();
server?.kill();
