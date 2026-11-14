// Services mega-menu content — one config for English + Arabic so pages can be
// added later without touching the menu components. `arHref` is set only where
// an Arabic page exists; otherwise the Arabic menu links the English page
// (per the URL rules). `desc` is kept to ~8 words.

export interface MegaItem {
  label: string;
  href: string;
  desc: string;
  arLabel: string;
  arDesc: string;
  arHref?: string;
}

export interface MegaGroup {
  title: string;
  arTitle: string;
  audience: string;
  arAudience: string;
  items: MegaItem[];
}

export const servicesMenu: MegaGroup[] = [
  {
    title: "Residential",
    arTitle: "سكني",
    audience: "Villas & apartments",
    arAudience: "فلل وشقق",
    items: [
      { label: "AC Maintenance", href: "/ac-maintenance-dubai", desc: "Servicing, cleaning and gas checks", arLabel: "صيانة المكيفات", arDesc: "خدمة وتنظيف وفحص الغاز", arHref: "/ar/ac-maintenance-dubai" },
      { label: "AC Repair", href: "/ac-repair-dubai", desc: "Same-day engineer diagnosis", arLabel: "إصلاح المكيفات", arDesc: "تشخيص هندسي في نفس اليوم", arHref: "/ar/ac-repair-dubai" },
      { label: "AC Duct Cleaning", href: "/ac-duct-cleaning-dubai", desc: "With a written completion report", arLabel: "تنظيف مجاري التكييف", arDesc: "مع تقرير إنجاز مكتوب", arHref: "/ar/ac-duct-cleaning-dubai" },
      { label: "Annual Maintenance Contracts", href: "/ac-amc-dubai", desc: "Year-round cover for homes", arLabel: "عقود الصيانة السنوية", arDesc: "تغطية على مدار العام للمنازل", arHref: "/ar/ac-amc-dubai" },
      { label: "Smart Thermostats", href: "/smart-thermostat-installation-dubai", desc: "Google Nest and ecobee installation", arLabel: "الثرموستات الذكي", arDesc: "تركيب Google Nest وecobee", arHref: "/ar/smart-thermostat-installation-dubai" },
    ],
  },
  {
    title: "Commercial",
    arTitle: "تجاري",
    audience: "Offices, retail, F&B, buildings",
    arAudience: "مكاتب ومحلات ومطاعم ومبانٍ",
    items: [
      { label: "HVAC Installation", href: "/services/hvac-installation-dubai", desc: "Design to handover", arLabel: "تركيب أنظمة التكييف", arDesc: "من التصميم إلى التسليم", arHref: "/ar/services/hvac-installation-dubai" },
      // #commercial-amc: the one allowed duplicate base URL (anchor into the AMC page's commercial section)
      { label: "Commercial Maintenance & AMC", href: "/ac-amc-dubai#commercial-amc", desc: "PPM and SLAs for buildings", arLabel: "الصيانة التجارية وعقود AMC", arDesc: "صيانة وقائية واتفاقيات للمباني", arHref: "/ar/ac-amc-dubai" },
      { label: "Chiller Maintenance", href: "/services/chiller-maintenance-dubai", desc: "Air- and water-cooled plants", arLabel: "صيانة التشيلر", arDesc: "وحدات مبرّدة بالهواء والماء", arHref: "/ar/services/chiller-maintenance-dubai" },
      { label: "Ventilation & Fresh Air", href: "/services/ventilation-fresh-air", desc: "FAHU, CO₂ and air quality", arLabel: "التهوية والهواء النقي", arDesc: "وحدات هواء نقي وجودة الهواء", arHref: "/ar/services/ventilation-fresh-air" },
      { label: "DX Units & Split Systems", href: "/services/dx-units", desc: "Ducted and packaged DX", arLabel: "وحدات DX والسبليت", arDesc: "أنظمة DX مجاري ومجمّعة" },
    ],
  },
  {
    title: "Engineering",
    arTitle: "هندسي",
    audience: "Consultants, developers, contractors",
    arAudience: "استشاريون ومطوّرون ومقاولون",
    items: [
      { label: "VRF / VRV Systems", href: "/services/vrf-vrv-systems", desc: "Design, install and commission", arLabel: "أنظمة VRF / VRV", arDesc: "تصميم وتركيب وتشغيل تجريبي" },
      { label: "HVAC Design & Consultancy", href: "/services/hvac-design", desc: "Heat-load calcs and duct sizing", arLabel: "التصميم والاستشارات الهندسية", arDesc: "حسابات الأحمال وتحجيم المجاري" },
      { label: "Testing, Commissioning & Balancing", href: "/services/tab-testing-adjusting-balancing-dubai", desc: "ASHRAE 111 TAB reports", arLabel: "الاختبار والتشغيل والموازنة", arDesc: "تقارير موازنة وفق ASHRAE 111", arHref: "/ar/services/tab-testing-adjusting-balancing-dubai" },
    ],
  },
];

export interface MegaLink {
  label: string;
  href: string;
  arLabel: string;
  arHref?: string;
}

// Bottom bar of the panel. "Dubai" is the home base (no dedicated location page)
// so it renders as plain text, not a link — keeping one link per URL.
export const servicesMenuBottom = {
  allServices: { label: "All services", href: "/services", arLabel: "كل الخدمات", arHref: "/ar/services" } as MegaLink,
  areasLabel: "Areas",
  arAreasLabel: "المناطق",
  homeBase: { label: "Dubai", arLabel: "دبي" },
  areas: [
    { label: "Sharjah", href: "/hvac-contractor-sharjah", arLabel: "الشارقة" },
    { label: "Ajman", href: "/hvac-contractor-ajman", arLabel: "عجمان" },
    { label: "Abu Dhabi", href: "/hvac-contractor-abu-dhabi", arLabel: "أبوظبي" },
  ] as MegaLink[],
};

// Right-hand feature card (one case study). thumb is optional (next/image);
// omitted until an owned image is supplied, so there is no layout shift.
export const servicesFeature = {
  projectHref: "/projects/basil-mall-ajman",
  title: "224 TR VRF, Basil Mall, Ajman",
  arTitle: "نظام VRF بسعة 224 طن — باسِل مول، عجمان",
  eyebrow: "Case study",
  arEyebrow: "دراسة حالة",
  quoteHref: "/quote",
  arQuoteHref: "/ar/quote",
  quoteLabel: "Get a quote",
  arQuoteLabel: "احصل على عرض سعر",
};

/** Base paths (no anchor) that should mark the Services trigger as active. */
export const servicePathSet: ReadonlySet<string> = new Set(
  servicesMenu
    .flatMap((g) => g.items)
    .flatMap((i) => [i.href.split("#")[0], ...(i.arHref ? [i.arHref.split("#")[0]] : [])]),
);

/** True when the current path is a service page (so the trigger shows active). */
export function isServicesActive(pathname: string): boolean {
  if (pathname === "/services" || pathname === "/ar/services") return true;
  if (pathname.startsWith("/services/") || pathname.startsWith("/ar/services/")) return true;
  return servicePathSet.has(pathname);
}
