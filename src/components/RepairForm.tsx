"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Phone, MessageCircle } from "lucide-react";
import { submitRepairRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { PHONE } from "@/lib/contact";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  area: z.string().min(1, "Area is required"),
  issue: z.string().min(1, "Please describe the issue"),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function RepairForm({ whatsappHref }: { whatsappHref: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitRepairRequest(data);
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("repair");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold">
          Thanks — your repair request is in
        </h2>
        <p className="mt-2 text-text-muted">
          For the fastest response, call or WhatsApp us now and we&apos;ll tell
          you the earliest we can reach your area.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp a Photo of the Unit
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="rep-name" className="mb-1.5 block text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="rep-name"
            type="text"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="rep-phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="rep-phone"
            type="tel"
            {...register("phone")}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="rep-area" className="mb-1.5 block text-sm font-medium">
          Area <span className="text-red-500">*</span>
        </label>
        <input
          id="rep-area"
          type="text"
          placeholder="e.g. Al Barsha, Dubai"
          {...register("area")}
          className={inputClass(!!errors.area)}
        />
        {errors.area && (
          <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="rep-issue" className="mb-1.5 block text-sm font-medium">
          What is the issue? <span className="text-red-500">*</span>
        </label>
        <input
          id="rep-issue"
          type="text"
          placeholder="e.g. not cooling, leaking water, tripping the breaker"
          {...register("issue")}
          className={inputClass(!!errors.issue)}
        />
        {errors.issue && (
          <p className="mt-1 text-sm text-red-600">{errors.issue.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Request a Repair Visit"}
      </button>
    </form>
  );
}
