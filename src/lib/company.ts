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

// Address follows the trade licence.
// TODO(owner): confirm exact building / unit number on the DET trade licence.
export const ADDRESS_LINE = "Al Quoz Industrial Area 1";
export const ADDRESS_CITY = "Dubai";
export const ADDRESS_COUNTRY = "UAE";
export const ADDRESS_FULL = `${ADDRESS_LINE}, ${ADDRESS_CITY}, ${ADDRESS_COUNTRY}`;

export const COMPANY_LEGAL = "AGEC Technical Services L.L.C.";
export const COMPANY_FULL = "Altaher Ghabboun Engineering Contracting (AGEC)";
export const LICENCE_NO = "1221573";

// Founder. TODO(owner): confirm surname spelling — the brand uses "Ghabboun",
// some documents show "Ghaboun".
export const FOUNDER = "Mohannad Ghabboun";

// --- Google reviews (figures also surfaced via ./reviews) ---
// TODO(owner): confirm the rating and count against the live Google profile monthly.
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 27;
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/fPKs5SXmDeK9Co4VA";

// --- Quote turnaround (reconciled: site previously said both 24h and 48h) ---
// TODO(owner): confirm the written-quote SLA you can reliably hit.
export const QUOTE_TURNAROUND = "within 24 hours";

// --- Response / privacy copy shown under lead forms (audit item 2) ---
// TODO(owner): confirm a response-time commitment if you want a firmer promise
// than the 24/7 call & WhatsApp line below.
export const FORM_RESPONSE_NOTE = "We reply on call and WhatsApp, 24/7.";
export const FORM_PRIVACY_NOTE =
  "Your details are only used to respond to your enquiry — never shared or sold.";

// --- Project figures ---
// Largest single project by cooling capacity. The projects list shows a 224-ton
// VRF job (Ajman) as the largest; the site previously also claimed 240 TR.
// TODO(owner): confirm whether a larger (240 TR) project exists to cite.
export const LARGEST_PROJECT_TR = 224;

// TODO(owner): confirm the true total number of delivered projects. The site
// shows a selection of 12; "30+" is used as the headline figure.
export const PROJECTS_DELIVERED = "30+";
