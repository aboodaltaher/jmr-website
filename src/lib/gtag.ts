// Google Ads + GA4 (gtag.js) configuration and the lead-tracking helpers.
// One gtag.js instance serves both IDs: the inline snippet in src/components/RootDocument.tsx
// queues gtag('config') for GA4_ID and GA_ADS_ID, and src/components/GoogleTag.tsx loads
// gtag.js once. Nothing here loads a second tag. See docs/tracking.md.
import { waPageFor } from "@/lib/contact";
import { normaliseEmail, normalisePhone } from "@/lib/user-data";

/** Env value if set and non-empty, else the fallback (public IDs, safe to ship as defaults). */
const envOr = (value: string | undefined, fallback: string): string => (value && value.trim()) || fallback;

// Each process.env.NEXT_PUBLIC_* is written out literally so Next inlines it at build time.
/** Google Ads account tag (account 751-132-8839, currency AED). */
export const GA_ADS_ID = envOr(process.env.NEXT_PUBLIC_GADS_ID, "AW-18332305339");

// Google Analytics 4 measurement ID. gtag.js is loaded once with this ID (GoogleTag.tsx).
export const GA4_ID = "G-H7HNVQGSYM";

/**
 * Google Ads conversion "send_to" values (Google Ads → Goals → Conversions → action → Tag setup).
 *   quote     "Quote Form Submit" (count: one) — fired after every successful lead-form submit
 *   call      "Call button clicks – website" — fired on every tel: click
 *   whatsapp  "WhatsApp Click" — recording in Google Ads; label intentionally unchanged
 */
export const CONVERSIONS = {
  quote: envOr(process.env.NEXT_PUBLIC_GADS_QUOTE_CONVERSION, "AW-18332305339/T_88CIvtt7sdELuPw6VE"),
  call: envOr(process.env.NEXT_PUBLIC_GADS_CALL_CONVERSION, "AW-18332305339/jMslCPeI_dIcELuPw6VE"),
  whatsapp: "AW-18332305339/Ta8NCPesz9IcELuPw6VE",
} as const;

/** Value sent with each lead conversion (Google Ads currency is AED). */
export const LEAD_VALUE = { value: 1.0, currency: "AED" } as const;

/**
 * Enhanced conversions for leads: OFF unless NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS=true.
 * When on, the visitor's email/phone from the form are passed to gtag('set','user_data') just
 * before the quote conversion; gtag.js hashes them in the browser. Before switching it on:
 * accept the customer-data terms and turn on enhanced conversions in Google Ads, and update
 * the "never shared" privacy line under the forms and the privacy policy (see docs/tracking.md).
 */
const ENHANCED_CONVERSIONS = process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS === "true";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/** Development-only console trace of every tracking call (never in production builds). */
function debug(kind: string, name: string, params: Record<string, unknown> = {}): void {
  if (process.env.NODE_ENV !== "production") console.debug(`[tracking] ${kind}: ${name}`, params);
}

/**
 * Fire a Google Ads conversion. `onSent` (optional) runs once gtag reports the hit sent, or
 * straight away if gtag is missing (blocked, not loaded) or the label is a placeholder, so a
 * caller that waits for it can never get stuck.
 */
export function trackConversion(
  sendTo: string,
  params: Record<string, unknown> = {},
  onSent?: () => void,
): void {
  if (typeof window === "undefined") return;
  if (sendTo.includes("REPLACE_") || typeof window.gtag !== "function") {
    onSent?.();
    return;
  }
  const payload = { send_to: sendTo, transport_type: "beacon", ...params, ...(onSent ? { event_callback: onSent } : {}) };
  debug("ads conversion", sendTo, payload);
  window.gtag("event", "conversion", payload);
}

/** Push a custom event to the dataLayer (for GTM if it is ever enabled). Safe without GTM. */
export function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Send a GA4 event via the shared gtag.js. Never pass names, phone numbers or emails here. */
export function gaEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  debug("ga4 event", name, params);
  window.gtag("event", name, { transport_type: "beacon", ...params });
}

export type FormName = "quote" | "repair" | "amc" | "balancing" | "contact" | "thermostat";

