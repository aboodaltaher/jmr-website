"use client";

import { useEffect } from "react";
import { pushDataLayer, trackContactClick } from "@/lib/gtag";

/** Longest a tel: click waits for the Ads hit before opening the dialler. */
const TEL_MAX_WAIT_MS = 600;

/**
 * Global click listener for WhatsApp, phone-call and email links anywhere on the site (every
 * tel: and wa.me link is a plain <a>, so nothing bypasses it).
 *  - Call: Google Ads "Call button clicks – website" + GA4 click_call / phone_click.
 *  - WhatsApp: Google Ads "WhatsApp Click" (label unchanged) + GA4 click_whatsapp / whatsapp_click.
 *  Events carry { page_path, service, form_location } (see trackContactClick in lib/gtag.ts).
 *
 * Why a tel: click waits for the hit: tapping tel: on a phone hands over to the dialler at once
 * and the browser suspends the page, so a conversion queued in that instant is usually never
 * sent. (WhatsApp opens a new tab, the page stays alive, and that conversion does record.) So the
 * dialler is opened only after gtag confirms the hit (event_callback), or after TEL_MAX_WAIT_MS
 * at most, so a blocked or slow tag can never stop the call. This is the pattern Google gives for
 * website call conversions.
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
        if (e.defaultPrevented) return;
        e.preventDefault();
        let dialled = false;
        const dial = () => {
          if (dialled) return;
          dialled = true;
          window.location.href = link.href;
        };
        trackContactClick("call", locationOf(link), dial);
        window.setTimeout(dial, TEL_MAX_WAIT_MS);
      } else if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
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
