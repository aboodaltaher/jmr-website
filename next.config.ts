import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    // Security / best-practices hardening, applied to every response.
    const securityHeaders = [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
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
