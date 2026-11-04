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
