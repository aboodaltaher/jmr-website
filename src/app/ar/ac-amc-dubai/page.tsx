import type { Metadata } from "next";
import { Phone, MessageCircle, Check } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ar/ac-amc-dubai";

export const metadata: Metadata = {
  title: "عقود صيانة المكيفات السنوية في دبي | AMC | AGEC",
  description:
    "عقود صيانة سنوية للمكيفات في دبي بزيارات مجدولة وتقارير موثّقة وأولوية في الاستجابة. تبدأ خدمة الوحدة من 350 درهماً. اطلب عرض سعر.",
  alternates: {
    canonical: ROUTE,
    languages: {
      en: `${SITE_URL}/ac-amc-dubai`,
      ar: `${SITE_URL}${ROUTE}`,
      "x-default": `${SITE_URL}/ac-amc-dubai`,
    },
  },
  openGraph: {
    images: ["/og-image.png"],
    title: "عقود صيانة المكيفات السنوية في دبي | AGEC",
    description:
      "زيارات مجدولة، تقارير موثّقة، وأولوية في الاستجابة. تبدأ خدمة الوحدة من 350 درهماً.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold tracking-widest text-primary";

const plans = [
  { name: "الأساسية", visits: "زيارتان", price: "250 درهم", response: "استجابة خلال 48 ساعة", parts: "خصم 5% على القطع", popular: false },
  { name: "القياسية", visits: "4 زيارات", price: "320 درهم", response: "استجابة خلال 24 ساعة", parts: "خصم 10% على القطع", popular: true },
  { name: "المميّزة", visits: "6 زيارات", price: "400 درهم", response: "استجابة في نفس اليوم", parts: "خصم 15% على القطع", popular: false },
];

const excluded = [
  "قطع الغيار والمكوّنات",
  "تعبئة الفريون وإعادة الشحن",
  "استبدال الكمبروسر والمكوّنات الرئيسية الأخرى",
  "الأعطال الناتجة عن سوء الاستخدام أو التلف أو عمل مقاولين آخرين",
  "تنظيف المجاري (يُسعّر على حدة)",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "كم مرة يجب صيانة مكيف الفيلا في دبي؟",
    a: "نوصي بكل 3 إلى 4 أشهر، مع أعلى استخدام بين مايو وأكتوبر.",
  },
  {
    q: "ما الفرق بين عقد الصيانة والخدمة لمرة واحدة؟",
    a: "الخدمة لمرة واحدة تعالج مشكلة اليوم. أما العقد السنوي فيجدول زيارات السنة، ويمنحك مهندساً مخصّصاً وتقارير، ويضع إصلاحاتك في مقدمة الأولوية.",
  },
  {
    q: "هل قطع الغيار والغاز مشمولة؟",
    a: "الصيانة الدورية مشمولة في سعر الزيارة. قطع الغيار وتعبئة الفريون غير مشمولة، لكننا نسعّرها كتابةً قبل أي عمل، ويحصل عملاء العقود على خصم على القطع حسب الخطة.",
  },
  {
    q: "هل تستلمون الصيانة من مقاول حالي؟",
    a: "نعم. نبدأ بفحص مرجعي لوحداتكم، ثم نتفق على النطاق كتابةً.",
  },
  {
    q: "هل تغطّون إمارتي؟",
    a: "نخدم الإمارات السبع. اتصل أو راسلنا على واتساب على الرقم +971 58 557 5987.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "عقد صيانة مكيفات سنوي",
  serviceType: "AC Annual Maintenance Contract",
  description:
    "عقود صيانة سنوية للمكيفات في دبي بزيارات مجدولة وتقارير موثّقة وأولوية في الاستجابة.",
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

export default function ArabicAmc() {
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
          <p className={eyebrow}>دبي والإمارات · على مدار الساعة</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
            عقود صيانة المكيفات السنوية في دبي
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            حافظ على برودة مكيفك وكفاءته بعقد صيانة سنوي: زيارات مجدولة، تقارير
            موثّقة بعد كل زيارة، وأولوية في الاستجابة. تبدأ خدمة الوحدة لمرة واحدة
            من 350 درهماً (بحد أدنى 3 وحدات).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              <Phone className="h-4 w-4" /> اتصل الآن
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> واتساب لعرض سعر
            </a>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>الخطط</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">اختر خطة الصيانة المناسبة</h2>
          <p className="mt-4 text-text-muted">الأسعار لكل وحدة لكل زيارة. جميع الخطط تشمل تقريراً موثّقاً بعد كل زيارة.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-xl border bg-white p-7 ${p.popular ? "border-primary shadow-lg" : "border-border"}`}
              >
                {p.popular && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    الأكثر طلباً
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold">{p.name}</h3>
                <p className="mt-2 font-heading text-3xl font-bold text-primary">
                  {p.price}
                  <span className="text-sm font-normal text-text-muted"> / وحدة / زيارة</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-text-muted">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />{p.visits} في السنة</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />{p.response}</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />{p.parts}</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />تقرير موثّق لكل زيارة</li>
                </ul>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  اطلب هذه الخطة
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUDED */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>ما هو غير مشمول</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">بوضوح وشفافية</h2>
          <p className="mt-4 text-text-muted">الأمور التالية غير مشمولة في سعر العقد، لكننا نسعّرها كتابةً قبل أي عمل:</p>
          <ul className="mt-6 space-y-3">
            {excluded.map((e) => (
              <li key={e} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {e}
              </li>
            ))}
          </ul>
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
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">احمِ مكيفك بعقد صيانة سنوي</h2>
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
