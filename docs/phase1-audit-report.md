# Phase 1 Audit Fixes — Report

Branch: `phase1-audit-fixes` (local commits only — **not pushed**, per instruction).
Date: 2026-11-02.
Verification: `tsc --noEmit` ✓ · `eslint` ✓ (0 errors) · `next build` ✓ (46/46 pages).

### Update — owner decisions applied (2026-11-02)

1. **Address:** confirmed `AlMasraf Building, Sheikh Zayed Road` — TODO removed.
2. **Review count:** auto-updates via Places API — no change needed.
3. **Photos:** owner owns all site photos — no change needed.
4. **Blog schema author:** now a `Person` (Mohannad Ghabboun → `/about`), matching
   the visible byline.
5. **Author box:** added at the foot of every post (photo + title + bio).
6. **Claims (Task 8):** all three softened — "Performance Guaranteed" → "Performance
   Verified"; "AHRI-certified" → "manufacturer-rated"; "independent" dropped for
   AGEC's own T&C work (kept only for verifying systems installed by others).
7. **Emirates wording (Task 7):** applied — hero + About prose reworded to
   "service across the UAE" with projects named in Dubai, Sharjah, Ajman, Abu Dhabi.

The sections below are the original pre-decision analysis, kept for reference.

---

## Important context: most "High" findings were already fixed in `main`

The audit (dated 2 Nov 2026) was run against a **stale live deploy**. Grounding
each finding against the current `main` branch showed the following "High"
items were **already resolved** before this pass:

- Three conflicting addresses → now a single address in `src/lib/company.ts`
  (`AlMasraf Building, Sheikh Zayed Road`, from the Google Business Profile).
- Review count "27 vs 32" → single config value + live Google Places API.
- Testing & Commissioning page: `m.ghabboun@agec.ae` → single public address
  `a.altaher@agec.ae`; canonical / og:url / og:title now via `buildMetadata`.
- Blog `jmr-` brand image → already renamed to `agec-…`.
- Missing canonical / OG on VRF and commercial-maintenance pages → `buildMetadata`
  applied site-wide.

So the genuinely-remaining Phase 1 work was smaller than the audit implies.

---

## 1. What changed, per task (with files)

| Task | Change | Files | Commit |
|---|---|---|---|
| 1 — SSOT config | Extended `company.ts` with `WHATSAPP`, `EMIRATES_SERVED` (7), `EMIRATES_WITH_PROJECTS` (4); TODO on `ADDRESS_LINE` to confirm vs trade licence | `src/lib/company.ts` | `753e9a1` |
| 7 — project count | Replaced hardcoded project counts with `PROJECTS_DELIVERED` | `page.tsx`, `about/page.tsx`, 6 `services/*` pages | `394c687`, `6d94f3a`, `<about-prose>` |
| 9 — reorder | "What We Do" reordered maintenance-first, installation-last | `page.tsx` | `7d2c6c4` |
| 9 — nav | Added a dedicated **Maintenance** dropdown (desktop + mobile) → `/ac-maintenance-dubai`, `/ac-amc-dubai`, `/ac-repair-dubai`, `/ac-duct-cleaning-dubai`, `/services/maintenance` | `components/Header.tsx` | `<nav>` |
| 10 — blog author | New `AuthorByline` component naming the founder (from `FOUNDER` config) + date; used on each post and the blog index. **JSON-LD author left untouched** (structured data out of scope) | `components/AuthorByline.tsx`, `blog/[slug]/page.tsx`, `blog/page.tsx` | `<author>` |
| 11 — stock image | Homepage "Why AGEC" image moved from a hot-linked Unsplash URL to a single local path (`public/why-agec.jpg`) via a `WHY_AGEC_IMAGE` constant + TODO + recommended specs | `page.tsx`, `public/why-agec.jpg` | `<image>` |

(Commit hashes `<…>` are the latest few on the branch — see `git log`.)

---

## 2. Task 8 — Unsupported-claim review (NO changes made; your call)

Nothing below was changed. Each row is a claim an outside reader might ask you
to back up. Decide which to soften; I'll apply only the ones you pick.

