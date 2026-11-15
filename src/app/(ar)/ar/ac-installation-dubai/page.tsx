import Image from "next/image";
import { Check, MessageCircle, Phone } from "lucide-react";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { MidPageCta } from "@/components/MidPageCta";
import { business } from "@/data/business";
import { money, offersFor, prices } from "@/data/prices";
import { PHONE, whatsappUrl } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

// Arabic draft of /ac-installation-dubai. Arabic copy is for the owner's review: see ARABIC_REVIEW.md.
const SITE_URL = business.url;
const ROUTE = "/ar/ac-installation-dubai";

const [split, , ducted, vrf, replacement] = prices.installation;
const splitPrice = money(split.from as number);
const ductedPrice = money(ducted.from as number);
const vrfPrice = money(vrf.from as number);
const replacePrice = money(replacement.from as number);

export const metadata = buildMetadata({
  title: "تركيب مكيفات في دبي | توريد وتركيب | AGEC",
  description: `تركيب مكيفات في دبي والوحدة الجديدة مشمولة: سبليت وكاسيت ${splitPrice} درهم للطن. المواسير والعزل والتصريف والتوصيل الكهربائي مشمولة. اطلب عرض سعر.`,
  path: ROUTE,
  locale: "ar_AE",
  languages: {
    "en-AE": `${SITE_URL}/ac-installation-dubai`,
    "ar-AE": `${SITE_URL}${ROUTE}`,
    "x-default": `${SITE_URL}/ac-installation-dubai`,
  },
});

const eyebrow = "text-sm font-semibold tracking-widest text-primary";
const h2 = "mt-3 font-heading text-3xl font-bold md:text-4xl";
const body = "mt-5 text-lg leading-relaxed text-text-muted";

const included = [
  "وحدة التكييف الجديدة، نوفّرها نحن",
  "مواسير النحاس",
  "عزل المواسير",
  "توصيل التصريف",
  "التوصيل الكهربائي",
  "اختبار التفريغ والضغط لمواسير الفريون",
  "تسجيل قراءات التشغيل",
  "التسليم وشرح طريقة استخدام التحكم",
];

const brands = ["Daikin", "Trane", "O General", "Mitsubishi", "LG", "Carrier", "York"];

const systems = [
  { name: "مكيف سبليت", text: "وحدة داخلية ووحدة خارجية لغرفة أو منطقة واحدة. الأكثر شيوعاً في المنازل والأسرع تركيباً.", price: `${splitPrice} درهم للطن` },
  { name: "مكيف كاسيت", text: "وحدة داخلية مدمجة في السقف توزّع الهواء في عدة اتجاهات، للغرف الكبيرة والمساحات المفتوحة.", price: `${splitPrice} درهم للطن` },
  { name: "سبليت مجاري (دكت)", text: "وحدة داخلية فوق السقف تغذّي عدة غرف عبر مجاري هواء، ولا يظهر إلا فتحات التوزيع. تركيب المجاري جزء من العمل.", price: `ابتداءً من ${ductedPrice} درهم للطن` },
  { name: "نظام VRF للمنازل", text: "وحدة خارجية واحدة تخدم عدة وحدات داخلية، لكل منها تحكم مستقل بدرجة الحرارة. مناسب للفلل الكبيرة.", price: `ابتداءً من ${vrfPrice} درهم للطن` },
];

