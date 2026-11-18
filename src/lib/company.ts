// Single source of truth for AGEC company facts.
// Every page/component should import these rather than hard-coding values,
// so phone, email, address, review figures, turnaround and project
// numbers stay consistent across the site. (Audit item 10.)

import { business, addressFull } from "@/data/business";

// --- Contact (all values come from src/data/business.ts) ---
export const PHONE = business.phone.e164;
export const PHONE_DISPLAY = business.phone.display;

// One canonical public email.
export const EMAIL = business.email;

// WhatsApp (digits only, no +). The wa.me link logic lives in ./contact.
export const WHATSAPP = business.phone.whatsapp;

// Address — matches the Google Business Profile.
export const ADDRESS_LINE = business.address.line;
export const ADDRESS_CITY = business.address.locality;
export const ADDRESS_COUNTRY = business.address.country;
export const ADDRESS_FULL = addressFull;

export const COMPANY_NAME = business.name;

// Founder (surname spelling confirmed by owner: "Ghabboun").
export const FOUNDER = "Mohannad Ghabboun";

// --- Google reviews: one value, edited monthly in src/data/business.ts ---
export const GOOGLE_RATING = business.reviews.rating.toFixed(1);
export const GOOGLE_REVIEW_COUNT = business.reviews.count;
export const REVIEWS_UPDATED = business.reviews.updated;

// --- Public profile links (single source for sameAs / hasMap / footer) ---
/** "View on Google Maps" — the business's Google Maps profile. */
export const MAPS_URL = business.links.mapsView;
/** "Leave a review" — opens the Google review composer. */
export const REVIEW_URL = business.links.reviewLeave;
export const INSTAGRAM_URL = business.links.instagram;

// --- Quote turnaround (reconciled from the old 24h/48h mix; confirmed 24h) ---
export const QUOTE_TURNAROUND = "within 24 hours";

// --- Response / privacy copy shown under lead forms (audit item 2) ---
export const FORM_RESPONSE_NOTE = `We reply on call and WhatsApp, ${business.hours.short}.`;
export const FORM_PRIVACY_NOTE =
  "Your details are only used to respond to your enquiry — never shared or sold.";

// Arabic form notes. TODO(owner): have a native Arabic speaker review.
export const FORM_RESPONSE_NOTE_AR = "نرد عبر الهاتف والواتساب على مدار الساعة.";
export const FORM_PRIVACY_NOTE_AR =
  "تُستخدم بياناتك للرد على استفسارك فقط — لا تُشارك ولا تُباع أبداً.";

// --- Emergency strip copy (shown on / and /quote) ---
export const EMERGENCY_PREFIX = "AC down right now? Call";

// --- Project figures ---
// Largest single project by cooling capacity (confirmed by owner: 240 TR).
export const LARGEST_PROJECT_TR = 240;

// Total projects delivered since 2022 (confirmed by owner: 33). The projects
// page shows a selection of 13.
export const PROJECTS_DELIVERED = "33";

// --- Smart thermostat energy-saving figure (single source, audit task 4) ---
// Manufacturer-reported (ecobee eco+). The thermostat page footnotes this and
// notes actual savings depend on home, usage and settings.
// TODO(owner): keep the manufacturer citation; adjust the figure only with a source.
export const THERMOSTAT_SAVINGS = "up to 26%";

// --- Coverage ---
// Emirates we provide service across (all seven).
export const EMIRATES_SERVED = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
] as const;

// Emirates where AGEC has actually delivered projects (from the projects list).
export const EMIRATES_WITH_PROJECTS = [
  "Dubai",
  "Sharjah",
  "Ajman",
  "Abu Dhabi",
] as const;

// Human-readable "Dubai, Sharjah, Ajman and Abu Dhabi" from the list above.
export const EMIRATES_WITH_PROJECTS_LABEL = EMIRATES_WITH_PROJECTS.slice(0, -1)
  .join(", ")
  .concat(" and ", EMIRATES_WITH_PROJECTS[EMIRATES_WITH_PROJECTS.length - 1]);

// Coverage wording. Service area = all 7 emirates (owner-confirmed, docs/business-facts.md).
// Delivered projects are a separate fact (EMIRATES_WITH_PROJECTS): never imply projects in all seven.
export const COVERAGE_SENTENCE = "Serving all 7 emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah.";
export const COVERAGE_SHORT = "Serving all 7 emirates";

// Arabic coverage wording. TODO(owner): have a native Arabic speaker review.
export const COVERAGE_SENTENCE_AR =
  "نخدم الإمارات السبع: أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة.";

// Shared areaServed for LocalBusiness / Service JSON-LD: all 7 emirates.
export const AREA_SERVED_SCHEMA = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
].map((name) => ({ "@type": "AdministrativeArea", name }));
