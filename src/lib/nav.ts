// Single navigation config shared by the header's desktop and mobile menus,
// plus the English <-> Arabic language-switch mapping used by both the English
// Header and the Arabic chrome. (Audit task 7.)

export interface NavLink {
  href: string;
  label: string;
}

export const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const serviceLinks: NavLink[] = [
  { href: "/services", label: "All Services" },
  { href: "/services/hvac-installation-dubai", label: "HVAC Installation" },
  { href: "/ac-maintenance-dubai", label: "AC Maintenance" },
  { href: "/ac-repair-dubai", label: "AC Repair" },
  { href: "/ac-amc-dubai", label: "AC AMC" },
  { href: "/ac-duct-cleaning-dubai", label: "AC Duct Cleaning" },
  { href: "/air-balancing-airflow-testing-dubai", label: "Air Balancing" },
  { href: "/smart-thermostat-installation-dubai", label: "Smart Thermostats" },
  { href: "/services/vrf-vrv-systems", label: "VRF / VRV Systems" },
  { href: "/services/maintenance", label: "Commercial Maintenance & AMC" },
  { href: "/services/chiller-maintenance-dubai", label: "Chiller Maintenance" },
  { href: "/services/ventilation-fresh-air", label: "Ventilation & Fresh Air" },
  { href: "/services/hvac-design", label: "HVAC Design" },
  { href: "/services/testing-commissioning", label: "Testing & Commissioning" },
  { href: "/services/tab-testing-adjusting-balancing-dubai", label: "TAB (Balancing)" },
];

// Dedicated Maintenance menu — a subset of serviceLinks surfaced on its own.
export const maintenanceLinks: NavLink[] = [
  { href: "/ac-maintenance-dubai", label: "AC Maintenance" },
  { href: "/ac-amc-dubai", label: "AC AMC" },
  { href: "/ac-repair-dubai", label: "AC Repair" },
  { href: "/ac-duct-cleaning-dubai", label: "AC Duct Cleaning" },
  { href: "/services/maintenance", label: "Commercial Maintenance & AMC" },
  { href: "/services/chiller-maintenance-dubai", label: "Chiller Maintenance" },
];

export const tailLinks: NavLink[] = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

// Pages that exist in both English and Arabic. Used so the language switch
// links to the counterpart of the current page (not just the locale home).
export const LOCALE_PAIRS: { en: string; ar: string }[] = [
  { en: "/", ar: "/ar" },
  { en: "/ac-maintenance-dubai", ar: "/ar/ac-maintenance-dubai" },
  { en: "/ac-repair-dubai", ar: "/ar/ac-repair-dubai" },
  { en: "/ac-duct-cleaning-dubai", ar: "/ar/ac-duct-cleaning-dubai" },
  { en: "/ac-amc-dubai", ar: "/ar/ac-amc-dubai" },
  { en: "/services", ar: "/ar/services" },
  { en: "/about", ar: "/ar/about" },
  { en: "/quote", ar: "/ar/quote" },
  { en: "/contact", ar: "/ar/contact" },
  { en: "/services/hvac-installation-dubai", ar: "/ar/services/hvac-installation-dubai" },
  { en: "/services/tab-testing-adjusting-balancing-dubai", ar: "/ar/services/tab-testing-adjusting-balancing-dubai" },
  { en: "/services/chiller-maintenance-dubai", ar: "/ar/services/chiller-maintenance-dubai" },
  { en: "/services/ventilation-fresh-air", ar: "/ar/services/ventilation-fresh-air" },
  { en: "/smart-thermostat-installation-dubai", ar: "/ar/smart-thermostat-installation-dubai" },
  { en: "/air-balancing-airflow-testing-dubai", ar: "/ar/air-balancing-airflow-testing-dubai" },
];

/** Arabic counterpart of an English path, or /ar if none exists. */
export function arEquivalentOf(path: string): string {
  return LOCALE_PAIRS.find((p) => p.en === path)?.ar ?? "/ar";
}

/** English counterpart of an Arabic path, or / if none exists. */
export function enEquivalentOf(path: string): string {
  return LOCALE_PAIRS.find((p) => p.ar === path)?.en ?? "/";
}
