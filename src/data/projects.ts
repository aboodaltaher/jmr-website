// Single source for the projects shown on /projects and their case-study pages
// at /projects/[slug].
//
// RULES: name, category, systemSummary, location, systemType and capacity are
// published facts. `overview` and `scope` describe the work in GENERAL, truthful
// terms for the known system type — no invented metrics, dates, named challenges
// or results.
//
// Everything else a case study needs (client type, challenge, design decisions,
// commissioning results, timeline, client quote) is NOT known yet. It is filled
// with "[TO CONFIRM: …]" placeholders by withCaseDefaults() below. On the live
// production site (VERCEL_ENV=production) placeholders and any section left empty
// by them are hidden; on previews/local they show highlighted. Replace a
// placeholder with the real fact and it goes live automatically.
// `npm run to-confirm` lists every placeholder still open.
//
// Photos are not stored here: drop 6–10 images into public/projects/{slug}/ and
// the case-study page picks them up (see src/lib/project-photos.ts).

export type ProjectCategory = "Residential" | "Commercial" | "Data Center";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** Short scope/system line already published on the site. */
  systemSummary: string;
  location: {
    area?: string;
    emirate?: string;
    label: string;
  };
  /** When false, a full case-study page renders and is listed in the sitemap. */
  draft: boolean;
  /** Content-last-changed date, YYYY-MM-DD. Feeds the sitemap's <lastmod>. */
  updatedAt: string;
  /** Date the case-study page was first published, YYYY-MM-DD. Feeds JSON-LD datePublished. NOT the project date. */
  publishedAt: string;
  /** <title> and og:title for the case-study page (max 60 chars; keeps the location). */
  metaTitle: string;
  /** Meta + og description for the case-study page (aim 140–155 chars). */
  metaDescription: string;

  // ----- Case-study content -----
  /** One-line project type, e.g. "Commercial HVAC installation". */
  projectType?: string;
  /** System type/capacity, e.g. "224 TR VRF". */
  systemType?: string;
  /** General, truthful overview grounded in the published facts. */
  overview?: string;
  /** Scope of work (general for the system type). */
  scope?: string[];

  // ----- Owner-supplied specifics (placeholders until provided — never invented) -----
  /** Client type, e.g. "Private villa". */
  clientType: string;
  /** Installed capacity, e.g. "109 TR". */
  tonnage: string;
  challenge: string;
  /** Key design / installation decisions. */
  decisions: string[];
  /** Commissioning results. */
  results: { label: string; value: string }[];
  timeline: { label: string; value: string }[];
  /** Only with the client's permission. */
  quote: { text: string; attribution: string };
  /** Related service pages (links). */
  relatedServices: { name: string; href: string }[];
}

type CaseFields = Pick<
  Project,
  | "clientType" | "tonnage" | "challenge" | "decisions" | "results"
  | "timeline" | "quote" | "relatedServices"
>;
/** A record below provides the published facts; the case-study fields are optional. */
type BaseProject = Omit<Project, keyof CaseFields> & Partial<CaseFields>;

const tbc = (what: string) => `[TO CONFIRM: ${what}]`;

const SVC = {
  vrf: { name: "VRF / VRV systems", href: "/services/vrf-vrv-systems" },
  dx: { name: "DX units", href: "/services/dx-units" },
  install: { name: "HVAC installation", href: "/services/hvac-installation-dubai" },
  design: { name: "HVAC design & consultancy", href: "/services/hvac-design" },
  tab: { name: "Testing, adjusting & balancing", href: "/services/tab-testing-adjusting-balancing-dubai" },
  vent: { name: "Ventilation & fresh air", href: "/services/ventilation-fresh-air" },
  amc: { name: "AC maintenance contracts", href: "/ac-amc-dubai" },
};

