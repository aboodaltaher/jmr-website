import { NextResponse } from "next/server";
import { business } from "@/data/business";

// Short, printable review link: https://agec.ae/review -> our Google review
// page (business.links.reviewLeave, set in src/data/business.ts).
//
// - 302 (temporary) so the destination can change without a cached redirect.
// - X-Robots-Tag: noindex keeps the shortcut out of search results.
// - Deliberately not in the sitemap and not disallowed in robots.txt.
export function GET() {
  return NextResponse.redirect(business.links.reviewLeave, {
    status: 302,
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
}
