import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JMR Technical Services"
            width={72}
            height={72}
          />
          <div className="hidden font-heading font-bold uppercase leading-tight tracking-wider text-text md:block">
            <span className="text-xl">JMR</span>
            <br />
            <span className="text-xs">Technical Services</span>
          </div>
        </Link>
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
}
