// Normalising form contact details for Google Ads enhanced conversions (gtag 'set', 'user_data').
// gtag.js hashes these values (SHA-256) in the browser before sending; we only normalise them.

/** Lower-case, trimmed email, or undefined if it isn't a plausible address. */
export function normaliseEmail(value: string | undefined): string | undefined {
  const v = (value ?? "").trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? v : undefined;
}

/**
 * E.164 phone ("+9715XXXXXXXX"), or undefined. Accepts the formats people type in the UAE:
 * 05X XXX XXXX, 5X XXX XXXX, 9715X…, 009715X…, +971 5X…  Other countries pass through if they
 * start with "+" or "00".
 */
export function normalisePhone(value: string | undefined): string | undefined {
  const raw = (value ?? "").trim();
  if (!raw) return undefined;
  let digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("00")) digits = "+" + digits.slice(2);
  if (digits.startsWith("+")) {
    const d = "+" + digits.slice(1).replace(/\D/g, "");
    return /^\+\d{8,15}$/.test(d) ? d : undefined;
  }
  digits = digits.replace(/\D/g, "");
  if (digits.startsWith("971")) return /^971\d{8,9}$/.test(digits) ? "+" + digits : undefined;
  if (digits.startsWith("0")) digits = digits.slice(1);
  return /^\d{8,9}$/.test(digits) ? "+971" + digits : undefined;
}
