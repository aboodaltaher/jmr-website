import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agec.ae";
  const now = new Date();

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date || now),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/smart-thermostat-installation-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ac-maintenance-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ac-repair-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ac-amc-dubai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ac-duct-cleaning-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/air-balancing-airflow-testing-dubai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/vrf-vrv-systems`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/chillers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/dx-units`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ventilation-fresh-air`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/hvac-design`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/testing-commissioning`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/maintenance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/quote`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
    // Arabic (/ar) subtree
    { url: `${base}/ar`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ar/ac-maintenance-dubai`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ar/ac-repair-dubai`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ar/ac-duct-cleaning-dubai`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ar/ac-amc-dubai`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticEntries.map((entry) => ({
    ...entry,
    lastModified: now,
  }));

  return [...staticPages, ...blogPosts];
}
