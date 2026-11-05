import type { MetadataRoute } from "next";

// Allow all public pages. Keep API routes out of crawling, but NOT /_next/ —
// Google needs the static JS/CSS there to render pages. Noindex utility pages
// (/review, /quote/thank-you) use a robots meta tag rather than a Disallow, so
// their noindex can actually be read.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://agec.ae/sitemap.xml",
    host: "https://agec.ae",
  };
}
