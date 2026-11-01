"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyContactBar } from "@/components/StickyContactBar";

/**
 * Renders the English site chrome (header, footer, floating buttons) around
 * every page except the Arabic `/ar` subtree, which supplies its own RTL
 * chrome via app/ar/layout.tsx.
 */
export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  if (isArabic) {
    // The /ar layout (ArabicChrome) provides its own <main> and chrome.
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyContactBar />
    </>
  );
}
