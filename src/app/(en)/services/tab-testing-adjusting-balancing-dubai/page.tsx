import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import {
  ClipboardCheck,
  Wind,
  Droplets,
  Gauge,
  Target,
  FileText,
  Download,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { isPublished } from "@/data/new-pages";
import { PROJECTS_DELIVERED } from "@/lib/company";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "HVAC Testing and Commissioning in Dubai | TAB | AGEC",
  description:
    "HVAC testing and commissioning in Dubai: air and water balancing, chiller and VRF commissioning, functional performance tests and a signed handover report.",
  path: "/services/tab-testing-adjusting-balancing-dubai",
});

const h2Class = "font-heading text-3xl font-bold md:text-4xl";
const bodyClass = "mt-5 max-w-3xl space-y-4 leading-relaxed text-text-muted";
const linkClass = "font-semibold text-primary underline underline-offset-2 hover:text-primary-dark";

// The sample report section only renders once the PDF exists in /public (see "Sample TAB report" in the PR).
const SAMPLE_PDF = "/sample-tab-report.pdf";
const sampleReportExists = fs.existsSync(path.join(process.cwd(), "public", SAMPLE_PDF));

const faq = [
  {
    q: "What's the difference between testing, commissioning and balancing?",
    a: "Balancing (TAB) sets airflow and water flow to the design figures. Commissioning is the wider process of proving the whole system works: controls, safeties and equipment performance. We provide both as one service, so a system is balanced and commissioned before handover.",
  },
  {
    q: "What is included in pre-commissioning checks?",
    a: "Checks that the system is complete and safe to start: equipment installed to the drawings, electrical supplies and rotation, water systems flushed and filled, ductwork complete and controls wired. Results go in a checklist and any defects in a deficiency log.",
  },
  {
    q: "Do you commission chillers and VRF systems?",
    a: "Yes. Chiller commissioning covers flows, temperature differentials, compressor performance and controls. VRF commissioning covers refrigerant pressures and temperatures, communication between units and a test run of every indoor unit.",
  },
  {
    q: "What is functional performance testing?",
    a: "A test of each design sequence under real operating conditions, such as staging, fresh-air control, interlocks and alarms, with the expected result, the actual result and a pass or fail recorded.",
  },
  {
    q: "What do I receive at the end?",
    a: "A signed report showing measured against design values, the adjustments made, functional test results and any deficiencies, set out for consultant, landlord or authority review. Calibration certificates for the instruments used are attached to every final report.",
  },
  {
    q: "Can you balance air only?",
    a: isPublished("airBalancing")
      ? "Yes. If airflow is all you need, our dedicated air balancing service covers it. Full TAB adds water-side balancing, commissioning and functional testing."
      : "Yes, if airflow is all you need. Full TAB adds water-side balancing, commissioning and functional testing.",
  },
  {
    q: "Can you test and commission an existing building?",
    a: "Yes. As well as new-build handover, we re-commission and re-balance existing buildings to restore performance, fix comfort complaints and reduce wasted fan and pump energy.",
  },
];

