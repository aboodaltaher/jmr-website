"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { submitRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { type FormOf, defineSchema, resolver, required, optionalText } from "@/lib/form-schema";

const PROPERTY_TYPES = ["Villa", "Apartment", "Office", "Restaurant", "Other"] as const;

const T = {
  en: {
    name: "Full name", phone: "Phone", property: "Property type", choose: "Select property type",
    types: { Villa: "Villa", Apartment: "Apartment", Office: "Office", Restaurant: "Restaurant", Other: "Other" } as Record<string, string>,
    submit: "Request a call back", submitting: "Sending...",
    errName: "Full name is required", errPhone: "Phone number is required",
    sentTitle: "Thanks — your request is in", sentBody: "An engineer will call you shortly. For the fastest reply, call or WhatsApp us.",
  },
  ar: {
    name: "الاسم الكامل", phone: "الهاتف", property: "نوع العقار", choose: "اختر نوع العقار",
    types: { Villa: "فيلا", Apartment: "شقة", Office: "مكتب", Restaurant: "مطعم", Other: "أخرى" } as Record<string, string>,
    submit: "اطلب اتصالاً", submitting: "جارٍ الإرسال...",
    errName: "الاسم الكامل مطلوب", errPhone: "رقم الهاتف مطلوب",
    sentTitle: "شكراً — تم استلام طلبك", sentBody: "سيتصل بك مهندس قريباً. للرد الأسرع اتصل بنا أو راسلنا على واتساب.",
  },
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

/**
 * The 3-field mid-page form: name*, phone*, property type. It submits through the same
 * server action as /quote (submitRequest) and fires form_submit_inline with
 * form_location "mid_page" only after the action reports success. The success message replaces
 * the form inside the same reserved height, so nothing shifts.
 */
export default function MidPageForm({ service, lang = "en" }: { service: string; lang?: "en" | "ar" }) {
  const t = T[lang];
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const schema = defineSchema({
    name: required(t.errName),
    phone: required(t.errPhone),
    propertyType: optionalText(),
  });
  type FormData = FormOf<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: resolver(schema), defaultValues: { propertyType: "" } });

  const onSubmit = async (data: FormData) => {
    setFailed(false);
    const result = await submitRequest({
      requestType: `${service} — mid-page enquiry`,
      name: data.name,
      phone: data.phone,
      details: `Property type: ${data.propertyType || "not given"}. Sent from the mid-page "Talk to an engineer" form.`,
    });
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("quote", "inline", "mid_page");
    } else {
      setFailed(true);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex min-h-[inherit] flex-col items-center justify-center gap-3 rounded-lg border border-border bg-white p-6 text-center md:flex-row md:gap-5 md:text-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold">{t.sentTitle}</h3>
          <p className="mt-1 max-w-xl text-sm text-text-muted">{t.sentBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 md:grid-cols-4 md:items-start">
      <div>
        <label htmlFor="mp-name" className="mb-1.5 block text-sm font-medium">
          {t.name} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input id="mp-name" type="text" autoComplete="name" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "mp-name-err" : undefined} {...register("name")} className={inputClass(!!errors.name)} />
        {errors.name && <p id="mp-name-err" role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="mp-phone" className="mb-1.5 block text-sm font-medium">
          {t.phone} <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input id="mp-phone" type="tel" autoComplete="tel" inputMode="tel" aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "mp-phone-err" : undefined} {...register("phone")} className={inputClass(!!errors.phone)} />
        {errors.phone && <p id="mp-phone-err" role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="mp-type" className="mb-1.5 block text-sm font-medium">{t.property}</label>
        <select id="mp-type" {...register("propertyType")} className={inputClass(false)}>
          <option value="">{t.choose}</option>
          {PROPERTY_TYPES.map((p) => (
            <option key={p} value={p}>{t.types[p]}</option>
          ))}
        </select>
      </div>
      <div className="md:pt-[1.65rem]">
        <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50">
          {isSubmitting ? t.submitting : t.submit}
        </button>
      </div>
      {failed && (
        <p role="alert" className="text-sm text-red-600 md:col-span-4">
          {lang === "ar" ? "تعذّر الإرسال. يرجى الاتصال بنا أو مراسلتنا على واتساب." : "Something went wrong. Please call or WhatsApp us instead."}
        </p>
      )}
    </form>
  );
}
