# Decisions log — overnight run (19 Nov 2026)

Decisions taken without the owner, using the overnight rules: keep every URL and ranking intact, invent no facts, and stay revertible.

| # | Area | Decision | Why |
|---|---|---|---|
| 1 | C1 lead delivery | `CONTACT_EMAIL_BACKUP` is sent as a **separate** email, and the visitor's success/failure depends only on the main email. | While the sender is still Resend's test address, Resend only delivers to the account owner. A combined `to: [main, backup]` with an unverified backup would be rejected as a whole and lose every lead. |
| 2 | C1 lead delivery | Each submission gets an 8-character reference (`[ref xxxxxxxx]` in the email subject); logs contain only that reference, the form kind and the Resend error name. | Lets a failed lead be traced in Vercel logs without logging personal data. |
| 3 | C1 lead delivery | The hero and mid-page forms now use the shared `FormSendError` box (honest message + call + WhatsApp) instead of their own shorter messages. | The hero form offered only a phone link and the mid-page form offered no links. Same wording as the other 6 forms. |
| 4 | C3 spam | Minimum time-to-submit is **2 seconds**, and the timing check is skipped when the value is missing. | Conservative: a fast autofill user must never lose a lead; an old cached page during a deploy must not be blocked. |
| 5 | C3 spam | No per-IP rate limit. | Vercel instances share no memory, so a real rate limit needs a shared store (Upstash Redis / Vercel KV) — a new external service, which is forbidden tonight. |
| 6 | C3 spam | A dropped bot gets `{ success: true }`, so the browser shows the normal thank-you state (and would fire the GA4 lead event if the bot runs JavaScript). | Required "normal-looking response". Bots that run full JavaScript are rare; the honeypot still stops the email. |
| 7 | D1 trust | "Designed to Dubai Municipality / Civil Defence requirements" sentences were rewritten to "designed to ASHRAE and the requirements that apply to the building / the project specification", not deleted. | Keeps the engineering meaning without naming an authority (owner: no authority claims). |
| 8 | D1 trust | Kept as harmless: "DEWA bill / tariff" (the electricity bill, incl. the blog URL `/blog/smart-thermostat-save-dewa-bill`), "approved drawings", "consultant approval", "shop drawings for approval", "calibration certificates" for instruments, "authority approvals are submitted by the consultant". | These describe the utility bill or the client's/consultant's process, not an approval held by AGEC. Changing the blog URL is forbidden. |
| 9 | D1 trust | Kitchen exhaust page: the Dubai Municipality approval claim, H2 and FAQ were replaced with owner-confirmed facts (own trained staff, not subcontracted, scheduled around opening hours). The meta description changed accordingly. | Owner now confirms no approvals; the replacement facts were already owner-confirmed in the code comments. |
| 10 | D1 trust | Homepage meta description "Licensed since 2022" → "Established 2022". | Removes a licence claim; 2022 is the established year already used site-wide. |
| 11 | D1 trust | AMC guide blog: "Ask to see the trade license" → "Ask about the engineers' qualifications and who will actually do the work". | Advice to request a licence would invite a request AGEC can't meet on the site. |
