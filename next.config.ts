import type { NextConfig } from "next";
import { isPublished } from "./src/data/new-pages";

const nextConfig: NextConfig = {
  // 404 page for URLs that match no route: needed because there are two root layouts (English and
  // Arabic), so app/global-not-found.tsx renders its own document.
  experimental: { globalNotFound: true },
  skipTrailingSlashRedirect: true,
  // Serve AVIF where the browser supports it (WebP otherwise).
  // 75 is the default; 60 is used by the homepage hero, which sits under a dark gradient.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    // Default is [640, 750, 828, 1080, 1200, 1920, 2048, 3840]. 1280 and 1440 added so a 1280-1440 px
    // wide viewport gets a ~1440 px file instead of 1920; 2048 and 3840 dropped (sources are under 2000 px).
    deviceSizes: [640, 750, 828, 1080, 1280, 1440, 1920],
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
    const acCleaning = [
      { source: "/services/ac-cleaning/premium-duct", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/full-ac", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/split-ac", destination: "/ac-duct-cleaning-dubai", permanent: true },
      { source: "/services/ac-cleaning/coil-cleaning", destination: "/ac-duct-cleaning-dubai", permanent: true },
    ];

    // Keyword-cannibalisation merges: one page per search intent. Each retired
    // URL redirects straight to its single target. statusCode 301 (a literal
    // 301, not Next's 308 `permanent`) and an explicit trailing-slash variant
    // so each URL is a single hop. Query strings are preserved by Next.
    const merges = [
      // Cluster A — commercial maintenance folds into AMC
      ["/services/maintenance", "/ac-amc-dubai"],
      // Cluster B — testing/commissioning/balancing → single TAB target
      ["/services/testing-commissioning", "/services/tab-testing-adjusting-balancing-dubai"],
      // Once the dedicated air balancing page is published the old URL goes straight to it (one hop); until then to the TAB page.
      ["/air-balancing-airflow-testing-dubai", isPublished("airBalancing") ? "/air-balancing-dubai" : "/services/tab-testing-adjusting-balancing-dubai"],
      ["/ar/air-balancing-airflow-testing-dubai", "/ar/services/tab-testing-adjusting-balancing-dubai"],
      // Cluster C — chiller systems folds into chiller installation & maintenance
      ["/services/chillers", "/services/chiller-maintenance-dubai"],
      // /book was a duplicate of the /quote form; it now redirects there
      ["/book", "/quote"],
      // Cluster D — brand pages fold into the smart-thermostat hub, landing on
      // the matching brand section (#google-nest / #ecobee)
      ["/google-nest-thermostat-installation-dubai", "/smart-thermostat-installation-dubai#google-nest"],
      ["/ecobee-thermostat-installation-dubai", "/smart-thermostat-installation-dubai#ecobee"],
    ].flatMap(([source, destination]) => [
      { source, destination, statusCode: 301 as const },
      { source: `${source}/`, destination, statusCode: 301 as const },
    ]);

    // Short legal aliases → the canonical page names (EN + AR). /terms and
    // /privacy-policy are the real routes; these catch the common short forms.
    const legal = [
      ["/privacy", "/privacy-policy"],
      ["/ar/privacy", "/ar/privacy-policy"],
    ].flatMap(([source, destination]) => [
      { source, destination, statusCode: 301 as const },
      { source: `${source}/`, destination, statusCode: 301 as const },
    ]);

    // The two old sample PDFs (illustrative values) are replaced by one real, redacted AGEC sample report.
    const samplePdfs = ["/sample-tab-report.pdf", "/sample-air-balancing-report.pdf"].map((source) => ({
      source,
      destination: "/downloads/agec-sample-tab-report-fcu-air-balance.pdf",
      statusCode: 301 as const,
    }));

    return [...acCleaning, ...merges, ...legal, ...samplePdfs];
  },
};

export default nextConfig;
