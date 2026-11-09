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

// WhatsApp (digits only, no +). The wa.me link logic lives in ./contact.
export const WHATSAPP = "971585575987";

// Address — AlMasraf Building, Sheikh Zayed Road (owner-confirmed).
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
export const GOOGLE_REVIEW_COUNT = 33;
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

// Honest coverage wording: name the emirates with delivered projects, and make
// clear the company is available UAE-wide. Use these instead of "all 7 emirates"
// so the copy doesn't imply projects delivered in every emirate. (Audit task 3.)
export const COVERAGE_SENTENCE = `Serving ${EMIRATES_WITH_PROJECTS_LABEL}, with service available across the UAE on request.`;
export const COVERAGE_SHORT = "Available across the UAE";

// Arabic coverage wording. TODO(owner): have a native Arabic speaker review this
// translation of COVERAGE_SENTENCE.
export const COVERAGE_SENTENCE_AR =
  "نخدم دبي والشارقة وعجمان وأبوظبي، مع توفّر الخدمة في جميع أنحاء الإمارات عند الطلب.";

// Shared areaServed for LocalBusiness / Service JSON-LD: the emirates with
// delivered projects, plus the country to reflect UAE-wide availability.
export const AREA_SERVED_SCHEMA = [
  ...EMIRATES_WITH_PROJECTS.map((name) => ({ "@type": "City", name })),
  { "@type": "Country", name: "United Arab Emirates" },
];
