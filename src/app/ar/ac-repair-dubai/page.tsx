import type { Metadata } from "next";
import { Phone, MessageCircle, Check } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ar/ac-repair-dubai";

export const metadata: Metadata = {
  title: "إصلاح مكيفات في دبي | فنيّو تكييف | AGEC",
  description:
    "المكيف لا يبرّد أو يسرّب أو يفصل الكهرباء؟ مهندسو AGEC يحدّدون السبب الجذري، ويعطونك السعر كتابةً قبل البدء. اتصل أو راسلنا على واتساب.",
  alternates: {
    canonical: ROUTE,
    languages: {
      en: `${SITE_URL}/ac-repair-dubai`,
      ar: `${SITE_URL}${ROUTE}`,
      "x-default": `${SITE_URL}/ac-repair-dubai`,
    },
  },
  openGraph: {
    images: ["/og-image.png"],
    title: "إصلاح مكيفات في دبي | AGEC",
    description:
      "تشخيص هندسي للعطل، وسعر كتابي قبل البدء، وتقرير بعد الإصلاح. استجابة خلال ساعة.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold tracking-widest text-primary";

const faults = [
  "المكيف لا يبرّد",
  "تسرّب ماء من الوحدة الداخلية",
  "فصل قاطع الكهرباء",
  "أصوات غير معتادة",
  "روائح كريهة أو عفنة",
];

const steps = [
  "نفحص النظام ونقيسه لتحديد السبب الجذري.",
  "نعطيك السعر كتابةً قبل بدء أي عمل.",
  "ننفّذ الإصلاح.",
  "نرسل تقريراً موجزاً بما قِسناه.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "المكيف يعمل لكنه لا يبرّد، لماذا؟",
    a: "غالباً بسبب مبادل حراري متّسخ، أو تصريف مسدود، أو نقص غاز ناتج عن تسرّب — وليس مجرد «نقص فريون». نقيس النظام لتحديد السبب الحقيقي قبل أن نسعّر.",
  },
  {
    q: "لماذا يسرّب المكيف الماء؟",
    a: "في الغالب بسبب خط تصريف مسدود أو مائل، أو مبادل حراري متجمّد يقطر عند ذوبانه. ننظّف التصريف ونتأكد من انسياب الماء بشكل سليم قبل أن نغادر.",
  },
  {
    q: "هل تعبئة الغاز تكفي؟",
    a: "فقط إذا كان الفريون منخفضاً فعلاً ولا يوجد تسرّب. الفريون يدور في دائرة مغلقة، فإذا كان منخفضاً فهناك تسرّب. نجد التسرّب ونصلحه بدل الاكتفاء بالتعبئة حتى لا يعود العطل سريعاً.",
  },
  {
    q: "ما مدى سرعة وصولكم؟",
    a: "نرد خلال ساعة في أي وقت. اتصل أو راسلنا على واتساب مع ذكر المنطقة والمشكلة، وسنؤكد أقرب موعد للوصول إليك.",
  },
  {
    q: "هل تصلحون المكيفات السبليت والمخفية و VRF؟",
    a: "نعم — أنظمة السبليت والمخفية و VRF/VRV من جميع العلامات الكبرى، في الإمارات السبع جميعها.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "إصلاح مكيفات",
  serviceType: "AC Repair",
  description:
    "تشخيص هندسي لأعطال التكييف في دبي، مع سعر كتابي قبل البدء وتقرير بعد الإصلاح.",
  url: `${SITE_URL}${ROUTE}`,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  provider: {
    "@type": "HVACBusiness",
    name: "AGEC Technical Services",
    telephone: PHONE,
    email: "a.altaher@agec.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AlMasraf Building, Sheikh Zayed Road",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ar",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ArabicAcRepair() {
  const wa = whatsappUrl(ROUTE);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 18% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className={eyebrow}>دبي والإمارات · الإمارات السبع · استجابة خلال ساعة</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
            إصلاح مكيفات في دبي: تشخيص هندسي وسعر قبل البدء
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            ضعف التبريد غالباً سببه مبادل متّسخ أو تصريف مسدود أو تسرّب، وليس مجرد
            نقص غاز. نجد السبب، ونعطيك السعر كتابةً، ثم نصلحه ونرسل تقريراً بما قِسناه.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              <Phone className="h-4 w-4" /> اتصل الآن
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> أرسل صورة للمكيف على واتساب
            </a>
          </div>
        </div>
      </section>

      {/* FAULTS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الأعطال الشائعة</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">نصلح أغلب أعطال التكييف</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {faults.map((f) => (
              <li key={f} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>كيف نعمل</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">أربع خطوات واضحة</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-text-muted">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الأسعار</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">السعر حسب العطل</h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            يعتمد السعر على طبيعة العطل، لذلك نشخّص أولاً ثم نعطيك سعر الإصلاح كتابةً
            قبل أي عمل — توافق على التكلفة قبل أن نبدأ، دون أي التزام.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">أسئلة شائعة</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">مكيفك لا يبرّد الآن؟</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-primary hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
