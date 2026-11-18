# Overnight report — 19 Nov 2026 (branch `claude/peaceful-lovelace-x7rxhs`, not merged)
All tests below ran on a **local production build** (`VERCEL_ENV=production npm run build && next start`, http://localhost:3000). The sandbox can't reach `*.vercel.app` or Google's tag script.

**a) Commits** (one per task; each can be reverted on its own)
| Task | Commit | Files |
|---|---|---|
| B facts | `70e9c50` docs: business-facts + decisions log | docs/business-facts.md, docs/decisions-log.md |
| C1 leads | `ed8a00f` RESEND_FROM, CONTACT_EMAIL_BACKUP, lead-ref logs, honest error on every form | actions.ts, HeroQuoteForm, MidPageForm |
| C2 escape | `980c16e` escape all visitor input in email HTML + tests | lib/lead-email(.test).ts, actions.ts, package.json |
| C3 spam | `1c1545c` honeypot + 2 s minimum, silent drop + tests; `bc1ac91` honeypot RTL fix | lib/spam-guard(.test).ts, useSpamGuard.tsx, 8 forms, actions.ts |
| C4 security | `1d1be4d` next 16.2.6 → 16.4.6, audit fix | package.json, package-lock.json |
| C5 schema | `497a983` one BlogPosting per post; unused import removed | blog/[slug]/page.tsx, ar/ac-maintenance |
| D1 licence no. | `3a78a36` remove Commercial Licence No. 1221573 | 17 files (footer, legal, about, proof strip, data) |
| D1 claims | `376be98` remove DM/DEWA/DCD approval + "licensed/certified" claims, EN+AR+blog | 24 files |
| D2 NAP | `88fd7c6` GBP address + Maps CID everywhere, address links to Maps | business.ts, footer, AR chrome, contact, legal |
| D3 schema | `816095e` alternateName, no legalName, areaServed 7 emirates, "all 7 emirates" copy | SiteSchema, company.ts, 15 pages |
| D4 reviews | `8f5b2e6` 14 verbatim reviews, one linked rating line; `18d1476` star a11y fix | reviews.ts, ReviewCards.tsx, 6 pages |
| E MEP | `15095a1` publish MEP (EN+AR), MEP title/H1, sitemap, links | new-pages, long-services(-ar), routes, home, RelatedServices |

**b) Next.js** 16.2.6 → **16.4.6** (latest 16.x, released 9 Nov; eslint-config-next same). `npm audit`: **0 advisories** (was 17: 1 critical, 8 high). Release notes for 16.3/16.4 were only partly readable (nextjs.org blocked; GitHub pages partly summarised): Server Action and next/image fixes, AVIF re-enabled, stricter route matching. Checked locally: redirects, trailing slash (`/about/` still 200 with canonical `/about`), metadata and images unchanged.

**c) Forms** (contact EN/AR, hero, quote EN/AR — 25 runs, fake Resend endpoint)
| Scenario | Expected | Actual (all 5 forms) |
|---|---|---|
| Invalid (empty) | field errors, nothing sent | ✅ field errors, 0 emails |
| Valid | success, 1 email | ✅ success (/quote → thank-you page), 1 email with `[ref xxxxxxxx]`, `<b>`/`<script>` arrive as text, GA4 `generate_lead` fires |
| Honeypot filled | looks like success, nothing sent | ✅ success shown, 0 emails, log `[spam] … dropped` |
| Too fast (< 2 s) | looks like success, nothing sent | ✅ same |
| Resend failure | honest error + call/WhatsApp | ✅ "We could not send your message…" (AR: «لم يصلنا طلبك») with tel: + wa.me links; no success, no lead event |

