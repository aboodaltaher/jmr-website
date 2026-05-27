import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="JMR Technical Services"
                width={44}
                height={44}
              />
            </Link>
            <p className="mt-2 text-sm text-text-muted">
              JMR Technical Services LLC
            </p>
            <div className="mt-4 space-y-1 text-sm text-text-muted">
              <p>+971 55 363 3139</p>
              <p>sales@jmrtechnical.com</p>
              <p>Al Hind Tower, Office 1611, Dubai, UAE</p>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              24/7 Emergency Support · +971 55 363 3139
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              href="/quote"
              className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/book"
              className="rounded-md border border-text-muted/30 bg-white px-5 py-2.5 text-center text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} JMR Technical Services LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
