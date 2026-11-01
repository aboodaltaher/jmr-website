"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

/**
 * Single "Call or WhatsApp" control that opens a small choice: call (shows the
 * phone number, tel: link) and WhatsApp. Works with mouse, touch and keyboard
 * (Enter/Space to open, Escape to close, arrow keys to move between options).
 */
export function CallOrWhatsApp({
  pathname = "/",
  triggerClassName = "",
  menuAlign = "left",
  menuVertical = "down",
  label = "Call or WhatsApp",
}: {
  pathname?: string;
  triggerClassName?: string;
  menuAlign?: "left" | "right";
  menuVertical?: "down" | "up";
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  // Close on outside click / tap.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  // Move focus to the first option when opened via keyboard.
  useEffect(() => {
    if (open) firstItemRef.current?.focus();
  }, [open]);

  const itemClass =
    "flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-text hover:bg-bg-soft focus:bg-bg-soft focus:outline-none";

  return (
    <div
      ref={wrapRef}
      className="relative inline-block"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerClassName}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Contact options"
          className={`absolute ${menuAlign === "right" ? "right-0" : "left-0"} ${menuVertical === "up" ? "bottom-full mb-2" : "top-full mt-2"} z-50 min-w-[232px] overflow-hidden rounded-md border border-border bg-white py-1 text-left shadow-lg`}
        >
          <a
            ref={firstItemRef}
            role="menuitem"
            href={`tel:${PHONE}`}
            className={itemClass}
            onClick={() => setOpen(false)}
          >
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>
              Call <span className="font-semibold">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            role="menuitem"
            href={whatsappUrl(pathname)}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
            <span>WhatsApp us</span>
          </a>
        </div>
      )}
    </div>
  );
}
