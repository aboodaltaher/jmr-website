import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyContactBar } from "@/components/StickyContactBar";

/**
 * The English site chrome (header, footer, floating buttons) around every English page.
 * The Arabic `/ar` pages use their own root layout (app/(ar)/layout.tsx) and supply
 * their own RTL chrome via app/(ar)/ar/layout.tsx.
 */
export function SiteFrame({ children }: { children: React.ReactNode }) {
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
