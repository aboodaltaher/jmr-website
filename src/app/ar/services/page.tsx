import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import {
  Wind,
  Snowflake,
  Thermometer,
  Fan,
  ClipboardCheck,
  Gauge,
  Wrench,
  Cpu,
  Settings,
  Hammer,
  Scale,
  Calendar,
} from "lucide-react";

// Arabic translation of /services (hub). Faithful to the English copy — no new
// claims. Services with an Arabic page link to /ar/...; the rest fall back to
// the English page. TODO(owner): native Arabic review.
export const metadata = buildMetadata({
  title: "خدمات التكييف في دبي والإمارات | AGEC",
  description:
    "خدمات التكييف في دبي والإمارات: تصميم وتركيب واختبار وتشغيل تجريبي وصيانة للفلل والمكاتب والمباني التجارية. اتصل أو راسلنا على واتساب.",
  path: "/ar/services",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const services = [
  { icon: Wind, name: "أنظمة VRF / VRV", href: "/services/vrf-vrv-systems", description: "أنظمة التدفّق المتغيّر للمبرّد للمباني التي تتطلّب تبريداً مناطقياً وكفاءة في الطاقة وتشغيلاً هادئاً. نصمّم ونركّب ونشغّل أنظمة VRF من كبرى الشركات المصنّعة للفلل والمكاتب والمباني المتوسطة." },
  { icon: Hammer, name: "تركيب أنظمة التكييف", href: "/ar/services/hvac-installation-dubai", description: "تركيب تكييف كامل للمباني الجديدة والتجهيزات — مجاري هواء ومواسير تبريد ومياه مبرّدة وتركيب معدّات وتحكّم وتشغيل تجريبي، يُسلَّم بأوراق اختبار ومعلومات تنفيذية." },
  { icon: Snowflake, name: "التشيلر", href: "/services/chiller-maintenance-dubai", description: "أنظمة تشيلر مبرّدة بالهواء والماء للمباني التجارية والفنادق والمنشآت الصناعية. تصميم كامل للمواسير واختيار المضخّات وتشغيل منظومة المياه المبرّدة تجريبياً." },
  { icon: Calendar, name: "صيانة التشيلر", href: "/ar/services/chiller-maintenance-dubai", description: "صيانة مخطّطة لمحطات التشيلر المبرّدة بالهواء والماء — صيانة مجدولة وتنظيف الأنابيب وفحص الفريون والأداء ومعالجة المياه وتقارير موثّقة تحت عقد سنوي." },
  { icon: Thermometer, name: "وحدات DX", href: "/services/dx-units", description: "أنظمة التمدّد المباشر من سبليت ودكت وكاسيت ووحدات مخفية للتطبيقات السكنية والتجارية الصغيرة. حلول تبريد موثوقة مقاسة ومركّبة بشكل صحيح." },
  { icon: Cpu, name: "تركيب الثرموستات الذكي", href: "/ar/smart-thermostat-installation-dubai", description: "توريد وتركيب احترافي لثرموستات Google Nest و ecobee عبر الإمارات — مع فحص توافق مجاني وتركيب سلك C وإعداد المنزل الذكي للفلل والشقق والمكاتب والمحلات." },
  { icon: Fan, name: "التهوية والهواء النقي", href: "/ar/services/ventilation-fresh-air", description: "تهوية ميكانيكية ووحدات مناولة هواء نقي وأنظمة سحب مصمَّمة لمناخ دبي. نحجّم ونوازن ونشغّل التهوية تجريبياً لتلبية معايير جودة الهواء الداخلي." },
  { icon: ClipboardCheck, name: "تصميم التكييف والاستشارات", href: "/services/hvac-design", description: "حسابات حمل حراري وتحجيم مجاري واختيار معدّات وتصميم كامل لأنظمة التكييف. سواء فيلا واحدة أو تجهيز تجاري متعدّد الطوابق، نقدّم توثيقاً تصميمياً يلبّي الكود ويؤدّي عملياً." },
  { icon: Gauge, name: "الاختبار والتشغيل التجريبي", href: "/services/tab-testing-adjusting-balancing-dubai", description: "خدمات اختبار وموازنة وتشغيل تجريبي موثّقة. قياس تدفّق الهواء وموازنة تدفّق الماء والتحقّق من التحكّم وتقارير كاملة — كل نظام يُسلَّم مقابل المواصفات." },
  { icon: Scale, name: "الاختبار والضبط والموازنة (TAB)", href: "/ar/services/tab-testing-adjusting-balancing-dubai", description: "قياس تدفّق الهواء والماء وضبطه على قيم التصميم عبر أنظمة الهواء والماء، مع تقرير موازنة موثّق وموقّع لاعتماد الاستشاري والمالك." },
  { icon: Settings, name: "صيانة وإصلاح المكيفات", href: "/ar/ac-maintenance-dubai", description: "خدمة وإصلاح المكيفات وتنظيف الملفّات والمجاري وتعبئة الغاز والطوارئ للفلل والشقق والمنشآت عبر دبي والإمارات. خدمة في نفس اليوم وطوارئ 24/7." },
  { icon: Wrench, name: "عقود الصيانة السنوية (AMC)", href: "/ar/ac-amc-dubai", description: "عقود صيانة سنوية بسعر ثابت وصيانة تفاعلية وطوارئ. الصيانة الوقائية المجدولة تطيل عمر المعدّات وتحمي الضمانات — سكنية وتجارية." },
];

const steps = [
  { number: "01", name: "الاستشارة", description: "فهم نطاق المشروع ومتطلّباته" },
  { number: "02", name: "التصميم والعرض", description: "حسابات الحمل الحراري وتصميم النظام وعرض سعر شفاف" },
  { number: "03", name: "التوريد", description: "توريد معدّات معتمدة بضمانات صحيحة" },
  { number: "04", name: "التركيب", description: "فنيّون مؤهّلون، في الموعد ووفق المواصفات" },
  { number: "05", name: "التشغيل والتسليم", description: "مختبَر ومتوازن وموثّق وجاهز" },
];

export default function ArabicServices() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs lang="ar" items={[{ name: "الخدمات", href: "/ar/services" }]} className="mb-6" />
          <p className={eyebrow}>خدماتنا</p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            خدمات تكييف متكاملة لكل أنواع المشاريع
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            من حسابات الحمل الحراري والتصميم مروراً بالتركيب والتشغيل التجريبي
            والصيانة طويلة الأمد — تقدّم AGEC حلول تكييف كاملة.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group rounded-lg border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <service.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
                <h2 className="mt-5 font-heading text-2xl font-bold">{service.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">اعرف المزيد ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>كيف نعمل</p>
          <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold md:text-5xl">
            عملية واضحة، من أول اتصال إلى التشغيل النهائي
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-heading text-4xl font-bold text-primary">{step.number}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className={eyebrow}>المعايير الهندسية</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold">
            نصمّم ونركّب ونشغّل وفق معايير هندسية معترف بها للتكييف
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["ASHRAE 111", "SMACNA", "CIBSE"].map((badge) => (
              <span key={badge} className="rounded-full border border-border px-5 py-2 text-sm font-medium uppercase tracking-wider text-text-muted" dir="ltr">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">لست متأكّداً من الخدمة التي تحتاجها؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">أخبرنا عن مشروعك وسنوصي بالنهج المناسب.</p>
          <Link
            href="/ar/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            احصل على عرض سعر
          </Link>
          <div className="mt-4">
            <Link href="/ar/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              أو تحدّث مع مهندس ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
