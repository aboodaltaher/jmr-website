// Central contact details and page-specific WhatsApp prefilled messages.
// Canonical company facts live in ./company; phone is re-exported here so
// existing `@/lib/contact` imports keep working.

import { WHATSAPP } from "./company";
import { WA_DEFAULTS, WA_PAGES_AR, WA_PAGES_EN, WA_TEMPLATE } from "@/data/whatsapp-pages";
import { communityNameForPath } from "@/data/community-index";

export { PHONE, PHONE_DISPLAY } from "./company";

const WA_NUMBER = WHATSAPP;

// WhatsApp pre-fill, generated per page from src/data/whatsapp-pages.ts:
//   "Hi AGEC, I'm on your {page name} page — I need help with my {property type} in {area}."
// (Arabic pages get the Arabic version.) Pages with no entry fall back to a name made from the
// URL, and the default property type and area.

function normalise(pathname: string): string {
  const clean = (pathname.split(/[?#]/)[0] || "/").replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

// Fallback page name from the URL slug (blog posts, project case studies): "vrf-vs-chiller-dubai-villas"
// becomes "VRF vs chiller Dubai villas".
const ACRONYMS: Record<string, string> = { vrf: "VRF", vrv: "VRV", ac: "AC", amc: "AMC", dx: "DX", hvac: "HVAC", uae: "UAE", dewa: "DEWA", dubai: "Dubai", sharjah: "Sharjah", ajman: "Ajman" };
const humanise = (slug: string) =>
  slug.split("-").map((w) => ACRONYMS[w] ?? w).join(" ").trim();

/** Page facts (name, property, area) for a path — also used as the `service` on tracking events. */
export function waPageFor(pathname: string): { lang: "en" | "ar"; name: string; property: string; area: string } {
  const path = normalise(pathname);
  const lang = path === "/ar" || path.startsWith("/ar/") ? "ar" : "en";
  const defaults = WA_DEFAULTS[lang];
  const known = (lang === "ar" ? WA_PAGES_AR : WA_PAGES_EN)[path];

  const community = lang === "en" ? communityNameForPath(path) : undefined;
  if (community) {
    return { lang, name: `AC maintenance in ${community}`, property: "home", area: community };
  }
  const name = known?.name ?? humanise(path.split("/").filter(Boolean).pop() ?? "home");
  return {
    lang,
    name,
    property: known?.property ? (lang === "en" ? known.property : defaults.property) : defaults.property,
    area: known?.area ?? defaults.area,
  };
}

export function whatsappMessageFor(pathname: string): string {
  const p = waPageFor(pathname);
  return WA_TEMPLATE[p.lang](p.name, p.property, p.area);
}

export function whatsappUrl(pathname: string): string {
  // encodeURIComponent leaves ' unescaped; encode it too so the link survives every client.
  const text = encodeURIComponent(whatsappMessageFor(pathname)).replace(/'/g, "%27");
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
