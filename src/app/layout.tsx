import type { Metadata } from "next";
import { Inter, Saira_Condensed, Cairo } from "next/font/google";
import { SiteFrame } from "@/components/SiteFrame";
import { SiteSchema } from "@/components/SiteSchema";
import { Analytics, GtmNoScript } from "@/components/Analytics";
import { ConversionTracking } from "@/components/ConversionTracking";
import { GoogleTag } from "@/components/GoogleTag";
import { GA_ADS_ID, GA4_ID } from "@/lib/gtag";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Body font. Not preloaded: the preload (48 KB) competes with the hero image.
  // It still loads from CSS right away and swaps in (font-display: swap).
  preload: false,
});

const saira = Saira_Condensed({
  variable: "--font-saira",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  // Only the /ar subtree uses this font. Don't preload it on every (English)
  // page — it still loads via CSS when the Arabic chrome renders.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "AGEC — HVAC Contracting & Maintenance | Dubai, UAE",
  description:
    `AGEC (${business.alternateName}) designs, installs, and maintains air conditioning, ventilation and air filtration systems across the UAE. VRF, chillers, ventilation, AMC. Dubai-based. Engineered to perform.`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${saira.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased pb-16 md:pb-0">
        <GtmNoScript />
        <SiteSchema />
        {/* Google tag: gtag.js is loaded ONCE (with the GA4 ID) and both Google Ads (AW-) and GA4 (G-) are configured from it. This inline snippet
            runs immediately and only creates the queue and the config calls; the library itself is
            loaded after hydration by <GoogleTag /> (see that file for why). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');
gtag('config', '${GA_ADS_ID}');`,
          }}
        />
        <GoogleTag />
        <Analytics />
        <SiteFrame>{children}</SiteFrame>
        <ConversionTracking />
      </body>
    </html>
  );
}
