import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin, Award, Wrench, CalendarCheck } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";

export const metadata = buildMetadata({
  title: "تكييف وتهوية في دبي | تركيب وصيانة وإصلاح | AGEC",
  description:
    "AGEC للخدمات الفنية في دبي: تركيب وصيانة وإصلاح أنظمة التكييف والتهوية للفلل والشقق والمنشآت التجارية. استجابة خلال ساعة على مدار الساعة.",
  path: "/ar",
  locale: "ar_AE",
  ogTitle: "تكييف وتهوية في دبي | AGEC",
  ogDescription:
    "تركيب وصيانة وإصلاح أنظمة التكييف في دبي والإمارات. استجابة خلال ساعة.",
  languages: { en: `${SITE_URL}/`, ar: `${SITE_URL}/ar`, "x-default": `${SITE_URL}/` },
});

const points = [
  { icon: Clock, title: "استجابة خلال ساعة", desc: "نرد على الاتصال والواتساب خلال ساعة، على مدار الساعة." },
  { icon: ShieldCheck, title: "شركة مرخّصة", desc: "فنيّون مدرّبون يعملون وفق معايير ASHRAE وبلدية دبي." },
  { icon: MapPin, title: "جميع الإمارات السبع", desc: "نخدم دبي وأبوظبي والشارقة وبقية الإمارات." },
  { icon: Award, title: "أكثر من 30 مشروعاً", desc: "من الفلل السكنية إلى المباني التجارية ومراكز البيانات." },
];

const services = [
  {
    icon: Wrench,
    href: "/ar/ac-repair-dubai",
    title: "إصلاح المكيفات",
    desc: "المكيف لا يبرّد أو يسرّب الماء أو يفصل الكهرباء؟ نشخّص السبب الجذري ونعطيك السعر كتابةً قبل البدء.",
  },
  {
    icon: CalendarCheck,
    href: "/ar/ac-amc-dubai",
    title: "الصيانة وعقود الصيانة السنوية",
    desc: "خطط صيانة سنوية بزيارات مجدولة وتقارير موثّقة وأولوية في الاستجابة. تبدأ خدمة الوحدة من 350 درهماً.",
  },
];

export default function ArabicHome() {
  const wa = whatsappUrl("/ar");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 18% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold tracking-widest text-primary">
            دبي والإمارات · على مدار الساعة
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.15] md:text-6xl">
            تكييف وتهوية في دبي — تركيب، صيانة، وإصلاح
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            شركة AGEC (التاهر غبون للمقاولات الهندسية) تقدّم حلول التكييف والتهوية
            للفلل والشقق والمنشآت التجارية — بخبرة هندسية، تقارير موثّقة، واستجابة
            خلال ساعة.
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

      {/* POINTS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p) => (
              <div key={p.title}>
                <p.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h2 className="mt-3 font-heading text-lg font-bold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">خدماتنا</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="flex flex-col rounded-xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                <s.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-text-muted">{s.desc}</p>
                <span className="mt-5 text-sm font-semibold text-primary">المزيد ←</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-muted">
            صفحات إضافية متاحة حالياً باللغة الإنجليزية.{" "}
            <Link href="/" className="font-semibold text-primary hover:underline">
              تصفّح الموقع بالإنجليزية ←
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            تحتاج مكيفك إلى خدمة الآن؟
          </h2>
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
