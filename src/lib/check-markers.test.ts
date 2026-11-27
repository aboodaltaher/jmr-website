import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { scanBuild } from "../../scripts/check-markers.mjs";

const PAGE = "<html><head><title>x</title></head><body>hello</body></html>";
const MARKED = "<html><body>[TO CONFIRM: the owner must answer this]</body></html>";
const NOINDEX = '<html><head><meta name="robots" content="noindex, nofollow"/></head><body>[TO CONFIRM: x]</body></html>';
const sitemap = (...paths: string[]) => paths.map((p) => `<url><loc>https://agec.ae${p === "/" ? "" : p}</loc></url>`).join("");

function build(files: Record<string, string>) {
  const dir = mkdtempSync(join(tmpdir(), "check-markers-"));
  for (const [rel, body] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, rel)), { recursive: true });
    writeFileSync(join(dir, rel), body);
  }
  return dir;
}

// Plain `next build` layout: .next/server/app/*.html with .meta status files.
const plain = (extra: Record<string, string> = {}) => ({
  ".next/server/app/index.html": PAGE,
  ".next/server/app/about.html": PAGE,
  ".next/server/app/ar/about.html": PAGE,
  ".next/server/app/gated.html": PAGE,
  ".next/server/app/gated.meta": '{"status":404}',
  ".next/server/app/_not-found.html": PAGE,
  ".next/server/app/sitemap.xml.body": sitemap("/", "/about", "/ar/about"),
  ...extra,
});

// Vercel adapter layout: .next/output/functions/*.prerender-fallback.html with prerender-config status.
const vercel = (extra: Record<string, string> = {}) => ({
  ".next/output/functions/index.prerender-fallback.html": PAGE,
  ".next/output/functions/about.prerender-fallback.html": PAGE,
  ".next/output/functions/ar/about.prerender-fallback.html": PAGE,
  ".next/output/functions/gated.prerender-fallback.html": PAGE,
  ".next/output/functions/gated.prerender-config.json": '{"initialStatus":404}',
  ".next/output/functions/_global-error.prerender-fallback.html": PAGE,
  ".next/output/functions/_global-error.prerender-config.json": '{"initialStatus":500}',
  ".next/output/static/sitemap.xml": `<urlset>${sitemap("/", "/about", "/ar/about")}</urlset>`,
  ...extra,
});

test("plain next build: scans the pages, skips shells, counts the 404", () => {
  const dir = build(plain());
  try {
    const r = scanBuild(dir);
    assert.equal(r.scanned, 4);
    assert.equal(r.indexable, 3);
    assert.equal(r.notFound, 1);
    assert.deepEqual(r.gated, ["/gated"]);
    assert.deepEqual(r.missing, []);
    assert.equal(r.failures.length, 0);
  } finally { rmSync(dir, { recursive: true }); }
});

test("Vercel adapter build: finds the same pages where .next/server/app has none", () => {
  const dir = build({ ".next/server/app/sitemap.js": "// no html here", ...vercel() });
  try {
    const r = scanBuild(dir);
    assert.equal(r.scanned, 4);
    assert.equal(r.indexable, 3);
    assert.equal(r.notFound, 1);
    assert.deepEqual(r.gated, ["/gated"]);
    assert.deepEqual(r.missing, []);
    assert.match(r.sources.join(" "), /output\/functions/);
  } finally { rmSync(dir, { recursive: true }); }
});

test("an open marker on an indexable page fails in both layouts; noindex and 404 pages are exempt", () => {
  for (const layout of [plain, vercel]) {
    const dirName = layout === plain ? ".next/server/app/about.html" : ".next/output/functions/about.prerender-fallback.html";
    const noindexName = layout === plain ? ".next/server/app/hidden.html" : ".next/output/functions/hidden.prerender-fallback.html";
    const dir = build(layout({ [dirName]: MARKED, [noindexName]: NOINDEX }));
    try {
      const r = scanBuild(dir);
      assert.deepEqual(r.failures.map((f) => f.route), ["/about"]);
      assert.equal(r.failures[0].inSitemap, true);
      assert.equal(r.noindexed, 1);
    } finally { rmSync(dir, { recursive: true }); }
  }
});

test("a sitemap URL with no page in the build is reported", () => {
  const dir = build(vercel({ ".next/output/static/sitemap.xml": `<urlset>${sitemap("/", "/about", "/ar/about", "/missing")}</urlset>` }));
  try {
    assert.deepEqual(scanBuild(dir).missing, ["/missing"]);
  } finally { rmSync(dir, { recursive: true }); }
});

test("fails loudly instead of passing on nothing", () => {
  // No build output at all.
  let dir = build({ "package.json": "{}" });
  try { assert.throws(() => scanBuild(dir), /no prerendered pages found/); } finally { rmSync(dir, { recursive: true }); }
  // The Vercel shape from the 27 Nov 2026 incident: .next/server/app exists but holds no html.
  dir = build({ ".next/server/app/page.js": "//", ".next/server/app/sitemap.xml.body": sitemap("/") });
  try { assert.throws(() => scanBuild(dir), /no prerendered pages found/); } finally { rmSync(dir, { recursive: true }); }
  // Only shells: nothing real scanned.
  dir = build({ ".next/output/functions/_not-found.prerender-fallback.html": PAGE, ".next/output/static/sitemap.xml": sitemap("/") });
  try { assert.throws(() => scanBuild(dir), /scanned 0 prerendered pages/); } finally { rmSync(dir, { recursive: true }); }
  // Pages but no readable sitemap.
  const files = vercel(); delete (files as Record<string, string>)[".next/output/static/sitemap.xml"];
  dir = build(files);
  try { assert.throws(() => scanBuild(dir), /sitemap/); } finally { rmSync(dir, { recursive: true }); }
});
