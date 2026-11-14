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

Options that would get lab LCP under 2.5 s, with their cost:
1. Load Google tags only after the page has loaded (`strategy="lazyOnload"` in `src/app/layout.tsx`). Today `gtag.js` is preloaded in the `<head>`, so it competes with the hero image on a real connection. Not visible in a sandbox that blocks Google hosts.
2. Drop the Saira Condensed headings font: 25 KB, but changes the look.
3. Replace the Next.js client runtime with a mostly static page: large change, not recommended.
