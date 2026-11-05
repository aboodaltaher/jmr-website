import {
  FORM_RESPONSE_NOTE,
  FORM_PRIVACY_NOTE,
  FORM_RESPONSE_NOTE_AR,
  FORM_PRIVACY_NOTE_AR,
} from "@/lib/company";

/**
 * Shared response-time + privacy note shown under every lead form (audit item 2).
 * Copy is sourced from the single company-facts config, in the form's language.
 */
export function FormAssurance({ lang = "en" }: { lang?: "en" | "ar" }) {
  const response = lang === "ar" ? FORM_RESPONSE_NOTE_AR : FORM_RESPONSE_NOTE;
  const privacy = lang === "ar" ? FORM_PRIVACY_NOTE_AR : FORM_PRIVACY_NOTE;
  return (
    <p className="text-center text-xs leading-relaxed text-text-muted">
      {response} {privacy}
    </p>
  );
}
