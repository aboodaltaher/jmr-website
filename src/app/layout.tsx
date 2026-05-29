import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://agec.ae"),
  title: "AGEC — HVAC, MEP & Maintenance Contracting | Dubai, UAE",
  description:
    "AGEC (Altaher Ghabboun Engineering Contracting) designs, installs, and maintains HVAC and MEP systems across the UAE. VRF, chillers, ventilation, AMC. Dubai-based. Engineered to perform.",
  openGraph: {
    title: "AGEC — Engineered to Perform",
    description: "HVAC · MEP · Maintenance contracting across the UAE.",
    url: "https://agec.ae",
    siteName: "AGEC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGEC — Engineered to Perform",
    description: "HVAC · MEP · Maintenance contracting across the UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${saira.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
