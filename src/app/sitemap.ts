import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { publishedProjects } from "@/data/projects";
import { staticRoutes } from "@/lib/routes";
import { LOCALE_PAIRS } from "@/lib/nav";

const BASE = "https://agec.ae";

// Reciprocal hreflang alternates for a bilingual path (en-AE + ar-AE), or
// undefined for a page that exists in English only.
function alternatesFor(path: string) {
  const pair = LOCALE_PAIRS.find((p) => p.en === path || p.ar === path);
  if (!pair) return undefined;
  return {
    languages: {
      "en-AE": `${BASE}${pair.en === "/" ? "" : pair.en}` || BASE,
      "ar-AE": `${BASE}${pair.ar}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static English pages, from the single route list.
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: r.path === "/" ? BASE : `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: alternatesFor(r.path),
  }));

  // Arabic pages — one per locale pair. Priority mirrors the English route.
  const arabicPages: MetadataRoute.Sitemap = LOCALE_PAIRS.map((pair) => {
    const en = staticRoutes.find((r) => r.path === pair.en);
    return {
      url: `${BASE}${pair.ar}`,
      lastModified: now,
      changeFrequency: en?.changeFrequency ?? "monthly",
      priority: en ? Math.max(0.6, en.priority - 0.2) : 0.6,
      alternates: alternatesFor(pair.ar),
    };
  });

  // Dynamic pages — case studies (non-draft only) and blog posts.
  const caseStudies: MetadataRoute.Sitemap = publishedProjects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date || now),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...arabicPages, ...caseStudies, ...blogPosts];
}
