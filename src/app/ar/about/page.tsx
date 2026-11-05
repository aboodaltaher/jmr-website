import { buildMetadata } from "@/lib/metadata";
import { FOUNDER, PROJECTS_DELIVERED, LICENCE_NO } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, PhoneCall, TrendingUp } from "lucide-react";

// Arabic translation of /about. Faithful to the English copy — no new claims.
// TODO(owner): native Arabic review.
export const metadata = buildMetadata({
  title: "من نحن | AGEC مقاول تكييف في دبي",
  description:
    `AGEC (التاهر غبون للمقاولات الهندسية) مقاول تكييف وكهروميكانيك وصيانة في دبي — ${PROJECTS_DELIVERED} مشروعاً عبر الإمارات منذ 2022.`,
  path: "/ar/about",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const values = [
  { icon: Award, name: "صرامة هندسية", description: "حسابات حمل حراري وتصميم أنظمة وتشغيل تجريبي على يد مهندسين مؤهّلين بخبرة ميدانية في الإمارات." },
  { icon: ShieldCheck, name: "التزام بمواصفات المصنّع", description: "قطع غيار أصلية وإجراءات صيانة معتمدة، ومعدّات بتصنيف المصنّع وضمانات صحيحة." },
  { icon: PhoneCall, name: "دعم 24/7", description: "دعم طوارئ للأعطال عبر الإمارات." },
  { icon: TrendingUp, name: "سجلّ مُثبَت", description: `${PROJECTS_DELIVERED} مشروع تكييف منجز، من الفلل إلى مراكز البيانات والمنشآت الثقافية.` },
];

const capabilities = [
  "تركيب وتنفيذ أنظمة التكييف",
  "صيانة وقائية وتصحيحية",
  "اختبار وضبط وموازنة (TAB)",
  "تشغيل تجريبي وإعادة تشغيل",
  "تعديل وتحديث الأنظمة",
  "دعم طوارئ للأعطال على مدار الساعة",
  "تصميم التكييف وحسابات الحمل الحراري",
  "عقود الصيانة السنوية (AMC)",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  inLanguage: "ar",
  name: FOUNDER,
  jobTitle: "المؤسّس وكبير مهندسي التكييف",
  worksFor: { "@type": "Organization", name: "AGEC Technical Services", url: "https://agec.ae" },
  image: "https://agec.ae/team/mohannad-ghabboun-agec.jpg",
  url: "https://agec.ae/ar/about",
  description:
    "المؤسّس وكبير مهندسي التكييف في AGEC، بخبرة تزيد على 10 سنوات في تكييف الإمارات؛ قاد أعمال التكييف في Parcels بإكسبو 2020 دبي.",
  knowsAbout: ["تصميم التكييف", "أنظمة VRF/VRV", "التشيلر", "الاختبار والضبط والموازنة", "صيانة المكيفات"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://agec.ae/ar" },
    { "@type": "ListItem", position: 2, name: "من نحن", item: "https://agec.ae/ar/about" },
  ],
};

export default function ArabicAbout() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>عن AGEC</p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            مقاولات تكييف يقودها المهندسون في دبي
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            تأسّست في دبي عام 2022 على يد {FOUNDER}، والتاهر غبون للمقاولات الهندسية
            (AGEC) شركة مقاولات تكييف تقدّم خبرة في التركيب والصيانة والاختبار والتشغيل
            التجريبي عبر الإمارات.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                مبنيّة على الهندسة لا على الطرق المختصرة
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
                <p>
                  تأسّست AGEC عام 2022 برسالة واضحة: تقديم حلول تكييف تؤدّي تماماً
                  كما صُمّمت. ومنذ اليوم الأول كان نهجنا هندسياً أولاً — حسابات الحمل
                  الحراري وتصميم الأنظمة والتشغيل التجريبي يتولّاها مهندسون مؤهّلون، لا
                  مجرّد فنيّي تركيب.
                </p>
                <p>
                  نعمل مع عملاء عبر الإمارات، بسجلّ من {PROJECTS_DELIVERED} مشروعاً منجزاً —
                  في دبي والشارقة وعجمان وأبوظبي — تتراوح من الفلل السكنية إلى مراكز
                  البيانات والمباني التجارية والمنشآت الثقافية. وقد تعامل أكبر مشروع
                  مفرد لدينا مع طاقة تبريد 240 طناً، وأكبر قيمة عقد حتى الآن 8.75 مليون
                  درهم.
                </p>
                <p>
                  نعمل وفق معايير هندسية معترف بها للتكييف، منها ASHRAE 111 و SMACNA
                  و CIBSE. وسواء كان المشروع فيلا واحدة أو تنفيذاً متعدّد المواقع،
                  التزامنا واحد: الدقّة والالتزام بالمواعيد وأنظمة تعمل على المدى الطويل.
                </p>
                <p>
                  AGEC هو الاسم التجاري لشركة AGEC Technical Services L.L.C.، الشركة
                  المرخّصة صاحبة هذا الموقع. وتحمل الشركة رخصة تجارية دبي رقم {LICENCE_NO}،
                  صادرة عن دائرة الاقتصاد والسياحة بدبي، تشمل تركيب وصيانة أنظمة التكييف
                  والتهوية وترشيح الهواء.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg lg:min-h-[400px]">
              <Image
                src="/photos/agec-ac-vent-cleaning-villa-dubai.jpg"
                alt="فنّي AGEC ينظّف تهوية التكييف في فيلا بدبي"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">ما الذي يحرّكنا</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.name}>
                <value.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 font-heading text-lg font-semibold">{value.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">ما الذي نقدّمه</h2>
          <ul className="mt-6 max-w-2xl columns-1 gap-x-12 space-y-3 sm:columns-2">
            {capabilities.map((cap) => (
              <li key={cap} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {cap}
              </li>
            ))}
          </ul>
          <Link
            href="/ar/services"
            className="mt-8 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            عرض كل الخدمات ←
          </Link>
        </div>
      </section>

      {/* Engineer profile */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">المهندس وراء العمل</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[320px_1fr]">
            <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-xl bg-bg-soft">
              <Image
                src="/team/mohannad-ghabboun-agec.jpg"
                alt="مهنّد غبون، المؤسّس وكبير مهندسي التكييف في AGEC"
                width={800}
                height={1120}
                className="h-auto w-full object-cover"
                sizes="320px"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold">{FOUNDER}</h3>
              <p className="mt-1 font-medium text-primary">المؤسّس وكبير مهندسي التكييف</p>
              <div className="mt-5 space-y-4 leading-relaxed text-text-muted">
                <p>
                  أسّس {FOUNDER} شركة AGEC عام 2022 ويقود أعمالها الهندسية. يملك أكثر من
                  10 سنوات خبرة في تكييف الإمارات، عبر التصميم والتركيب والاختبار والتشغيل
                  التجريبي للفلل والمباني التجارية والمنشآت الحيوية.
                </p>
                <p>
                  قاد أعمال التكييف في Parcels بإكسبو 2020 دبي — أحد أكبر مشاريع المنطقة
                  وأكثرها تطلّباً — مديراً التركيب والتشغيل التجريبي وفق البرنامج والمواصفات.
                  ويقود ويعتمد أعمال التكييف الهندسية في AGEC وفق المعايير الهندسية في
                  الإمارات.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "أكثر من 10 سنوات خبرة في تكييف الإمارات",
                  "قائد أعمال التكييف — إكسبو 2020 دبي (Parcels)",
                  "متخصّص في الحمل الحراري و VRF/VRV والتشيلر و TAB",
                  "تصميم وتركيب واختبار وتشغيل تجريبي",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-text">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            تبحث عن مقاول تكييف يتقن التفاصيل؟
          </h2>
          <Link
            href="/ar/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            احصل على عرض سعر
          </Link>
        </div>
      </section>
    </>
  );
}
