// Publish switches for the new long-form service pages.
//
//   false → the page exists (reachable by URL for review) but is noindex, left out
//           of the sitemap and the mega-menu, not linked from anywhere, and has no
//           hreflang pairing.
//   true  → indexable, in the sitemap, in the menu / /services / related-page links,
//           and paired with its Arabic twin via hreflang.
//
// Flip a switch to true ONLY after every "[TO CONFIRM: …]" marker in that page's copy
// (src/data/long-services.ts and long-services-ar.ts) is resolved — `npm run to-confirm`
// lists what is still open. The Arabic twin follows its English page's switch.
//
// Ducting and kitchen exhaust cleaning are published; MEP stays off until the owner has reviewed it
// on the preview URL. Kitchen exhaust cleaning is published (English only; there is no Arabic twin). It has
// no open markers: the Dubai Municipality approval and the other service facts were
// confirmed by the owner. See the "do not add" note above KITCHEN_EXHAUST in long-services.ts.

export const NEW_PAGES = {
  ducting: { published: true },
  mep: { published: false },
  kitchenExhaust: { published: true },
} as const;

export type NewPageKey = keyof typeof NEW_PAGES;

export const isPublished = (key: NewPageKey): boolean => NEW_PAGES[key].published;
