# Google Search Console & analytics checklist (AGEC)

## Analytics IDs (TODO(owner))
Measurement is wired and env-driven — just add the IDs:
- `NEXT_PUBLIC_GA_ID` — GA4 Measurement ID (`G-XXXXXXXXXX`).
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container (`GTM-XXXXXXX`).
- Google Ads tag `AW-18332305339` is already in the layout.
- Search Console verification: add the `google-site-verification` meta or use
  the DNS/GA4 method (**TODO(owner):** supply the verification token if you want
  the meta-tag method and I'll add it to the root layout).

Events already fire via `ConversionTracking` + `trackFormSubmit`:
**call clicks, WhatsApp clicks, and form submits** (quote, AMC, repair,
balancing, contact, inline). Confirm them in GA4 **Realtime → Events** after
the IDs are live.

## One-time Search Console setup
1. Add the property for the **canonical host** `https://agec.ae` (non-www). Add
   `https://www.agec.ae` too and confirm it 301s to non-www.
2. **Sitemaps →** submit `https://agec.ae/sitemap.xml`. Confirm "Success" and
   the discovered-URL count (~39).
3. **Indexing → Pages:** watch for "Crawled – not indexed" / "Discovered – not
   indexed". Use **URL Inspection → Request indexing** for new/important pages.
4. **Experience → Core Web Vitals:** check the Mobile report (field data). Aim
   LCP < 2.5s, INP < 200ms, CLS < 0.1. The homepage and `/services/vrf-vrv-systems`
   are the pages to watch.
5. **Enhancements:** confirm **Breadcrumbs**, **FAQ** and **Merchant/Article**
   items are detected and valid. Cross-check with the
   [Rich Results Test](https://search.google.com/test/rich-results).
6. **Links:** review top linked pages and anchor text; make sure the service
   pages are getting internal links (the Related-services blocks help).

## Weekly report — the 11 target searches
Pull **Performance → Search results** (last 28 days) and record impressions,
clicks, average position and CTR for:

1. ac maintenance dubai
2. ac repair dubai
3. ac installation dubai
4. ac amc dubai
5. hvac contractor dubai
6. air balancing dubai
7. ac duct cleaning dubai
8. commercial hvac maintenance dubai
9. vrf / vrv dubai
10. ac services sharjah
11. ac services abu dhabi

For each: note the best-ranking URL, position trend, and whether the query is
served by the right page. Feed gaps back into the content plan.

## Off-site (owner actions — not code)
- **Google Business Profile:** keep NAP identical to the site (AlMasraf
  Building, Sheikh Zayed Road, Dubai; +971 58 557 5987); add categories,
  services, photos and posts; respond to reviews.
- **Reviews:** hand out the `/review` card / QR after each job to grow real
  Google reviews.
- **Citations:** consistent NAP on UAE directories (Yellow Pages UAE, etc.).
- **Backlinks:** manufacturer partner pages (Daikin, Mitsubishi, Carrier),
  local press, project write-ups.
- **Social:** keep the Instagram profile active (already in schema `sameAs`).
