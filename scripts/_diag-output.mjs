// TEMPORARY diagnostic (removed before the PR is finished): how are 404/noindex pages marked in .next/output?
import { existsSync, readdirSync, lstatSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
const root = join(process.cwd(), ".next/output");
function walk(dir, out = []) { let n; try { n = readdirSync(dir); } catch { return out; } for (const x of n) { const p = join(dir, x); let s; try { s = lstatSync(p); } catch { continue; } s.isDirectory() ? walk(p, out) : out.push(p); } return out; }
console.log(`DIAG3 output exists=${existsSync(root)}`);
const files = walk(root);
const pages = files.filter((f) => f.endsWith(".prerender-fallback.html"));
console.log(`DIAG3 fallback html=${pages.length}; static files=${files.filter((f) => f.includes("/static/")).length}`);
console.log(`DIAG3 static top: ${readdirSync(join(root, "static")).slice(0, 30).join(", ")}`);
for (const name of ["about", "ac-maintenance/arabian-ranches", "ac-maintenance/dubai-hills", "ar/about", "index"]) {
  const base = join(root, "functions", name);
  const cfg = base + ".prerender-config.json", html = base + ".prerender-fallback.html";
  if (!existsSync(html)) { console.log(`DIAG3 ${name}: no html`); continue; }
  const h = readFileSync(html, "utf8");
  let c = {}; try { c = JSON.parse(readFileSync(cfg, "utf8")); } catch {}
  const { allowHeader, ...rest } = c;
  console.log(`DIAG3 ${name}: html=${h.length}b noindex=${/<meta name="robots" content="[^"]*noindex/i.test(h)} marker=${/\[TO CONFIRM/.test(h)} cfgKeys=${Object.keys(c).join(",")} initialStatus=${c.initialStatus} fallbackStatus=${c.fallback?.status}`);
}
const sm = join(root, "static/sitemap.xml");
if (existsSync(sm)) console.log(`DIAG3 sitemap <loc> count=${(readFileSync(sm, "utf8").match(/<loc>/g) || []).length}`);
// pages whose config says a non-200 status
let non200 = [];
for (const f of pages) { const cfg = f.replace(/\.prerender-fallback\.html$/, ".prerender-config.json"); try { const c = JSON.parse(readFileSync(cfg, "utf8")); const st = c.initialStatus ?? 200; if (st !== 200) non200.push(`${relative(join(root, "functions"), f)}=${st}`); } catch {} }
console.log(`DIAG3 non-200 initialStatus: ${non200.join(" | ") || "none"}`);
const root0 = pages.filter((f) => /functions\/(index|_root|\(root\))/.test(f));
console.log(`DIAG3 root-page candidates: ${root0.map((f) => relative(join(root, "functions"), f)).join(" | ") || "none"}`);
console.log(`DIAG3 first 5 fallback names: ${pages.slice(0, 5).map((f) => relative(join(root, "functions"), f)).join(" | ")}`);
