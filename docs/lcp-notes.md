# Homepage LCP: what moves it and what does not

Measured with Lighthouse mobile (Moto G Power, simulated slow 4G), production build, 3 runs each.

| Experiment (homepage) | Lab LCP |
|---|---|
| As deployed in PR #55 | 3.07 s |
| All JavaScript blocked | 2.11 s |
| All fonts blocked | 3.07 s |
| JavaScript and fonts blocked | 1.91 s |
| This PR (hero `fetchPriority="high"`, hero image q60: 24 KB to 14 KB) | 3.09 s |
| `next build --webpack` instead of Turbopack | 2.92 s (runs 2.42 to 3.26) |

What this says:
- **The floor is about 2.1 s** even with no JavaScript: server response, HTML, CSS and the hero image at simulated slow 4G.
- **JavaScript costs about 1 s of that**, and most of it is the Next.js and React runtime (about 125 of the 190 KB gzipped), not site code. The hero form chunk is only about 8 KB.
- **Fonts do not matter** for LCP here (the LCP element is the hero image).
- Lighthouse's simulation ignores priority hints, so `fetchPriority="high"` and the smaller image help real visitors but not the lab number.
- The hero form card is `hidden lg:block` (desktop only), so mobile downloads its JavaScript without ever showing it. About 15 KB gzipped; not worth a visible pop-in on desktop.
- A local test server cannot reproduce production compression and caching. Measure the deployed site (PageSpeed Insights or Lighthouse against agec.ae) before and after each change.

## Update: the Google tag preload (what PSI on production was showing)

`next/script` with `strategy="afterInteractive"` adds `<link rel="preload" as="script">` for `gtag.js` to the `<head>`.
A ~100 KB tag preloaded at the top of the page competes with the hero image on a real connection. The sandbox blocks
Google hosts, so I measured with a 140 KB stand-in script served from our own origin (same size as the real tag):

| Variant (homepage, mobile Lighthouse) | Lab LCP |
|---|---|
| No tag at all | 3.09 s |
| `next/script` afterInteractive (gtag.js preloaded in `<head>`) | 3.52 s (3.51 to 3.94) |
| **Inline queue + gtag.js injected right after hydration (this PR)** | **3.08 s** (8 runs, 2.41 to 3.13, one 4.32 outlier) |

Setup in `src/components/RootDocument.tsx` and `src/components/GoogleTag.tsx`:
- A small inline script creates `dataLayer` and `gtag()` and queues `js`, `config AW-18332305339`, `config G-H7HNVQGSYM`
  immediately, so any event fired before the tag arrives (a fast click on Call or WhatsApp) is queued and replayed. Nothing is lost.
- `gtag.js` is requested exactly once, right after hydration (same timing as `afterInteractive`, minus the head preload).
  Both IDs are configured from that single load. No `lazyOnload`.

## Remaining options, with their cost

1. Drop the Saira Condensed headings font: 25 KB, but changes the look.
2. Replace the Next.js client runtime with a mostly static page: large change, not recommended.
3. The lab number is bounded by simulated slow 4G plus the React/Next runtime. Judge by PageSpeed Insights field data (CrUX), not only the lab score.

## Hero image

- `priority` (preload link, `loading` never lazy) and `fetchPriority="high"` on the `<img>`.
- `sizes="100vw"` is correct: the hero fills the full viewport width at every breakpoint.
- Delivered: 375 px phone at DPR 2 gets a 13.5 KB AVIF (`w=750&q=60`); tablet and desktop get a 38.9 KB AVIF (`w=1920`).

## Unused JavaScript

PSI's two chunks: `0un~tui._1_~8.js` was zod plus react-hook-form (removed in #55, gone from the build);
`17crzj_229p52.js` is the React/Next runtime chunk (69 KB, 26 KB unused, not app code). Nothing left to split
without touching the hero form.

## Round 2 (after PSI on production: 68 to 73, LCP still 6.6 s)

- **gtag.js** is now loaded with the GA4 ID (`gtag/js?id=G-H7HNVQGSYM`), and `config` is called for both `G-H7HNVQGSYM`
  and `AW-18332305339`. PSI had shown two `gtag/js` requests (G- and AW-). Our code only ever requested one; the
  second most likely comes from gtag.js itself fetching the other destination when it is configured. Whether loading
  with the G- ID removes it depends on how the two tags are linked in Google (GA4 Admin, Google tag, connected
  destinations); check the Network panel on production after deploy.
- **Fonts:** Inter (48 KB, body) is no longer preloaded (`preload: false`, still `display: swap`). The Saira Condensed
  600 and 700 files (about 12 KB each) are still preloaded: `next/font` preloads every weight of a family, and the hero
  headline uses 700 while other headings use 600. Preloading only 700 would need the fonts self-hosted or the 600 weight
  dropped, which changes the look. Lab LCP with no Google tag: 3.09 s before, 2.56 s after, CLS 0.0007.
- **Image sizes:** `images.deviceSizes` is `[640, 750, 828, 1080, 1280, 1440, 1920]` (was default incl. 1200, 2048, 3840). A
  1414 px wide viewport now gets the 1440 px AVIF (28.9 KB) instead of the 1920 px one (38.9 KB). Phones at 375 to 412 px
  already got the 750 px AVIF (13.5 KB).
- **Lighthouse CI:** LCP stays a warning.
- **Ads form label:** `REPLACE_FORM_LABEL` is still a placeholder. `trackConversion` returns before calling gtag, so nothing
  is sent and nothing throws (checked: no events, no JS errors after a hero form submit).
