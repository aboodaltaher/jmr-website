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
  legalName: "AGEC Technical Services L.L.C.",
  alternateName: "Altaher Ghabboun Engineering Contracting",
  /** Short brand used in body copy and the " | AGEC" title suffix. */
  brand: "AGEC",
  url: "https://agec.ae",

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
    /** Street line as it appears on the Google Business Profile. */
    line: "AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1",
    locality: "Dubai",
    region: "Dubai",
    country: "UAE",
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

  // Update monthly. Shown on the site and used for the homepage meta description.
  // Deliberately NOT emitted as schema.org aggregateRating (Google ignores
  // self-served LocalBusiness review markup, and a stale count hurts trust).
  reviews: {
    rating: 5.0,
    count: 37,
    updated: "2026-11-14",
  },

  links: {
    // Google Maps CID URL for the business profile (used for "View on Google
    // Maps", schema hasMap and sameAs).
    mapsView: "https://maps.google.com/?cid=14934329653680563760",
    // TODO(owner): replace with the g.page review link
    // (https://g.page/r/<id>/review). Interim value: current review link.
    reviewLeave: "https://maps.app.goo.gl/fPKs5SXmDeK9Co4VA",
    instagram: "https://www.instagram.com/agec_contracting",
    // TODO(owner): fill any that exist. Empty ones are never output.
    linkedin: "",
    facebook: "",
    youtube: "",
  },
} as const;

/** "AlMasraf Building, …, Al Quoz Industrial Area 1, Dubai, UAE" */
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