| # | Page | Exact text | File:line | Risk | Suggested softer wording |
|---|---|---|---|---|---|
| 1 | Home — Why AGEC | "Approved brands, AHRI-certified equipment, and proper warranties on every system we install." | `src/app/page.tsx:135` | "AHRI-certified **equipment**" is defensible only if the kit you install is AHRI-listed (most tier-1 brands are). "Approved brands" is vague. | "Major manufacturer brands with full manufacturer warranties on every system we install." (drop "AHRI" unless you want to stand behind it) |
| 2 | Home — Why AGEC | Heading **"Performance Guaranteed"** + "Every system tested and commissioned against specification…" | `src/app/page.tsx:139` | "Guaranteed" is a strong, quasi-legal promise; the text under it is actually about testing/commissioning, not a guarantee. | Heading → "Performance Verified" or "Commissioned to Spec" (body unchanged) |
| 3 | About — values | "Genuine spare parts and approved maintenance procedures. AHRI-certified equipment with proper warranties." | `src/app/about/page.tsx:32` | Same AHRI note as #1. | "…Manufacturer-rated equipment with proper warranties." |
| 4 | About (×4) | "Dubai Municipality approved engineer" | `about/page.tsx:85, 234, 247, 254` | Specific regulatory status for the founder. You **confirmed this earlier**, so it's not invented — but it's the kind of claim that should be backed by the DM registration record if challenged. | Keep as-is (confirmed). Optional: hold a copy of the DM approval on file. |
| 5 | T&C / Services | "Independent" / "independent third-party commissioning verification" | `testing-commissioning/page.tsx:16, 27, 59, 106`; `services/page.tsx:71` | **Highest risk.** "Independent third-party" implies you are a commissioning agent *separate from the installer*. When you commission systems you also installed, that's contradictory. | Either (a) reserve "independent third-party" for systems **installed by others**, and use "thorough, documented testing & commissioning" for your own installs; or (b) drop "independent", keep "documented verification against specification". |

---

## 3. Task 7 — "7 Emirates" coverage wording (NO changes made; pick an option)

Config now distinguishes `EMIRATES_SERVED` (7) from `EMIRATES_WITH_PROJECTS`
(4: Dubai, Sharjah, Ajman, Abu Dhabi). Two places make a 7-emirate claim:

- **Homepage hero** — `src/app/page.tsx:190`: `Established 2022 · {count} Projects · All 7 Emirates · Dubai, UAE`
- **About prose** — `src/app/about/page.tsx:132`: "Today we operate across all seven Emirates of the UAE…"

The issue: "All 7 Emirates" reads as *projects delivered* in all seven, which
isn't the case (projects are in four). Options — same choice applies to both:

- **Option A (accurate split, recommended):** "Projects in 4 emirates · Service across the UAE"
- **Option B (service framing):** "Serving all 7 emirates" — only if you genuinely take work anywhere in the UAE (it reframes the 7 as *coverage*, not *delivered projects*).
- **Option C (drop the count):** "Across the UAE" / "UAE-wide".

Tell me A, B, or C (or a mix) and I'll apply it to both spots.

---

## 4. Questions I need you to answer

1. **Address (Task 2):** `company.ts` uses `AlMasraf Building, Sheikh Zayed Road`
   (from your Google Business Profile). Does this match your **DET trade licence**?
   It currently carries a TODO until you confirm.
2. **Review count (Task 3):** confirm **32** is the correct fallback count
   (live count also comes from the Places API).
3. **Photo ownership (Task 6):** earlier the blog's `jmr-`prefixed image was
   already renamed to `agec-…`. Confirm AGEC owns the photos so we can rule out
   any remaining third-party imagery.
4. **Blog author in schema (Task 10):** the **visible** byline now says
   "By Mohannad Ghabboun", but the blog **JSON-LD `author`** still reads the
   frontmatter value ("AGEC Team") because structured data was on your DO-NOT-TOUCH
   list. Want me to also set the schema/frontmatter author to match? (one-line
   change per post)
5. **Author title/bio (Task 10):** byline shows "Founder & Lead HVAC Engineer".
   Confirm the title, and send a 2–3 sentence author bio if you want a fuller
   author box under posts.
6. **Task 8 & Task 7:** your decisions from sections 2 and 3 above.

---

## 5. Remaining TODO placeholders (in code, intentional)

- `src/lib/company.ts` — `ADDRESS_LINE`: confirm vs DET trade licence.
- `src/components/AuthorByline.tsx` — confirm author title; add short bio.
- `src/app/page.tsx` — `WHY_AGEC_IMAGE`: placeholder photo; swap `public/why-agec.jpg`
  (recommended ~1200×1500px portrait, JPG/WebP, compressed).
- `content/blog/*.md` — several `<!-- TODO(owner) … -->` notes requesting real
  job photos (pre-existing; hidden HTML comments, not rendered).

## 6. Things the audit missed / worth noting

- **`next.config` has a now-unused `images.unsplash.com` remotePattern** (the
  homepage was the last Unsplash user). Harmless, but you can delete that line.
- **Stale live deploy:** the biggest "miss" is that the audit was run against an
  old deploy — re-deploy `main` and roughly half the High findings disappear on
  their own (see top of this report).
- **`about` prose still says "operate across all seven Emirates"** — folded into
  the Task 7 decision above.