const steps = [
  { t: "أرسل لنا صورة الغرفة", d: "أرسل صورة للغرفة على واتساب مع المنطقة وما تريد تبريده. نعطيك فكرة أولية عن نوع الوحدة قبل أي زيارة." },
  { t: "نحدّد الحجم", d: "يفحص المهندس الغرفة وطريقة استخدامها والحرارة الداخلة إليها، ويوصي بنوع الوحدة وسعتها بالطن." },
  { t: "سعر مكتوب", d: "يشمل السعر الوحدة والتركيب، فلا إضافات للمواسير أو العزل أو التصريف أو التوصيل الكهربائي." },
  { t: "نركّب", d: "نحو 3 ساعات لوحدة سبليت واحدة، ونحو 7 ساعات لوحدة مجاري تشمل تركيب المجاري." },
  { t: "نختبر ونسلّم", d: "نختبر النظام ونسجّل القراءات ونشرح لك طريقة الاستخدام." },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "كم تكلفة تركيب المكيف في دبي؟",
    a: `أسعارنا تشمل الوحدة الجديدة. مكيف السبليت أو الكاسيت ${splitPrice} درهم للطن، والسبليت المجاري ابتداءً من ${ductedPrice} درهم للطن، ونظام VRF للمنازل ابتداءً من ${vrfPrice} درهم للطن. واستبدال وحدة قديمة ابتداءً من ${replacePrice} درهم للوحدة. يعتمد السعر النهائي على حجم الوحدة وتصميم العمل، ونؤكده كتابةً قبل البدء.`,
  },
  {
    q: "كم يستغرق تركيب المكيف؟",
    a: "نحو 3 ساعات لوحدة سبليت واحدة، ونحو 7 ساعات لوحدة مجاري تشمل تركيب المجاري. الأعمال الأكبر بعدة وحدات تحتاج وقتاً أطول، ونذكر المدة في عرض السعر.",
  },
  {
    q: "ماذا يشمل سعر التركيب؟",
    a: "الوحدة الجديدة، ومواسير النحاس، وعزل المواسير، وتوصيل التصريف، والتوصيل الكهربائي. السعر للتوريد والتركيب معاً وليس للتركيب وحده.",
  },
  {
    q: "ما الضمان الذي أحصل عليه؟",
    a: "تمنح الشركة المصنّعة ضماناً لمدة 5 سنوات على الكمبروسر. وتمنح AGEC ضماناً لمدة سنة واحدة على الوحدة الداخلية وعلى أعمال التركيب.",
  },
  {
    q: "كم طناً من التكييف أحتاج؟",
    a: "يعتمد ذلك على مساحة الغرفة وطريقة استخدامها وكمية الشمس التي تتعرض لها ومستوى العزل، وقد تعطي القاعدة التقريبية وحدة أصغر أو أكبر من اللازم. أرسل لنا صورة للغرفة ومساحتها التقريبية ويخبرك المهندس بالحجم الذي نوصي به.",
  },
  {
    q: "هل تستبدلون وحدة التكييف القديمة؟",
    a: `نعم. استبدال وحدة قديمة ابتداءً من ${replacePrice} درهم للوحدة، والوحدة الجديدة علينا. نفكّ الوحدة القديمة ونركّب الجديدة.`,
  },
  {
    q: "ما العلامات التجارية التي تركّبونها؟",
    a: "نركّب ونصلح مكيفات Daikin وTrane وO General وMitsubishi وLG وCarrier وYork. أخبرنا بالعلامة التي تفضّلها ونسعّرها لك.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "تركيب مكيفات في دبي",
  serviceType: "توريد وتركيب مكيفات",
  inLanguage: "ar",
  url: `${SITE_URL}${ROUTE}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Dubai" },
  ...(offersFor(prices.installation).length ? { offers: offersFor(prices.installation) } : {}),
};

export default function ArabicAcInstallation() {
  const wa = whatsappUrl(ROUTE);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqJsonLd items={faqs} inLanguage="ar" />

      <BreadcrumbBand
        lang="ar"
        items={[
          { name: "الخدمات", href: "/ar/services" },
          { name: "تركيب مكيفات في دبي", href: ROUTE },
        ]}
      />

      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 18% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className={eyebrow}>دبي والإمارات · توريد وتركيب</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.2] md:text-6xl">
            تركيب مكيفات في دبي: الوحدة الجديدة مشمولة والسعر بالطن
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            تركيب مكيفات في دبي ابتداءً من {splitPrice} درهم للطن لمكيف السبليت أو الكاسيت. يشمل السعر
            الوحدة الجديدة ومواسير النحاس والعزل والتصريف والتوصيل الكهربائي. وحدة السبليت الواحدة
            تستغرق نحو 3 ساعات.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark">
              <Phone className="h-4 w-4" /> اتصل الآن
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]">
              <MessageCircle className="h-4 w-4" /> أرسل لنا صورة الغرفة على واتساب
            </a>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الأسعار</p>
          <h2 className={h2}>تكلفة تركيب المكيفات في دبي</h2>
          <p className={body}>
            هذه أسعار توريد وتركيب: الوحدة الجديدة مشمولة، فلا تشتري الوحدة بشكل منفصل. نؤكد السعر
            النهائي كتابةً بعد معرفة حجم الوحدة وتصميم العمل.
          </p>
          <div className="mt-8 overflow-x-auto" tabIndex={0} role="region" aria-label="أسعار تركيب المكيفات">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="border border-border px-4 py-3 text-start font-semibold">النوع</th>
                  <th scope="col" className="border border-border px-4 py-3 text-start font-semibold">السعر (درهم)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["سبليت، توريد وتركيب", `${splitPrice} للطن`],
                  ["كاسيت، توريد وتركيب", `${splitPrice} للطن`],
                  ["سبليت مجاري، توريد وتركيب", `ابتداءً من ${ductedPrice} للطن`],
                  ["VRF للمنازل، توريد وتركيب", `ابتداءً من ${vrfPrice} للطن`],
                  ["استبدال وحدة قديمة", `ابتداءً من ${replacePrice} للوحدة`],
                ].map(([a, b]) => (
                  <tr key={a}>
                    <th scope="row" className="border border-border px-4 py-3 text-start font-semibold">{a}</th>
                    <td className="border border-border px-4 py-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-text-muted">الأسعار لا تشمل ضريبة القيمة المضافة ما لم يُذكر خلاف ذلك، والسعر النهائي بعد فحص المهندس.</p>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className={eyebrow}>ما تحصل عليه</p>
            <h2 className={h2}>ماذا يشمل تركيب المكيف</h2>
            <ul className="mt-6 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-text">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[1206/895] overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/agec-villa-interior-concealed-cooling-dubai.jpg"
              alt="مكيف مجاري مخفي مركّب في فيلا بدبي من AGEC"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <MidPageCta service="تركيب المكيفات" path={ROUTE} lang="ar" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className={eyebrow}>أنواع الوحدات</p>
          <h2 className={h2}>سبليت وكاسيت ومجاري وVRF لمنزلك</h2>
          <p className={body}>
            نركّب أربعة أنواع من المكيفات في المنازل. يعتمد الأنسب على التصميم وحجم الغرف ومقدار ما
            تريد ظهوره من السقف.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {systems.map((s) => (
              <div key={s.name} className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-text-muted">{s.text}</p>
                <p className="mt-3 font-semibold text-text">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className={eyebrow}>المدة</p>
            <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">كم يستغرق التركيب</h2>
            <p className={body}>
              نحو 3 ساعات لوحدة سبليت واحدة، ونحو 7 ساعات لوحدة مجاري تشمل تركيب المجاري. الأعمال
              بعدة وحدات تحتاج وقتاً أطول، ونذكر المدة في عرض السعر.
            </p>
          </div>
          <div>
            <p className={eyebrow}>الضمان</p>
            <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">ضمان التركيب</h2>
            <p className={body}>
              تمنح الشركة المصنّعة ضماناً لمدة 5 سنوات على الكمبروسر. وتمنح AGEC ضماناً لمدة سنة واحدة
              على الوحدة الداخلية وعلى أعمال التركيب.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الاستبدال</p>
          <h2 className={h2}>استبدال وحدة تكييف قديمة</h2>
          <p className={body}>
            إذا كانت وحدتك قديمة أو كثيرة الأعطال أو لا يستحق إصلاحها، نوفّر وحدة جديدة ونركّبها.
            استبدال وحدة قديمة ابتداءً من {replacePrice} درهم للوحدة، والوحدة الجديدة مشمولة. نفكّ الوحدة
            القديمة ونوصّل الجديدة.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>طريقة العمل</p>
          <h2 className={h2}>كيف نركّب مكيفك</h2>
          <ol className="mt-8 space-y-5">
            {steps.map((s, i) => (
              <li key={s.t} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">{i + 1}</span>
                <span className="pt-1">
                  <span className="font-semibold text-text">{s.t}.</span> <span className="text-text-muted">{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>العلامات التجارية</p>
          <h2 className={h2}>العلامات التي نركّبها ونصلحها</h2>
          <ul className="mt-6 flex flex-wrap gap-3" dir="ltr">
            {brands.map((b) => (
              <li key={b} className="rounded-full border border-border bg-white px-5 py-2 font-semibold text-text">{b}</li>
            ))}
          </ul>
          <p className={body}>
            أخبرنا بالعلامة التي تفضّلها ونسعّرها لك. أسماء العلامات التجارية مملوكة لأصحابها، وتُذكر
            هنا لبيان المعدات التي نعمل عليها.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>الأسئلة الشائعة</p>
          <h2 className={h2}>تركيب المكيفات في دبي: أسئلة شائعة</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-text marker:content-none">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl leading-none text-primary transition-transform after:content-['+'] group-open:rotate-45" />
                </summary>
                <p className="px-5 pb-5 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
