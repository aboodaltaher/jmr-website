"use client";

import { useEffect } from "react";
import { CONVERSIONS, trackConversion, pushDataLayer } from "@/lib/gtag";

/**
 * Global click listener that fires Google Ads conversions for
 * WhatsApp and phone-call link clicks anywhere on the site
 * (hero CTAs, floating WhatsApp button, footer, etc.) without
 * needing an onClick on every individual link.
 */
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = (link.getAttribute("href") || "").toLowerCase();

      if (href.startsWith("tel:")) {
        trackConversion(CONVERSIONS.call);
        pushDataLayer("click_call", { page_path: window.location.pathname });
      } else if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
        trackConversion(CONVERSIONS.whatsapp);
        pushDataLayer("click_whatsapp", {
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        pushDataLayer("click_email", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
