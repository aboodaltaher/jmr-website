import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    // Folded the four AC-cleaning sub-pages into the single /ac-duct-cleaning-dubai
    // landing page (audit #5). Permanent redirects consolidate their SEO signal.
    return [
      { source: "/services/ac-cleaning/premium-duct", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/full-ac", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/split-ac", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/coil-cleaning", destination: "/ac-duct-cleaning-dubai", permanent: true },
    ];
  },
};

export default nextConfig;
