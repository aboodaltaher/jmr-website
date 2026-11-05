# Content needed from the owner

Items below are placeholders or open questions. Nothing here is published as real
copy — draft case studies do not render until facts are supplied.

## Coverage / emirates (Task 2)
- The **VRF page** previously named only "Dubai, Sharjah and Abu Dhabi" (3), while
  **About** and **Projects** name "Dubai, Sharjah, Ajman and Abu Dhabi" (4), and the
  projects list includes a real Ajman project (Basil Mall). I reconciled the coverage
  wording to the **4 emirates** on that evidence and updated the VRF page to match.
  **Please confirm the delivered-emirates list is exactly: Dubai, Sharjah, Ajman, Abu Dhabi.**
- The Arabic coverage sentence (`COVERAGE_SENTENCE_AR` in `src/lib/company.ts`) and the
  Arabic edits on `/ar` and `/ar/ac-repair-dubai` **need a native Arabic review**.

## Arabic review (general)
- New/changed Arabic strings flagged for native-speaker review:
  - `src/lib/company.ts` → `COVERAGE_SENTENCE_AR`
  - `src/app/ar/page.tsx` → coverage card title + description
  - `src/app/ar/ac-repair-dubai/page.tsx` → repair-coverage FAQ answer + hero eyebrow

## New service pages (Task 3)
Slugs chosen (SEO-style, matching the top-level `-dubai` pattern; new routes, no redirects needed):
- `/services/hvac-installation-dubai`
- `/services/tab-testing-adjusting-balancing-dubai`
- `/services/chiller-maintenance-dubai`

Copy is written in general terms with no invented certifications, standards claims,
equipment brands, client names, numbers or dates. Optional to supply later:
- A hero image for each of the 3 pages (currently none is set, so no placeholder
  renders). Recommended landscape ~1600×900, JPG/WebP, of real AGEC work.
- If you want brand/standard names on these pages (e.g. specific manufacturers or
  ASHRAE/SMACNA), confirm which are accurate and may be stated.

## Case studies (Task 4)
A case-study system is built at `/projects/[slug]`, driven by `src/data/projects.ts`.
All 12 projects are entered using only facts already on the site (name, category,
system/capacity line, location). **Every project is `draft: true`** — no case-study
page renders and none is in the sitemap — because the site does not publish a
challenge / solution / result narrative, photos, dates or client permission for any
of them. To publish a project, supply the items below and set its `draft` to `false`.

For **each** project, please provide:
- **Scope of work** — the actual tasks delivered (bulleted).
- **System type / capacity** — confirm the TR/ton and system (VRF, DX, chiller, etc.).
- **Challenge** — what made the job non-trivial.
- **Solution** — what AGEC did about it.
- **Result** — one honest outcome line (no invented numbers).
- **Dates** — start/completion (optional but useful).
- **Client permission** — confirmation we may name the client/building, or keep it generic.
- **Photos** — real images (with permission); recommended landscape ~1600×900.

Projects awaiting the above (slug — current published summary):
- `basil-mall-ajman` — B+G+1+R Basil Mall · 224 Ton VRF · Ajman
- `private-g4-building-dubai` — Private G+4 Building · 148 Ton DX · Dubai
- `double-twin-villa-sharjah` — Double Twin Villa G+1 · 60 Ton DX · Sharjah
- `g1r-villa-dubai` — G+1+R Villa · 45 Ton DX · Dubai
- `villa-al-barsha-dubai` — B+G+1+R Villa · 140 Ton DX · Al Barsha, Dubai
- `18-villas-community` — 18 Villas Community · full HVAC · Al Rgebah / Al Seyouh (confirm emirate)
- `private-villa-sharjah-flagship` — B+G+1 Private Villa · flagship residential · Sharjah
- `mbz-ai-server-room-abu-dhabi` — MBZ-AI Server Room · precision cooling · Masdar City, Abu Dhabi
- `pure-gym-al-barsha` — Pure Gym · HVAC + ventilation · Al Barsha, Dubai
- `ave-restaurant-business-bay` — AVE Restaurant · kitchen ventilation + cooling · Business Bay, Dubai
- `zain-solution-data-center-abu-dhabi` — Zain Solution Data Center · precision cooling · Musaffah, Abu Dhabi
- `cultural-center-al-barsha` — Cultural Center · HVAC works · Al Barsha, Dubai

## Company name relationship (Task 4)
- /about now states: "AGEC is the trading name of AGEC Technical Services L.L.C.,
  the licensed company behind this website." This neutral wording was written
  because the exact relationship is not otherwise stated on the site.
  **Please confirm this is accurate** (e.g. trading name vs branch vs d/b/a), and
  whether any other legal entity is involved.

## Project categories (Task 6)
Reviewed all 12 category tags in `src/data/projects.ts` against each entry's scope.
All are correct from the scope text — Residential 6, Commercial 4, Data Center 2
(totals match the filter tabs). AVE Restaurant is correctly **Commercial** (a
restaurant), not Data Center. One judgment call:
- **Cultural Center** is tagged **Commercial**. A public cultural facility is really
  institutional; among the three tabs (Residential / Commercial / Data Center),
  Commercial is the closest fit, so it was left as-is. **Confirm** this is right, or
  tell us if you'd prefer a different tab (and whether to add an "Institutional/Public"
  category).
