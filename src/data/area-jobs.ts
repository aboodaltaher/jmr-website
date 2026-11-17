// One "Recent job in [area]" per area page (/ac-maintenance/[slug]), shown by
// src/components/RecentJob.tsx. Real jobs only: never invent a job, a photo or a review.
//
// HOW TO FILL IN: replace `undefined` for an area with an object like the example below, then add
// the photo files to public/projects/. The section renders ONLY when the entry has a title,
// system type, units, work done and date. Photos without alt text are skipped (2 to 3 photos is
// the target). The review is shown only when it has a name, a 1-5 rating and text.
//
//   "mira-oasis": {
//     title: "Ducted AC installation, 4-bedroom townhouse",   // what the job was
//     systemType: "Ducted split",                              // split, cassette, ducted, VRF...
//     units: "2 ducted units",                                 // how many machines
//     workDone: "Supplied and installed two ducted units with insulated ducts and new grilles.",
//     date: "2026-10-12",                                      // YYYY-MM-DD, the job date
//     photos: [
//       { src: "/projects/your-photo.jpg", alt: "What the photo shows, in the area", width: 1600, height: 1200 },
//     ],
//     review: { name: "Customer name as on Google", rating: 5, text: "Their words, copied exactly." },
//   },

export interface AreaJobPhoto {
  /** Path under /public, e.g. "/projects/mira-oasis-job.jpg". */
  src: string;
  /** Descriptive alt text: what is in the photo and where. */
  alt: string;
  width: number;
  height: number;
}

export interface AreaJobReview {
  name: string;
  /** 1 to 5. */
  rating: number;
  text: string;
}

export interface AreaJob {
  title: string;
  systemType: string;
  units: string;
  workDone: string;
  /** YYYY-MM-DD. */
  date: string;
  photos: AreaJobPhoto[];
  review?: AreaJobReview;
}

export const AREA_JOBS: Record<string, AreaJob | undefined> = {
  // TODO(owner): Mira Oasis, ducted AC installation: add a real recent job.
  "mira-oasis": undefined,
  // TODO(owner): Dubai Hills, AC installation / machine replacement: add a real recent job.
  "dubai-hills": undefined,
  // TODO(owner): Al Wasl, maintenance contract (AMC) or drain correction: add a real recent job.
  "al-wasl": undefined,
  // TODO(owner): Sustainable City, leak repair or compressor replacement: add a real recent job.
  "sustainable-city": undefined,
};
