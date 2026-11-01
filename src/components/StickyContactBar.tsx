"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

/**
 * Fixed bottom contact bar shown on mobile only (under 768px), site-wide.
 * Call (shows the full number) + WhatsApp, full-width halves, ≥48px tall with
 * safe-area padding. Hidden while a form field is focused so it never covers
 * the on-screen keyboard or a form's submit button.
 */
export function StickyContactBar() {
  const pathname = usePathname();
  const wa = whatsappUrl(pathname);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isField = (el: Element | null) =>
      !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    const onFocusIn = (e: FocusEvent) => {
      if (isField(e.target as Element)) setHidden(true);
    };
    const onFocusOut = () => {
      // After focus moves, hide only if it is still on a form field.
      window.setTimeout(() => setHidden(isField(document.activeElement)), 0);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (hidden) return null;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={`tel:${PHONE}`}
        aria-label={`Call AGEC on ${PHONE_DISPLAY}`}
        className="flex min-h-[48px] flex-1 items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-text"
      >
        <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <span className="truncate">{PHONE_DISPLAY}</span>
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact AGEC on WhatsApp"
        className="flex min-h-[48px] flex-1 items-center justify-center gap-2 border-l border-border bg-[#25D366] px-2 py-3 text-sm font-semibold text-[#062e14]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        WhatsApp
      </a>
    </nav>
  );
}
