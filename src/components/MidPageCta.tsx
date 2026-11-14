"use client";

import dynamic from "next/dynamic";
import { MessageCircle, Phone } from "lucide-react";
import { LazyOnView } from "@/components/LazyOnView";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const MidPageForm = dynamic(() => import("@/components/MidPageForm"), { ssr: false });

// "Talk to an engineer about your VRF / VRV systems" — lower-case the first letter unless the
// service name starts with an acronym (VRF, DX, HVAC, AC ...).
const lowerFirst = (s: string) => (/^[A-Z]{2,}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1));

/**
 * Mid-page lead block, placed directly after a page's first proof section. Headline, 3-field
 * form (name*, phone*, property type), WhatsApp and Call. The WhatsApp/Call buttons are plain
 * server-rendered links (they work without JavaScript); the form loads when it nears the
 * viewport. The block's height is reserved so nothing shifts.
 */
export function MidPageCta({
  service,
  path,
  lang = "en",
}: {
  service: string;
  /** This page's path; drives the WhatsApp pre-fill. */
  path: string;
  lang?: "en" | "ar";
}) {
  const ar = lang === "ar";
  const wa = whatsappUrl(path);
  const headline = ar ? `تحدّث مع مهندس بخصوص ${service}` : `Talk to an engineer about your ${lowerFirst(service)}`;

  return (
    <section
      data-track-location="mid_page"
      aria-labelledby="mid-cta-heading"
      className="bg-bg-soft py-12 md:py-14"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="mid-cta-heading" className="font-heading text-2xl font-bold md:text-3xl">
          {headline}
        </h2>
        <div className="mt-6 min-h-[300px] md:min-h-[130px]">
          <LazyOnView className="min-h-[inherit]">
            <MidPageForm service={service} lang={lang} />
          </LazyOnView>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> {ar ? "واتساب" : "WhatsApp"}
          </a>
          <a
            href={`tel:${PHONE}`}
            dir="ltr"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> {ar ? `اتصل ${PHONE_DISPLAY}` : `Call ${PHONE_DISPLAY}`}
          </a>
        </div>
      </div>
    </section>
  );
}
