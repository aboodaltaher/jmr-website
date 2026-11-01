"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, MessageCircle } from "lucide-react";
import { submitAmcRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  location: z.string().min(1, "Area / emirate is required"),
  units: z.string().min(1, "Number of AC units is required"),
  currentContractor: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function AmcForm({
  whatsappHref,
  responsePromise = false,
}: {
  whatsappHref: string;
  responsePromise?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitAmcRequest(data);
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("amc");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold">
          Thanks — your AMC enquiry is in
        </h2>
        <p className="mt-2 text-text-muted">
          Our team will review your units and send a written proposal.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
        >
          <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="amc-name" className="mb-1.5 block text-sm font-medium">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="amc-name"
            type="text"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="amc-phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="amc-phone"
            type="tel"
            {...register("phone")}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="amc-propertyType" className="mb-1.5 block text-sm font-medium">
            Property type <span className="text-red-500">*</span>
          </label>
          <select
            id="amc-propertyType"
            {...register("propertyType")}
            className={inputClass(!!errors.propertyType)}
          >
            <option value="">Select property type</option>
            {["Villa", "Apartment", "Office", "Shop", "Other"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.propertyType.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="amc-location" className="mb-1.5 block text-sm font-medium">
            Area / emirate <span className="text-red-500">*</span>
          </label>
          <input
            id="amc-location"
            type="text"
            placeholder="e.g. Al Barsha, Dubai"
            {...register("location")}
            className={inputClass(!!errors.location)}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="amc-units" className="mb-1.5 block text-sm font-medium">
            Number of AC units <span className="text-red-500">*</span>
          </label>
          <input
            id="amc-units"
            type="text"
            inputMode="numeric"
            {...register("units")}
            className={inputClass(!!errors.units)}
          />
          {errors.units && (
            <p className="mt-1 text-sm text-red-600">{errors.units.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="amc-contractor" className="mb-1.5 block text-sm font-medium">
            Current AC contractor
          </label>
          <input
            id="amc-contractor"
            type="text"
            {...register("currentContractor")}
            className={inputClass(false)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="amc-notes" className="mb-1.5 block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="amc-notes"
          rows={4}
          {...register("notes")}
          className={inputClass(false)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Get My AMC Quote"}
      </button>
      {responsePromise && (
        <p className="text-center text-sm text-text-muted">
          We reply on call and WhatsApp 24/7. Written quote within 24 hours.
        </p>
      )}
    </form>
  );
}
