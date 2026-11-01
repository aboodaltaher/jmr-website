"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CallOrWhatsApp } from "@/components/CallOrWhatsApp";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/ac-maintenance-dubai", label: "AC Maintenance" },
  { href: "/ac-repair-dubai", label: "AC Repair" },
  { href: "/ac-amc-dubai", label: "AC AMC" },
  { href: "/ac-duct-cleaning-dubai", label: "AC Duct Cleaning" },
  { href: "/air-balancing-airflow-testing-dubai", label: "Air Balancing" },
  { href: "/smart-thermostat-installation-dubai", label: "Smart Thermostats" },
  { href: "/services/vrf-vrv-systems", label: "VRF / VRV Systems" },
  { href: "/services/maintenance", label: "Commercial Maintenance & AMC" },
  { href: "/services/ventilation-fresh-air", label: "Ventilation & Fresh Air" },
  { href: "/services/hvac-design", label: "HVAC Design" },
  { href: "/services/testing-commissioning", label: "Testing & Commissioning" },
];

const tailLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const linkClass =
    "text-sm font-medium text-text-muted hover:text-text transition-colors";

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" onClick={closeAll}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

          {/* Services: link + accessible dropdown toggle (keyboard + touch) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setServicesOpen(false);
            }}
          >
            <span className="flex items-center gap-0.5">
              <Link href="/services" className={linkClass} onClick={closeAll}>
                Services
              </Link>
              <button
                type="button"
                aria-label={servicesOpen ? "Close services menu" : "Open services menu"}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center justify-center p-1 text-text-muted hover:text-text"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </span>
            {servicesOpen && (
              <ul
                id="services-menu"
                role="menu"
                aria-label="Services"
                className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-md border border-border bg-white py-2 shadow-lg"
              >
                {serviceLinks.map((link) => (
                  <li role="none" key={link.href}>
                    <Link
                      role="menuitem"
                      href={link.href}
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm font-medium text-text-muted hover:bg-bg-soft hover:text-text focus:bg-bg-soft focus:outline-none transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {tailLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}

          <Link href="/ar" lang="ar" className={`${linkClass} font-semibold`}>
            العربية
          </Link>

          <CallOrWhatsApp
            menuAlign="right"
            triggerClassName={`flex items-center gap-1.5 ${linkClass}`}
          />

          <Link
            href="/quote"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Get a quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="-mr-2 flex items-center justify-center p-2 text-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="py-2.5 text-base font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/services"
              onClick={closeAll}
              className="mt-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Services
            </Link>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="py-2.5 pl-3 text-base font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-border pt-2" />
            {tailLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="py-2.5 text-base font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/ar"
              lang="ar"
              onClick={closeAll}
              className="py-2.5 text-base font-semibold text-primary hover:underline"
            >
              العربية
            </Link>

            <div className="mt-3 flex flex-col gap-3">
              <CallOrWhatsApp
                triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-text"
              />
              <Link
                href="/quote"
                onClick={closeAll}
                className="rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
