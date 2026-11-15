import type { Metadata } from "next";
import { business } from "@/data/business";

// Site-wide default metadata, used by both root layouts (English and Arabic).
// Every page overrides title/description/alternates via buildMetadata().
export const rootMetadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "AGEC — HVAC Contracting & Maintenance | Dubai, UAE",
  description:
    `AGEC designs, installs, and maintains air conditioning, ventilation and air filtration systems across the UAE. VRF, chillers, ventilation, AMC. Dubai-based. Engineered to perform.`,
  openGraph: {
    title: "AGEC — HVAC Contracting & Maintenance | Dubai, UAE",
    description:
      "Engineer-led HVAC design, installation, AC maintenance and AMC across Dubai and the UAE.",
    url: "https://agec.ae",
    siteName: "AGEC",
    locale: "en_AE",
    type: "website",
    images: ["/og-image.png"],
  },
  // No title/description here, so each page's own title/description flow into
  // the Twitter card. Pages don't override `twitter`, so this image applies
  // site-wide. Per-page og:image is set on each page's own openGraph.
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};
