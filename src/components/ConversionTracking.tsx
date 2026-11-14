"use client";

import { useEffect } from "react";
import { CONVERSIONS, trackConversion, pushDataLayer, trackContactClick } from "@/lib/gtag";

/**
 * Global click listener for WhatsApp, phone-call and email links anywhere on the site.
 *  - Google Ads conversions for call and WhatsApp clicks fire exactly as before.
 *  - GA4 / dataLayer lead events click_call and click_whatsapp carry
 *    { page_path, service, form_location } (see trackContactClick in lib/gtag.ts).
 * form_location comes from the nearest [data-track-location] ancestor (sticky_bar,
 * floating_button, mid_page, ...), else header / footer, else "page".
 */
function locationOf(link: HTMLElement): string {
  const tagged = link.closest("[data-track-location]");
  if (tagged) return tagged.getAttribute("data-track-location") || "page";
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "page";
}

export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = (link.getAttribute("href") || "").toLowerCase();

      if (href.startsWith("tel:")) {
        trackConversion(CONVERSIONS.call);
        trackContactClick("call", locationOf(link));
      } else if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
        trackConversion(CONVERSIONS.whatsapp);
        trackContactClick("whatsapp", locationOf(link));
      } else if (href.startsWith("mailto:")) {
        pushDataLayer("click_email", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
