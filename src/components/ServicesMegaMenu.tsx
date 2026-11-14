"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import {
  servicesMenu,
  servicesMenuBottom,
  servicesFeature,
  isServicesActive,
  type MegaItem,
} from "@/data/nav";
import { gaEvent } from "@/lib/gtag";

const PANEL_ID = "services-mega-panel";
const INTENT_MS = 150;

/**
 * Desktop services mega-menu. The panel is ALWAYS rendered (so every link is in
 * the server-rendered HTML for SEO) and only shown/hidden via CSS. Opens on
 * click and on hover with a ~150ms intent delay; closes on Escape (focus
 * returns to the trigger), outside click, and when focus leaves the panel.
 */
export function ServicesMegaMenu({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };
  useEffect(() => clearTimers, []);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const onEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => setOpen(true), INTENT_MS);
  };
  const onLeave = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    leaveTimer.current = setTimeout(() => setOpen(false), INTENT_MS);
  };
  const close = () => {
    clearTimers();
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      e.stopPropagation();
      close();
      triggerRef.current?.focus();
    }
  };
  // Close when focus leaves the whole menu (e.g. Tab past the last link).
  const onBlur = (e: React.FocusEvent) => {
    if (wrapRef.current && !wrapRef.current.contains(e.relatedTarget as Node)) setOpen(false);
  };

  const label = ar ? "الخدمات" : "Services";
  const active = isServicesActive(pathname);
  const hrefFor = (i: MegaItem) => (ar ? i.arHref ?? i.href : i.href);
  const isCurrent = (href: string) => href.split("#")[0] === pathname;
  const track = (group: string, itemLabel: string) =>
    gaEvent("nav_click", { menu: "services", group, label: itemLabel });

  const bottom = servicesMenuBottom;
  const allServicesHref = ar ? bottom.allServices.arHref ?? bottom.allServices.href : bottom.allServices.href;

  return (
    <div
      ref={wrapRef}
      className="static"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      dir={ar ? "rtl" : "ltr"}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => {
          clearTimers();
          setOpen((v) => !v);
        }}
        className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
          active ? "text-primary" : "text-text-muted hover:text-text"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Full-width panel — always in the DOM (SSR), toggled with CSS visibility. */}
      <div
        id={PANEL_ID}
        role="region"
        aria-label={label}
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full z-50 border-b border-border bg-white shadow-lg transition-opacity duration-150 ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-[repeat(3,minmax(0,1fr))_300px]">
            {servicesMenu.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {ar ? group.arTitle : group.title}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {ar ? group.arAudience : group.audience}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => {
                    const href = hrefFor(item);
                    const current = isCurrent(href);
                    return (
                      <li key={item.label}>
                        <Link
                          href={href}
                          aria-current={current ? "page" : undefined}
                          onClick={() => {
                            track(group.title, item.label);
                            close();
                          }}
                          className="group -mx-2 block rounded-md px-2 py-1.5 transition-colors hover:bg-bg-soft focus:bg-bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <span
                            className={`block text-sm font-semibold ${
                              current ? "text-primary" : "text-text group-hover:text-primary"
                            }`}
                          >
                            {ar ? item.arLabel : item.label}
                          </span>
                          <span className="block text-xs leading-snug text-text-muted">
                            {ar ? item.arDesc : item.desc}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Feature card */}
            <div className="flex flex-col rounded-xl border border-border bg-bg-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {ar ? servicesFeature.arEyebrow : servicesFeature.eyebrow}
              </p>
              <Link
                href={servicesFeature.projectHref}
                onClick={() => {
                  track("feature", servicesFeature.title);
                  close();
                }}
                className="mt-2 block font-heading text-base font-bold text-text transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {ar ? servicesFeature.arTitle : servicesFeature.title}
              </Link>
              <Link
                href={ar ? servicesFeature.arQuoteHref : servicesFeature.quoteHref}
                onClick={() => {
                  track("feature", "quote");
                  close();
                }}
                className="mt-auto inline-block rounded-md bg-primary px-4 py-2.5 pt-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {ar ? servicesFeature.arQuoteLabel : servicesFeature.quoteLabel}
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-sm">
            <Link
              href={allServicesHref}
              onClick={() => {
                track("bottom", "all-services");
                close();
              }}
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {ar ? bottom.allServices.arLabel : bottom.allServices.label}
              <ArrowRight className={`h-4 w-4 ${ar ? "rotate-180" : ""}`} aria-hidden="true" />
            </Link>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-muted">
              <span className="font-medium">
                {ar ? bottom.arAreasLabel : bottom.areasLabel}:
              </span>
              <span>{ar ? bottom.homeBase.arLabel : bottom.homeBase.label}</span>
              {bottom.areas.map((a) => (
                <Link
                  key={a.href}
                  href={ar ? a.arHref ?? a.href : a.href}
                  onClick={() => {
                    track("areas", a.label);
                    close();
                  }}
                  className="transition-colors hover:text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {ar ? a.arLabel : a.label}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