/**
 * GA4 lead events. Mark as KEY EVENTS in GA4 (docs/tracking.md):
 *   generate_lead, click_whatsapp, click_call, form_submit_quote, form_submit_contact,
 *   form_submit_amc, form_submit_inline.
 * Also sent: phone_click and whatsapp_click (same parameters), and the legacy generic
 * form_submit until OLD_EVENTS_RETIRE_ON.
 */
export const OLD_EVENTS_RETIRE_ON = "2027-01-15";

export type FormKind = "quote" | "contact" | "amc" | "inline";

export interface LeadParams extends Record<string, unknown> {
  page_path: string;
  service: string;
  form_location: string;
}

/** Common parameters: current path, the page's service name, and where on the page it happened. */
export function leadParams(formLocation: string): LeadParams {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  return { page_path: path, service: waPageFor(path).name, form_location: formLocation };
}

/** Send one lead event to both GA4 (gtag) and the dataLayer (GTM). */
function fireLeadEvent(name: string, params: LeadParams & Record<string, unknown>): void {
  pushDataLayer(name, { ...params });
  gaEvent(name, { ...params });
}

/**
 * A click on a call (tel:) or WhatsApp link: the Google Ads conversion plus the GA4 events.
 *   call      Ads "Call button clicks – website" + GA4 click_call and phone_click
 *   whatsapp  Ads "WhatsApp Click" (label unchanged) + GA4 click_whatsapp and whatsapp_click
 * `onSent` runs when the Ads hit has gone (or straight away if gtag is unavailable); the call
 * handler waits for it before opening the dialler (see ConversionTracking.tsx).
 */
export function trackContactClick(kind: "whatsapp" | "call", formLocation: string, onSent?: () => void): void {
  const params = leadParams(formLocation);
  if (kind === "call") {
    fireLeadEvent("click_call", params);
    gaEvent("phone_click", { ...params });
    trackConversion(CONVERSIONS.call, {}, onSent);
  } else {
    fireLeadEvent("click_whatsapp", params);
    gaEvent("whatsapp_click", { ...params });
    trackConversion(CONVERSIONS.whatsapp, {}, onSent);
  }
}

/** One id per lead: the server's email reference when available, else a random one. */
function leadId(ref?: string): string {
  if (ref) return ref;
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export interface SubmitDetails {
  /** The server's lead reference (also in the email subject as [ref …]); used as transaction_id. */
  ref?: string;
  /** Only used for enhanced conversions, and only when that switch is on. */
  email?: string;
  phone?: string;
}

/**
 * A SUCCESSFUL form submission (call only after the server action returned success):
 *   Google Ads "Quote Form Submit" conversion with value 1.0 AED and a unique transaction_id,
 *   GA4 form_submit_<kind>, generate_lead (form_name, page_path, …) and the legacy form_submit.
 *   kind          which GA4 event: quote | contact | amc | inline
 *   formLocation  where the form sits: home_hero, mid_page, inline, quote_page, contact_page, …
 */
export function trackFormSubmit(
  formName: FormName,
  kind: FormKind = "quote",
  formLocation: string = "page",
  details: SubmitDetails = {},
): void {
  const transactionId = leadId(details.ref);
  if (ENHANCED_CONVERSIONS && typeof window !== "undefined" && typeof window.gtag === "function") {
    const email = normaliseEmail(details.email);
    const phone = normalisePhone(details.phone);
    if (email || phone) {
      debug("ads user_data", "set", { email: Boolean(email), phone_number: Boolean(phone) });
      window.gtag("set", "user_data", { ...(email ? { email } : {}), ...(phone ? { phone_number: phone } : {}) });
    }
  }
  trackConversion(CONVERSIONS.quote, { ...LEAD_VALUE, transaction_id: transactionId });

  const params = leadParams(formLocation);
  fireLeadEvent(`form_submit_${kind}`, params);
  // LEGACY (retire on OLD_EVENTS_RETIRE_ON): the generic form_submit event with form_name.
  const legacy = { form_name: formName, ...params };
  pushDataLayer("form_submit", legacy);
  gaEvent("form_submit", legacy);
  // GA4's recommended lead event, on every successful submit. Mark it as a key event in GA4.
  fireLeadEvent("generate_lead", { ...params, form_name: formName, ...LEAD_VALUE });
}
