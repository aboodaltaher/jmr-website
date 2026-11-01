import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Saira_Condensed, Cairo } from "next/font/google";
import { SiteFrame } from "@/components/SiteFrame";
import { SiteSchema } from "@/components/SiteSchema";
import { Analytics, GtmNoScript } from "@/components/Analytics";
import { ConversionTracking } from "@/components/ConversionTracking";
import { GA_ADS_ID } from "@/lib/gtag";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const saira = Saira_Condensed({
  variable: "--font-saira",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agec.ae"),
  title: "AGEC — HVAC, MEP & Maintenance Contracting | Dubai, UAE",
  description:
    "AGEC (Altaher Ghabboun Engineering Contracting) designs, installs, and maintains HVAC and MEP systems across the UAE. VRF, chillers, ventilation, AMC. Dubai-based. Engineered to perform.",
  openGraph: {
    title: "AGEC — HVAC, MEP & Maintenance Contracting | Dubai, UAE",
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
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ADS_ID}');`}
        </Script>
        <Analytics />
        <SiteFrame>{children}</SiteFrame>
        <ConversionTracking />
      </body>
    </html>
  );
}
