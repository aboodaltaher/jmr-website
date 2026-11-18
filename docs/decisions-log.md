# Decisions log — overnight run (19 Nov 2026)

Decisions taken without the owner, using the overnight rules: keep every URL and ranking intact, invent no facts, and stay revertible.

| # | Area | Decision | Why |
|---|---|---|---|
| 1 | C1 lead delivery | `CONTACT_EMAIL_BACKUP` is sent as a **separate** email, and the visitor's success/failure depends only on the main email. | While the sender is still Resend's test address, Resend only delivers to the account owner. A combined `to: [main, backup]` with an unverified backup would be rejected as a whole and lose every lead. |
| 2 | C1 lead delivery | Each submission gets an 8-character reference (`[ref xxxxxxxx]` in the email subject); logs contain only that reference, the form kind and the Resend error name. | Lets a failed lead be traced in Vercel logs without logging personal data. |
| 3 | C1 lead delivery | The hero and mid-page forms now use the shared `FormSendError` box (honest message + call + WhatsApp) instead of their own shorter messages. | The hero form offered only a phone link and the mid-page form offered no links. Same wording as the other 6 forms. |
