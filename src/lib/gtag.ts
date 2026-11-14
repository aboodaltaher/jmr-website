// Google Ads (gtag.js) configuration + conversion helpers.
import { waPageFor } from "@/lib/contact";

export const GA_ADS_ID = "AW-18332305339";

// Google Analytics 4 measurement ID. Shares the single gtag.js instance that
// the Ads tag already loads (configured alongside GA_ADS_ID in the root layout).
export const GA4_ID = "G-H7HNVQGSYM";

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

/**
 * Push a custom event to the GTM / GA4 dataLayer.
 * No-ops on the server; safe when no tag manager is loaded.
 */
export function pushDataLayer(
  event: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/**
 * Send a GA4 event via the shared gtag.js instance (GA4_ID is configured in the
 * root layout). No-ops on the server or when gtag isn't loaded. Pass only
 * non-personal parameters — never names, phone numbers or email addresses.
 */
export function gaEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export type FormName =
  | "quote"
  | "repair"
  | "amc"
  | "balancing"
  | "contact"
  | "thermostat";

/**
 * Lead events, in GA4 / dataLayer. Mark these as KEY EVENTS in GA4 (see docs/tracking.md):
 *   click_whatsapp, click_call, form_submit_quote, form_submit_contact, form_submit_amc,
 *   form_submit_inline.
 * Every one carries { page_path, service, form_location }. No personal data is ever sent.
 *
 * The older events (call_click, whatsapp_click, form_submit with form_name) keep firing in
 * parallel until OLD_EVENTS_RETIRE_ON, so existing GA4 reports keep working while the new
 * names build history. Retire them then by deleting the lines marked LEGACY.
 */
export const OLD_EVENTS_RETIRE_ON = "2027-01-15";

export type FormKind = "quote" | "contact" | "amc" | "inline";

export interface LeadParams {
  page_path: string;
  service: string;
  form_location: string;
}

/** Common parameters: current path, the page's service name, and where on the page it happened. */
export function leadParams(formLocation: string): LeadParams {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  return { page_path: path, service: waPageFor(path).name, form_location: formLocation };
}

/** Send one lead event to both GA4 (gtag) and the dataLayer (GTM), if present. */
function fireLeadEvent(name: string, params: LeadParams): void {
  pushDataLayer(name, { ...params });
  gaEvent(name, { ...params });
}

/**
 * Fire a click on a WhatsApp or call link. Ads conversions for these clicks are fired by the
 * caller (ConversionTracking) exactly as before.
 */
export function trackContactClick(kind: "whatsapp" | "call", formLocation: string): void {
  const params = leadParams(formLocation);
  fireLeadEvent(kind === "whatsapp" ? "click_whatsapp" : "click_call", params);
  // LEGACY (retire on OLD_EVENTS_RETIRE_ON): the GA4 names used before this release.
  gaEvent(kind === "whatsapp" ? "whatsapp_click" : "call_click", { page_path: params.page_path });
}

/**
 * Fire a successful form submission (the "thank-you" moment): the Google Ads form conversion
 * (unchanged) plus the lead event for this form. Call only after the server action reports
 * success.
 *   kind          which GA4 event: quote | contact | amc | inline
 *   formLocation  where the form sits: hero, mid_page, inline, quote_page, contact_page, ...
 */
export function trackFormSubmit(
  formName: FormName,
  kind: FormKind = "quote",
  formLocation: string = "page",
): void {
  trackConversion(CONVERSIONS.form);
  const params = leadParams(formLocation);
  fireLeadEvent(`form_submit_${kind}`, params);
  // LEGACY (retire on OLD_EVENTS_RETIRE_ON): the generic form_submit event with form_name.
  pushDataLayer("form_submit", { form_name: formName, page_path: params.page_path });
  gaEvent("form_submit", { form_name: formName, page_path: params.page_path });
}
