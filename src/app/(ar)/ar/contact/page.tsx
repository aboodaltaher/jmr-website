import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, ExternalLink } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { ContactForm } from "@/components/ContactForm";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS_FULL, MAPS_URL, REVIEW_URL } from "@/lib/company";
import { business } from "@/data/business";

// Arabic translation of /contact. Faithful to the English copy — no new claims.
// NAP is sourced from the shared company constants. TODO(owner): native review.
export const metadata = buildMetadata({
  title: "اتصل بـ AGEC | خدمات التكييف في دبي",
  description:
    `تواصل مع AGEC لخدمات التكييف في دبي — اتصل أو راسلنا على واتساب ‎${PHONE_DISPLAY}، أو أرسل رسالة بخصوص صيانة أو إصلاح أو عقد صيانة أو مشروع جديد.`,
  path: "/ar/contact",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

export default function ArabicContact() {
  const wa = whatsappUrl("/ar/contact");
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs lang="ar" items={[{ name: "اتصل بنا", href: "/ar/contact" }]} className="mb-6" />
          <p className={eyebrow}>اتصل بنا</p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">أخبرنا عن مشروعك أو أرسل لنا سؤالاً.</p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-bg-soft p-8">
                <h2 className="font-heading text-xl font-bold">معلومات التواصل</h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">الهاتف</p>
                      <a href={`tel:${PHONE}`} className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">واتساب</p>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">البريد الإلكتروني</p>
                      <a href={`mailto:${EMAIL}`} className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">الموقع</p>
                      <p className="text-sm text-text-muted" dir="ltr"><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-text hover:underline">{ADDRESS_FULL}</a></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">التوفّر</p>
                      <p className="text-sm text-text-muted">اتصل أو راسلنا على واتساب في أي وقت، {business.hours.short}. نرد خلال ساعة.</p>
                    </div>
                  </div>
                </div>

                {/* Leave a review */}
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-text hover:border-primary transition-colors"
                >
                  <Star className="h-4 w-4 text-primary fill-current" />
                  اترك تقييماً على Google
                  <ExternalLink className="h-3.5 w-3.5 text-text-muted" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm lang="ar" />
            </div>
          </div>
        </div>
      </section>

      {/* How we handle your message: faithful to the English pages (response within 1 hour, 24/7,
          written quote within 24 hours, all 7 emirates). No new claims. */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-relaxed text-text-muted">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text">كيف نتعامل مع رسالتك</h2>
            <p className="mt-4">
              تصل رسالتك مباشرة إلى فريقنا، ونتواصل معك عبر الهاتف أو الواتساب. نحن متاحون في أي وقت،
              على مدار الساعة طوال أيام الأسبوع، ونرد خلال ساعة. وإذا كان سؤالك فنياً — عن نظام تكييف
              قائم، أو عقد صيانة، أو مشروع جديد — يجيبك فريقنا الهندسي.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">اختر طريقة التواصل المناسبة</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <strong className="text-text">الهاتف:</strong> الأنسب للأعطال العاجلة، مثل توقّف المكيّف أو
                تسريب الماء. اتصل على{" "}
                <a href={`tel:${PHONE}`} dir="ltr" className="font-semibold text-primary hover:underline">{PHONE_DISPLAY}</a>{" "}
                في أي وقت.
              </li>
              <li>
                <strong className="text-text">الواتساب:</strong> مناسب لإرسال صور الوحدة أو المشكلة أو مخططات
                المشروع مع رسالتك، ونرد خلال ساعة.{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                  راسلنا على واتساب
                </a>
              </li>
              <li>
                <strong className="text-text">البريد الإلكتروني:</strong> للمستندات والمخططات والطلبات
                الرسمية، على{" "}
                <a href={`mailto:${EMAIL}`} dir="ltr" className="font-semibold text-primary hover:underline">{EMAIL}</a>.
              </li>
              <li>
                <strong className="text-text">نموذج التواصل في هذه الصفحة:</strong> لأي سؤال أو طلب. اكتب
                اسمك ورقمك ورسالتك، ونعاود التواصل معك.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">هل تحتاج إلى عرض سعر؟</h2>
            <p className="mt-4">
              إذا كنت تعرف الخدمة التي تحتاجها — تركيب أو صيانة أو إصلاح أو عقد صيانة سنوي — فاستخدم{" "}
              <Link href="/ar/quote" className="font-semibold text-primary hover:underline">صفحة طلب عرض السعر</Link>:
              نموذج واحد قصير لعرض سعر لمشروع جديد أو لحجز خدمة أو إصلاح أو صيانة للمكيّف، ونرسل لك عرض
              السعر المكتوب خلال 24 ساعة.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">المناطق التي نغطيها</h2>
            <p className="mt-4">
              نعمل في الإمارات السبع — أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة —
              للفلل والشقق والمكاتب والمباني التجارية. مقرّنا في دبي، ومشاريعنا المنجزة حتى الآن في دبي
              والشارقة وعجمان وأبوظبي. يمكنك الاطلاع على بعضها في{" "}
              <Link href="/projects" className="font-semibold text-primary hover:underline">صفحة المشاريع</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text">أسئلة شائعة عن التواصل</h2>
            <h3 className="mt-4 font-semibold text-text">هل تعملون في عطلة نهاية الأسبوع والليل؟</h3>
            <p className="mt-2">
              نعم. نرد على الاتصالات ورسائل الواتساب على مدار الساعة طوال أيام الأسبوع، بما في ذلك عطلة
              نهاية الأسبوع.
            </p>
            <h3 className="mt-4 font-semibold text-text">ما المعلومات التي أكتبها في رسالتي؟</h3>
            <p className="mt-2">
              يكفي اسمك ورقم هاتفك لنتواصل معك. ويساعدنا أن تذكر نوع العقار والإمارة والمنطقة ووصفاً قصيراً
              لما تحتاجه، حتى يكون ردّنا الأول مفيداً من البداية.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold">زورونا</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <iframe
              title="موقع AGEC Technical Services على خرائط Google"
              src={`https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=16&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-text-muted">
            <span dir="ltr">{ADDRESS_FULL}</span> ·{" "}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
              افتح في خرائط Google ←
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
