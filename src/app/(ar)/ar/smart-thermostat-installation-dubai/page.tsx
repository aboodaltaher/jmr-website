import { buildMetadata } from "@/lib/metadata";
import {
  ShieldCheck,
  BadgeCheck,
  Zap,
  Clock,
  Wifi,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { DeepCleanVideo } from "@/components/DeepCleanVideo";
import { NEST_VIDEO, nestVideoSchema } from "@/data/nest-video";
import { AR_PRICES_VAT_NOTE } from "@/data/prices-ar";
import {
  PRICE_NEST_SUPPLY,
  PRICE_ECOBEE_SUPPLY,
  PRICE_INSTALLATION,
  PRICE_DROP_AIR_ADAPTOR,
  PRICE_NEST_SUPPLY_INSTALL,
  PRICE_ECOBEE_SUPPLY_INSTALL,
} from "@/lib/pricing";
import { THERMOSTAT_SAVINGS, EMAIL, PHONE_DISPLAY } from "@/lib/company";
import { ratingValue, reviewCount } from "@/lib/siteStats";

// Arabic translation of /smart-thermostat-installation-dubai. Faithful to the
// English copy — no new claims. TODO(owner): native Arabic review.
export const metadata = buildMetadata({
  title: "تركيب ثرموستات Nest و ecobee الذكي في دبي | AGEC",
  description:
    "تركيب ثرموستات ذكي Google Nest و ecobee في دبي والإمارات — فحص توافق مجاني وتركيب سلك C بإشراف فريق هندسي. قلّل فاتورة ديوا.",
  path: "/ar/smart-thermostat-installation-dubai",
  locale: "ar_AE",
});

// Same constants as the English page (src/lib/pricing.ts); only the labels are Arabic.
const priceRows: { label: string; price: string }[] = [
  { label: "Google Nest: توريد الجهاز فقط", price: `${PRICE_NEST_SUPPLY} درهم` },
  { label: "ecobee: توريد الجهاز فقط", price: `${PRICE_ECOBEE_SUPPLY} درهم` },
  { label: "التركيب لكل ثرموستات", price: `${PRICE_INSTALLATION} درهم` },
  { label: "محوّل Drop-air (لأنظمة VRF/VRV أو حيثما يلزم)", price: `${PRICE_DROP_AIR_ADAPTOR} درهم` },
  { label: "Google Nest: توريد وتركيب", price: `من ${PRICE_NEST_SUPPLY_INSTALL} درهم` },
  { label: "ecobee: توريد وتركيب", price: `من ${PRICE_ECOBEE_SUPPLY_INSTALL} درهم` },
];

const videoSchema = nestVideoSchema(
  "كيف يستخدم ثرموستات Google Nest الذي تركّبه AGEC في دبي روتين المنزل والخروج وتحديد الموقع حتى لا تبرّد منزلاً فارغاً.",
);

export default function ArabicSmartThermostat() {
  return (
    <ServiceDetailLayout
      lang="ar"
      slug="ar/smart-thermostat-installation-dubai"
      title="تركيب الثرموستات الذكي (Nest و ecobee)"
      intro="توريد وتركيب احترافي لثرموستات Google Nest و ecobee الذكي في دبي والإمارات — مع فحص توافق مجاني وتركيب سلك C بإشراف فريق هندسي."
      overview={
        <>
          <p>
            نحن مورّد ومركّب محترف لثرموستات Google Nest و ecobee الذكي في دبي
            والإمارات. قلّل فاتورة التبريد من ديوا، وتحكّم بمكيّفك من هاتفك، ودع
            فريقنا الهندسي يتولّى كل شيء — بما في ذلك تركيب سلك C و
            <strong> فحص توافق مجاني</strong> قبل أن تلتزم بأي شيء.
          </p>
          <p>
            نورّد ونركّب ونضبط عدّة طُرز: <strong>Google Nest (الجيل الرابع)</strong>
            الأكثر رواجاً بجدولة ذكية بالذكاء الاصطناعي؛ و<strong>ecobee Premium</strong>
            الأفضل إجمالاً بمكبّر Alexa مدمج ومستشعر للموازنة بين الغرف ومراقبة
            جودة الهواء؛ و<strong>ecobee Enhanced</strong> بقيمة ممتازة ودعم
            المستشعرات واستشعار الإشغال؛ و<strong>ecobee Essential</strong> الطراز
            الأساسي بتحكّم كامل عبر التطبيق وتوفير eco+. كل جهاز أصلي بضمان المصنّع
            الكامل مع ضمان جودة تنفيذنا، ويشمل التركيب وإعداد الواي فاي والتطبيق
            وتدريباً عملياً.
          </p>
          <p>
            يعمل Nest و ecobee مع الغالبية العظمى من الأنظمة المجاري والسبليت
            المجاري والأنظمة التقليدية بجهد 24 فولت المستخدمة عبر الإمارات — دايكن،
            ميتسوبيشي، أوجنرال، كاريير، إل جي، سامسونج، جري، ميديا وغيرها. وحتى لو
            كان مكيّفك لا يستخدم تحكّم 24 فولت القياسي — بما في ذلك وحدات السبليت
            والإنفرتر بجهد 220/240 فولت — نركّب وحدة واجهة آمنة تتيح للثرموستات
            تشغيل الوحدة <strong>دون تعديل أو إتلاف جهازك</strong> ودون الاعتماد على
            لوحة التحكّم الداخلية (PCB) أو المساس بها. ويبقى مكيّفك يعمل تماماً كما
            صمّمه المصنّع، مع إضافة التحكّم الذكي فوقه. ويعتمد التوافق على توصيلاتك
            ونظام التحكّم القائم، لذا نبدأ دائماً بفحص توافق مجاني — ونركّب سلك C عند
            الحاجة.
          </p>
        </>
      }
      extraSection={
        <section id="google-nest" className="scroll-mt-24 py-14 md:py-20">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">تركيب منظم حرارة Google Nest في دبي</h2>
            <div className="mt-8 grid items-start gap-8 sm:grid-cols-2">
              <div className="mx-auto w-full max-w-[280px]">
                <Image
                  src="/photos/thermostat/google-nest-learning-thermostat-dubai.jpg"
                  alt="منظم حرارة Google Nest Learning مع حساس الحرارة، توريد وتركيب AGEC في دبي"
                  width={900}
                  height={1600}
                  sizes="(max-width: 640px) 70vw, 280px"
                  loading="lazy"
                  className="h-auto w-full rounded-xl border border-border"
                />
              </div>
              <DeepCleanVideo
                videoId={NEST_VIDEO.id}
                title={NEST_VIDEO.title}
                alt="معاينة فيديو عن تركيب ثرموستات Google Nest في دبي"
                playLabel="تشغيل الفيديو: تركيب ثرموستات Google Nest في دبي"
              />
            </div>

            <h3 className="mt-12 font-heading text-2xl font-bold">أسعار الثرموستات الذكي</h3>
            <div className="mt-4 overflow-x-auto" tabIndex={0} role="region" aria-label="أسعار الثرموستات الذكي">
              <table className="w-full min-w-[20rem] text-start text-sm">
                <tbody>
                  {priceRows.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <th scope="row" className="py-3 pe-4 text-start font-medium">{row.label}</th>
                      <td className="py-3 text-start font-semibold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              يؤكَّد السعر النهائي بعد فحص توافق مجاني. يُضاف محوّل Drop-air ({PRICE_DROP_AIR_ADAPTOR} درهماً) فقط حيثما يحتاجه نظامك، مثل VRF/VRV.
            </p>
            <p className="mt-2 text-sm text-text-muted">{AR_PRICES_VAT_NOTE}</p>
          </div>
        </section>
      }
      whenYouNeedIt={[
        "خفض فاتورة الكهرباء — أوقف تبريد الغرف الفارغة بالجدولة والأوضاع الاقتصادية",
        "التحكّم عن بُعد — اضبط مكيّفك من هاتفك من المكتب أو المول أو دولة أخرى",
        "جدولة ذكية وتعلّم بالذكاء الاصطناعي يضبط الراحة تلقائياً",
        "تحديد الموقع (Geofencing) يبرّد المنزل عند عودتك ويخفّف عند مغادرة الجميع",
        "وضع الإجازة لتوفير الطاقة أثناء السفر، ومراقبة الرطوبة وتقارير الطاقة",
        "فلل بمناطق تبريد متعدّدة تحتاج جدولة غرفةً غرفة وتوفيراً كبيراً",
      ]}
      whatWeDo={[
        {
          icon: ShieldCheck,
          name: "تركيب بإشراف هندسي",
          description:
            "تركيب على يد فنيّين مدرّبين بإشراف مهندس تكييف ووفق معايير ASHRAE — لا عمّال عموميّون.",
        },
        {
          icon: BadgeCheck,
          name: "فحص توافق مجاني",
          description:
            "نؤكّد جاهزية توصيلاتك ونظام التحكّم — وننصح بأي سلك C أو واجهة لازمة — قبل أن تلتزم بأي شيء.",
        },
        {
          icon: Zap,
          name: "أجهزة أصلية بضمان",
          description:
            "ثرموستات Google Nest و ecobee أصلية بضمان المصنّع الكامل مع ضمان جودة تنفيذنا.",
        },
        {
          icon: Clock,
          name: "خدمة في نفس اليوم وعبر الإمارات",
          description:
            "استجابة سريعة في الإمارات، مع تركيب في نفس اليوم للأنظمة القياسية المتوافقة في دبي.",
        },
        {
          icon: BarChart3,
          name: "توفير حقيقي للطاقة",
          description:
            "ضبط صحيح لأحمال التبريد في الإمارات — جدولة وتحديد موقع وأوضاع اقتصادية تخفّض فاتورة ديوا فعلاً.",
        },
        {
          icon: Wifi,
          name: "تكامل المنزل الذكي",
          description:
            "نربط الثرموستات بالواي فاي و Google Home و Alexa ومنظومتك الذكية، ثم ندرّبك على استخدامه.",
        },
      ]}
      whyAgec={[
        "مقاول هندسي مرخّص للتكييف والكهروميكانيك يفهم أنظمة التبريد في الإمارات من المجاري صعوداً",
        `جهة التصنيع (ecobee، خصائص eco+) تُبلغ عن توفير سنوي للتكييف يصل ${THERMOSTAT_SAVINGS} — يعتمد التوفير الفعلي على منزلك واستخدامك وإعداداتك`,
        "عملية تركيب احترافية من 8 خطوات تكتمل عادةً خلال أقل من 90 دقيقة",
        `مقيّم ${ratingValue}★ من ${reviewCount} مراجعة على Google · تغطية في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة وأم القيوين والفجيرة`,
      ]}
      faq={[
        {
          q: "هل ثرموستات Google Nest متوافق مع مكيّفي في دبي؟",
          a: "تستخدم معظم منازل دبي أنظمة تكييف مجاري أو سبليت مجاري بجهد 24 فولت، وهي متوافقة مع Google Nest. يعتمد التوافق في النهاية على توصيلاتك ونظام التحكّم القائم، لذا نقدّم فحص توافق مجاني قبل التركيب وننصح بأي تعديلات أسلاك مثل إضافة سلك C.",
        },
        {
          q: "ماذا لو كان مكيّفي غير متوافق أو يعمل بجهد 220 فولت؟",
          a: "لا مشكلة — حتى لو لم يستخدم نظامك تحكّم 24 فولت القياسي، بما في ذلك وحدات السبليت والإنفرتر بجهد 220/240 فولت، لدينا حل. يركّب مهندسونا وحدة واجهة آمنة تتيح لـ Nest أو ecobee التحكّم بالمكيّف دون تعديله أو إتلافه، ودون الاعتماد على لوحة التحكّم الداخلية (PCB) أو المساس بها. تبقى وحدتك تعمل تماماً كما صمّمها المصنّع، مع إضافة التحكّم الذكي فوقها.",
        },
        {
          q: "هل يمكنكم تركيب سلك C إذا لم يكن في نظامي؟",
          a: "نعم — تركيب سلك C (السلك المشترك) من خدماتنا الأساسية. إن احتاج ثرموستاتك طاقة مستمرة، يمدّ فنيّونا سلك C مناسباً أو يركّبون طقم تمديد طاقة متوافقاً بأمان ونظافة.",
        },
        {
          q: "كم تكلفة تركيب الثرموستات الذكي في دبي؟",
          a: "يُحدَّد سعر التركيب القياسي مقدماً بعد فحص التوافق المجاني. تعتمد التكلفة النهائية على نوع نظامك، وما إذا كان يلزم سلك C أو تعديل أسلاك، وعدد المناطق. تحصل دائماً على عرض سعر شفاف وبلا التزام قبل بدء أي عمل.",
        },
        {
          q: "هل يوفّر الثرموستات الذكي الكهرباء فعلاً في الإمارات؟",
          a: `نعم. الجدولة وتحديد الموقع والتعلّم بالذكاء الاصطناعي والأوضاع الاقتصادية كلها تقلّل التبريد المهدور — تُبلغ ecobee عن توفير سنوي للتكييف يصل ${THERMOSTAT_SAVINGS} بخصائص eco+. يعتمد التوفير الفعلي على منزلك واستخدامك وإعداداتك، لكن الإمكانية كبيرة نظراً لموسم التبريد الطويل الحار وتعرفة ديوا.`,
        },
        {
          q: "أيّهما أفضل — Google Nest أم ecobee؟",
          a: "كلاهما ممتاز. يقدّم Nest جدولة تلقائية بالذكاء الاصطناعي وتصميماً بسيطاً فاخراً؛ ويضيف ecobee Premium مكبّر Alexa مدمجاً ومستشعر غرفة ومراقبة جودة الهواء. ننصح بالأنسب بعد مراجعة منزلك ونظام التكييف لديك.",
        },
        {
          q: "هل تقدّمون تركيباً في نفس اليوم في دبي؟",
          a: "في معظم الحالات نعم. للأنظمة القياسية المتوافقة داخل دبي نوفّر تركيباً في نفس اليوم أو اليوم التالي. راسلنا على واتساب لمعرفة التوفّر الحالي.",
        },
        {
          q: "ما الضمان الذي أحصل عليه؟",
          a: "تحصل على ضمان المصنّع الكامل لجهاز Google Nest أو ecobee (عادةً من سنة إلى ثلاث سنوات حسب الطراز) إضافةً إلى ضمان جودة تنفيذنا للتركيب.",
        },
        {
          q: "هل الثرموستات الذكي مناسب للفلل؟",
          a: "بالتأكيد. غالباً ما تحتوي الفلل على مناطق تكييف متعدّدة، ما يجعل الثرموستات الذكي مثالياً للجدولة غرفةً غرفة ولتوفير كبير. ننفّذ تركيبات الفلل متعدّدة المناطق في دبي والإمارات.",
        },
        {
          q: "هل أستطيع التحكّم بالثرموستات من هاتفي؟",
          a: "نعم. يوفّر كل من Google Nest و ecobee تحكّماً كاملاً عبر تطبيق الجوال على الواي فاي، فتضبط الحرارة والجداول وتراقب استهلاك الطاقة من أي مكان في العالم.",
        },
        {
          q: "هل يُبطل الثرموستات الذكي ضمان مكيّفي؟",
          a: "لا. الثرموستات الذكي المركّب بشكل صحيح ترقية تحكّم ولا يؤثّر على ضمان مكيّفك. ويضمن تركيبنا الاحترافي تنفيذ كل شيء وفق المعايير.",
        },
        {
          q: "كيف أحجز فحص توافق مجانياً؟",
          a: `اتصل أو راسلنا على واتساب ‎${PHONE_DISPLAY}، أو راسلنا على ${EMAIL}. أخبرنا بنوع عقارك ونظام التكييف وسنرتّب تقييمك المجاني.`,
        },
      ]}
    />
  );
}
