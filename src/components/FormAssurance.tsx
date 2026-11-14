import Link from "next/link";
import {
  FORM_RESPONSE_NOTE,
  FORM_PRIVACY_NOTE,
  FORM_RESPONSE_NOTE_AR,
  FORM_PRIVACY_NOTE_AR,
} from "@/lib/company";

/**
 * Shared response-time + privacy note shown under every lead form (audit item 2).
 * Copy is sourced from the single company-facts config, in the form's language,
 * followed by links to the privacy policy and terms.
 */
export function FormAssurance({ lang = "en" }: { lang?: "en" | "ar" }) {
  const ar = lang === "ar";
  const response = ar ? FORM_RESPONSE_NOTE_AR : FORM_RESPONSE_NOTE;
  const privacy = ar ? FORM_PRIVACY_NOTE_AR : FORM_PRIVACY_NOTE;
  const privacyHref = ar ? "/ar/privacy-policy" : "/privacy-policy";
  const termsHref = ar ? "/ar/terms" : "/terms";
  const privacyLabel = ar ? "سياسة الخصوصية" : "Privacy Policy";
  const termsLabel = ar ? "شروط الاستخدام" : "Terms of Use";

  return (
    <p className="text-center text-xs leading-relaxed text-text-muted">
      {response} {privacy}{" "}
      <Link href={privacyHref} className="underline hover:text-primary">
        {privacyLabel}
      </Link>{" "}
      ·{" "}
      <Link href={termsHref} className="underline hover:text-primary">
        {termsLabel}
      </Link>
    </p>
  );
}
