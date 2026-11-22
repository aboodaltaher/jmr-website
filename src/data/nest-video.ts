// The owner's YouTube Short for the smart-thermostat pages (EN and AR).

export const NEST_VIDEO = {
  id: "h8dLKaujA9w",
  title: "Google Nest Thermostat Installation in Dubai – Stop Cooling an Empty Home",
  uploadDate: "2026-11-22",
} as const;

/** VideoObject JSON-LD for the Short. `description` is a one-sentence summary taken from the page. */
export const nestVideoSchema = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: NEST_VIDEO.title,
  description,
  thumbnailUrl: `https://i.ytimg.com/vi/${NEST_VIDEO.id}/hqdefault.jpg`,
  uploadDate: NEST_VIDEO.uploadDate,
  embedUrl: `https://www.youtube.com/embed/${NEST_VIDEO.id}`,
  contentUrl: `https://youtube.com/shorts/${NEST_VIDEO.id}`,
});
