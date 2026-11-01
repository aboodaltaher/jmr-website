// Central contact details and page-specific WhatsApp prefilled messages.

export const PHONE = "+971585575987";
export const PHONE_DISPLAY = "+971 58 557 5987";

const WA_NUMBER = "971585575987";

// Page-specific WhatsApp prefilled text, keyed by route. Falls back to default.
const WHATSAPP_MESSAGES: Record<string, string> = {
  default: "Hi AGEC, I'd like to speak to an engineer about my AC / HVAC.",
  "/ac-repair-dubai":
    "Hi AGEC, my AC is not cooling. Villa or apartment? Area? ",
  "/ac-maintenance-dubai":
    "Hi AGEC, I'd like to book an AC service. Number of units and area: ",
  "/ac-duct-cleaning-dubai":
    "Hi AGEC, I'd like a duct cleaning quote. Property type, number of units and area: ",
  "/smart-thermostat-installation-dubai":
    "Hi AGEC, can you check if a Nest or ecobee works with my AC? Brand and model: ",
  "/services/maintenance":
    "Hi AGEC, we manage a building and need maintenance support. Units and location: ",
  "/services/testing-commissioning":
    "Hi AGEC, we need airflow testing. Building type and problem: ",
  "/ac-amc-dubai":
    "Hi AGEC, I'd like an AMC quote. Number of AC units and area: ",
  "/air-balancing-airflow-testing-dubai":
    "Hi AGEC, we need airflow testing. Building type and problem: ",
  // Arabic prefilled messages for the /ar subtree.
  "/ar": "مرحباً AGEC، أريد التحدث مع مهندس بخصوص المكيف.",
  "/ar/ac-repair-dubai":
    "مرحباً AGEC، مكيّفي لا يبرّد. المنطقة ونوع العقار؟ ",
  "/ar/ac-amc-dubai":
    "مرحباً AGEC، أريد عرض سعر لعقد صيانة سنوي. عدد الوحدات والمنطقة؟ ",
};

export function whatsappMessageFor(pathname: string): string {
  return WHATSAPP_MESSAGES[pathname] ?? WHATSAPP_MESSAGES.default;
}

export function whatsappUrl(pathname: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    whatsappMessageFor(pathname),
  )}`;
}
