import type { Metadata } from "next";
import { Phone, MessageCircle, Check, ShieldCheck, BadgeCheck, Clock, FileText, Gauge, CalendarClock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ar/ac-maintenance-dubai";

export const metadata: Metadata = {
  title: "صيانة مكيفات في دبي | خدمة وإصلاح وعقود | AGEC",
  description:
    "صيانة احترافية للمكيفات في دبي من مهندسين مرخّصين: خدمة، إصلاح، تنظيف، وعقود سنوية. خدمة لمرة واحدة من 350 درهماً للوحدة. استجابة خلال ساعة.",
  alternates: {
    canonical: ROUTE,
    languages: {
      en: `${SITE_URL}/ac-maintenance-dubai`,
      ar: `${SITE_URL}${ROUTE}`,
      "x-default": `${SITE_URL}/ac-maintenance-dubai`,
    },
  },
  openGraph: {
    images: ["/og-image.png"],
    title: "صيانة مكيفات في دبي | AGEC",
    description:
      "خدمة وإصلاح وتنظيف وعقود صيانة سنوية. خدمة لمرة واحدة من 350 درهماً للوحدة.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold tracking-widest text-primary";

const whyCards = [
  { icon: ShieldCheck, title: "مهندسون مرخّصون", desc: "فنيّون مدرّبون يعملون وفق معايير ASHRAE وبلدية دبي — لا عمالة غير مؤهلة." },
  { icon: BadgeCheck, title: "جميع العلامات والأنواع", desc: "سبليت، مخفي، كاسيت، VRF/VRV، تشيلر ووحدات مجمّعة — دايكن، أوجنرال، كاريير، جري، ميديا، إل جي والمزيد." },
  { icon: Clock, title: "خدمة في نفس اليوم وطوارئ 24/7", desc: "استجابة سريعة في دبي والإمارات، مع دعم طوارئ عند تعطّل المكيف في ذروة الصيف." },
  { icon: FileText, title: "تقارير موثّقة", desc: "كل زيارة مسجّلة بالحالة قبل وبعد والعمل المنفّذ والقطع المستخدمة — سجل صيانة كامل." },
  { icon: Gauge, title: "تركيز على الكفاءة", desc: "لا ننظّف الفلاتر فقط — نستعيد أداء التبريد ونقلّل هدر الطاقة الذي يرفع فاتورة ديوا." },
  { icon: CalendarClock, title: "خطط عقود مرنة", desc: "عقود صيانة سنوية بزيارات مجدولة وأولوية في الاستجابة للفلل والشقق والمباني التجارية." },
];

const steps = [
  { title: "تواصل معنا", desc: "اتصل أو راسلنا على واتساب أو احجز. أخبرنا بنوع المكيف والعقار والمشكلة." },
  { title: "فحص وتشخيص", desc: "يفحص مهندسنا النظام ويحدّد بدقة ما يحتاجه." },
  { title: "عرض سعر شفاف", desc: "تحصل على سعر واضح وثابت مقدماً — دون مفاجآت أو ضغط." },
  { title: "الخدمة أو الإصلاح", desc: "ننفّذ العمل بنظافة ووفق المعايير، مع توفّر القطع الشائعة." },
  { title: "اختبار وتقرير", desc: "نختبر أداء التبريد ونسلّمك تقرير خدمة موثّقاً." },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "كم تكلفة صيانة المكيفات في دبي؟",
    a: "تبدأ الخدمة لمرة واحدة من 350 درهماً للوحدة، بحد أدنى 3 وحدات. تعتمد التكلفة الدقيقة على عدد الوحدات ونوعها وما إذا كانت خدمة لمرة واحدة أو عقداً سنوياً. نؤكد سعراً ثابتاً وشفافاً مقدماً بعد فهم نظامك — دون رسوم خفية. وتقلّل خطط العقود من تكلفة الزيارة.",
  },
  {
    q: "كم مرة يجب صيانة المكيف في دبي؟",
    a: "لأن المكيف يعمل طوال العام تقريباً، نوصي بالصيانة كل 3 إلى 4 أشهر، أو على الأقل قبل الصيف وأثناءه. العقد السنوي يجدول ذلك تلقائياً.",
  },
  {
    q: "هل تصونون جميع العلامات التجارية؟",
    a: "نعم. نصون كل العلامات والأنواع الرئيسية — سبليت ومخفي وكاسيت وVRF/VRV وتشيلر ووحدات مجمّعة — بما فيها دايكن وأوجنرال وكاريير وجري وميديا وإل جي وميتسوبيشي وتراين والمزيد.",
  },
  {
    q: "هل تقدّمون خدمة في نفس اليوم أو طوارئ؟",
    a: "نعم. نقدّم خدمة في نفس اليوم حيثما أمكن ودعم طوارئ على مدار الساعة في دبي والإمارات — مهم عند تعطّل المكيف في ذروة الصيف.",
  },
  {
    q: "ماذا تتضمن خدمة المكيف؟",
    a: "تشمل الخدمة عادةً تنظيف الفلاتر والمبادلات، وتسليك خط التصريف، وفحص ضغط الفريون، وفحص التوصيلات الكهربائية والتحكم، واختبار أداء التبريد — يتبعها تقرير خدمة.",
  },
  {
    q: "هل يمكن أن تخفّض الصيانة الدورية فاتورتي؟",
    a: "نعم. المكيف النظيف والمشحون جيداً يستهلك طاقة أقل بوضوح من المهمَل — قد تنخفض الكفاءة 20–30% خلال سنتين دون صيانة، وهذا يظهر في فاتورة ديوا.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "صيانة مكيفات",
  serviceType: "AC Maintenance",
  description:
    "صيانة احترافية للمكيفات في دبي: خدمة وإصلاح وتنظيف وعقود صيانة سنوية.",
  url: `${SITE_URL}${ROUTE}`,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  provider: {
    "@type": "HVACBusiness",
    name: "AGEC Technical Services",
    telephone: PHONE,
    email: "a.altaher@agec.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Quoz Industrial Area 1",
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

export default function ArabicAcMaintenance() {
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
          <p className={eyebrow}>دبي والإمارات · خدمة في نفس اليوم وطوارئ</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
            صيانة المكيفات في دبي — خدمة، إصلاح، وعقود
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            حافظ على برودة مكيفك وكفاءته مع صيانة احترافية من مهندسين مرخّصين:
            خدمة، إصلاحات، تنظيف مبادلات ومجاري، تعبئة غاز، وعقود صيانة سنوية — للفلل
            والشقق والمنشآت التجارية.
          </p>
          <p className="mt-5 inline-flex flex-wrap items-baseline gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-base font-semibold text-white">
            خدمة لمرة واحدة من 350 درهماً للوحدة
            <span className="text-sm font-normal text-white/70">· بحد أدنى 3 وحدات</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              <Phone className="h-4 w-4" /> اتصل الآن
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> واتساب
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>لماذا AGEC</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">صيانة هندسية موثوقة</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <div key={c.title}>
                <c.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 font-heading text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>كيف نعمل</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">خمس خطوات واضحة</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-white">
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
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
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">احجز خدمة مكيفك اليوم</h2>
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
