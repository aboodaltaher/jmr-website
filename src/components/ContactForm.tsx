"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { FormAssurance } from "@/components/FormAssurance";
import { type FormOf, defineSchema, resolver, required, optionalText, optionalEmail } from "@/lib/form-schema";

type Lang = "en" | "ar";

// Labels, placeholders and validation messages per language. TODO(owner): have
// a native Arabic speaker review the Arabic strings.
const T: Record<Lang, {
  name: string; email: string; phone: string; subject: string; message: string;
  optional: string; required: string;
  errName: string; errEmail: string; errPhone: string; errMessage: string;
  submit: string; submitting: string; sentTitle: string; sentBody: string;
}> = {
  en: {
    name: "Name", email: "Email", phone: "Phone", subject: "Subject", message: "Message",
    optional: "(optional)", required: "*",
    errName: "Name is required", errEmail: "Please enter a valid email",
    errPhone: "Phone number is required", errMessage: "Message is required",
    submit: "Send Message", submitting: "Sending...",
    sentTitle: "Message sent", sentBody: "We'll get back to you shortly.",
  },
  ar: {
    name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف", subject: "الموضوع", message: "الرسالة",
    optional: "(اختياري)", required: "*",
    errName: "الاسم مطلوب", errEmail: "يرجى إدخال بريد إلكتروني صحيح",
    errPhone: "رقم الهاتف مطلوب", errMessage: "الرسالة مطلوبة",
    submit: "إرسال الرسالة", submitting: "جارٍ الإرسال...",
    sentTitle: "تم إرسال الرسالة", sentBody: "سنعاود التواصل معك قريباً.",
  },
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function ContactForm({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang];
  const [submitted, setSubmitted] = useState(false);

  const schema = defineSchema({
    name: required(t.errName),
    // Email is optional; if given it must be valid. Phone is the required contact.
    email: optionalEmail(t.errEmail),
    phone: required(t.errPhone),
    subject: optionalText(),
    message: required(t.errMessage),
  });
  type FormData = FormOf<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: resolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitContactForm(data);
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("contact", "contact", "contact_page");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold">{t.sentTitle}</h3>
        <p className="mt-2 text-text-muted">{t.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          {t.name} <span className="text-red-500">{t.required}</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          {t.email} <span className="text-text-muted">{t.optional}</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          dir="ltr"
          {...register("email")}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
          {t.phone} <span className="text-red-500">{t.required}</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          dir="ltr"
          {...register("phone")}
          className={inputClass(!!errors.phone)}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
          {t.subject} <span className="text-text-muted">{t.optional}</span>
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className={inputClass(!!errors.subject)}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          {t.message} <span className="text-red-500">{t.required}</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={inputClass(!!errors.message)}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
      <FormAssurance lang={lang} />
    </form>
  );
}
