import { buildMetadata } from "@/lib/metadata";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  COMPANY_LEGAL,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS_FULL,
  LICENCE_NO,
} from "@/lib/company";

// Arabic translation of /privacy-policy. Faithful to the English copy.
// TODO(owner): native Arabic review + professional PDPL check before relying on it.
export const metadata = buildMetadata({
  title: "سياسة الخصوصية | AGEC",
  description:
    "كيف تجمع AGEC Technical Services بياناتك المُرسلة عبر agec.ae وتستخدمها وتحميها — تُستخدم للرد على استفسارك فقط، ولا تُباع أبداً.",
  path: "/ar/privacy-policy",
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

export default function ArabicPrivacyPolicyPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Breadcrumbs lang="ar" items={[{ name: "سياسة الخصوصية", href: "/ar/privacy-policy" }]} className="mb-6" />
        <LegalDraftBanner lang="ar" />
        <h1 className="mt-6 font-heading text-4xl font-bold text-text md:text-5xl">
          سياسة الخصوصية
        </h1>
        <p className="mt-4 text-sm text-text-muted">آخر تحديث: {UPDATED}</p>

        <p className="mt-6 text-text-muted">
          تُشغّل {COMPANY_LEGAL} (&laquo;AGEC&raquo;، &laquo;نحن&raquo;) الموقع agec.ae.
          توضّح هذه السياسة البيانات التي نجمعها عند استخدامك للموقع أو تواصلك معنا،
          وكيفية استخدامها، وخياراتك بشأنها. نتعامل مع بياناتك الشخصية وفقاً لقانون
          حماية البيانات الشخصية في دولة الإمارات (المرسوم بقانون اتحادي رقم 45 لسنة 2021)
          ولوائحه التنفيذية.
        </p>

        <Section title="البيانات التي نجمعها">
          <p>
            <strong className="text-text">البيانات التي تزوّدنا بها.</strong> عند إرسال نموذج
            طلب عرض سعر أو حجز أو تواصل، أو مراسلتنا عبر الهاتف أو الواتساب أو البريد
            الإلكتروني، نجمع البيانات التي تقدّمها — عادةً الاسم ورقم الهاتف والبريد
            الإلكتروني والإمارة/المنطقة وتفاصيل استفسارك.
          </p>
          <p>
            <strong className="text-text">البيانات المجمّعة تلقائياً.</strong> كمعظم المواقع،
            نجمع بيانات تقنية واستخدام أساسية (مثل الصفحات المُشاهَدة ومعلومات تقريبية عن
            الجهاز/المتصفح) عبر ملفات تعريف الارتباط وأدوات التحليل لفهم كيفية استخدام الموقع
            وقياس إعلاناتنا.
          </p>
        </Section>

        <Section title="كيف نستخدم بياناتك">
          <ul className="list-disc space-y-1.5 pr-5">
            <li>للرد على استفسارك وتقديم عروض الأسعار والحجوزات والخدمات.</li>
            <li>للتواصل معك بشأن طلبك عبر الهاتف أو الواتساب أو البريد الإلكتروني.</li>
            <li>لتشغيل الموقع وصيانته وتحسينه.</li>
            <li>لقياس أداء موقعنا وإعلاناتنا.</li>
            <li>لحفظ السجلات والامتثال لالتزاماتنا القانونية.</li>
          </ul>
          <p>
            نستخدم بياناتك <strong className="text-text">للرد على استفسارك وتقديم خدماتنا فقط</strong>.
            ولا نبيع بياناتك أبداً.
          </p>
        </Section>

        <Section title="ملفات تعريف الارتباط والتحليلات">
          <p>
            نستخدم Google Analytics 4 (معرّف القياس G-H7HNVQGSYM) وGoogle Ads
            (معرّف التحويل AW-18332305339) لفهم استخدام الموقع وقياس الإعلانات. وقد تضع
            هذه الخدمات ملفات تعريف ارتباط وتجمع بيانات استخدام. يمكنك التحكم في ملفات
            تعريف الارتباط من إعدادات متصفحك، كما يمكنك إلغاء الاشتراك في Google Analytics
            عبر{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              إضافة المتصفح لإلغاء الاشتراك
            </a>
            . ولا ندرج اسمك أو رقم هاتفك أو بريدك الإلكتروني في أحداث التحليلات.
          </p>
        </Section>

        <Section title="كيف نشارك البيانات">
          <p>
            لا نبيع بياناتك أو نؤجّرها. نشاركها فقط مع مزوّدي خدمات موثوقين يساعدوننا في
            تشغيل الموقع والرد عليك — مثل مزوّد خدمة البريد الإلكتروني (لإرسال استفسارك إلى
            فريقنا) ومزوّدي التحليلات والإعلانات (Google). وقد نُفصح عن البيانات عند الاقتضاء
            قانوناً.
          </p>
        </Section>

        <Section title="مدة الاحتفاظ بالبيانات">
          <p>
            نحتفظ بتفاصيل الاستفسار طالما لزم الأمر للرد عليك وتقديم خدماتنا والاحتفاظ
            بسجلات تجارية وقانونية معقولة، ثم نحذفها أو نجعلها مجهولة الهوية.
          </p>
        </Section>

        <Section title="خياراتك وحقوقك">
          <p>
            يمكنك أن تطلب منا الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها، أو التوقف عن
            التواصل معك. لتقديم طلب، راسلنا على{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
              {EMAIL}
            </a>{" "}
            أو اتصل على {PHONE_DISPLAY}. وسنرد خلال مدة معقولة.
          </p>
        </Section>

        <Section title="أمن البيانات">
          <p>
            نتخذ تدابير تقنية وتنظيمية معقولة لحماية بياناتك. ولا توجد وسيلة نقل أو تخزين
            آمنة تماماً، لكننا نعمل على حماية البيانات التي تشاركها معنا.
          </p>
        </Section>

        <Section title="مواقع أخرى">
          <p>
            قد يرتبط موقعنا بمواقع أطراف ثالثة (مثل خرائط Google أو حساباتنا على وسائل
            التواصل). لسنا مسؤولين عن ممارسات الخصوصية لتلك المواقع؛ يُرجى مراجعة سياساتها.
          </p>
        </Section>

        <Section title="التغييرات على هذه السياسة">
          <p>
            قد نحدّث هذه السياسة من وقت لآخر. ويوضّح تاريخ &laquo;آخر تحديث&raquo; أعلاه موعد آخر
            مراجعة لها.
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
