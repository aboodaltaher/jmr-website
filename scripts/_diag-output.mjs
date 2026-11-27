// TEMPORARY diagnostic (removed before the PR is finished): where does the build leave the prerendered pages?
import { existsSync, readdirSync, statSync, lstatSync, realpathSync } from "node:fs";
import { join, extname } from "node:path";

const cwd = process.cwd();
console.log(`DIAG cwd=${cwd} VERCEL=${process.env.VERCEL ?? ""} VERCEL_ENV=${process.env.VERCEL_ENV ?? ""}`);

function walk(dir, depth, out) {
  let names;
  try { names = readdirSync(dir); } catch { return; }
  for (const n of names) {
    const p = join(dir, n);
    let st; try { st = lstatSync(p); } catch { continue; }
    if (st.isDirectory() && depth > 0) walk(p, depth - 1, out);
    out.push({ p, dir: st.isDirectory(), link: st.isSymbolicLink(), ext: extname(n) });
  }
}

const candidates = [
  ".next/server/app",
  ".next/server",
  ".next/static",
  ".next",
  ".vercel/output",
  ".vercel/output/static",
  ".vercel/output/functions",
  "/vercel/output",
  "/vercel/output/static",
  "/vercel/output/functions",
];
for (const c of candidates) {
  const abs = c.startsWith("/") ? c : join(cwd, c);
  if (!existsSync(abs)) { console.log(`DIAG ${c}: MISSING`); continue; }
  let real = abs; try { real = realpathSync(abs); } catch {}
  const all = []; walk(abs, 6, all);
  const byExt = {};
  for (const f of all) if (!f.dir) byExt[f.ext || "(none)"] = (byExt[f.ext || "(none)"] ?? 0) + 1;
  const top = readdirSync(abs).slice(0, 25).join(", ");
  console.log(`DIAG ${c}: exists (real=${real}) files=${all.filter((f) => !f.dir).length} byExt=${JSON.stringify(byExt)}`);
  console.log(`DIAG   top: ${top}`);
}
// Where is the about page and the sitemap, wherever they are?
for (const root of [cwd, "/vercel/output"]) {
  const all = []; walk(root, 8, all);
  const hits = all.filter((f) => !f.dir && /(^|\/)about(\.html|\.prerender|\/index\.html|\.rsc|\.meta)|sitemap\.xml(\.body)?$|prerender-config|prerender-fallback/i.test(f.p) && !f.p.includes("node_modules"));
  console.log(`DIAG hits under ${root}: ${hits.length}`);
  for (const h of hits.slice(0, 20)) console.log(`DIAG   ${h.p}`);
}
