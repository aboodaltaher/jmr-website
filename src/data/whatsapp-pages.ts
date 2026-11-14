// Per-page facts used to build the WhatsApp pre-fill and the `service` parameter on tracking
// events. One entry per route: `name` is how the page is named in the message, `property` is
// the kind of property the page is about, `area` the place. Anything left out falls back to
// the defaults at the bottom. Arabic names are drafts: see ARABIC_REVIEW.md.

export interface WaPage {
  name: string;
  property?: string;
  area?: string;
}

export const WA_PAGES_EN: Record<string, WaPage> = {
  "/": { name: "home" },
  "/about": { name: "about us" },
  "/services": { name: "services" },
  "/ac-maintenance-dubai": { name: "AC maintenance", property: "home" },
  "/ac-repair-dubai": { name: "AC repair", property: "home" },
  "/ac-amc-dubai": { name: "AC annual maintenance contract", property: "property" },
  "/ac-duct-cleaning-dubai": { name: "AC duct cleaning", property: "home" },
  "/smart-thermostat-installation-dubai": { name: "smart thermostat installation", property: "home" },
  "/services/hvac-installation-dubai": { name: "HVAC installation" },
  "/services/tab-testing-adjusting-balancing-dubai": { name: "testing, adjusting and balancing" },
  "/services/chiller-maintenance-dubai": { name: "chiller maintenance", property: "building" },
  "/services/vrf-vrv-systems": { name: "VRF / VRV systems" },
  "/services/dx-units": { name: "DX units" },
  "/services/ventilation-fresh-air": { name: "ventilation and fresh air" },
  "/services/hvac-design": { name: "HVAC design" },
  "/ac-ducting-installation-dubai": { name: "AC ducting installation" },
  "/mep-contractors-dubai": { name: "HVAC for MEP projects", property: "project" },
  "/kitchen-exhaust-cleaning-dubai": { name: "kitchen exhaust cleaning", property: "kitchen" },
  "/hvac-contractor-sharjah": { name: "HVAC contractor in Sharjah", area: "Sharjah" },
  "/hvac-contractor-ajman": { name: "HVAC contractor in Ajman", area: "Ajman" },
  "/hvac-contractor-abu-dhabi": { name: "HVAC contractor in Abu Dhabi", area: "Abu Dhabi" },
  "/projects": { name: "projects" },
  "/quote": { name: "quote request" },
  "/contact": { name: "contact" },
  "/blog": { name: "blog" },
};

export const WA_PAGES_AR: Record<string, WaPage> = {
  "/ar": { name: "الرئيسية" },
  "/ar/about": { name: "من نحن" },
  "/ar/services": { name: "الخدمات" },
  "/ar/ac-maintenance-dubai": { name: "صيانة المكيفات" },
  "/ar/ac-repair-dubai": { name: "إصلاح المكيفات" },
  "/ar/ac-amc-dubai": { name: "عقود الصيانة السنوية" },
  "/ar/ac-duct-cleaning-dubai": { name: "تنظيف مجاري التكييف" },
  "/ar/smart-thermostat-installation-dubai": { name: "تركيب الثرموستات الذكي" },
  "/ar/services/hvac-installation-dubai": { name: "تركيب أنظمة التكييف" },
  "/ar/services/tab-testing-adjusting-balancing-dubai": { name: "الاختبار والضبط والموازنة" },
  "/ar/services/chiller-maintenance-dubai": { name: "صيانة التشيلر" },
  "/ar/services/ventilation-fresh-air": { name: "التهوية والهواء النقي" },
  "/ar/services/vrf-vrv-systems": { name: "أنظمة VRF / VRV" },
  "/ar/services/dx-units": { name: "وحدات DX" },
  "/ar/services/hvac-design": { name: "تصميم أنظمة التكييف" },
  "/ar/ac-ducting-installation-dubai": { name: "تركيب المجاري وتصنيعها" },
  "/ar/mep-contractors-dubai": { name: "تكييف لمشاريع MEP" },
  "/ar/contact": { name: "اتصل بنا" },
  "/ar/quote": { name: "طلب عرض سعر" },
};

export const WA_DEFAULTS = {
  en: { property: "property", area: "Dubai" },
  ar: { property: "عقاري", area: "دبي" },
};

export const WA_TEMPLATE = {
  en: (name: string, property: string, area: string) =>
    `Hi AGEC, I'm on your ${name} page — I need help with my ${property} in ${area}.`,
  ar: (name: string, property: string, area: string) =>
    `مرحباً AGEC، أنا في صفحة ${name} — أحتاج مساعدة بخصوص ${property} في ${area}.`,
};
