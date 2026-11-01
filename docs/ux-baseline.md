# AGEC — UX Baseline (Step 1)

Measured on branch `ux-pass` against a local production build (`next build` + `next start`), Chromium. No source edits were made for this baseline.

## 1. Screenshots

Full-page screenshots captured at **mobile 375px** and **desktop 1440px** for all 11 pages (saved to the session scratchpad `ux-shots/`, names `<page>-m.png` / `<page>-d.png`): home, ac-maintenance-dubai, ac-repair-dubai, ac-amc-dubai, services/maintenance, services/vrf-vrv-systems, projects, about, contact, quote, book.

Headline visual finding: the **homepage hero shows three competing primary CTAs** ("Book AC Service", "Get AMC Quote", "Request a Project Quote") — no single clear action.

## 2. Lighthouse (mobile) — Accessibility & Best-Practices

| Page | A11y | Best-Practices |
|---|---|---|
| / | 96 | 96 |
| /ac-maintenance-dubai | 96 | 96 |
| /ac-repair-dubai | 96 | 96 |
| /ac-amc-dubai | 96 | 96 |
| /services/maintenance | 96 | 96 |
| /services/vrf-vrv-systems | 96 | 96 |
| /projects | 93 | 96 |
| /about | 96 | 96 |
| /contact | 96 | 96 |
| /quote | 96 | 96 |
| /book | 96 | 96 |

Lighthouse scores a failing audit once regardless of how many nodes fail, so 96 hides the scale — axe (below) counts every node.

## 3. axe (mobile 375px) — violations per page

| Page | color-contrast | label-content-name-mismatch | region | other |
|---|---|---|---|---|
| / | **76** | 2 | 1 | — |
| /ac-maintenance-dubai | 71 | 2 | 1 | — |
| /ac-repair-dubai | 42 | 2 | 1 | — |
| /ac-amc-dubai | 63 | 2 | 1 | **scrollable-region-focusable (1)** |
| /services/maintenance | 61 | 2 | 1 | — |
| /services/vrf-vrv-systems | 47 | 2 | 1 | **landmark-unique (1)** |
| /projects | 79 | 2 | 1 | **heading-order (1)** |
| /about | 42 | 2 | 1 | — |
| /contact | 32 | 2 | 1 | — |
| /quote | 27 | 2 | 1 | — |
| /book | 26 | 2 | 1 | — |

### Root causes (from axe node detail)
1. **color-contrast (serious) — the dominant issue.** Two tokens fail AA (4.5:1):
   - `--color-text-muted: #8A929A` → **3.15:1** on white, **~2.9:1** on `#F5F6F7`. Used for nearly all muted body text, descriptions and captions → the bulk of the failures.
   - `--color-primary: #D4762E` (brand orange) → **3.26:1** both as white text on an orange button **and** as orange text on light backgrounds (eyebrow labels, "View Details →" links). This is the brand accent, so changing it is an identity decision (see report).
2. **label-content-name-mismatch (serious) ×2 everywhere** — the **Logo link** (`aria-label="AGEC — home"`) wraps visible text "AGEC" + "HVAC · MEP · MAINTENANCE"; the accessible name doesn't include all the visible text (WCAG 2.5.3). Appears twice because the logo is in both header and footer.
3. **region (moderate) ×1 everywhere** — the **sticky mobile contact bar** (`.inset-x-0` fixed div) sits outside any landmark; wrap it in a labelled `<nav>`/region.
4. **scrollable-region-focusable** (/ac-amc-dubai) — the plans table scroll container isn't keyboard-focusable.
5. **heading-order** (/projects) — a heading level is skipped.
6. **landmark-unique** (/services/vrf-vrv-systems) — two landmarks share a label.

## 4. CTA inventory (fragmented — the core conversion problem)

Primary-action labels currently in use across the site:
- **Get a Quote** (header, footer) → `/quote`
- **Request a Quote** (service pages) → `/quote`
- **Request a Project Quote** (homepage hero) → `/quote`
- **Book AC Service** (homepage hero) → `/book`
- **Book a Service** (footer) → `/book`
- **Book Online** → `/book`
- **Get AMC Quote** (homepage hero) → `/ac-amc-dubai#amc-form`
- **Request a Site Survey** (commercial maintenance) → `/quote`
- **Call Now** → `tel:`, **WhatsApp Us** → `wa.me`, **Call or WhatsApp**

→ Four different labels all lead to `/quote`; two labels lead to `/book`; the hero stacks three of them. No consistent two-action hierarchy.

## 5. Form inventory

| Form (URL) | Fields (★ = required) |
|---|---|
| **QuoteForm** (`/quote`) | name★, email★, phone★, company, projectType★, services[]★, location★, projectSize, timeline★, budget, details — **11 fields, 7 required** (B2B/project-oriented) |
| **BookForm** (`/book`) | name★, phone★, email, address★, serviceType★, equipmentType, description★, preferredDate, preferredTime — **9 fields, 5 required** (residential service) |
| **ContactForm** (`/contact`) | name★, email★, phone, subject★, message★ — 5 fields, 4 required |
| Landing-page forms | RepairForm (name/phone/area/issue), AmcForm, BalancingForm — short, service-specific |

`/quote` and `/book` are **two different, heavy forms** for two audiences (project vs service). Merging them (Step 2A) means deleting the `/book` URL and branching inside `/quote` — a URL change that needs owner sign-off.

## 6. Fix priorities (for Step 2)

1. **Contrast (verified, every page):** darken `--color-text-muted` to pass AA (safe, no brand impact) — clears most violations. Decide on the brand orange `#D4762E` (see report).
2. **Logo label mismatch** (every page): fix the accessible name / `aria-hidden` the descriptor.
3. **Sticky bar landmark**, **AMC table focusability**, **projects heading order**, **vrf landmark label**: targeted a11y fixes.
4. **Conversion path (Step 2A):** consolidate to two actions; merge `/quote` + `/book` — **pending owner confirmation**.

## Open items for owner (see report)
- **Step 2 instructions were truncated** mid-sentence ("…with a first question: 'What"). Need the rest.
- **Merging `/quote` + `/book`** deletes the `/book` URL — confirm before proceeding.
- **Brand orange `#D4762E` fails AA contrast.** Keep it (and accept the flag), or darken it slightly to an AA-passing orange site-wide?
