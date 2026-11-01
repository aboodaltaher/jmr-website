// Single source of truth for AGEC company facts.
// Every page/component should import these rather than hard-coding values,
// so phone, email, address, licence, review figures, turnaround and project
// numbers stay consistent across the site. (Audit item 10.)

// --- Contact (phone also re-exported from ./contact for existing imports) ---
export const PHONE = "+971585575987";
export const PHONE_DISPLAY = "+971 58 557 5987";

// One canonical email. The site previously showed both a.altaher@agec.ae and
// m.ghabboun@agec.ae — a.altaher@agec.ae is the single public address.
export const EMAIL = "a.altaher@agec.ae";

// Address (from the Google Business Profile listing).
export const ADDRESS_LINE = "AlMasraf Building, Sheikh Zayed Road";
export const ADDRESS_CITY = "Dubai";
export const ADDRESS_COUNTRY = "UAE";
export const ADDRESS_FULL = `${ADDRESS_LINE}, ${ADDRESS_CITY}, ${ADDRESS_COUNTRY}`;

export const COMPANY_LEGAL = "AGEC Technical Services L.L.C.";
export const COMPANY_FULL = "Altaher Ghabboun Engineering Contracting (AGEC)";
export const LICENCE_NO = "1221573";

// Founder (surname spelling confirmed by owner: "Ghabboun").
export const FOUNDER = "Mohannad Ghabboun";

// --- Google reviews (figures also surfaced via ./reviews) ---
// TODO(owner): confirm the rating and count against the live Google profile monthly.
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 27;
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/fPKs5SXmDeK9Co4VA";

// --- Quote turnaround (reconciled from the old 24h/48h mix; confirmed 24h) ---
export const QUOTE_TURNAROUND = "within 24 hours";

// --- Response / privacy copy shown under lead forms (audit item 2) ---
export const FORM_RESPONSE_NOTE = "We reply on call and WhatsApp, 24/7.";
export const FORM_PRIVACY_NOTE =
  "Your details are only used to respond to your enquiry — never shared or sold.";

// --- Emergency strip copy (shown on /, /quote and /book) ---
export const EMERGENCY_PREFIX = "AC down right now? Call";

// --- Project figures ---
// Largest single project by cooling capacity (confirmed by owner: 240 TR).
export const LARGEST_PROJECT_TR = 240;

// Total projects delivered since 2022 (confirmed by owner: 32). The projects
// page shows a selection of 12.
export const PROJECTS_DELIVERED = "32";