export default function TestingCommissioningBalancing() {
  return (
    <ServiceDetailLayout
      slug="services/tab-testing-adjusting-balancing-dubai"
      heroImage="/projects/trane-hvac-controls-commissioning-dubai.jpg"
      heroImageAlt="Trane wired controller at a Dubai project during commissioning, showing set temperature and status"
      ctaBar
      title="HVAC Testing and Commissioning in Dubai"
      h1="HVAC Testing and Commissioning in Dubai: TAB for New and Existing Buildings"
      intro="Measured airflow and water flow set and proven to their design figures, controls verified, and the whole system commissioned, with a documented report to prove it."
      overview={
        <>
          <p>
            Testing and commissioning is the step that proves an HVAC system delivers what it was
            designed to deliver. A system can be installed perfectly and still leave some rooms warm
            and others cold, because the air and water were never set to the design figures or the
            controls and safeties were never tested under load.
          </p>
          <p>
            AGEC carries out testing, adjusting and balancing (TAB) and commissioning for HVAC systems
            in Dubai and across the UAE. We are an engineer-led HVAC contractor,
            established 2022, with {PROJECTS_DELIVERED} completed projects. Our methodology follows ASHRAE
            111 and SMACNA for TAB and the CIBSE Commissioning Code and ASHRAE Guideline 0 for commissioning.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Handover of a new building or a new HVAC installation, where airflow, water flow and controls must be proven to design",
        "A consultant or developer requiring independent verification of the installation",
        "After a fit-out, retrofit or extension that changed the duct or pipe network",
        "Uneven comfort: some rooms never cool while others overcool and the system runs non-stop",
        "Retro-commissioning of an older building to restore performance and cut wasted fan and pump energy",
        "A consultant, landlord or authority requiring a documented, signed testing and commissioning report",
      ]}
      whatWeDo={[
        {
          icon: ClipboardCheck,
          name: "Pre-commissioning checklists",
          description:
            "Checks that each system is complete and safe to start, recorded per system with a deficiency log.",
        },
        {
          icon: Wind,
          name: "Air balancing",
          description:
            "Airflow measured and set at diffusers, grilles, FCUs, AHUs and FAHUs until each space matches its design.",
        },
        {
          icon: Droplets,
          name: "Water balancing",
          description:
            "Chilled-water flow set through coils, FCUs and terminals with balancing valves so every circuit gets its design flow.",
        },
        {
          icon: Gauge,
          name: "Chiller and VRF commissioning",
          description:
            "Flows, temperatures, pressures, compressor performance and communications verified against the design.",
        },
        {
          icon: Target,
          name: "Functional performance testing",
          description:
            "Each design sequence run under real conditions, with expected and actual results and a pass or fail recorded.",
        },
        {
          icon: FileText,
          name: "Commissioning reports",
          description:
            "Measured against design by area and system, with a deficiency log and sign-off, ready for consultant or owner handover.",
        },
      ]}
      whyAgec={[
        "Readings taken with calibrated, traceable instruments, with calibration certificates attached to every final report",
        "Results reported honestly: measured versus design, whether it passes or not",
        "Full handover scope under one team: air and water balancing, controls and BMS checkout, equipment performance testing and commissioning",
        "Methodology to ASHRAE 111, SMACNA and the CIBSE Commissioning Code / ASHRAE Guideline 0, with systematic documentation",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
      ]}
      faq={faq}
      extraSection={
        <>
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Pre-commissioning checklists</h2>
              <div className={bodyClass}>
                <p>
                  Commissioning starts before the equipment is switched on. We check that the system is
                  complete and safe to start, and record the result in a checklist for each system:
                </p>
                <ul className="list-disc space-y-2 ps-6">
                  <li>Equipment installed to the approved drawings and accessible for service</li>
                  <li>Electrical supplies, protection and motor rotation checked</li>
                  <li>Water systems flushed, filled and vented, strainers clean</li>
                  <li>Ductwork complete, dampers open and filters fitted</li>
                  <li>Controls wired and addressed, with safeties and interlocks ready to test</li>
                </ul>
                <p>
                  Problems found here are cheaper to fix than problems found after handover. They are listed
                  in a deficiency log for the contractor to close out.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Air and water balancing</h2>
              <div className={bodyClass}>
                <p>
                  <strong className="text-text">Air balancing</strong> measures airflow at every diffuser,
                  grille and unit, and adjusts dampers and fan speeds until each space matches the design.
                  {isPublished("airBalancing") ? (
                    <>
                      {" "}This page covers it in summary; our dedicated{" "}
                      <Link href="/air-balancing-dubai" className={linkClass}>air balancing service</Link>{" "}
                      explains the method, instruments and report in full.
                    </>
                  ) : null}
                </p>
                <p>
                  <strong className="text-text">Water balancing</strong> sets chilled-water flow through
                  coils, FCUs and terminals using balancing valves, so every circuit receives its design flow.
                  We also check pump duty points and pressure drops. Together, air and water balancing remove
                  the usual causes of uneven comfort.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Chiller commissioning</h2>
              <div className={bodyClass}>
                <p>A chiller plant is commissioned as a system, not as a single machine. We verify:</p>
                <ul className="list-disc space-y-2 ps-6">
                  <li>Chilled-water and condenser-water flow rates and temperature differentials</li>
                  <li>Compressor operation and performance against the design duty</li>
                  <li>Controls, sequencing, setpoints, interlocks and safety cut-outs</li>
                  <li>Pump and cooling tower operation where the plant is water-cooled</li>
                </ul>
                <p>
                  Readings are recorded against the design figures and any shortfall is reported with its
                  likely cause. For ongoing care of the plant, see our{" "}
                  <Link href="/services/chiller-maintenance-dubai" className={linkClass}>chiller maintenance</Link>{" "}
                  service.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>VRF commissioning</h2>
              <div className={bodyClass}>
                <p>
                  VRF systems depend on correct refrigerant conditions and on communication between many
                  units. Commissioning covers:
                </p>
                <ul className="list-disc space-y-2 ps-6">
                  <li>Refrigerant pressures and temperatures recorded under operation</li>
                  <li>Communication and addressing between outdoor units, indoor units and controllers</li>
                  <li>A test run of every indoor unit, with airflow checked at the terminals</li>
                  <li>Operating currents and error-code history reviewed</li>
                  <li>Settings and schedules confirmed with the client</li>
                </ul>
                {isPublished("vrfMaintenance") && (
                  <p>
                    After handover, see our{" "}
                    <Link href="/vrf-maintenance-dubai" className={linkClass}>VRF maintenance</Link> service.
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Functional performance testing and controls</h2>
              <div className={bodyClass}>
                <p>
                  Functional performance testing (FPT) proves the system behaves correctly under real
                  operating conditions, not just that it starts. We run each design sequence, such as fan
                  and pump staging, fresh-air control, interlocks and alarms, and record the expected result,
                  the actual result and a pass or fail. Failures go into the deficiency log and are re-tested
                  after correction.
                </p>
                <p>
                  Balanced airflow and water flow only hold if the controls behave. We check BMS inputs and
                  outputs point to point, confirm setpoints and control sequences, and test alarms and
                  interlocks.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Standards and instruments</h2>
              <div className={bodyClass}>
                <p>
                  Our methodology follows ASHRAE 111 and SMACNA for TAB and the CIBSE Commissioning Code and
                  ASHRAE Guideline 0 for commissioning. Readings are taken with calibrated, traceable
                  instruments and recorded area by area, so each figure in the report can be traced back to a
                  measurement. Calibration certificates are attached to every final report. We work to the
                  design figures on the approved drawings and specification, and we report what we measure
                  whether it passes or not.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Reports and handover</h2>
              <div className={bodyClass}>
                <p>
                  The deliverable is a documented report: measured against design values by area and system,
                  the adjustments made, FPT results, the deficiency log and any shortfall that points to a
                  sizing, leakage or equipment problem rather than a balancing one. It is signed and set out
                  for consultant, landlord and authority review.
                </p>
                <p>
                  We scope the job after a look at the drawings or a site visit, and give you a clear timeline
                  before starting. If you are installing a system, see our{" "}
                  <Link href="/services/hvac-installation-dubai" className={linkClass}>HVAC installation service</Link>;
                  we can commission what we install or independently verify another contractor&apos;s work.
                </p>
              </div>
            </div>
          </section>

          {sampleReportExists && (
            <section id="sample-report" className="bg-bg-soft py-16 md:py-20">
              <div className="mx-auto max-w-7xl px-6">
                <h2 className={h2Class}>Download a sample TAB report</h2>
                <div className={bodyClass}>
                  <p>
                    See how we document a testing and commissioning job before you ask us to quote one. The
                    sample shows the layout of an AGEC TAB report: the checklists, the measured-against-design
                    tables, the functional test sheets and the sign-off. All project names and values are
                    illustrative and do not describe a real job.
                  </p>
                </div>
                <a
                  href={SAMPLE_PDF}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  <Download className="h-4 w-4" aria-hidden="true" /> Download Sample TAB Report (PDF)
                </a>
              </div>
            </section>
          )}
        </>
      }
    />
  );
}
