import Image from "next/image";
import Link from "next/link";
import { FOUNDER } from "@/lib/company";

// Author box shown at the foot of each blog post (audit task 10).
// Name comes from the company SSOT (FOUNDER); the bio is drawn from the
// engineer profile on /about.
// TODO(owner): adjust the bio copy below if you'd like a different emphasis.
const AUTHOR_TITLE = "Founder & Lead HVAC Engineer, AGEC";
const AUTHOR_PHOTO = "/team/mohannad-ghabboun-agec.jpg";
const AUTHOR_BIO =
  "Mohannad Ghabboun founded AGEC in 2022 and leads its engineering. He brings " +
  "more than 10 years of HVAC experience in the UAE across design, installation, " +
  "testing and commissioning — and led the HVAC works on the Parcels at Expo 2020 Dubai.";

export function AuthorBox() {
  return (
    <aside className="mx-auto max-w-3xl px-6">
      <div className="flex flex-col gap-5 rounded-xl border border-border bg-bg-soft p-6 sm:flex-row sm:items-start sm:gap-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
          <Image
            src={AUTHOR_PHOTO}
            alt={`${FOUNDER}, ${AUTHOR_TITLE}`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Written by
          </p>
          <h2 className="mt-1 font-heading text-lg font-bold">{FOUNDER}</h2>
          <p className="text-sm font-medium text-text-muted">{AUTHOR_TITLE}</p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{AUTHOR_BIO}</p>
          <Link
            href="/about"
            className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            More about AGEC &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}
