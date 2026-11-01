import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Check, Wind, AlertCircle } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ar/ac-duct-cleaning-dubai";

export const metadata: Metadata = {
  title: "تنظيف مجاري التكييف في دبي | فلل ومكاتب | AGEC",
  description:
    "تنظيف كامل للمجاري والمبادلات والتصريف مع التعقيم وتقرير إنجاز مكتوب. فلل وشقق ومكاتب. اطلب عرض سعر.",
  alternates: {
    canonical: ROUTE,
    languages: {
      en: `${SITE_URL}/ac-duct-cleaning-dubai`,
      ar: `${SITE_URL}${ROUTE}`,
      "x-default": `${SITE_URL}/ac-duct-cleaning-dubai`,
    },
  },
  openGraph: {
    images: ["/og-image.png"],
    title: "تنظيف مجاري التكييف في دبي | AGEC",
    description:
      "تنظيف كامل للمجاري والمبادلات والتصريف مع التعقيم وتقرير إنجاز مكتوب.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold tracking-widest text-primary";

const whatIsCleaned = [
  "حماية كاملة للمنطقة وتغطيتها بالبلاستيك قبل البدء",
  "فك وتنظيف عميق لشبكات السحب والتوريد",
  "تنظيف المجاري وتعقيمها",
  "تنظيف عميق للمبادلات والمحرك والمروحة",
  "تنظيف وتسليك صينية وأنبوب التصريف",
  "تنظيف منطقة التجويف",
  "معالجة تعقيم احترافية",
  "تقرير إنجاز مكتوب للخدمة",
];

const signs = [
  "غبار أو علامات سوداء حول شبكات التوريد",
  "رائحة عفنة أو خانقة عند تشغيل المكيف",
  "ضعف تدفق الهواء من الفتحات",
  "زيادة الغبار في الغرف أو تفاقم الحساسية",
  "عفن ظاهر على الشبكات أو الفتحات",
  "بعد أعمال التجديد أو قبل الانتقال إلى عقار",
];

const packages = [
  { name: "تنظيف المجاري الشامل", for: "الباقة الكاملة — نظام مجاري كامل للفلل والمكاتب" },
  { name: "تنظيف المكيف الكامل", for: "تنظيف سنوي مجدول لأنظمة السبليت والمخفية والمركزية" },
  { name: "تنظيف السبليت", for: "تنظيف مركّز للوحدات الجدارية" },
  { name: "تنظيف المبادلات", for: "أكثر تنظيف تأثيراً على كفاءة التبريد" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "كم مرة يجب تنظيف المجاري؟",
    a: "لأغلب الفلل والمكاتب في دبي، مرة واحدة سنوياً تحافظ على تدفق الهواء وجودته. نظّف بوتيرة أعلى إن كنت قرب أعمال بناء أو غبار كثيف، أو لديك حيوانات أليفة، أو يعاني أحد أفراد المنزل من الحساسية.",
  },
  {
    q: "كم تستغرق الفيلا؟",
    a: "يعتمد ذلك على عدد الوحدات وعدد الشبكات وتصميم المجاري. نؤكد الوقت المتوقع عند التسعير بعد معرفة نظامك — الشقة الواحدة أسرع بكثير من فيلا متعددة الأنظمة.",
  },
  {
    q: "هل يختلف تنظيف المجاري عن صيانة المكيف؟",
    a: "نعم. الصيانة تُبقي الوحدة تعمل — الفلاتر والغاز والفحوصات الكهربائية. أما تنظيف المجاري فيستهدف مسار الهواء نفسه: الشبكات والمجاري والمبادلات والمروحة والتصريف، حيث يتراكم الغبار والعفن والروائح.",
  },
  {
    q: "ماذا يتضمن التقرير؟",
    a: "تحصل على تقرير إنجاز مكتوب يوضّح ما تم تنظيفه، والحالة قبل وبعد، ومادة التعقيم المستخدمة، وأي توصيات — مفيد للملاك وعمليات التسليم وسجلاتك الخاصة.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "تنظيف مجاري التكييف",
  serviceType: "AC Duct Cleaning",
  description:
    "تنظيف كامل للمجاري والمبادلات والتصريف مع التعقيم وتقرير إنجاز مكتوب للفلل والشقق والمكاتب في دبي.",
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

export default function ArabicDuctCleaning() {
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
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className={eyebrow}>دبي والإمارات · فلل وشقق ومكاتب</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
              تنظيف مجاري التكييف في دبي مع تقرير إنجاز
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              تنظيف كامل للمجاري والمبادلات والتصريف مع التعقيم — وتقرير مكتوب بما
              نظّفناه ووجدناه. للفلل والشقق والمكاتب في جميع أنحاء الإمارات.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
                <Phone className="h-4 w-4" /> اتصل الآن
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
                <MessageCircle className="h-4 w-4" /> أرسل صور الفتحات على واتساب
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/photos/agec-ac-vent-cleaning-villa-dubai.jpg"
              alt="فني AGEC ينظّف تهوية التكييف في فيلا بدبي"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS CLEANED */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>ما الذي يتم تنظيفه</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            الشبكات والمجاري والمبادلات والمروحة والتصريف والتجويف
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whatIsCleaned.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SIGNS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>علامات حاجة المجاري للتنظيف</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">متى تحجز تنظيف المجاري</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {signs.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>باقات التنظيف</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">اختر التنظيف المناسب لنظامك</h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            كل باقة تشمل تعقيماً احترافياً وتقرير إنجاز مكتوب. يعتمد السعر على عدد
            الوحدات والنظام، لذلك نسعّر بعد معرفة تفاصيل منظومتك — أرسل صور الفتحات
            على واتساب لتقدير سريع.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col rounded-xl border border-border bg-white p-7">
                <Wind className="h-9 w-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-lg font-bold">{pkg.name}</h3>
                <p className="mt-1 flex-1 text-sm text-text-muted">{pkg.for}</p>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-primary hover:underline">
                  اطلب عرض سعر ←
                </a>
              </div>
            ))}
          </div>
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
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">احجز تنظيف مجاري مع تقرير مكتوب</h2>
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
