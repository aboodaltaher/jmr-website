"use client";

import { useEffect } from "react";
import { GA4_ID } from "@/lib/gtag";

/**
 * Loads gtag.js ONCE, after the page has hydrated (the same moment next/script's
 * strategy="afterInteractive" uses). The tag is loaded with the GA4 ID (G-…); Google Ads (AW-…) and
 * GA4 are both configured with gtag('config') by the inline snippet in the root layout.
 *
 * Why not <Script strategy="afterInteractive">? next/script also adds a
 * <link rel="preload" as="script"> for it in <head>, so the browser starts downloading gtag.js
 * (~130 KB) at the very start of the page load, in competition with the hero image. Injecting it
 * from here removes that early download without delaying the tag past hydration.
 *
 * Nothing is lost by the tag arriving later: the inline snippet creates window.dataLayer and
 * window.gtag immediately, so every config call and event is queued and replayed when gtag.js loads.
 */
export function GoogleTag() {
  useEffect(() => {
    if (document.getElementById("gtag-js")) return;
    const s = document.createElement("script");
    s.id = "gtag-js";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(s);
  }, []);
  return null;
}
