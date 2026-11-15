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

// Steps are the ones this page and the service already describe; no durations are stated.
const timeline = [
  "Review the drawings and the room-by-room heat load.",
  "First fix: the concealed work — duct runs, piping, drainage and containment — before ceilings close.",
  "Second fix: equipment, grilles, diffusers and thermostats.",
  "Pressure-test and evacuate the pipework, then charge the system.",
  "Commission: airflow, temperatures and controls checked against the design.",
  "Handover: commissioning readings, equipment details and as-built information.",
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
    q: "Who handles the DCD and DEWA approvals?",
    a: "The project consultant submits the approvals and obtains the NOCs. AGEC prepares and supplies the HVAC drawings, calculations and documents the consultant needs for those submissions.",
  },
  {
    q: "What do I receive at handover?",
    a: "A commissioned system plus the record of it: commissioning readings, equipment details and as-built information. This is what lets you, a consultant or a future maintainer understand exactly what was installed.",
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
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Authority approvals (DCD/DEWA)</h2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
                <p>
                  Authority approvals, including Dubai Civil Defence (DCD) and
                  DEWA, are submitted by the project consultant, who also obtains
                  the NOCs. AGEC prepares and supplies the HVAC drawings,
                  calculations and documents the consultant needs for those
                  submissions, and installs to the approved drawings.
                </p>
                {/* TODO(owner): which approvals and NOCs usually apply to an HVAC package, and who pays the authority fees, if you want that stated here. */}
              </div>
            </div>
          </section>

          {/* PROCESS TIMELINE */}
          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Process timeline</h2>
              <ol className="mt-8 max-w-3xl space-y-4">
                {timeline.map((step, i) => (
                  <li key={step} className="flex gap-4 text-text-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
              {/* TODO(owner): typical duration of each stage (or a range per project size) — none is stated on the site, so none is shown. */}
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
                        <td className="py-3 text-right font-semibold">{p.tonnage}</td>
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
