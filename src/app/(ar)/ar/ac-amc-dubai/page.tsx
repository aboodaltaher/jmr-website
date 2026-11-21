import Link from "next/link";
import { MidPageCta } from "@/components/MidPageCta";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { Phone, MessageCircle, Check } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { prices } from "@/data/prices";
import { AR_ONE_OFF_SENTENCE } from "@/data/prices-ar";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ar/ac-amc-dubai";

export const metadata = buildMetadata({
  title: "عقد صيانة المكيفات السنوي (AMC) في دبي | AGEC",
  description:
    "عقد صيانة المكيفات السنوي (AMC) في دبي للفلل والشقق والمكاتب والمباني: زيارات مجدولة، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة عند الأعطال.",
  path: ROUTE,
  locale: "ar_AE",
  languages: {
    "en-AE": `${SITE_URL}/ac-amc-dubai`,
    "ar-AE": `${SITE_URL}${ROUTE}`,
    "x-default": `${SITE_URL}/ac-amc-dubai`,
  },
});

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

// One wording for the visit frequency, used in the "what it covers" list and the PPM table.
const visitsPerYear =
  "زيارتان أو 4 أو 6 زيارات في السنة حسب الخطة؛ والموصى به كل 3 أشهر (4 زيارات سنوياً)";

const covers = [
  `زيارات مجدولة — ${visitsPerYear}`,
  "تنظيف الفلاتر والملفات",
  "تنظيف خط التصريف",
  "فحص ضغط الفريون",
  "فحص الأجزاء الكهربائية والتحكم",
  "اختبار الأداء",
  "تقرير خدمة مع صور بعد كل زيارة",
];

const steps = [
  "معاينة الموقع وفحص مرجعي للمنظومة الحالية.",
  "عرض مكتوب.",
  "توقيع العقد.",
  "زيارات مجدولة.",
  "تقرير خدمة مع صور بعد كل زيارة.",
];

const slaTiers = [
  ["طارئ", "خلال 4 ساعات"],
  ["عاجل", "في نفس اليوم"],
  ["اعتيادي", "خلال 48 ساعة"],
];

