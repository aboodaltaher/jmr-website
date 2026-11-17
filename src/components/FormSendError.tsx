"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/lib/company";
import { whatsappUrl } from "@/lib/contact";

/**
 * Shown when a form's message could not be sent (the server could not email it to us). It tells
 * the visitor plainly that nothing was received and gives them the two ways to reach us now.
 */
export function FormSendError({ lang }: { lang?: "en" | "ar" }) {
  const pathname = usePathname() ?? "/";
  const ar = lang ? lang === "ar" : pathname === "/ar" || pathname.startsWith("/ar/");
  const wa = whatsappUrl(pathname);
  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
      <p className="font-semibold">
        {ar ? "لم يصلنا طلبك. نعتذر عن ذلك." : "We could not send your message, so we have not received it."}
      </p>
      <p className="mt-1">
        {ar ? "يرجى المحاولة مرة أخرى، أو تواصل معنا مباشرة:" : "Please try again, or reach us directly:"}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <a href={`tel:${PHONE}`} dir="ltr" className="inline-flex items-center gap-2 font-semibold underline">
          <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold underline">
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> {ar ? "واتساب" : "WhatsApp"}
        </a>
      </div>
    </div>
  );
}
