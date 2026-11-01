"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, whatsappUrl } from "@/lib/contact";

/**
 * Fixed bottom contact bar shown on mobile only (under 768px).
 * Call + WhatsApp, with page-specific WhatsApp prefilled text.
 */
export function StickyContactBar() {
  const pathname = usePathname();
  const wa = whatsappUrl(pathname);

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white md:hidden"
    >
      <a
        href={`tel:${PHONE}`}
        aria-label="Call AGEC"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-text"
      >
        <Phone className="h-5 w-5 text-primary" />
        Call
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact AGEC on WhatsApp"
        className="flex flex-1 items-center justify-center gap-2 border-l border-border bg-[#25D366] py-3.5 text-sm font-semibold text-[#062e14]"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </nav>
  );
}
