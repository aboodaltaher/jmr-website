import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { publishedProjects } from "@/data/projects";
import { staticRoutes } from "@/lib/routes";
import { LOCALE_PAIRS } from "@/lib/nav";
import { publishedCommunities, communityPath } from "@/data/community-index";
import { getCommunity } from "@/data/communities";

const BASE = "https://agec.ae";

const abs = (path: string) => (path === "/" ? BASE : `${BASE}${path}`);

// Reciprocal hreflang alternates for a bilingual path, or undefined for a page
// that exists in English only. Mirrors the <head> tags exactly: en-AE, ar-AE
// and x-default (English). Kept in sync with buildMetadata() in @/lib/metadata.
function alternatesFor(path: string) {
  const pair = LOCALE_PAIRS.find((p) => p.en === path || p.ar === path);
  if (!pair) return undefined;
  return {
    languages: {
      "en-AE": abs(pair.en),
      "ar-AE": abs(pair.ar),
      "x-default": abs(pair.en),
    },
  };
}

// English content-change date for an Arabic page is taken from its English twin
// (the Arabic page is a translation and tracks the English content).
const enUpdatedAt = (enPath: string) =>
  staticRoutes.find((r) => r.path === enPath)?.updatedAt;

export default function sitemap(): MetadataRoute.Sitemap {
  const fallback = new Date();

  // Static English pages, from the single route list. changefreq/priority are
  // intentionally omitted (Google ignores them). lastModified is each page's
  // real content-change date.
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: abs(r.path),
    lastModified: r.updatedAt,
    alternates: alternatesFor(r.path),
  }));

  // Arabic pages — one per locale pair, dated from their English twin.
  const arabicPages: MetadataRoute.Sitemap = LOCALE_PAIRS.map((pair) => ({
    url: abs(pair.ar),
    lastModified: enUpdatedAt(pair.en) ?? fallback,
    alternates: alternatesFor(pair.ar),
  }));

  // Case studies (non-draft only) — dated from each project's updatedAt.
  const caseStudies: MetadataRoute.Sitemap = publishedProjects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  // Blog posts — dated from frontmatter (updated, else published date).
  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updated || post.date || fallback,
  }));

  // Local community pages — only once published (see src/data/community-index.ts).
  const communityPages: MetadataRoute.Sitemap = publishedCommunities().map((c) => ({
    url: `${BASE}${communityPath(c.slug)}`,
    lastModified: getCommunity(c.slug)?.updatedAt ?? fallback,
  }));

  return [...staticPages, ...arabicPages, ...communityPages, ...caseStudies, ...blogPosts];
}
