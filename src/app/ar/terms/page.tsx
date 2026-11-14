import { buildMetadata } from "@/lib/metadata";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";
import {
  COMPANY_LEGAL,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS_FULL,
  LICENCE_NO,
} from "@/lib/company";

// Arabic translation of /terms. Faithful to the English copy.
// TODO(owner): native Arabic review + professional check before relying on it.
export const metadata = buildMetadata({
  title: "شروط الاستخدام | AGEC",
  description:
    "الشروط التي تسري عند استخدامك لموقع agec.ae وعند طلب عرض سعر أو حجز أو خدمة من AGEC Technical Services — بما في ذلك عروض الأسعار والملكية الفكرية والمسؤولية والقانون الحاكم.",
  path: "/ar/terms",
  locale: "ar_AE",
});

const UPDATED = "14 نوفمبر 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-bold text-text">{title}</h2>
      <div className="mt-3 space-y-3 text-text-muted">{children}</div>
    </section>
  );
}

export default function ArabicTermsPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <LegalDraftBanner lang="ar" />
        <h1 className="mt-6 font-heading text-4xl font-bold text-text md:text-5xl">
          شروط الاستخدام
        </h1>
        <p className="mt-4 text-sm text-text-muted">آخر تحديث: {UPDATED}</p>

        <p className="mt-6 text-text-muted">
          تسري هذه الشروط على استخدامك للموقع agec.ae (&laquo;الموقع&raquo;) الذي تُشغّله
          {" "}{COMPANY_LEGAL} (&laquo;AGEC&raquo;، &laquo;نحن&raquo;). باستخدامك الموقع أو
          إرسال استفسار، فإنك توافق على هذه الشروط. وإن لم توافق عليها، فيُرجى عدم استخدام
          الموقع.
        </p>

        <Section title="عن الموقع">
          <p>
            يقدّم الموقع معلومات عن خدماتنا في تصميم وتركيب وصيانة أنظمة التكييف والخدمات
            الهندسية ذات الصلة، ويتيح لك التواصل معنا أو طلب عرض سعر أو حجز. ولا يبيع الموقع
            منتجات ولا يستقبل مدفوعات عبر الإنترنت.
          </p>
        </Section>

        <Section title="عروض الأسعار والحجوزات والاستفسارات">
          <p>
            عند إرسال نموذج طلب عرض سعر أو حجز أو تواصل، فإنك تطلب منا الاتصال بك — ولا تُبرم
            عقداً مُلزماً عند تلك اللحظة. وأي أسعار أو أرقام أو مدى توفّر يظهر على الموقع، أو
            يُقدَّم رداً على استفسار، هو إرشادي ويخضع لمعاينة الموقع ولعرض خطّي. ولا يُبرم
            اتفاق مُلزم إلا عند تأكيدنا نطاق العمل وسعره وشروطه كتابةً.
          </p>
          <p>
            يُرجى تزويدنا ببيانات تواصل دقيقة حتى نتمكن من الرد عليك. نرد عبر الهاتف والواتساب،
            وعبر البريد الإلكتروني عند توفّره.
          </p>
        </Section>

        <Section title="دقة المعلومات">
          <p>
            نحرص على إبقاء معلومات الموقع محدّثة وصحيحة، لكننا لا نضمن اكتمالها أو دقتها أو
            تحديثها في كل الأوقات. والإرشادات التقنية في مقالاتنا هي معلومات عامة، وليست
            استشارة هندسية خاصة بعقارك؛ احصل دائماً على تقييم ميداني قبل التصرّف بناءً عليها.
          </p>
        </Section>

        <Section title="الملكية الفكرية">
          <p>
            محتوى الموقع — بما في ذلك النصوص والشعارات وصور مشاريعنا والتصميم — مملوك لـ AGEC
            أو مُستخدَم بإذن، ومحمي بموجب القانون المعمول به. يمكنك عرض المحتوى ومشاركته
            لاستخدامك الشخصي غير التجاري. ولا يجوز نسخه أو إعادة نشره أو استخدامه تجارياً دون
            إذن خطّي منّا.
          </p>
        </Section>

        <Section title="الاستخدام المقبول">
          <ul className="list-disc space-y-1.5 pr-5">
            <li>لا تستخدم الموقع بشكل غير قانوني أو بما قد يضرّه أو يعطّله.</li>
            <li>لا تحاول الوصول غير المصرّح به إلى الموقع أو أنظمته.</li>
            <li>لا تُرسل معلومات كاذبة أو مُضلِّلة أو مسيئة عبر نماذجنا.</li>
          </ul>
        </Section>

        <Section title="روابط وخدمات الأطراف الثالثة">
          <p>
            قد يرتبط الموقع بمواقع أطراف ثالثة ويستخدم خدماتها (مثل خرائط Google وGoogle
            Analytics وGoogle Ads). ولسنا مسؤولين عن محتوى تلك المواقع أو ممارساتها. ويخضع
            استخدامك لموقعنا أيضاً لـ{" "}
            <a href="/ar/privacy-policy" className="font-medium text-primary hover:underline">
              سياسة الخصوصية
            </a>
            .
          </p>
        </Section>

        <Section title="المسؤولية">
          <p>
            يُقدَّم الموقع &laquo;كما هو&raquo;. وإلى الحد الذي يسمح به القانون، لسنا مسؤولين عن أي
            خسارة تنشأ عن استخدامك للموقع أو اعتمادك على محتواه. ولا يحدّ أيٌّ من هذه الشروط من
            أي مسؤولية لا يمكن الحدّ منها بموجب قانون دولة الإمارات.
          </p>
        </Section>

        <Section title="التغييرات على هذه الشروط">
          <p>
            قد نحدّث هذه الشروط من وقت لآخر. ويوضّح تاريخ &laquo;آخر تحديث&raquo; أعلاه موعد آخر
            مراجعة لها. ويعني استمرارك في استخدام الموقع قبولك للشروط الحالية.
          </p>
        </Section>

        <Section title="القانون الحاكم">
          <p>
            تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة كما تُطبَّق في إمارة دبي،
            وتختص محاكم دبي بالنظر في أي نزاع.
          </p>
        </Section>

        <Section title="تواصل معنا">
          <p>
            {COMPANY_LEGAL}
            <br />
            {ADDRESS_FULL}
            <br />
            رقم الرخصة التجارية {LICENCE_NO}
            <br />
            البريد الإلكتروني:{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
              {EMAIL}
            </a>
            <br />
            الهاتف: {PHONE_DISPLAY}
          </p>
        </Section>
      </div>
    </article>
  );
}