/** Per-slug facts that ARE known from information already published on the site. */
const known: Record<string, Partial<CaseFields>> = {
  "vrf-villa-al-mamzar-dubai": { clientType: "Private villa", tonnage: "109 TR", relatedServices: [SVC.vrf, SVC.install, SVC.amc] },
  "basil-mall-ajman": { clientType: "Commercial — retail mall", tonnage: "224 TR", relatedServices: [SVC.vrf, SVC.install, SVC.amc] },
  "private-g4-building-dubai": { clientType: "Private residential building", tonnage: "148 TR", relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "double-twin-villa-sharjah": { clientType: "Villa development", tonnage: "60 TR", relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "g1r-villa-dubai": { tonnage: "45 TR", relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "villa-al-barsha-dubai": { tonnage: "140 TR", relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "18-villas-community": { clientType: "Community development", relatedServices: [SVC.install, SVC.dx, SVC.amc] },
  "private-villa-sharjah-flagship": { clientType: "Private villa", relatedServices: [SVC.design, SVC.install, SVC.amc] },
  "mbz-ai-server-room-abu-dhabi": { clientType: "AI server room", relatedServices: [SVC.design, SVC.install, SVC.amc] },
  "pure-gym-al-barsha": { clientType: "Commercial — fitness", relatedServices: [SVC.vent, SVC.install, SVC.tab] },
  "ave-restaurant-business-bay": { clientType: "Commercial — restaurant", relatedServices: [SVC.vent, SVC.install, SVC.tab] },
  "zain-solution-data-center-abu-dhabi": { clientType: "Data centre", relatedServices: [SVC.design, SVC.vent, SVC.amc] },
  "cultural-center-al-barsha": { clientType: "Public cultural facility", relatedServices: [SVC.install, SVC.vent, SVC.tab] },
};

function withCaseDefaults(p: BaseProject): Project {
  return {
    clientType: tbc("client type"),
    tonnage: tbc("installed capacity in TR"),
    challenge: tbc("the main site or design challenge on this project"),
    decisions: [tbc("key design and installation decisions: equipment selection, pipework/duct routing, zoning")],
    results: [
      { label: "Airflow", value: tbc("measured vs design airflow") },
      { label: "Supply air temperature", value: tbc("measured supply air temperature") },
      { label: "Efficiency", value: tbc("measured kW/TR") },
    ],
    timeline: [
      { label: "Start", value: tbc("start date") },
      { label: "Handover", value: tbc("handover date") },
      { label: "Duration", value: tbc("programme length") },
    ],
    quote: { text: tbc("client quote — only with the client's permission"), attribution: tbc("who said it") },
    relatedServices: [SVC.install, SVC.amc],
    ...known[p.slug],
    ...p,
  };
}

const base: BaseProject[] = [
  {
    slug: "vrf-villa-al-mamzar-dubai",
    name: "B+G+1+R Villa, Al Mamzar",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 109 Ton VRF System",
    location: { area: "Al Mamzar", emirate: "Dubai", label: "Al Mamzar, Dubai" },
    draft: false,
    updatedAt: "2026-11-13",
    publishedAt: "2026-11-13",
    metaTitle: "B+G+1+R Villa Al Mamzar — 109 TR VRF HVAC Case Study | AGEC",
    metaDescription:
      "109 TR VRF HVAC installation for a B+G+1+R villa in Al Mamzar, Dubai — zoned controls, commissioned to design conditions. Get a quote for a similar job.",
    projectType: "Residential HVAC installation",
    systemType: "109 TR VRF",
    overview:
      "HVAC installation and commissioning of a 109-ton VRF system for a B+G+1+R private villa in Al Mamzar, Dubai. A VRF system suits a large multi-level villa, giving each room and floor independent, efficient temperature control from a shared system.",
    scope: [
      "VRF outdoor and indoor unit installation",
      "Refrigerant pipework and branch selectors",
      "Zoning and controls setup",
      "Testing and commissioning to design conditions",
    ],
  },
  {
    slug: "basil-mall-ajman",
    name: "B+G+1+R Basil Mall",
    category: "Commercial",
    systemSummary: "HVAC Installation & Commissioning, 224 Ton VRF System",
    location: { emirate: "Ajman", label: "Ajman, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Basil Mall Ajman — 224 TR VRF HVAC Case Study | AGEC",
    metaDescription:
      "224 TR VRF HVAC installation for Basil Mall, a B+G+1+R commercial mall in Ajman — independent zoning for shops and common areas. Get a quote.",
    projectType: "Commercial HVAC installation & commissioning",
    systemType: "224 TR VRF",
    overview:
      "AGEC delivered the HVAC installation and commissioning of a 224-ton VRF system for a B+G+1+R commercial mall in Ajman. VRF suits a multi-zone retail building, where shops, common areas and back-of-house all need independent, efficient temperature control from a shared system.",
    scope: [
      "VRF outdoor and indoor unit installation",
      "Refrigerant pipework and branch selectors",
      "Zoning and controls setup",
      "Testing and commissioning to design conditions",
    ],
  },
  {
    slug: "private-g4-building-dubai",
    name: "Private G+4 Building",
    category: "Residential",
    systemSummary: "HVAC Full Installation, 148 Ton DX System",
    location: { emirate: "Dubai", label: "Dubai, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Private G+4 Building Dubai — 148 TR HVAC Case Study | AGEC",
    metaDescription:
      "148 TR DX HVAC installation for a private G+4 residential building in Dubai, sized to the cooling load across its floors. Get a quote for a similar job.",
    projectType: "Residential HVAC installation",
    systemType: "148 TR DX",
    overview:
      "Full HVAC installation of a 148-ton DX system for a private G+4 residential building in Dubai, sized and installed to the building's cooling load across its floors.",
    scope: [
      "Condensing units and ducted/concealed indoor units",
      "Ductwork and air distribution",
      "Refrigerant and condensate pipework",
      "Commissioning to design conditions",
    ],
  },
  {
    slug: "double-twin-villa-sharjah",
    name: "Double Twin Villa G+1",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 60 Ton DX System",
    location: { emirate: "Sharjah", label: "Sharjah, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Double Twin Villa Sharjah — 60 TR DX HVAC Case Study | AGEC",
    metaDescription:
      "60 TR DX HVAC installation and commissioning for a double twin G+1 villa development in Sharjah, with zoned comfort cooling. Get a quote for a similar job.",
    projectType: "Residential HVAC installation",
    systemType: "60 TR DX",
    overview:
      "HVAC installation and commissioning of a 60-ton DX system for a double twin G+1 villa development in Sharjah, delivering zoned comfort cooling across the villas.",
    scope: [
      "Condensing units and ducted indoor units",
      "Ductwork, diffusers and air distribution",
      "Refrigerant and drainage pipework",
      "Commissioning to design conditions",
    ],
  },
  {
    slug: "g1r-villa-dubai",
    name: "G+1+R Villa",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 45 Ton DX System",
    location: { emirate: "Dubai", label: "Dubai, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "G+1+R Villa Dubai — 45 TR DX HVAC Case Study | AGEC",
    metaDescription:
      "45 TR DX HVAC installation and commissioning for a G+1+R villa in Dubai, matched to the home's room-by-room cooling load. Get a quote for a similar job.",
    projectType: "Residential HVAC installation",
    systemType: "45 TR DX",
    overview:
      "HVAC installation and commissioning of a 45-ton DX system for a G+1+R villa in Dubai, matched to the home's room-by-room cooling load.",
    scope: [
      "Condensing units and concealed/ducted indoor units",
      "Ductwork and air distribution",
      "Refrigerant and condensate pipework",
      "Commissioning to design conditions",
    ],
  },
  {
    slug: "villa-al-barsha-dubai",
    name: "B+G+1+R Villa, Al Barsha",
    category: "Residential",
    systemSummary: "HVAC Installation, 140 Ton DX System",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Dubai, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "B+G+1+R Villa Al Barsha — 140 TR DX HVAC Case Study | AGEC",
    metaDescription:
      "140 TR DX HVAC installation for a B+G+1+R villa in Al Barsha, Dubai — a large single-home system sized to the villa's cooling load. Get a quote.",
    projectType: "Residential HVAC installation",
    systemType: "140 TR DX",
    overview:
      "HVAC installation of a 140-ton DX system for a B+G+1+R villa in Al Barsha, Dubai — a large single-home system installed to the villa's cooling load.",
    scope: [
      "Condensing units and ducted indoor units",
      "Ductwork and air distribution",
      "Refrigerant and drainage pipework",
      "Commissioning to design conditions",
    ],
  },
  {
    slug: "18-villas-community",
    name: "18 Villas Community Project",
    category: "Residential",
    systemSummary: "Full HVAC works across 18 G+1 villas",
    location: { area: "Al Rgebah / Al Seyouh", label: "Al Rgebah / Al Seyouh" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "18 Villas Al Rgebah / Al Seyouh — HVAC Case Study | AGEC",
    metaDescription:
      "HVAC works across 18 G+1 villas in Al Rgebah / Al Seyouh — one coordinated programme, every villa commissioned to the same standard. Get a quote.",
    projectType: "Residential HVAC — multi-villa community",
    systemType: "HVAC across 18 villas",
    overview:
      "Full HVAC works across 18 G+1 villas in a single community development, delivered as one coordinated, repeatable programme so every villa is installed and commissioned to the same standard.",
    scope: [
      "HVAC installation across all 18 villas",
      "Ductwork and air distribution per villa",
      "Refrigerant and drainage pipework",
      "Commissioning of each villa to design conditions",
    ],
  },
  {
    slug: "private-villa-sharjah-flagship",
    name: "B+G+1 Private Villa",
    category: "Residential",
    systemSummary: "Premium HVAC system, flagship residential project",
    location: { emirate: "Sharjah", label: "Sharjah, UAE" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "B+G+1 Private Villa Sharjah — Premium HVAC Case Study | AGEC",
    metaDescription:
      "Premium HVAC for a B+G+1 private villa in Sharjah — concealed ductwork and zoned controls for quiet, even comfort. Get a quote for a similar job.",
    projectType: "Premium residential HVAC installation",
    systemType: "Premium residential HVAC",
    overview:
      "A premium HVAC installation for a B+G+1 private villa in Sharjah — one of AGEC's flagship residential projects, engineered for quiet, even, zoned comfort throughout the home.",
    scope: [
      "Equipment selection and installation",
      "Concealed ductwork and discreet air distribution",
      "Zoned controls",
      "Commissioning to design conditions",
    ],
  },
  {
    slug: "mbz-ai-server-room-abu-dhabi",
    name: "MBZ-AI Server Room",
    category: "Data Center",
    systemSummary: "Precision cooling for AI server infrastructure",
    location: { area: "Masdar City", emirate: "Abu Dhabi", label: "Masdar City, Abu Dhabi" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "MBZ-AI Server Room Masdar City — Cooling Case Study | AGEC",
    metaDescription:
      "Precision cooling for the MBZ-AI server room in Masdar City, Abu Dhabi — close-control units and rack airflow for a 24/7 load. Get a quote.",
    projectType: "Data-centre precision cooling",
    systemType: "Precision (close-control) cooling",
    overview:
      "Precision cooling for an AI server room in Masdar City, Abu Dhabi. Close-control cooling is engineered for the continuous, high-density heat load of server infrastructure, where stable temperature and airflow matter around the clock.",
    scope: [
      "Close-control cooling units",
      "Airflow management for server racks",
      "Resilience for continuous operation",
      "Commissioning for a 24/7 load",
    ],
  },
  {
    slug: "pure-gym-al-barsha",
    name: "Pure Gym",
    category: "Commercial",
    systemSummary: "HVAC installation and ventilation system",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Al Barsha, Dubai" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Pure Gym Al Barsha — HVAC & Ventilation Case Study | AGEC",
    metaDescription:
      "HVAC and ventilation for Pure Gym in Al Barsha, Dubai — cooling for high-occupancy training floors with fresh-air supply and exhaust. Get a quote.",
    projectType: "Commercial HVAC & ventilation",
    systemType: "HVAC & ventilation",
    overview:
      "HVAC installation and a ventilation system for a Pure Gym in Al Barsha, Dubai. Gyms combine high occupancy with high heat and humidity gains, so cooling and fresh-air ventilation are sized together to keep training floors comfortable.",
    scope: [
      "Cooling for high-occupancy training floors",
      "Fresh-air supply and exhaust ventilation",
      "Air distribution and balancing",
      "Commissioning",
    ],
  },
  {
    slug: "ave-restaurant-business-bay",
    name: "AVE Restaurant",
    category: "Commercial",
    systemSummary: "Kitchen ventilation and dining area cooling",
    location: { area: "Business Bay", emirate: "Dubai", label: "Business Bay, Dubai" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "AVE Restaurant Business Bay — Ventilation Case Study | AGEC",
    metaDescription:
      "HVAC for AVE Restaurant in Business Bay, Dubai — dining-area cooling plus kitchen exhaust and make-up air, balanced and commissioned. Get a quote.",
    projectType: "Restaurant HVAC & kitchen ventilation",
    systemType: "Cooling & kitchen ventilation",
    overview:
      "Kitchen ventilation and dining-area cooling for AVE Restaurant in Business Bay, Dubai — balancing comfortable dining temperatures with the heavy exhaust and make-up-air demands of a commercial kitchen.",
    scope: [
      "Dining-area comfort cooling",
      "Commercial kitchen exhaust and make-up air",
      "Air balancing between kitchen and dining",
      "Commissioning",
    ],
  },
  {
    slug: "zain-solution-data-center-abu-dhabi",
    name: "Zain Solution Data Center",
    category: "Data Center",
    systemSummary: "Precision cooling and ventilation",
    location: { area: "Musaffah", emirate: "Abu Dhabi", label: "Musaffah, Abu Dhabi" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Zain Solution Data Center Musaffah — HVAC Case Study | AGEC",
    metaDescription:
      "Precision cooling and ventilation for the Zain Solution data centre in Musaffah, Abu Dhabi — built for continuous, reliable operation. Get a quote.",
    projectType: "Data-centre precision cooling & ventilation",
    systemType: "Precision cooling & ventilation",
    overview:
      "Precision cooling and ventilation for the Zain Solution data centre in Musaffah, Abu Dhabi — engineered for the continuous, reliable operation that critical IT equipment depends on.",
    scope: [
      "Close-control cooling units",
      "Airflow and containment for equipment",
      "Ventilation provision",
      "Commissioning for continuous operation",
    ],
  },
  {
    slug: "cultural-center-al-barsha",
    name: "Cultural Center",
    category: "Commercial",
    systemSummary: "HVAC works for public cultural facility",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Al Barsha, Dubai" },
    draft: false,
    updatedAt: "2026-11-04",
    publishedAt: "2026-11-04",
    metaTitle: "Cultural Center Al Barsha — HVAC Case Study | AGEC",
    metaDescription:
      "HVAC works for a public cultural facility in Al Barsha, Dubai — cooling and ventilation that hold comfort as crowds come and go. Get a quote.",
    projectType: "Public / cultural facility HVAC",
    systemType: "HVAC works",
    overview:
      "HVAC works for a public cultural facility in Al Barsha, Dubai. Public and exhibition spaces see variable occupancy through the day, so cooling and ventilation are set up to hold comfort as crowds come and go.",
    scope: [
      "Cooling for public and exhibition spaces",
      "Ventilation and air distribution",
      "Controls and zoning",
      "Commissioning",
    ],
  },
];

export const projects: Project[] = base.map(withCaseDefaults);

export const publishedProjects = projects.filter((p) => !p.draft);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
