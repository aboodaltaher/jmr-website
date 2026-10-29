// Central contact details and page-specific WhatsApp prefilled messages.

export const PHONE = "+971585575987";
export const PHONE_DISPLAY = "+971 58 557 5987";

const WA_NUMBER = "971585575987";

// Page-specific WhatsApp prefilled text, keyed by route. Falls back to default.
const WHATSAPP_MESSAGES: Record<string, string> = {
  default: "Hi AGEC, I'd like to speak to an engineer about my AC / HVAC.",
  "/ac-maintenance-dubai":
    "Hi AGEC, I'd like to book AC maintenance for [number] units in [area].",
  "/smart-thermostat-installation-dubai":
    "Hi AGEC, can you check if a Nest/ecobee works with my [brand] AC in [area]?",
  "/services/maintenance":
    "Hi AGEC, we need HVAC maintenance for a [site type] in [area]. Can we arrange a survey?",
  "/services/testing-commissioning":
    "Hi AGEC, we need airflow testing/balancing for [building]. Issue: [symptom].",
};

export function whatsappMessageFor(pathname: string): string {
  return WHATSAPP_MESSAGES[pathname] ?? WHATSAPP_MESSAGES.default;
}

export function whatsappUrl(pathname: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    whatsappMessageFor(pathname),
  )}`;
}
