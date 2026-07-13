import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agec.ae";

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/smart-thermostat-installation-dubai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/vrf-vrv-systems`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/chillers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/dx-units`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ventilation-fresh-air`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/hvac-design`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/testing-commissioning`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/maintenance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ac-cleaning/premium-duct`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ac-cleaning/full-ac`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ac-cleaning/split-ac`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/ac-cleaning/coil-cleaning`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts,
    { url: `${base}/quote`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/book`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
