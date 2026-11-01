import { FORM_RESPONSE_NOTE, FORM_PRIVACY_NOTE } from "@/lib/company";

/**
 * Shared response-time + privacy note shown under every lead form (audit item 2).
 * Copy is sourced from the single company-facts config.
 */
export function FormAssurance() {
  return (
    <p className="text-center text-xs leading-relaxed text-text-muted">
      {FORM_RESPONSE_NOTE} {FORM_PRIVACY_NOTE}
    </p>
  );
}
