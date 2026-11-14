# Lead tracking: events, parameters and where they fire

GA4 property `G-H7HNVQGSYM`, Google Ads `AW-18332305339`. All events go through the single gtag.js
instance loaded in `src/app/layout.tsx` (and into the `dataLayer`, for GTM if it is ever enabled).
No new third-party scripts. No personal data is ever sent: never a name, phone number or email.

Code: `src/lib/gtag.ts` (helpers) and `src/components/ConversionTracking.tsx` (click listener).

## Mark these 6 as key events in GA4

GA4 → Admin → Data display → Events → find each event → toggle **Mark as key event**.
(Events appear in the list only after they have fired once; test on the live site, then mark them.)

| Event | Fires when | Where it fires |
|---|---|---|
| `click_whatsapp` | A visitor clicks any WhatsApp link (`wa.me`) | Site-wide click listener: floating button, sticky mobile bar, header, footer, hero buttons, mid-page CTA, every page's own WhatsApp buttons |
| `click_call` | A visitor clicks any `tel:` link | Same listener: header, footer, sticky bar, hero, mid-page CTA, emergency strip |
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

## Old events: still firing in parallel

So existing GA4 reports keep working, the previous names still fire alongside the new ones:

| Old event | Now also covered by | Notes |
|---|---|---|
| `call_click` | `click_call` | Old event carries `page_path` only |
| `whatsapp_click` | `click_whatsapp` | Same |
| `form_submit` (with `form_name`) | the matching `form_submit_*` | `form_name` is `quote`, `repair`, `amc`, `balancing`, `contact`, `thermostat` |

**Retire the old events on 2027-01-15** (about 60 days of overlap). In `src/lib/gtag.ts`, delete the
lines marked `LEGACY` and the `OLD_EVENTS_RETIRE_ON` constant. **Do not mark the old events as key
events**: marking both would double-count every lead.

## Google Ads conversions: unchanged

`trackConversion()` fires exactly as before:

- WhatsApp click → `AW-18332305339/Ta8NCPesz9IcELuPw6VE`
- Call click → `AW-18332305339/jMslCPeI_dIcELuPw6VE`
- Form success → `AW-18332305339/REPLACE_FORM_LABEL`. **This label is still a placeholder, so the
  form conversion is a silent no-op today.** Paste the real label into `CONVERSIONS.form` in
  `src/lib/gtag.ts` (Google Ads → Goals → Conversions → your form action → Tag setup → gtag.js).

## How to verify an event

GA4 → Admin → DebugView, with the Tag Assistant / "Debug mode" extension on, then click a WhatsApp
or call link, or submit a form. Or in the browser console, `window.dataLayer` lists every event
pushed (look for `click_whatsapp`, `click_call`, `form_submit_*`).