const faqs: { q: string; a: string }[] = [
  {
    q: "كم مرة يجب صيانة مكيف الفيلا في دبي؟",
    a: "نوصي بزيارة كل 3 أشهر (4 زيارات سنوياً)، مع أعلى استخدام بين مايو وأكتوبر.",
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
    q: "هل يمكنني إلغاء العقد أو تعديل نطاقه؟",
    a: "مدة العقد 12 شهراً. يمكنكم إضافة وحدات أو إزالتها كتابةً في أي وقت، ويحق لأي من الطرفين إنهاء العقد بإشعار كتابي مدته 30 يوماً. وتُحتسب الزيارات المنفَّذة فعلاً بسعر الخطة.",
  },
  {
    q: "هل يمكنكم تغطية مبنى كامل أو عدة وحدات بعقد واحد؟",
    a: "نعم. في المكاتب والمحلات التجارية والفنادق والمجمّعات المُدارة نضع كامل منظومة التكييف والتهوية لديكم — سبليت ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء (AHU)، ووحدات ملف المروحة (FCU)، والتهوية — تحت عقد صيانة واحد، مع مستويات استجابة محدّدة (SLA) وتقارير موثّقة لفريق إدارة المرافق.",
  },
  {
    q: "كيف يُسعَّر عقد الصيانة التجاري؟",
    a: `تبدأ الخطط السكنية من ${Math.min(...prices.amcPlans.map((p) => p.from))} درهماً للوحدة في الزيارة الواحدة. أما التغطية التجارية وتغطية المباني فتُسعَّر بعد معاينة الموقع، بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه — الزيارات المجدولة بسعر ثابت، وقطع الغيار والأعمال الكبرى تُسعَّر كتابةً قبل التنفيذ.`,
  },
  {
    q: "ماذا يستلم مدير المبنى بعد كل زيارة؟",
    a: "تقرير خدمة مع صور بعد كل زيارة، موثّق لفريق إدارة المرافق. وهو السجل الذي يحتاجه مدير المرافق للتدقيق وإعداد الميزانيات.",
  },
  {
    q: "بمن نتصل إذا تعطّلت إحدى الوحدات في المبنى؟",
    a: "يمكنكم التواصل معنا على مدار الساعة (24/7) بالاتصال أو عبر واتساب. مستويات الاستجابة في عقود المباني: الطارئ خلال 4 ساعات، والعاجل في نفس اليوم، والاعتيادي خلال 48 ساعة.",
  },
  {
    q: "هل تعاينون المبنى قبل تسعير عقد الصيانة التجاري؟",
    a: "نعم. نبدأ بمعاينة الموقع وفحص مرجعي للمنظومة الحالية، ثم نرسل عرضاً مكتوباً. يُسعَّر العقد بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه.",
  },
  {
    q: "هل تغطّون إمارتي؟",
    a: `نعم. نخدم الإمارات السبع: أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة. ومشاريعنا المنجزة حتى الآن في دبي والشارقة وعجمان وأبوظبي. اتصل أو راسلنا على واتساب على الرقم ${PHONE_DISPLAY}.`,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "عقد صيانة مكيفات سنوي",
  serviceType: "AC Annual Maintenance Contract",
  description:
    "عقود صيانة سنوية للمكيفات في دبي بزيارات مجدولة، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة.",
  url: `${SITE_URL}${ROUTE}`,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  // One LocalBusiness per page: the site-wide block in SiteSchema (@id #business) is referenced here.
  provider: { "@id": `${SITE_URL}/#business` },
};

export default function ArabicAmc() {
  const wa = whatsappUrl(ROUTE);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqJsonLd items={faqs} inLanguage="ar" />

      {/* Breadcrumb (single trail + BreadcrumbList JSON-LD) */}
      <BreadcrumbBand
        lang="ar"
        items={[
          { name: "الخدمات", href: "/ar/services" },
          { name: "عقود صيانة المكيفات السنوية في دبي", href: "/ar/ac-amc-dubai" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 18% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className={eyebrow}>دبي والإمارات · على مدار الساعة</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
            عقد صيانة المكيفات السنوي (AMC) في دبي
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            عقد صيانة المكيفات السنوي (AMC) في دبي يُبقي مكيفك تحت صيانة مجدولة:
            مهندس مخصّص، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة عند
            أي عطل. {AR_ONE_OFF_SENTENCE}
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

      {/* WHO AN AMC SUITS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>لمن يناسب العقد</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">لمن يناسب عقد الصيانة السنوي</h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            ملّاك الفلل وملّاك العقارات ومديرو العقارات، والمكاتب والمحلات التجارية. مقاول واحد يتولّى كل وحدة وفق جدول ثابت، فتُكتشف الأعطال قبل ذروة الصيف لا في أثنائها.
          </p>
        </div>
      </section>

      {/* WHAT AN AMC COVERS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>ما يشمله العقد</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            ماذا يشمل عقد الصيانة السنوي للمكيفات (AMC) في دبي؟
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {covers.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-sm text-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>الخطط</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">اختر خطة الصيانة المناسبة</h2>
          <p className="mt-4 text-text-muted">الأسعار لكل وحدة لكل زيارة. جميع الخطط تشمل تقرير خدمة مع صور بعد كل زيارة.</p>
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
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />تقرير خدمة مع صور لكل زيارة</li>
                </ul>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  اطلب هذه الخطة
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page lead block, directly after the first proof section */}
      <MidPageCta service="عقد الصيانة السنوي" path="/ar/ac-amc-dubai" lang="ar" />

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

      {/* COMMERCIAL & BUILDING AMC (HVAC MAINTENANCE) */}
      <section id="commercial-amc" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>للمباني والمنشآت</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            عقد الصيانة للمباني والمنشآت التجارية (صيانة التكييف والتهوية HVAC)
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            العقد نفسه يتّسع من فيلا واحدة إلى مبنى كامل. في المكاتب والمحلات التجارية والمطاعم والفنادق والمجمّعات المُدارة، نضع كامل منظومة التكييف والتهوية لديكم تحت عقد صيانة واحد — سبليت ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء (AHU)، ووحدات ملف المروحة (FCU)، والتهوية — فيكون فريق هندسي واحد مسؤولاً عن كل شيء، بدلاً من زيارات متفرقة من جهات مختلفة.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "كل المعدات تحت عقد واحد — سبليت، ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء، ووحدات ملف المروحة، والتهوية",
              "تسعير شفاف — الزيارات المجدولة بسعر ثابت، وقطع الغيار والأعمال الكبرى تُسعَّر كتابةً قبل التنفيذ",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-heading text-2xl font-bold">جدول الصيانة الدورية (PPM)</h3>
          <p className="mt-3 text-text-muted">زيارات الصيانة الدورية حسب نوع المعدات.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-start text-sm">
              <thead>
                <tr className="border-b border-border text-xs tracking-wider text-text-muted">
                  <th className="py-3 pe-4 text-start font-semibold">المعدات</th>
                  <th className="py-3 text-start font-semibold">زيارات الصيانة الدورية</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-border">
                  <th scope="row" className="py-3 pe-4 text-start font-medium">وحدات السبليت والمجاري</th>
                  <td className="py-3 text-text-muted">
                    {visitsPerYear}. في كل زيارة: تنظيف الفلاتر والملفات، وتنظيف خط التصريف، وفحص ضغط الفريون، وفحص الأجزاء الكهربائية والتحكم، واختبار الأداء، وتقرير خدمة مع صور.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="py-3 pe-4 text-start font-medium">
                    VRF/VRV، ووحدات مناولة الهواء، ووحدات ملف المروحة، والتهوية
                  </th>
                  <td className="py-3 text-text-muted">
                    تنظيف فلاتر وحدات ملف المروحة والوحدات الداخلية: كل 3 أشهر. باقي الزيارات تُحدَّد لكل موقع بعد المعاينة، بحسب عدد المعدات وأنواعها.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="py-3 pe-4 text-start font-medium">التشيلرات</th>
                  <td className="py-3 text-text-muted">
                    جدول مخصّص — راجع{" "}
                    <Link href="/ar/services/chiller-maintenance-dubai" className="font-semibold text-primary hover:underline">
                      صيانة التشيلر
                    </Link>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* TODO(owner): PPM visit frequency and task list per plant type for buildings (VRF/VRV outdoor units, AHUs, ventilation, chillers), as on the English page. */}

          <h3 className="mt-10 font-heading text-2xl font-bold">مستويات الاستجابة (SLA)</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[20rem] text-start text-sm">
              <thead>
                <tr className="border-b border-border text-xs tracking-wider text-text-muted">
                  <th className="py-3 pe-4 text-start font-semibold">المستوى</th>
                  <th className="py-3 text-start font-semibold">زمن الاستجابة</th>
                </tr>
              </thead>
              <tbody>
                {slaTiers.map(([tier, response]) => (
                  <tr key={tier} className="border-b border-border">
                    <th scope="row" className="py-3 pe-4 text-start font-medium">{tier}</th>
                    <td className="py-3 text-text-muted">{response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-text-muted">
            نربط مستوى الاستجابة بمدى أهمية كل نظام، ويكون المستوى الذي تحتاجونه جزءاً من عرض السعر بعد معاينة الموقع.
          </p>

          <h3 className="mt-10 font-heading text-2xl font-bold">التقارير لفرق إدارة المرافق</h3>
          <p className="mt-3 text-text-muted">
            تقرير خدمة مع صور بعد كل زيارة — هو السجل الذي يحتاجه مديرو المرافق للتدقيق وإعداد الميزانيات.
          </p>

          <p className="mt-8 text-text-muted">
            يُسعَّر عقد المباني بعد معاينة الموقع، بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>كيف يعمل</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">كيف يعمل العقد</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SWITCHING */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الانتقال</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">الانتقال من مقاولكم الحالي</h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            يمكننا استلام الصيانة من مقاولكم الحالي، ونبدأ بفحص مرجعي لوحداتكم.
          </p>
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
