"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { servicesMenu, servicesMenuBottom, type MegaItem } from "@/data/nav";
import { gaEvent } from "@/lib/gtag";

/**
 * Mobile "Services" accordion: expands to the 3 groups as sub-accordions.
 * Rendered inside the existing hamburger menu.
 */
export function ServicesMobileAccordion({
  lang,
  onNavigate,
}: {
  lang: "en" | "ar";
  onNavigate?: () => void;
}) {
  const ar = lang === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);

  const label = ar ? "الخدمات" : "Services";
  const hrefFor = (i: MegaItem) => (ar ? i.arHref ?? i.href : i.href);
  const isCurrent = (href: string) => href.split("#")[0] === pathname;
  const bottom = servicesMenuBottom;

  return (
    <div dir={ar ? "rtl" : "ltr"}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-mobile-acc"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-2.5 text-base font-semibold text-text"
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div id="services-mobile-acc">
          {servicesMenu.map((g) => {
            const gOpen = group === g.title;
            return (
              <div key={g.title} className="border-t border-border">
                <button
                  type="button"
                  aria-expanded={gOpen}
                  onClick={() => setGroup(gOpen ? null : g.title)}
                  className="flex w-full items-center justify-between py-2.5 ps-3 text-xs font-semibold uppercase tracking-widest text-primary"
                >
                  {ar ? g.arTitle : g.title}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${gOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {gOpen && (
                  <ul className="pb-1">
                    {g.items.map((item) => {
                      const href = hrefFor(item);
                      const current = isCurrent(href);
                      return (
                        <li key={item.label}>
                          <Link prefetch={false}
                            href={href}
                            aria-current={current ? "page" : undefined}
                            onClick={() => {
                              gaEvent("nav_click", { menu: "services", group: g.title, label: item.label });
                              onNavigate?.();
                            }}
                            className={`block py-2 ps-6 text-base font-medium transition-colors ${
                              current ? "text-primary" : "text-text-muted hover:text-text"
                            }`}
                          >
                            {ar ? item.arLabel : item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
          <div className="border-t border-border">
            <Link prefetch={false}
              href={ar ? bottom.allServices.arHref ?? bottom.allServices.href : bottom.allServices.href}
              onClick={() => {
                gaEvent("nav_click", { menu: "services", group: "bottom", label: "all-services" });
                onNavigate?.();
              }}
              className="block py-2.5 ps-3 text-base font-semibold text-primary"
            >
              {ar ? bottom.allServices.arLabel : bottom.allServices.label} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
