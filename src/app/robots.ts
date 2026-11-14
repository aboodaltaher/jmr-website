import type { MetadataRoute } from "next";

// Allow all public pages. Keep API routes out of crawling, but NOT /_next/ —
// Google needs the static JS/CSS there to render pages. The noindex utility
// page (/quote/thank-you) uses a robots meta tag rather than a Disallow, so
// its noindex can actually be read; /review is a 302 with X-Robots-Tag.
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
