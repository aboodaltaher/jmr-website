// Single source for the projects shown on /projects and their case-study pages
// at /projects/[slug].
//
// RULES: name, category, systemSummary, location, systemType and capacity are
// published facts. `overview` and `scope` describe the work in GENERAL, truthful
// terms for the known system type — no invented metrics, dates, named challenges
// or results. The narrative fields (challenge/solution/result) stay empty until
// the owner supplies the real detail per project; `gallery` fills in when the
// owner uploads real, owned photos. See CONTENT_NEEDED.md.

export type ProjectCategory = "Residential" | "Commercial" | "Data Center";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
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

  // ----- Case-study content -----
  /** One-line project type, e.g. "Commercial HVAC installation". */
  projectType?: string;
  /** System type/capacity, e.g. "224 TR VRF". */
  systemType?: string;
  /** General, truthful overview grounded in the published facts. */
  overview?: string;
  /** Scope of work (general for the system type). */
  scope?: string[];
  // Owner-supplied specifics (left empty until provided — never invented):
  challenge?: string;
  solution?: string;
  result?: string;
  gallery?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "vrf-villa-al-mamzar-dubai",
    name: "B+G+1+R Villa, Al Mamzar",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 109 Ton VRF System",
    location: { area: "Al Mamzar", emirate: "Dubai", label: "Al Mamzar, Dubai" },
    draft: false,
    updatedAt: "2026-11-13",
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
    gallery: [
      {
        src: "/projects/agec-vrf-villa-al-mamzar-dubai.jpg",
        alt: "Modern multi-level private villa in Al Mamzar, Dubai with a 109-ton VRF system installed by AGEC",
        caption: "B+G+1+R villa, Al Mamzar — 109 TR VRF installation & commissioning",
      },
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

export const publishedProjects = projects.filter((p) => !p.draft);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