**d) SEO checks**
- Sitemap: 87 URLs (85 + `/mep-contractors-dubai` + `/ar/mep-contractors-dubai`), all **200**, valid XML. All JSON-LD parses; **no Review/AggregateRating**; one H1 each; no noindex; no duplicate titles.
- vs `docs/seo-baseline.md`: **titles, H1s and canonicals unchanged on all 85 pages.** 2 meta descriptions changed on purpose: `/` ("Licensed since 2022" → "Established 2022"), `/kitchen-exhaust-cleaning-dubai` ("by Dubai Municipality-approved AGEC" → "by AGEC's own trained team").
- MEP: title "HVAC Package for MEP Projects in Dubai | AGEC", H1 "The HVAC Package for MEP Projects in Dubai", 1,477 words (AR 1,292), self-canonical, hreflang en/ar/x-default, Service schema with provider `#business`, 6 FAQs.
- Protected redirects: all 8 + the `/` variants return 301/308 to the **same targets**.
- Licence grep on built HTML: **0 matches**. `src/`: 41 raw hits, all harmless ("approved drawings", "DEWA bill", `iso` date variable, "ISO" inside words like "comparison", code comments).
- NAP in built HTML: one number only (`+971 58 557 5987`, `tel:+971585575987`, `wa.me/971585575987`); one address "AlMasraf Sheikh Zayed branch, Dubai, United Arab Emirates" on 92 pages; one Maps URL; no landline. `npm run check-nap` passes.
- Console: 0 new errors on `/`, `/contact`, `/ac-maintenance-dubai`, `/mep-contractors-dubai` (EN+AR), one blog post (only the sandbox-blocked gtag.js, same as Phase 0). tel/WhatsApp clicks fire `click_call`, `click_whatsapp` and the Ads conversion.
- Lighthouse mobile, median of 3, same machine, Phase 0 build vs tonight's build: `/` Perf 93 → **94**, A11y 100 → 100, BP 96, SEO 100 (LCP 3.2 → 3.0 s, TBT 52 ms, CLS 0.009). `/ac-maintenance-dubai` 94 → **95**, 100/96/100 (LCP 3.0 → 2.8 s). Not comparable with the live Phase 0 numbers (88/97).
- No sideways scroll at 375/768/1280 on 10 EN/AR pages (a scroll bug my honeypot caused on RTL pages was found and fixed in `bc1ac91`).

**e) Decisions** — 22 entries in `docs/decisions-log.md`. Key ones: backup inbox sent as a separate email; 2-second threshold, skipped when unknown; authority-compliance sentences reworded, not deleted; "DEWA bill" and "approved drawings" kept; Arabic address now shown as the Business Profile string; the 3 old paraphrased reviews replaced; MEP retitled "HVAC package" (honest scope, no homepage overlap); service-level schema scopes left as they were.

**f) Needs owner**
1. `CONTACT_EMAIL` value, and verifying agec.ae in Resend → then set `RESEND_FROM` (and optionally `CONTACT_EMAIL_BACKUP`) in Vercel.
2. Google Ads form-conversion label (`src/lib/gtag.ts`, still `REPLACE_FORM_LABEL`).
3. Geo 25.1431755, 55.2210469 (source: `src/data/business.ts`, matches the Business Profile pin 25.1432, 55.221): confirm or replace.
4. MEP: does AGEC deliver any other MEP trade (electrical, plumbing, fire)? The page says no.
5. GA4: mark `generate_lead`, `click_whatsapp`, `click_call` as key events (still 0 key events).
6. Rate limiting needs a shared store (Upstash/Vercel KV) — your call on adding a service.
7. 16-month Search Console data; Arabic copy review (new 7-emirates and About lines).

**g) Morning checklist (before any production merge)**
1. Vercel → **jmr-technical → Deployments** → open the preview for `claude/peaceful-lovelace-x7rxhs`.
2. Confirm it is protected (login wall) or sends `X-Robots-Tag: noindex` (`curl -sI <preview-url> | grep -i x-robots`).
3. On a phone: submit the contact and quote forms (EN + AR) and confirm the email arrives in the real inbox; tap Call and WhatsApp.
4. Check `/`, `/contact`, `/mep-contractors-dubai` and an Arabic page by eye, then decide on merging. Nothing has been merged or deployed to production.
