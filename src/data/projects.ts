// Single source for the projects shown on /projects and their case-study pages
// at /projects/[slug].
//
// RULES: name, category, systemSummary, location, systemType and capacity are
// published facts. `overview` and `scope` describe the work in GENERAL, truthful
// terms for the known system type — no invented metrics, dates, named challenges
// or results.
//
// Owner-supplied specifics live in the optional `facts` object (CaseStudyFacts).
// Every field is optional and a section renders ONLY when its field is filled.
// Never fill a field with anything the owner has not confirmed. The fill-in sheet
// for all 13 case studies is docs/case-study-facts-template.md.
//
// Photos: either list them in facts.photos (src under /public + alt text), or drop
// images into public/projects/{slug}/ and the page picks them up
// (src/lib/project-photos.ts). With no photos the gallery is not shown.

export type ProjectCategory = "Residential" | "Commercial" | "Data Center";

/** Owner-supplied case-study facts. Leave a field out until the owner confirms it. */
export interface CaseStudyFacts {
  /** Year completed, e.g. "2025". */
  year?: string;
  /** Overrides the published system type when the owner gives a more exact one, e.g. "Daikin VRV IV". */
  systemType?: string;
  /** Installed capacity with unit, e.g. "109 TR" or "350 kW". */
  capacity?: string;
  /** e.g. "12 outdoor units, 48 indoor units". */
  unitsInstalled?: string;
  /** The owner's own scope description (shown above the general scope list). */
  scope?: string;
  /** The main site or design challenge. */
  challenge?: string;
  /** How it was solved: key design and installation decisions. */
  solution?: string;
  /** A measured result, e.g. commissioning figures. Only real measurements. */
  measuredResult?: string;
  /** Owned photos with permission: src under /public and descriptive alt text. */
  photos?: { src: string; alt: string }[];
  /** e.g. "Private villa", "Retail mall". */
  clientType?: string;

  // ----- Richer, reusable sections. Optional: each renders only when filled. Any project can use them. -----
  /** Short intro paragraphs shown under "Project overview" (replaces the general `overview` text). */
  intro?: string[];
  /** Static stat cards, e.g. { value: "224 TR", label: "Connected indoor capacity" }. No counters or animation. */
  highlights?: { value: string; label: string }[];
  /**
   * A side-by-side comparison, e.g. an electrical requirement against the available supply.
   * `items` are the compared figures; `difference` is the gap between them; `note` explains how to read it.
   */
  comparison?: {
    title: string;
    items: { label: string; value: string }[];
    difference: { label: string; value: string };
    note?: string;
  };
  /** Challenge cards: a title and the confirmed facts behind it. */
  challenges?: { title: string; points: string[] }[];
  /** What was done about them, as a list. */
  solutions?: string[];
  /** The confirmed outcome in words (use `measuredResult` instead when there is a real measurement). */
  outcome?: string;
  /** Replaces the closing call to action (heading + button) and adds a WhatsApp button. */
  cta?: { heading: string; label: string; href: string };
}

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
  /** Optional H1 for the case-study page; defaults to `name`. */
  h1?: string;
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

  /** Owner-supplied facts. All optional; each renders only when filled. */
  facts: CaseStudyFacts;
  /** Related service pages (links). */
  relatedServices: { name: string; href: string }[];
}

/** A record below provides the published facts; facts and relatedServices are filled in by withDefaults. */
type BaseProject = Omit<Project, "facts" | "relatedServices"> & Partial<Pick<Project, "facts" | "relatedServices">>;

const SVC = {
  vrf: { name: "VRF / VRV systems", href: "/services/vrf-vrv-systems" },
  dx: { name: "DX units", href: "/services/dx-units" },
  install: { name: "HVAC installation", href: "/services/hvac-installation-dubai" },
  design: { name: "HVAC design & consultancy", href: "/services/hvac-design" },
  tab: { name: "Testing, adjusting & balancing", href: "/services/tab-testing-adjusting-balancing-dubai" },
  commissioning: { name: "Testing & commissioning", href: "/services/tab-testing-adjusting-balancing-dubai" },
  ajman: { name: "HVAC contractor in Ajman", href: "/hvac-contractor-ajman" },
  vent: { name: "Ventilation & fresh air", href: "/services/ventilation-fresh-air" },
  amc: { name: "AC maintenance contracts", href: "/ac-amc-dubai" },
};

