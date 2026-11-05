// Single source for the projects shown on /projects and their case-study pages
// at /projects/[slug].
//
// RULES: only `name`, `category`, `systemSummary` and `location` are published
// facts taken from the existing site. The narrative case-study fields (scope,
// challenge, solution, result, gallery) are intentionally empty until the owner
// supplies them — see CONTENT_NEEDED.md. An entry stays `draft: true` while it
// lacks that detail, so it does NOT render a page and is NOT added to the
// sitemap. Flip `draft` to false only once the real detail below is filled in.

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
  /** Short scope/system line already published on the site (e.g. capacity). */
  systemSummary: string;
  location: {
    /** District/area if known, else undefined. */
    area?: string;
    /** Emirate if known, else undefined (do not guess). */
    emirate?: string;
    /** The label exactly as currently shown on the projects grid. */
    label: string;
  };
  /** When false, a full case-study page renders and is listed in the sitemap. */
  draft: boolean;

  // ----- Case-study detail (owner-supplied; required before publishing) -----
  /** One-line project type, e.g. "New villa HVAC installation". */
  projectType?: string;
  /** System type/capacity, e.g. "224 TR VRF". */
  systemType?: string;
  /** Scope of work as bullet points. */
  scope?: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  gallery?: ProjectImage[];
}

// The 12 projects currently shown on /projects. All are draft until the owner
// confirms scope/challenge/solution/result, photos and client permission.
export const projects: Project[] = [
  {
    slug: "basil-mall-ajman",
    name: "B+G+1+R Basil Mall",
    category: "Commercial",
    systemSummary: "HVAC Installation & Commissioning, 224 Ton VRF System",
    location: { emirate: "Ajman", label: "Ajman, UAE" },
    draft: true,
  },
  {
    slug: "private-g4-building-dubai",
    name: "Private G+4 Building",
    category: "Residential",
    systemSummary: "HVAC Full Installation, 148 Ton DX System",
    location: { emirate: "Dubai", label: "Dubai, UAE" },
    draft: true,
  },
  {
    slug: "double-twin-villa-sharjah",
    name: "Double Twin Villa G+1",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 60 Ton DX System",
    location: { emirate: "Sharjah", label: "Sharjah, UAE" },
    draft: true,
  },
  {
    slug: "g1r-villa-dubai",
    name: "G+1+R Villa",
    category: "Residential",
    systemSummary: "HVAC Installation & Commissioning, 45 Ton DX System",
    location: { emirate: "Dubai", label: "Dubai, UAE" },
    draft: true,
  },
  {
    slug: "villa-al-barsha-dubai",
    name: "B+G+1+R Villa, Al Barsha",
    category: "Residential",
    systemSummary: "HVAC Installation, 140 Ton DX System",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Dubai, UAE" },
    draft: true,
  },
  {
    slug: "18-villas-community",
    name: "18 Villas Community Project",
    category: "Residential",
    systemSummary: "Full HVAC works across 18 G+1 villas",
    location: { area: "Al Rgebah / Al Seyouh", label: "Al Rgebah / Al Seyouh" },
    draft: true,
  },
  {
    slug: "private-villa-sharjah-flagship",
    name: "B+G+1 Private Villa",
    category: "Residential",
    systemSummary: "Premium HVAC system, flagship residential project",
    location: { emirate: "Sharjah", label: "Sharjah, UAE" },
    draft: true,
  },
  {
    slug: "mbz-ai-server-room-abu-dhabi",
    name: "MBZ-AI Server Room",
    category: "Data Center",
    systemSummary: "Precision cooling for AI server infrastructure",
    location: { area: "Masdar City", emirate: "Abu Dhabi", label: "Masdar City, Abu Dhabi" },
    draft: true,
  },
  {
    slug: "pure-gym-al-barsha",
    name: "Pure Gym",
    category: "Commercial",
    systemSummary: "HVAC installation and ventilation system",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Al Barsha, Dubai" },
    draft: true,
  },
  {
    slug: "ave-restaurant-business-bay",
    name: "AVE Restaurant",
    category: "Commercial",
    systemSummary: "Kitchen ventilation and dining area cooling",
    location: { area: "Business Bay", emirate: "Dubai", label: "Business Bay, Dubai" },
    draft: true,
  },
  {
    slug: "zain-solution-data-center-abu-dhabi",
    name: "Zain Solution Data Center",
    category: "Data Center",
    systemSummary: "Precision cooling and ventilation",
    location: { area: "Musaffah", emirate: "Abu Dhabi", label: "Musaffah, Abu Dhabi" },
    draft: true,
  },
  {
    slug: "cultural-center-al-barsha",
    name: "Cultural Center",
    category: "Commercial",
    systemSummary: "HVAC works for public cultural facility",
    location: { area: "Al Barsha", emirate: "Dubai", label: "Al Barsha, Dubai" },
    draft: true,
  },
];

export const publishedProjects = projects.filter((p) => !p.draft);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
