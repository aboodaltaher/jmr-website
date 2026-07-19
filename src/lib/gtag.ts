// Google Ads (gtag.js) configuration + conversion helpers.

export const GA_ADS_ID = "AW-18332305339";

/**
 * Google Ads conversion "send_to" values.
 *
 * Replace the part AFTER the slash with the conversion label from
 * Google Ads → Goals → Conversions → (your action) → Tag setup → "Use gtag.js".
 * Each full value looks like:  AW-18332305339/AbC-D_efGhIjk
 *
 * Until a real label is filled in, trackConversion() is a safe no-op,
 * so nothing bogus is sent to Google.
 */
export const CONVERSIONS = {
  whatsapp: "AW-18332305339/Ta8NCPesz9IcELuPw6VE",
  call: "AW-18332305339/jMslCPeI_dIcELuPw6VE",
  form: "AW-18332305339/REPLACE_FORM_LABEL",
} as const;

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Fire a Google Ads conversion event.
 * No-ops on the server, when gtag isn't loaded, or when the label is still a placeholder.
 */
export function trackConversion(
  sendTo: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (sendTo.includes("REPLACE_")) return; // label not configured yet
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: sendTo, ...params });
}
