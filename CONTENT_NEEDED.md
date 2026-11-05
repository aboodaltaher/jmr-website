# CONTENT_NEEDED.md: facts AGEC must supply before publishing

Rule: nothing here may be invented. Claude Code leaves each item as a TODO. Fill in
the "Answer:" lines, then hand the file back and we'll apply everything across the
site in one pass.

## A. Company and legal
- [ ] Relationship between the trading name and the licensed entity. Suggested line:
  "AGEC is the trading name of AGEC Technical Services L.L.C." Confirm or correct.
  Answer:
- [ ] Is "Altaher Ghabboun Engineering Contracting" still the name to show in the
  footer and schema? Answer:
- [ ] Dubai Commercial Licence No. 1221573: confirm it is current, and the expiry
  date if it should be shown. Answer:
- [ ] Duct-cleaning approval (Dubai Municipality): approval name, number and expiry
  date, or confirm there is none. Answer:
- [ ] Any other real approvals, memberships or certifications to show (name, issuer,
  number). Answer:

## B. Coverage
- [ ] Emirates where AGEC has delivered projects. The site currently names Dubai,
  Sharjah, Ajman and Abu Dhabi. Confirm that list. Answer:
- [ ] Emirates AGEC will serve on request (for example Ras Al Khaimah, Umm Al Quwain,
  Fujairah). Answer:
- [ ] Approved wording: "Delivered in Dubai, Sharjah, Ajman and Abu Dhabi; available
  across the UAE." Confirm. Answer:

## C. Reviews and proof
- [ ] Current Google review count and rating (the site uses 32 reviews and 5.0).
  Confirm both. Answer:
- [ ] The Arabic home page says "more than 30 projects". Confirm the Arabic wording
  should match "32". Answer:

## D. New service pages (installation, TAB, chiller maintenance)
For each page, supply:
- [ ] Systems and sizes actually installed or serviced (types only, no invented
  brands). Answer:
- [ ] What the client receives (reports, test sheets, handover documents). Answer:
- [ ] Standards or methods you truly follow (name them only if accurate). Answer:
- [ ] Typical building types served. Answer:
- [ ] Price guidance, if any (or "by quote"). Answer:
- [ ] Two to three real FAQ answers from your team. Answer:
- [ ] Chiller maintenance specifics: visit frequency, checks done, report format.
  Answer:
- [ ] Photos you own and may publish. Answer:

## E. Case studies (one block per project; 12 listed on /projects)
All 12 are currently `draft: true` in `src/data/projects.ts` — none renders a page
until its block below is completed. Copy this block for each project.

```
- Project title (as on /projects):
- Client permission to publish (yes/no, and whether the name can be shown):
- Area and emirate (the "18 Villas Community Project" has no emirate listed):
- Project type and category (Residential / Commercial / Data Center):
- System type and capacity (for example VRF, chiller, TR). Five projects currently show no capacity:
- Scope of work:
- Challenge:
- Solution:
- Result, in measurable terms if tracked (airflow, commissioning outcome, handover date):
- Year completed:
- Photos (credit and permission):
```

The 12 projects (slug — current published summary):
1. `basil-mall-ajman` — B+G+1+R Basil Mall · 224 Ton VRF · Ajman
2. `private-g4-building-dubai` — Private G+4 Building · 148 Ton DX · Dubai
3. `double-twin-villa-sharjah` — Double Twin Villa G+1 · 60 Ton DX · Sharjah
4. `g1r-villa-dubai` — G+1+R Villa · 45 Ton DX · Dubai
5. `villa-al-barsha-dubai` — B+G+1+R Villa · 140 Ton DX · Al Barsha, Dubai
6. `18-villas-community` — 18 Villas Community · full HVAC · Al Rgebah / Al Seyouh (emirate?)
7. `private-villa-sharjah-flagship` — B+G+1 Private Villa · flagship residential · Sharjah
8. `mbz-ai-server-room-abu-dhabi` — MBZ-AI Server Room · precision cooling · Masdar City, Abu Dhabi
9. `pure-gym-al-barsha` — Pure Gym · HVAC + ventilation · Al Barsha, Dubai
10. `ave-restaurant-business-bay` — AVE Restaurant · kitchen ventilation + cooling · Business Bay, Dubai
11. `zain-solution-data-center-abu-dhabi` — Zain Solution Data Center · precision cooling · Musaffah, Abu Dhabi
12. `cultural-center-al-barsha` — Cultural Center · HVAC works · Al Barsha, Dubai

Category labels to confirm on /projects:
- [ ] "AVE Restaurant" category. (Current build: already tagged **Commercial** — a
  restaurant — so no change is needed unless you say otherwise.) Correct category:
- [ ] "Cultural Center" category. (Current build: tagged **Commercial** as the
  closest of the three tabs; it is really a public/institutional facility.) Correct
  category, or add an "Institutional" tab?:

## F. Contact and location
- [ ] Confirm the address, phone, WhatsApp and email shown on the contact page:
  AlMasraf Building, Sheikh Zayed Road, Dubai; +971 58 557 5987; a.altaher@agec.ae.
  Answer:
- [ ] Does the Google Business Profile show exactly the same name, address and phone?
  Answer:
- [ ] Opening hours and whether 24/7 emergency service is real. Answer:

## G. Arabic review
- [ ] A native Arabic speaker should review every Arabic string flagged by the build
  (home hero, coverage wording, company-name paragraph, new service pages). Answer:
