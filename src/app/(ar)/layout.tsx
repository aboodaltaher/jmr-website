import { RootDocument } from "@/components/RootDocument";
import { inter, saira, cairo } from "@/lib/fonts";
import { rootMetadata } from "@/lib/root-metadata";
import "../globals.css";

export const metadata = rootMetadata;

// Root layout for the Arabic pages (/ar/...): <html lang="ar" dir="rtl"> is in the
// server-rendered HTML. The Arabic header/footer come from app/(ar)/ar/layout.tsx.
export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument
      lang="ar"
      dir="rtl"
      fontClassName={`${inter.variable} ${saira.variable} ${cairo.variable}`}
    >
      {children}
    </RootDocument>
  );
}
