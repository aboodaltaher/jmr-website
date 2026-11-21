// Arabic wording for the maintenance prices. Every number is read from the named rows in ./prices.ts
// (maintenanceRows), so the Arabic pages can never drift from the English ones. Owner-approved text, 22 Nov 2026.
// All prices exclude 5% VAT.

import { maintenanceRows as r } from "./prices.ts";

export const AR_PRICES_VAT_NOTE = "جميع الأسعار لا تشمل ضريبة القيمة المضافة 5%.";

/** Price-table rows: Arabic label + price text, keyed to the same rows the English page uses. */
export const AR_MAINTENANCE_ROWS = [
  { key: "apartment1", label: "خدمة مكيف سبليت قياسية، وحدة واحدة (زيارة شقة)", price: `${r.apartment1.from} درهم` },
  { key: "apartment2", label: "خدمة مكيف سبليت قياسية، وحدتان (زيارة شقة)", price: `${r.apartment2.from} درهم` },
  {
    key: "oneOff",
    label: "خدمة لمرة واحدة، 3 وحدات أو أكثر",
    price: `من ${r.oneOff.from} درهم للزيارة (حد أدنى للزيارة؛ عرض سعر مكتوب حسب عدد الوحدات)`,
  },
  { key: "ducted", label: "خدمة وحدة مخفية (دكت)", price: `${r.ducted.from} درهم للوحدة` },
  {
    key: "gas",
    label: "تعبئة غاز (R410A / R32)",
    price: `من ${r.gas.from} إلى ${r.gas.to} درهم للوحدة السبليت، حسب السعة ونوع الغاز. ليست جزءاً من الخدمة القياسية.`,
  },
] as const satisfies readonly { key: keyof typeof r; label: string; price: string }[];

/** Short "from" line for heroes and cards. */
export const AR_ONE_OFF_FROM = `خدمة لمرة واحدة من ${r.apartment1.from} درهم`;

/** The price FAQ answer on /ar/ac-maintenance-dubai. */
export const AR_PRICE_FAQ_ANSWER = `خدمة مكيف واحد في الشقة ${r.apartment1.from} درهم، ووحدتان ${r.apartment2.from} درهم. لثلاث وحدات أو أكثر يبدأ السعر من ${r.oneOff.from} درهم للزيارة كحد أدنى، ونرسل عرض سعر مكتوباً حسب عدد الوحدات. الأسعار لا تشمل ضريبة القيمة المضافة.`;

/** One sentence for the Arabic AMC page. */
export const AR_ONE_OFF_SENTENCE = `الخدمة لمرة واحدة: ${r.apartment1.from} درهم لمكيف واحد في الشقة، و${r.apartment2.from} درهم لمكيفين، ومن ${r.oneOff.from} درهم للزيارة لثلاث وحدات أو أكثر (حد أدنى للزيارة؛ عرض سعر مكتوب حسب عدد الوحدات).`;