/**
 * Per-slug facts ALREADY published on the site (client type, capacity) and the matching
 * service pages. Nothing else is filled: the remaining CaseStudyFacts fields stay empty until
 * the owner supplies them.
 */
const known: Record<string, { facts?: CaseStudyFacts; relatedServices: Project["relatedServices"] }> = {
  "vrf-villa-al-mamzar-dubai": { facts: { clientType: "Private villa", capacity: "109 TR" }, relatedServices: [SVC.vrf, SVC.install, SVC.amc] },
  "basil-mall-ajman": { facts: { clientType: "Commercial — retail mall", capacity: "224 TR" }, relatedServices: [SVC.vrf, SVC.design, SVC.commissioning, SVC.ajman] },
  "private-g4-building-dubai": { facts: { clientType: "Private residential building", capacity: "148 TR" }, relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "double-twin-villa-sharjah": { facts: { clientType: "Villa development", capacity: "60 TR" }, relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "g1r-villa-dubai": { facts: { capacity: "45 TR" }, relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "villa-al-barsha-dubai": { facts: { capacity: "140 TR" }, relatedServices: [SVC.dx, SVC.install, SVC.amc] },
  "18-villas-community": { facts: { clientType: "Community development" }, relatedServices: [SVC.install, SVC.dx, SVC.amc] },
  "private-villa-sharjah-flagship": { facts: { clientType: "Private villa" }, relatedServices: [SVC.design, SVC.install, SVC.amc] },
  "mbz-ai-server-room-abu-dhabi": { facts: { clientType: "AI server room" }, relatedServices: [SVC.design, SVC.install, SVC.amc] },
  "pure-gym-al-barsha": { facts: { clientType: "Commercial — fitness" }, relatedServices: [SVC.vent, SVC.install, SVC.tab] },
  "ave-restaurant-business-bay": { facts: { clientType: "Commercial — restaurant" }, relatedServices: [SVC.vent, SVC.install, SVC.tab] },
  "zain-solution-data-center-abu-dhabi": { facts: { clientType: "Data centre" }, relatedServices: [SVC.design, SVC.vent, SVC.amc] },
  "cultural-center-al-barsha": { facts: { clientType: "Public cultural facility" }, relatedServices: [SVC.install, SVC.vent, SVC.tab] },
};

function withDefaults(p: BaseProject): Project {
  const k = known[p.slug];
  return {
    ...p,
    facts: { ...k?.facts, ...p.facts },
    relatedServices: p.relatedServices ?? k?.relatedServices ?? [SVC.install, SVC.amc],
  };
}

const base: BaseProject[] = [
  {
    slug: "vrf-villa-al-mamzar-dubai",
    name: "Villa, Al Mamzar",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 109 Ton VRF System",
    location: { area: "Al Mamzar", emirate: "Dubai", label: "Al Mamzar, Dubai" },
    draft: false,
    updatedAt: "2026-11-13",
    publishedAt: "2026-11-13",
    metaTitle: "Villa Al Mamzar — 109 TR VRF HVAC Case Study | AGEC",
    metaDescription:
      "109 TR VRF HVAC installation for a villa in Al Mamzar, Dubai — zoned controls, commissioned to design conditions. Get a quote for a similar job.",
    projectType: "Residential HVAC installation",
    systemType: "109 TR VRF",
    overview:
      "HVAC installation and commissioning of a 109-ton VRF system for a private villa in Al Mamzar, Dubai. A VRF system suits a large multi-level villa, giving each room and floor independent, efficient temperature control from a shared system.",
    scope: [
      "VRF outdoor and indoor unit installation",
      "Refrigerant pipework and branch selectors",
      "Zoning and controls setup",
      "Testing and commissioning to design conditions",
    ],
  },
  {
    slug: "basil-mall-ajman",
    name: "Basil Mall, Ajman",
    h1: "Basil Mall, Ajman: 224 TR LG VRF Installation",
    category: "Commercial",
    systemSummary: "HVAC Installation & Commissioning, 224 Ton VRF System",
    location: { emirate: "Ajman", label: "Ajman, UAE" },
    draft: false,
    updatedAt: "2026-11-20",
    publishedAt: "2026-11-04",
    metaTitle: "Basil Mall Ajman | 224 TR LG VRF Project – AGEC",
    metaDescription:
      "How AGEC delivered a 224 TR LG VRF system at Basil Mall, Ajman — 135% manufacturer-approved combination, 75 m piping, operating within a 200 kW supply.",
    projectType: "Commercial HVAC installation & commissioning",
    systemType: "224 TR VRF",
    scope: [
      "VRF outdoor and indoor unit installation",
      "Refrigerant pipework and Refnet installation",
      "Testing and commissioning",
    ],
    // Facts below are the owner's (20 Nov 2026). Year, unit counts and photos were NOT provided: leave them out.
    facts: {
      systemType: "LG VRF",
      intro: [
        "AGEC delivered the LG VRF installation at Basil Mall, a commercial retail mall in Ajman, UAE. The system has 224 TR of connected indoor capacity and approx. 166 TR of outdoor capacity.",
        "A 135% combination ratio means the connected indoor units total 224 TR on approx. 166 TR of outdoor capacity — sized for real diversity in a mall, where not every zone needs full cooling at the same time. LG reviewed and approved the 135% ratio.",
        "The tight point was the electrical supply: 200 kW was available, against 260 kW at 100% combination. The system was commissioned and operates within the 200 kW electrical allocation.",
      ],
      // TODO(owner): the outdoor capacity is DERIVED (224 TR / 135% = approx. 166 TR). Confirm the exact outdoor model
      // capacity and replace "approx. 166 TR" (here, in the intro and in the first challenge) with the real figure.
      highlights: [
        { value: "224 TR", label: "Connected indoor capacity" },
        { value: "approx. 166 TR", label: "Outdoor capacity" },
        { value: "135%", label: "Combination ratio (manufacturer-approved)" },
        { value: "75 m", label: "Longest piping route" },
        { value: "200 kW", label: "Available electrical supply" },
        { value: "LG VRF", label: "System" },
      ],
      comparison: {
        title: "Electrical comparison",
        items: [
          { label: "Requirement at 100% combination", value: "260 kW" },
          { label: "Available electrical capacity", value: "200 kW" },
        ],
        difference: { label: "Gap", value: "60 kW" },
        note: "The 60 kW is the difference between the reference requirement and the available allocation, not a measured reduction in operating consumption.",
      },
      challenges: [
        { title: "Limited electrical capacity", points: ["200 kW available, against 260 kW required at 100% combination."] },
        { title: "High combination ratio", points: ["135% indoor to outdoor: 224 TR of indoor capacity on approx. 166 TR of outdoor capacity."] },
        { title: "Extended refrigerant piping", points: ["The longest refrigerant piping route is 75 m."] },
        { title: "Restricted Refnet positions", points: ["Refnet positions on site were restricted."] },
      ],
      solutions: [
        "Optimised the VRF equipment configuration.",
        "Coordinated the 135% combination ratio with LG and obtained their approval.",
        "Evaluated the piping design for the 75 m refrigerant route.",
        "Optimised Refnet positions to suit site conditions.",
        "Coordinated the system configuration against the 200 kW electrical supply.",
        "Achieved operation within the 200 kW electrical allocation.",
      ],
      outcome: "The system was commissioned and is operating within the 200 kW electrical allocation.",
      cta: { heading: "Have a similar HVAC project? Contact AGEC", label: "Contact AGEC", href: "/contact" },
    },
  },
  {
    slug: "private-g4-building-dubai",
    name: "Private G+4 Building",
    category: "Residential",
    systemSummary: "HVAC Full Installation, 148 Ton DX System",
    location: { emirate: "Dubai", label: "Dubai, UAE" },
    draft: false,
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    name: "Villa, Al Barsha",
    category: "Residential",
    systemSummary: "HVAC Installation, 140 Ton DX System",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Dubai, UAE" },
    draft: false,
    updatedAt: "2026-11-19",
    publishedAt: "2026-11-04",
    metaTitle: "Villa Al Barsha — 140 TR DX HVAC Case Study | AGEC",
    metaDescription:
      "140 TR DX HVAC installation for a villa in Al Barsha, Dubai — a large single-home system sized to the villa's cooling load. Get a quote.",
    projectType: "Residential HVAC installation",
    systemType: "140 TR DX",
    overview:
      "HVAC installation of a 140-ton DX system for a villa in Al Barsha, Dubai — a large single-home system installed to the villa's cooling load.",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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
    updatedAt: "2026-11-19",
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

export const projects: Project[] = base.map(withDefaults);

export const publishedProjects = projects.filter((p) => !p.draft);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
