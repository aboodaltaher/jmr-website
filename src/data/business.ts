// SINGLE SOURCE OF TRUTH for AGEC's public business details (NAP + hours,
// reviews, entity links). Every component, page and JSON-LD block reads from
// here (directly, or via the thin re-exports in src/lib/company.ts), so the
// website stays consistent with the Google Business Profile.
//
// To update: edit this file only. `scripts/check-nap.sh` fails if a phone
// number, address or review figure is hard-coded anywhere else.

export const business = {
  /** Public business name — matches the Google Business Profile. */
  name: "AGEC Technical Services",
  /** Other names the business is known by (schema.org alternateName). No legal name is published. */
  alternateNames: ["AGEC", "Altaher Ghabboun Engineering Contracting"],
  /** Short brand used in body copy and the " | AGEC" title suffix. */
  brand: "AGEC",
  url: "https://agec.ae",

  // Real and current (owner confirmed again 19 Nov 2026). Shown as a licence line only; no approval claims.
  licence: {
    number: "1221573",
    label: "Dubai Commercial Licence No. 1221573",
  },

  phone: {
    e164: "+971585575987",
    display: "+971 58 557 5987",
    /** wa.me format: digits only, no "+". */
    whatsapp: "971585575987",
  },
  email: "a.altaher@agec.ae",

  address: {
    /** Address exactly as on the Google Business Profile (docs/business-facts.md). */
    line: "AlMasraf Sheikh Zayed branch",
    locality: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  geo: { lat: 25.1431755, lng: 55.2210469 },

  // Confirmed by the owner: open 24 hours, every day. If this ever changes to
  // fixed hours, set alwaysOpen false and fill opens/closes — scripts/check-nap.sh
  // will then fail on any leftover "24/7" copy so it cannot drift.
  hours: {
    alwaysOpen: true,
    label: "Open 24 hours",
    /** Short form used in "reply on call and WhatsApp, 24/7" style copy. */
    short: "24/7",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },

  // Update monthly from the Google Business Profile.
  // Shown on the site and used for the homepage meta description. Every page reads these values
  // through src/lib/company.ts, src/lib/reviews.ts or src/lib/siteStats.ts: never type a count into a page.
  // Deliberately NOT emitted as schema.org aggregateRating (Google ignores
  // self-served LocalBusiness review markup, and a stale count hurts trust), so the schema can never
  // disagree with the visible text.
  reviews: {
    // Verified 19 Nov 2026 against the Google Business Profile: 5.0 from 42 reviews (all-time).
    // This is the ONE value behind every "5.0 ★ from 42 Google reviews" on the site.
    rating: 5.0,
    count: 42,
    updated: "2026-11-19",
  },

  links: {
    // Google Maps CID URL for the business profile (used for "View on Google
    // Maps", schema hasMap and sameAs).
    mapsView: "https://maps.google.com/maps?cid=14934329653680563760",
    // Opens the Google review composer. Used by every "Leave a review" link and
    // by the /review redirect (which the printed QR codes point at).
    reviewLeave: "https://g.page/r/CTBmNs6xZUHPEBM/review",
    instagram: "https://www.instagram.com/agec_contracting",
    // None provided yet. Fill any that exist; empty ones are never output.
    linkedin: "",
    facebook: "",
    youtube: "",
  },
} as const;

/** "AlMasraf Sheikh Zayed branch, Dubai, United Arab Emirates" — exactly as on the Business Profile. */
export const addressFull = `${business.address.line}, ${business.address.locality}, ${business.address.country}`;

/** Non-empty entity profile URLs for schema.org `sameAs`. */
export function sameAs(): string[] {
  const { mapsView, instagram, linkedin, facebook, youtube } = business.links;
  return [mapsView, instagram, linkedin, facebook, youtube].filter(Boolean);
}

/** schema.org openingHoursSpecification built from `business.hours`. */
export function openingHoursSpecification() {
  const { days, opens, closes } = business.hours;
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...days],
      opens,
      closes,
    },
  ];
}
