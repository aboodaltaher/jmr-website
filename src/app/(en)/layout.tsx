import { SiteFrame } from "@/components/SiteFrame";
import { RootDocument } from "@/components/RootDocument";
import { inter, saira } from "@/lib/fonts";
import { rootMetadata } from "@/lib/root-metadata";
import "../globals.css";

export const metadata = rootMetadata;

// Root layout for every English page. The Arabic pages (/ar/...) have their own root
// layout in app/(ar)/layout.tsx so they ship <html lang="ar" dir="rtl">.
export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument lang="en" dir="ltr" fontClassName={`${inter.variable} ${saira.variable}`}>
      <SiteFrame>{children}</SiteFrame>
    </RootDocument>
  );
}
