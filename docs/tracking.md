# Lead tracking: events, parameters and where they fire

GA4 property `G-H7HNVQGSYM`, Google Ads `AW-18332305339`. All events go through the single gtag.js
instance: `src/components/RootDocument.tsx` (shared by both root layouts) queues `config` for both IDs in an inline snippet and `src/components/GoogleTag.tsx`
loads gtag.js once, right after hydration (events fired earlier are queued, not lost). Everything also goes into the `dataLayer`, for GTM if it is ever enabled.
No new third-party scripts. No personal data is sent to GA4. Google Ads receives hashed email/phone only if enhanced conversions is switched on (off by default, see below).

Code: `src/lib/gtag.ts` (helpers) and `src/components/ConversionTracking.tsx` (click listener).

## Mark these 7 as key events in GA4

GA4 → Admin → Data display → Events → find each event → toggle **Mark as key event**.
(Events appear in the list only after they have fired once; test on the live site, then mark them.)

| Event | Fires when | Where it fires |
|---|---|---|
| `click_whatsapp` | A visitor clicks any WhatsApp link (`wa.me`) | Site-wide click listener: floating button, sticky mobile bar, header, footer, hero buttons, mid-page CTA, every page's own WhatsApp buttons |
| `click_call` | A visitor clicks any `tel:` link | Same listener: header, footer, sticky bar, hero, mid-page CTA, emergency strip |
| `generate_lead` | **Any** form is successfully sent (quote, contact, AMC, repair, balancing, hero, mid-page, inline). Needs no Google Ads label. Carries `form_name`, `service`, `page_path`, `form_location`. | `trackFormSubmit()` in `src/lib/gtag.ts`, so every form above |
| `form_submit_quote` | A quote, repair or balancing request is **successfully** sent | `QuoteForm` (`quote_page`), `HeroQuoteForm` (`home_hero`), `RepairForm` (`repair_page`), `BalancingForm` (`balancing_page`) |
| `form_submit_contact` | The contact form is successfully sent | `ContactForm` (`contact_page`, English and Arabic) |
| `form_submit_amc` | The AMC request form is successfully sent | `AmcForm` (`amc_page`) |
| `form_submit_inline` | A short inline lead form is successfully sent | `InlineLeadForm` on service pages (`inline`) and the mid-page CTA form (`mid_page`) |

**Forms fire only on real success**: after the server action returns success, never on the button
click and never when validation or the server rejects the submission.

## Parameters (on every event above)

| Parameter | Value |
|---|---|
| `page_path` | The page the visitor was on, e.g. `/ac-maintenance-dubai` |
| `service` | The page's service name from `src/data/whatsapp-pages.ts`, e.g. `AC maintenance` |
| `form_location` | Where on the page: `home_hero`, `mid_page`, `inline`, `quote_page`, `contact_page`, `amc_page`, `repair_page`, `balancing_page`, or for clicks `sticky_bar`, `floating_button`, `header`, `footer`, `mid_page`, `page` |

To report on `service` and `form_location`, register them once in GA4:
Admin → Data display → Custom definitions → Create custom dimension → scope **Event**, parameter
names `service` and `form_location`. (`page_path` is already available as a built-in dimension.)

## Extra GA4 events (same parameters)

`phone_click` fires with every `click_call`, and `whatsapp_click` with every `click_whatsapp`
(both carry `page_path`, `service`, `form_location`). **Mark only one of each pair as a key event**
(`click_call`, `click_whatsapp`), or every click counts twice. `generate_lead` also carries
`value: 1` and `currency: "AED"`.

## Old event: still firing in parallel

| Old event | Now also covered by | Notes |
|---|---|---|
| `form_submit` (with `form_name`) | the matching `form_submit_*` | `form_name` is `quote`, `repair`, `amc`, `balancing`, `contact`, `thermostat` |

`call_click` was replaced by `phone_click` (it recorded 0 events in the last 30 days). `whatsapp_click`
is now permanent with full parameters.

**Retire `form_submit` on 2027-01-15.** In `src/lib/gtag.ts`, delete the lines marked `LEGACY` and the
`OLD_EVENTS_RETIRE_ON` constant. Do not mark it as a key event (it would double-count every lead).

## Google Ads conversions

IDs live in env vars with the real values as fallbacks (`.env.example`):

| Conversion action | send_to | Fires |
|---|---|---|
| Quote Form Submit (count: one) | `NEXT_PUBLIC_GADS_QUOTE_CONVERSION` = `AW-18332305339/T_88CIvtt7sdELuPw6VE` | Only after a **successful** submit of any of the 8 lead forms, with `value: 1.0`, `currency: "AED"`, `transaction_id` = the lead reference that is also in the email subject `[ref …]` |
| Call button clicks – website | `NEXT_PUBLIC_GADS_CALL_CONVERSION` = `AW-18332305339/jMslCPeI_dIcELuPw6VE` | Every `tel:` click. The dialler opens after gtag confirms the hit (`event_callback`), at most 600 ms later |
| WhatsApp Click | `AW-18332305339/Ta8NCPesz9IcELuPw6VE` (fixed, unchanged) | Every `wa.me` click |

All hits use `transport_type: "beacon"`.

**Why the call conversion stopped recording after 21 Jul 2026 (most likely cause; not provable from outside Google Ads):** the label and code were deployed
and correct, but a `tel:` tap hands over to the phone's dialler immediately, and the browser
suspends the page before the queued hit is sent. WhatsApp opens a new tab, so its hits survive.
GA4 showed the same pattern (0 `click_call`, 3 `click_whatsapp` in 30 days). Fixed by waiting for
the hit before opening the dialler (Google's recommended pattern for website call conversions).

## Enhanced conversions for leads (off)

Code is in place behind `NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS=true`: before the quote conversion,
`gtag('set','user_data', { email, phone_number })` is called with the visitor's normalised details
(gtag.js hashes them in the browser). Before turning it on:
1. Google Ads → Goals → Settings → Enhanced conversions for leads: turn on, choose "Google tag", accept the customer data terms.
2. Change the line under every form ("never shared or sold", `FORM_PRIVACY_NOTE` in `src/lib/company.ts`) and the privacy policy, which today promise the opposite.
3. Set the env var to `true` in Vercel and redeploy.

## Consent mode

The site has no cookie banner and no Google consent mode. If one is added, call
`gtag('consent','default', …)` in the inline snippet in `RootDocument.tsx` before the two `config` lines.

## Development logging

Outside production builds every tracking call is logged to the browser console as `[tracking] …`.

## How to verify an event

GA4 → Admin → DebugView, with the Tag Assistant / "Debug mode" extension on, then click a WhatsApp
or call link, or submit a form. Or in the browser console, `window.dataLayer` lists every event
pushed (look for `click_whatsapp`, `click_call`, `form_submit_*`).
