import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { RootDocument } from "@/components/RootDocument";
import { NotFoundContent } from "@/components/NotFoundContent";
import { inter, saira } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = { title: "404: This page could not be found." };

// 404 for URLs that match no route at all. With two root layouts there is no single layout to
// build this from, so it renders its own document (English chrome). See next.config.ts (globalNotFound).
export default function GlobalNotFound() {
  return (
    <RootDocument lang="en" dir="ltr" fontClassName={`${inter.variable} ${saira.variable}`}>
      <SiteFrame>
        <NotFoundContent />
      </SiteFrame>
    </RootDocument>
  );
}
