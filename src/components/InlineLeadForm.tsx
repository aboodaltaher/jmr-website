"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Phone, MessageCircle } from "lucide-react";
import { submitRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { FormAssurance } from "@/components/FormAssurance";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  details: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

/**
 * Compact 3-field lead form for embedding inside service/landing pages
 * (audit item 3). `requestType` tags the submission so the office knows which
 * page it came from; `whatsappPath` sets the WhatsApp prefill on success.
 */
export function InlineLeadForm({
  requestType,
  whatsappPath = "/",
  detailsLabel = "What do you need? (optional)",
  detailsPlaceholder = "A few words about your AC / HVAC and your area.",
}: {
  requestType: string;
  whatsappPath?: string;
  detailsLabel?: string;
  detailsPlaceholder?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitRequest({ ...data, requestType });
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("quote");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-white p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold">Thanks — your request is in</h3>
        <p className="mt-2 text-sm text-text-muted">
          For the fastest response, call or WhatsApp us now.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl(whatsappPath)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="il-name" className="mb-1.5 block text-sm font-medium">
            Full name <span className="text-red-500">*</span>
          </label>
          <input id="il-name" type="text" autoComplete="name" {...register("name")} className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="il-phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input id="il-phone" type="tel" autoComplete="tel" {...register("phone")} className={inputClass(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="il-details" className="mb-1.5 block text-sm font-medium">
          {detailsLabel}
        </label>
        <textarea id="il-details" rows={3} placeholder={detailsPlaceholder} {...register("details")} className={inputClass(false)} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-6 py-3.5 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Get a Quote"}
      </button>
      <FormAssurance />
    </form>
  );
}
