import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, EMERGENCY_PREFIX } from "@/lib/company";

// Arabic translation of /quote. Faithful to the English copy — no new claims.
// TODO(owner): native Arabic review.
export const metadata = buildMetadata({
  title: "احصل على عرض سعر أو احجز خدمة في دبي | AGEC",
  description:
    "اطلب عرض سعر لأعمال التكييف أو احجز خدمة أو إصلاح أو صيانة في دبي. نموذج واحد قصير — نرد عبر الهاتف والواتساب 24/7، ومتاحون عبر الإمارات.",
  path: "/ar/quote",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

export default function ArabicQuote() {
  const wa = whatsappUrl("/ar/quote");
  return (
    <>
      {/* Emergency strip (Arabic) */}
      <div className="bg-[#13212E] py-2.5 text-center text-sm text-white">
        {/* EMERGENCY_PREFIX kept for parity; Arabic phrasing shown to users. */}
        <span className="sr-only">{EMERGENCY_PREFIX}</span>
        مكيّفك متوقّف الآن؟ اتصل بـ{" "}
        <a href={`tel:${PHONE}`} className="font-semibold text-primary-light hover:underline" dir="ltr">
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs lang="ar" items={[{ name: "احصل على عرض سعر", href: "/ar/quote" }]} className="mb-6" />
          <p className={eyebrow}>احصل على عرض سعر</p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            احصل على عرض سعر أو احجز خدمة
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            نموذج واحد قصير — عرض سعر لمشروع جديد، أو خدمة أو إصلاح أو صيانة للمكيف.
            نرد عبر الهاتف والواتساب 24/7، ونخدم الإمارات السبع.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <QuoteForm lang="ar" />
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted">
            <Phone className="h-4 w-4 text-primary" />
            <span>
              مقيّمون {GOOGLE_RATING}★ من {GOOGLE_REVIEW_COUNT} مراجعة على Google
            </span>
          </div>
        </div>
      </section>

      {/* What happens next: faithful to the English pages (WhatsApp reply within 1 hour, 24/7;
          written quote within 24 hours; all 7 emirates). No new claims. */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-relaxed text-text-muted">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text">ماذا يحدث بعد إرسال الطلب؟</h2>
            <ol className="mt-4 list-decimal space-y-3 ps-6">
              <li>يصلنا طلبك فوراً، ويطّلع عليه فريقنا الهندسي ليفهم نوع العمل الذي تحتاجه.</li>
              <li>نتواصل معك عبر الهاتف أو الواتساب. نرد على الواتساب خلال ساعة، على مدار الساعة طوال أيام الأسبوع.</li>
              <li>إذا طلبت عرض سعر لمشروع أو تركيب، نرسل لك عرض السعر المكتوب خلال 24 ساعة.</li>
              <li>إذا طلبت خدمة أو إصلاحاً أو صيانة، نؤكد معك التفاصيل عبر الهاتف أو الواتساب.</li>
            </ol>
            <p className="mt-4">
              لا تحتاج إلى متابعة الطلب بنفسك. لكن إذا كان الأمر عاجلاً — مثل توقّف المكيّف في الصيف — فالأسرع
              أن تتصل بنا أو تراسلنا على الواتساب مباشرة.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">معلومات تساعدنا على الرد بسرعة</h2>
            <p className="mt-4">
              يكفي اسمك ورقم هاتفك ونوع الطلب لنتواصل معك. وكلما أضفت تفاصيل في خانة الملاحظات كان ردّنا
              الأول أدقّ:
            </p>
            <ul className="mt-3 list-disc space-y-2 ps-6">
              <li>نوع العقار: فيلا أو شقة أو مكتب أو مطعم أو مبنى تجاري.</li>
              <li>الإمارة والمنطقة.</li>
              <li>عدد وحدات التكييف ونوعها إن كنت تعرفه: سبليت أو مخفي أو كاسيت أو VRF أو تشيلر.</li>
              <li>في طلبات الإصلاح: وصف قصير للمشكلة، مثل ضعف التبريد أو تسريب الماء أو الرائحة.</li>
              <li>في المشاريع الجديدة: هل لديك مخططات أو تصميم من الاستشاري؟</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">الخدمات التي يمكنك طلبها</h2>
            <p className="mt-4">هذا النموذج يغطي كل خدماتنا. ولقراءة التفاصيل قبل الطلب:</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              <li><Link href="/ar/ac-maintenance-dubai" className="text-primary hover:underline">صيانة المكيفات</Link></li>
              <li><Link href="/ar/ac-repair-dubai" className="text-primary hover:underline">إصلاح المكيفات</Link></li>
              <li><Link href="/ar/ac-installation-dubai" className="text-primary hover:underline">تركيب المكيفات</Link></li>
              <li><Link href="/ar/ac-amc-dubai" className="text-primary hover:underline">عقود الصيانة السنوية</Link></li>
              <li><Link href="/ar/ac-duct-cleaning-dubai" className="text-primary hover:underline">تنظيف دكت المكيف</Link></li>
              <li><Link href="/ar/services/vrf-vrv-systems" className="text-primary hover:underline">أنظمة VRF / VRV</Link></li>
              <li><Link href="/ar/services/chiller-maintenance-dubai" className="text-primary hover:underline">صيانة التشيلر</Link></li>
              <li><Link href="/ar/services/hvac-design" className="text-primary hover:underline">تصميم أنظمة التكييف</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">المناطق التي نخدمها</h2>
            <p className="mt-4">
              نخدم الإمارات السبع: أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة. ومشاريعنا
              المنجزة حتى الآن في دبي والشارقة وعجمان وأبوظبي.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">أسئلة شائعة عن طلب عرض السعر</h2>
            <h3 className="mt-4 font-semibold text-text">متى يصلني عرض السعر؟</h3>
            <p className="mt-2">
              نرسل عرض السعر المكتوب خلال 24 ساعة، ونرد على رسائل الواتساب خلال ساعة في أي وقت.
            </p>
            <h3 className="mt-4 font-semibold text-text">هل يمكنني طلب أكثر من خدمة في الطلب نفسه؟</h3>
            <p className="mt-2">
              نعم. اختر نوع الطلب الأقرب لما تحتاجه، واكتب باقي التفاصيل في خانة الملاحظات، ونرد عليك بعرض
              يشمل كل ما ذكرته.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">تفضّل التواصل المباشر؟</h2>
            <p className="mt-4">
              اتصل بنا أو راسلنا على الواتساب في أي وقت، 24/7، على الرقم{" "}
              <a href={`tel:${PHONE}`} dir="ltr" className="whitespace-nowrap font-semibold text-primary hover:underline">{PHONE_DISPLAY}</a>.{" "}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                راسلنا على واتساب
              </a>
              . ولأي سؤال عام، استخدم{" "}
              <Link href="/ar/contact" className="font-semibold text-primary hover:underline">صفحة التواصل</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
