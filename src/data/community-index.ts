// Tiny index of the local "AC maintenance in {community}" pages. Kept separate
// from the long page copy (./communities.ts) so the footer and the WhatsApp bar
// — which ship in the client bundle — never pull in the page content.
//
// `published` is the ONE switch per page:
//   false → the page exists (reachable by URL for review) but is noindex, left
//           out of the sitemap, and not linked from the footer or
//           /ac-maintenance-dubai.
//   true  → indexable, in the sitemap and linked.
// Flip it to true only after every "[TO CONFIRM: …]" marker in that page's copy
// in ./communities.ts has been resolved.

export interface CommunityIndexEntry {
  slug: string;
  name: string;
  published: boolean;
}

export const COMMUNITY_INDEX: CommunityIndexEntry[] = [
  { slug: "al-barsha", name: "Al Barsha", published: false },
  { slug: "business-bay", name: "Business Bay", published: false },
  { slug: "dubai-marina", name: "Dubai Marina", published: false },
  { slug: "arabian-ranches", name: "Arabian Ranches", published: false },
];

export const communityPath = (slug: string): string => `/ac-maintenance/${slug}`;

/** Pages that are live: linked from the footer and /ac-maintenance-dubai, and in the sitemap. */
export function publishedCommunities(): CommunityIndexEntry[] {
  return COMMUNITY_INDEX.filter((c) => c.published);
}

/** Display name for a community path like /ac-maintenance/al-barsha, if it is one. */
export function communityNameForPath(pathname: string): string | undefined {
  const m = pathname.match(/^\/ac-maintenance\/([a-z-]+)\/?$/);
  return m ? COMMUNITY_INDEX.find((c) => c.slug === m[1])?.name : undefined;
}
