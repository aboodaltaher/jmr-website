import Link from "next/link";
import { isPublished } from "@/data/new-pages";
import { buildMetadata } from "@/lib/metadata";
import {
  PenLine,
  Package,
  Wrench,
  Gauge,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import { BrandStrip } from "@/components/BrandStrip";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { ratingValue, reviewCount } from "@/lib/siteStats";
import { PROJECTS_DELIVERED, LARGEST_PROJECT_TR } from "@/lib/company";
import { capacityProjects } from "@/data/project-capacity";

export const metadata = buildMetadata({
  title: "HVAC Installation Dubai — AC, Ducted & VRF | AGEC",
  description:
    "HVAC and AC installation in Dubai: split, ducted, VRF and chilled-water systems, commissioned and handed over with test sheets and as-built drawings.",
  path: "/services/hvac-installation-dubai",
});

const linkClass = "text-primary underline underline-offset-2 hover:text-primary-dark";
const h2Class = "font-heading text-3xl font-bold md:text-4xl";

// Typical durations confirmed by the owner. Totals exclude approvals.
const timeline: { stage: string; detail: string; duration: string }[] = [
  { stage: "Site survey and heat load", detail: "Review the drawings and the room-by-room heat load.", duration: "1–2 days" },
  { stage: "Design, drawings and quotation", detail: "Equipment selection, duct and pipe drawings, and a written quote.", duration: "2–5 working days" },
  { stage: "Approvals and NOCs (where needed)", detail: "Submitted by the project consultant; we supply the drawings and documents.", duration: "1–4 weeks, depending on the authority" },
  { stage: "First fix", detail: "The concealed work: ducting, refrigerant piping, drain and cabling, before ceilings close.", duration: "Split unit 3–5 hours; ducted villa 1–2 weeks; VRF villa 2–3 weeks" },
  { stage: "Second fix", detail: "Indoor and outdoor units, grilles and controllers.", duration: "2–5 days" },
  { stage: "Pressure test and vacuum", detail: "Nitrogen pressure test of the refrigerant piping, then vacuum to below 500 microns before charging.", duration: "1–2 days, including the 24-hour hold" },
  { stage: "Commissioning and balancing", detail: "Airflow, temperatures, pressures, amps and controls checked against the design.", duration: "1–2 days" },
  { stage: "Handover", detail: "Walk-through, controller operation, warranty documents and the commissioning sheet.", duration: "Same day" },
];

const timelineTotals = [
  ["Split unit", "Same day"],
  ["Ducted villa", "2–4 weeks"],
  ["VRF villa", "3–6 weeks"],
];

const faq = [
  {
    q: "Do you install systems designed by someone else?",
    a: "Yes. We install to a consultant's or developer's approved drawings, and we also design and install as a single package. Either way we review the heat load and drawings first so the installed system matches the intent.",
  },
  {
    q: "Which types of AC do you install?",
    a: "Ducted and concealed splits, wall and cassette units, VRF/VRV systems, and packaged units — for villas, apartments, offices, retail and light-industrial spaces. We advise on the best fit for your layout, budget and running cost.",
  },
  {
    q: "Do you handle ducted AC installation and fit-out work?",
    a: "Yes. Ducted and concealed splits are part of our regular scope, for villas and apartments and for office, retail and restaurant fit-outs, installed to the tenant's layout.",
  },
  {
    q: "Who handles the authority approvals?",
    a: "The project consultant submits the approvals and obtains the NOCs. AGEC prepares and supplies the HVAC drawings, calculations and documents the consultant needs for those submissions. Which approvals apply depends on the project: a building management or landlord NOC for apartments and offices, a master developer NOC for villa communities, a Dubai Municipality building permit for new builds and major modifications, DEWA for new connections or a higher electrical load, and Dubai Civil Defence for kitchen exhaust, smoke management, fire dampers and fresh air systems in commercial buildings. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up.",
  },
  {
    q: "How long does an HVAC installation take?",
    a: "A split unit is usually done the same day. A ducted villa typically takes 2 to 4 weeks and a VRF villa 3 to 6 weeks, excluding approvals, which take 1 to 4 weeks depending on the authority. The first fix is the longest stage: 1 to 2 weeks for a ducted villa and 2 to 3 weeks for a VRF villa.",
  },
  {
    q: "What do I receive at handover?",
    a: "A commissioned system plus the record of it: a walk-through with you, controller operation, the warranty documents and the commissioning sheet (supply and return air temperatures, pressures, amps and voltage), together with equipment details and as-built information. This is what lets you, a consultant or a future maintainer understand exactly what was installed.",
  },
  {
    q: "Can you work alongside our main contractor?",
    a: "Yes. We regularly work as the HVAC subcontractor within a larger MEP package, coordinating first and second fix around the construction programme.",
  },
  {
    q: "Do you handle the maintenance afterwards?",
    a: "We can. Many clients move straight onto a maintenance plan or annual contract after handover so the system is serviced on schedule from day one.",
  },
];

export default function HvacInstallation() {
  const projects = capacityProjects();

  return (
    <ServiceDetailLayout
      slug="services/hvac-installation-dubai"
      ctaBar
      title="HVAC Installation"
      h1="HVAC and AC Installation in Dubai"
      intro="HVAC and AC installation in Dubai for new builds and fit-outs — from reading the design through to a commissioned, documented handover."
      overview={
        <>
          <p>
            HVAC installation is the stage where a cooling design becomes a
            working system. It covers everything between the approved drawings
            and a system that actually holds temperature: setting the indoor and
            outdoor equipment, running and insulating ductwork, routing
            refrigerant or chilled-water piping, wiring controls, and proving the
            result. Done carefully, it is the difference between a building that
            cools quietly and efficiently and one that never quite performs.
          </p>
          <p>
            AGEC installs ducted splits, concealed and cassette units, VRF/VRV
            systems and packaged equipment for villas, apartments, offices,
            retail units and light-industrial spaces. We work from the project
            drawings and the room-by-room heat load, so equipment is matched to
            the space rather than guessed — the single most common cause of high
            bills and poor comfort is a system that was never sized or installed
            to its design in the first place.
          </p>
          <p>
            Our scope runs from first fix through to handover. First fix covers
            the concealed work — duct runs, piping, drainage and containment —
            that has to be right before ceilings close. Second fix sets the
            equipment, grilles, diffusers and thermostats. Then we pressure-test
            and evacuate the pipework, charge the system, and commission it:
            checking airflow, temperatures and controls against the design before
            we hand it over. You receive the test readings and as-built
            information, not just a set of keys.
          </p>
          {isPublished("ducting") && (
            <p>
              The ductwork is a trade of its own: see how we{" "}
              <Link href="/ac-ducting-installation-dubai" className={linkClass}>
                fabricate, install, test and modify AC ductwork
              </Link>{" "}
              for villas and fit-outs.
            </p>
          )}
        </>
      }
      whenYouNeedIt={[
        "A new villa or building where the air conditioning is being installed from scratch",
        "An office, retail or restaurant fit-out that needs cooling and ventilation to its layout",
        "A renovation or extension where existing AC must be reworked or added to",
        "A developer or main contractor needing an HVAC subcontractor for the MEP package",
        "Replacing an old or failed system with correctly sized, modern equipment",
        "Any project where the cooling has to be installed and proven to a design, with documentation",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "Drawing & Load Review",
          description:
            "We review the design and heat load before mobilising, so equipment selection, duct sizes and pipe runs match the space and the drawings.",
        },
        {
          icon: Package,
          name: "Equipment Set",
          description:
            "Indoor and outdoor units, FCUs, AHUs and packaged equipment positioned for access, airflow and serviceability — not just where they fit.",
        },
        {
          icon: Wrench,
          name: "Ductwork & Piping",
          description:
            "Ductwork fabrication and insulation, refrigerant and drainage piping, and chilled-water pipework, installed and pressure-tested before closing up.",
        },
        {
          icon: ClipboardCheck,
          name: "Controls & Wiring",
          description:
            "Thermostats, zone controllers and interlocks wired and configured so each area controls independently and safely.",
        },
        {
          icon: Gauge,
          name: "Commissioning",
          description:
            "Vacuum and leak checks, charging to specification, airflow and temperature verification, and a function test of every mode before handover.",
        },
        {
          icon: FileText,
          name: "Handover Pack",
          description:
            "Commissioning readings, equipment details and as-built information so you — and your consultant — have a documented record of the system.",
        },
      ]}
      whyAgec={[
        "Installation driven by the heat load and drawings, so systems are sized and fitted to perform",
        "Engineers on site, not just installers — the people who design and commission are the people who sign off the work",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "A documented handover: test readings and as-built information, not just a working switch",
      ]}
      extraSection={
        <>
          {/* HOME vs PROJECT: sends home owners to the AC installation page */}
          <section className="border-b border-border py-10">
            <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
              <Link href="/ac-installation-dubai" className="rounded-lg border border-border bg-white p-6 transition-colors hover:border-primary">
                <h2 className="font-heading text-xl font-bold">Installing AC in your home?</h2>
                <p className="mt-2 text-text-muted">
                  Split, cassette, ducted and VRF for villas and apartments, supplied and installed, priced per ton.
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-primary">AC installation in Dubai &rarr;</span>
              </Link>
              <div className="rounded-lg border border-border bg-bg-soft p-6">
                <h2 className="font-heading text-xl font-bold">Installing HVAC for a project?</h2>
                <p className="mt-2 text-text-muted">
                  New buildings, fit-outs and larger systems are on this page, from design review to commissioned handover.
                </p>
              </div>
            </div>
          </section>

          <BrandStrip />

          {/* HEAT LOAD FIRST */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Heat-load first</h2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
                <p>
                  Every installation starts from the project drawings and a
                  room-by-room heat load, so the equipment is matched to the
                  space instead of guessed. The most common cause of high bills
                  and poor comfort is a system that was never sized, or never
                  installed, to its design.
                </p>
                <p>
                  Before we mobilise we review the design and heat load, so
                  equipment selection, duct sizes and pipe runs match the space
                  and the drawings. If there is no design yet, we can design and
                  install as a single package — see{" "}
                  <Link href="/services/hvac-design" className={linkClass}>
                    HVAC design and heat-load calculations
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* SYSTEMS WE INSTALL */}
          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>
                Systems we install: split, ducted, VRF and chilled water
              </h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                We install for new builds and fit-outs alike, and advise on the
                best fit for your layout, budget and running cost.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold">Split systems</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    Wall-mounted, cassette and concealed split units for villas,
                    apartments, offices and retail units.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">Ducted AC</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    Ducted AC installation with ductwork fabrication and
                    insulation, piping and grilles, pressure-tested before the
                    ceilings close.
                    {isPublished("ducting") && (
                      <>
                        {" "}
                        <Link href="/ac-ducting-installation-dubai" className={linkClass}>
                          AC ductwork
                        </Link>
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">VRF / VRV</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    Multi-zone VRF and VRV systems, from the piping layout
                    through commissioning.{" "}
                    <Link href="/services/vrf-vrv-systems" className={linkClass}>
                      VRF installation
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">Chilled water</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    FCUs, AHUs and chilled-water pipework for larger buildings.
                    For central plant, see{" "}
                    <Link href="/services/chiller-maintenance-dubai" className={linkClass}>
                      chiller installation and maintenance
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AUTHORITY APPROVALS */}
          <section id="approvals" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Approvals and NOCs for HVAC work in Dubai</h2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
                <p>
                  Authority approvals are submitted by the project consultant, who also obtains
                  the NOCs. AGEC prepares and supplies the HVAC drawings,
                  calculations and documents the consultant needs for those
                  submissions, and installs to the approved drawings. Which approvals apply depends on the project:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-text">Building management or landlord NOC:</strong> apartments and offices,
                    for any change to AC units or outdoor unit location.
                  </li>
                  <li>
                    <strong className="text-text">Master developer or community NOC:</strong> villas in communities such
                    as Emaar, Nakheel, Dubai Properties and Meraas.
                  </li>
                  <li>
                    <strong className="text-text">Dubai Municipality building permit:</strong> new builds, extensions
                    and major HVAC modifications.
                  </li>
                  <li>
                    <strong className="text-text">DEWA:</strong> new connections or an increased electrical load.
                  </li>
                  <li>
                    <strong className="text-text">Dubai Civil Defence:</strong> kitchen exhaust, smoke management, fire
                    dampers and fresh air systems in commercial buildings.
                  </li>
                  <li>
                    <strong className="text-text">Trakhees or DDA:</strong> projects inside their jurisdictions, for
                    example Jebel Ali and free zone areas.
                  </li>
                </ul>
                <p>
                  Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no
                  mark-up.
                </p>
              </div>
            </div>
          </section>

          {/* PROCESS TIMELINE */}
          <section id="process-timeline" className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Process timeline: typical duration of each stage</h2>
              <ol className="mt-8 max-w-3xl space-y-4">
                {timeline.map((step, i) => (
                  <li key={step.stage} className="flex gap-4 text-text-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1">
                      <strong className="text-text">{step.stage}</strong>: {step.duration}. {step.detail}
                    </span>
                  </li>
                ))}
              </ol>
              <h3 className="mt-10 font-heading text-xl font-semibold">Typical totals, excluding approvals</h3>
              <ul className="mt-3 max-w-3xl space-y-1 text-text-muted">
                {timelineTotals.map(([k, v]) => (
                  <li key={k}>
                    <strong className="text-text">{k}:</strong> {v}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* PROJECTS (TONNAGE TABLE) */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Projects</h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                {PROJECTS_DELIVERED} completed projects across the UAE; the
                largest single cooling capacity is {LARGEST_PROJECT_TR} TR.
                A selection of installations, by capacity:
              </p>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[34rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                      <th className="py-3 pr-4 font-semibold">Project</th>
                      <th className="py-3 pr-4 font-semibold">Location</th>
                      <th className="py-3 pr-4 font-semibold">Scope and system</th>
                      <th className="py-3 text-right font-semibold">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.slug} className="border-b border-border">
                        <td className="py-3 pr-4 font-medium">
                          <Link href={`/projects/${p.slug}`} className={linkClass}>
                            {p.name}
                          </Link>
                        </td>
                        <td className="py-3 pr-4 text-text-muted">{p.location.label}</td>
                        <td className="py-3 pr-4 text-text-muted">{p.systemSummary}</td>
                        <td className="py-3 text-right font-semibold">{p.facts.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6">
                <Link href="/projects" className={linkClass}>
                  See all projects
                </Link>
              </p>
            </div>
          </section>
        </>
      }
      faq={faq}
      relatedProjectSlugs={[
        "18-villas-community",
        "vrf-villa-al-mamzar-dubai",
        "private-villa-sharjah-flagship",
      ]}
    />
  );
}
