import { Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY, EMERGENCY_PREFIX } from "@/lib/company";

/**
 * Slim full-width emergency strip — the whole bar is a tel: link. Copy and
 * phone come from the single company config. Shown at the very top of /, /quote
 * and /book so it is visible without scrolling on mobile. (Emergency CTA.)
 */
export function EmergencyStrip() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="block bg-text text-white transition-colors hover:bg-black"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-sm font-semibold">
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          {EMERGENCY_PREFIX} {PHONE_DISPLAY}
        </span>
      </div>
    </a>
  );
}
