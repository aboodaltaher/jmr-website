"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ac-maintenance-dubai", label: "AC Maintenance" },
  { href: "/smart-thermostat-installation-dubai", label: "Smart Thermostats" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="AGEC — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="-mr-2 flex items-center justify-center p-2 text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
