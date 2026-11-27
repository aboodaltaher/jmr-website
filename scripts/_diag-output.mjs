// TEMPORARY diagnostic (removed before the PR is finished): layout of .next/server/route-cache and .next/output.
import { existsSync, readdirSync, lstatSync, readFileSync } from "node:fs";
import { join, extname, relative } from "node:path";
const cwd = process.cwd();
console.log(`DIAG2 cwd=${cwd} VERCEL_ENV=${process.env.VERCEL_ENV ?? ""}`);
function walk(dir, out = []) {
  let names; try { names = readdirSync(dir); } catch { return out; }
  for (const n of names) { const p = join(dir, n); let st; try { st = lstatSync(p); } catch { continue; } if (st.isDirectory()) walk(p, out); else out.push(p); }
  return out;
}
for (const rel of [".next/server/route-cache", ".next/output/functions", ".next/output/static", ".next/output"]) {
  const root = join(cwd, rel);
  if (!existsSync(root)) { console.log(`DIAG2 ${rel}: MISSING`); continue; }
  const files = walk(root);
  const byExt = {}; for (const f of files) { const e = f.endsWith(".prerender-fallback.html") ? ".prerender-fallback.html" : extname(f) || "(none)"; byExt[e] = (byExt[e] ?? 0) + 1; }
  console.log(`DIAG2 ${rel}: files=${files.length} byExt=${JSON.stringify(byExt)}`);
  console.log(`DIAG2   top: ${readdirSync(root).slice(0, 30).join(", ")}`);
  const html = files.filter((f) => f.endsWith(".html"));
  console.log(`DIAG2   html files=${html.length}; first 12:`);
  for (const f of html.slice(0, 12)) console.log(`DIAG2     ${relative(root, f)}`);
  const sm = files.filter((f) => /sitemap\.xml/.test(f));
  console.log(`DIAG2   sitemap files: ${sm.map((f) => relative(root, f)).join(" | ") || "none"}`);
  const meta = files.filter((f) => f.endsWith(".meta"))[0];
  if (meta) console.log(`DIAG2   sample meta ${relative(root, meta)}: ${readFileSync(meta, "utf8").slice(0, 160)}`);
  const pc = files.filter((f) => f.endsWith("about.prerender-config.json") || f.endsWith("/about.prerender-config.json"))[0];
  if (pc) console.log(`DIAG2   sample prerender-config ${relative(root, pc)}: ${readFileSync(pc, "utf8").slice(0, 200)}`);
}
// 404 pages: which html in route-cache are notFound shells?
const rc = join(cwd, ".next/server/route-cache");
if (existsSync(rc)) {
  for (const f of walk(rc).filter((f) => f.endsWith(".meta")).filter((f) => /villanova|dubai-marina|arabian-ranches/.test(f))) console.log(`DIAG2 404-meta ${relative(rc, f)}: ${readFileSync(f, "utf8").slice(0, 120)}`);
}
