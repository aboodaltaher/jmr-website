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
const SAMPLE_PDF = "/downloads/agec-sample-tab-report-fcu-air-balance.pdf";
const FAQ_PDF = "/downloads/agec-tab-faq-for-consultants.pdf";
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
    a: "A signed PDF report with a summary page, a system schematic and a data sheet for each AHU, FCU, fan and diffuser: design against measured airflow, static pressure, temperatures, amps and percentage of design, following NEBB and AABC-style procedures. It includes photos of instrument readings, key dampers and equipment nameplates, the functional test results and any deficiencies, set out for consultant, landlord or authority review. Calibrated instruments are used, and their certificates are attached to every final report.",
  },
  {
    q: "How long does the report take?",
    a: "A draft report comes within 3 to 5 working days of finishing site work. The final report follows within 2 days of receiving comments.",
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

// The 27 instruments in AGEC's TAB Instrument Register (owner, 22 Nov 2026), grouped as in the register.
const instrumentGroups: { category: string; rows: [string, string][] }[] = [
  {
    category: "Airside",
    rows: [
      ["Capture hood / balometer (with interchangeable hoods)", "Direct airflow (CFM / L/s) at supply, return & exhaust diffusers and grilles"],
      ["Digital micromanometer", "Duct static, velocity & differential pressure; pitot traverse readings"],
      ["Pitot-static tubes (various lengths)", "Duct velocity traverses for main ducts and AHU / FCU total airflow"],
      ["Thermal (hot-wire) anemometer", "Low-velocity measurement at grilles, openings and fume hoods"],
      ["Rotating vane anemometer", "Face velocity at coils, filters, louvres and large openings"],
      ["Differential pressure gauge / room pressure monitor", "Room-to-room pressurisation and filter pressure drop"],
      ["Smoke pencil / smoke generator", "Air pattern visualisation and leak detection"],
      ["Duct leakage test rig (fan + calibrated orifice)", "Ductwork leakage testing to SMACNA / DW/143 test pressure class"],
    ],
  },
  {
    category: "Waterside / hydronic",
    rows: [
      ["Hydronic balancing instrument (differential pressure / flow)", "Flow measurement across balancing valves (chilled & condenser water)"],
      ["Clamp-on ultrasonic flow meter", "Non-intrusive water flow measurement on pipes"],
      ["Digital pressure gauges", "Pump, chiller and coil pressure readings"],
    ],
  },
  {
    category: "Thermal & psychrometric",
    rows: [
      ["Digital thermometer with surface / immersion / air probes", "Supply & return air, chilled water and pipe surface temperatures"],
      ["Thermo-hygrometer (temperature & RH)", "Room conditions, on/off-coil dry bulb and humidity"],
      ["Infrared thermometer", "Quick non-contact surface temperature checks"],
      ["Temperature / RH data loggers", "Trend logging of room conditions during performance verification"],
    ],
  },
  {
    category: "Refrigerant (DX / VRF)",
    rows: [
      ["Digital refrigerant manifold with temperature clamps", "Suction / discharge pressures, superheat & subcooling"],
      ["Electronic refrigerant leak detector", "Leak detection on DX and VRF refrigerant piping"],
      ["Vacuum gauge (micron)", "Evacuation verification before charging"],
    ],
  },
  {
    category: "Electrical & mechanical",
    rows: [
      ["True-RMS clamp meter", "Motor running current, voltage and power checks"],
      ["Digital multimeter", "Voltage, continuity and control circuit checks"],
      ["Insulation resistance tester", "Motor and cable insulation testing"],
      ["Phase rotation indicator", "Motor rotation and phase sequence verification"],
      ["Digital tachometer (contact / optical)", "Fan and motor RPM, pulley and belt drive checks"],
    ],
  },
  {
    category: "Sound, vibration & IAQ",
    rows: [
      ["Sound level meter with octave band analysis", "Room noise levels (dB(A), NC / NR)"],
      ["Vibration meter", "Fan, pump and AHU vibration readings"],
      ["CO2 / indoor air quality meter", "Fresh air adequacy and IAQ verification"],
    ],
  },
  {
    category: "General",
    rows: [["Laser distance meter & measuring tape", "Duct, grille and room dimensions for area / volume calculations"]],
  },
];
const INSTRUMENT_COUNT = instrumentGroups.reduce((n, g) => n + g.rows.length, 0);

// "TAB FAQ for consultants" (owner's PDF, 22 Nov 2026), lightly shortened. Left out because the page already answers them:
// what the final report contains, how quickly it is issued (the page keeps its 3 to 5 day wording), and which instruments are used (see the table).
const consultantFaq: { q: string; a: string }[] = [
  {
    q: "What does AGEC's testing, adjusting and balancing (TAB) service cover?",
    a: "We test, adjust and balance airside and waterside HVAC systems: VRF/VRV, DX split and ducted units, fan coil units, AHUs and FAHUs, chilled water systems and ventilation / exhaust fans. The scope covers pre-commissioning checks, air and water balancing, performance testing, duct leakage testing and the final TAB report.",
  },
  {
    q: "Do you only balance systems you installed?",
    a: "No. We take on TAB as an independent scope for systems installed by other contractors, as well as for our own installations. We can also re-balance existing buildings after fit-out changes or complaints.",
  },
  {
    q: "Which project types do you work on?",
    a: "Residential villas and apartments, commercial offices, retail shops and fit-outs, and mixed-use buildings across Dubai and the UAE.",
  },
  {
    q: "Which standards do you follow?",
    a: "We work to the project specification first. Where the specification refers to them, our procedures follow recognised references such as ASHRAE 111, AABC/NEBB procedural standards, CIBSE Commissioning Codes A, B and W, and SMACNA/DW/143 for duct leakage. We also follow local authority requirements that apply to the project.",
  },
  {
    q: "What tolerance do you balance to?",
    a: "We balance to the tolerance in the project specification. Where none is given, we usually propose ±10% of design airflow at terminals and -5% / +10% on the total system airflow, and agree this with the consultant in the method statement before testing starts.",
  },
  {
    q: "How are readings shown in the report?",
    a: "Each terminal shows design flow, measured flow, final flow after adjustment and the percentage of design. The system total, motor data (design against measured voltage, current and fan speed) and the instrument used are recorded on the same sheet.",
  },
  {
    q: "Are the instruments calibrated?",
    a: "Yes. All instruments are calibrated by an accredited laboratory, with certificates traceable to national / international standards. Valid certificates are submitted with the method statement and attached to the final report. The instruments are listed in the table on this page.",
  },
  {
    q: "What do you submit for approval before testing?",
    a: "A TAB method statement, the list of instruments with calibration certificates, sample test sheets, and a testing programme. Testing starts once the consultant has approved these.",
  },
  {
    q: "What must be complete before balancing can start?",
    a: "The system must be installed per the approved drawings. Ductwork and pipework must be complete, and duct leakage tests passed where specified. Dampers and balancing valves must be installed and accessible, with clean filters fitted. The electrical supply and controls must be live, ceilings must have access panels, and the space must be closed off from outside conditions. We record all of these on a pre-commissioning checklist before testing.",
  },
  {
    q: "What happens if a system is not ready?",
    a: "We record the open items on the pre-commissioning checklist and send it to the contractor and consultant. Balancing restarts once the items are closed, so readings are not taken on an incomplete system.",
  },
  {
    q: "Can the consultant witness the tests?",
    a: "Yes, and we encourage it. We give advance notice of witness dates. Witnessed readings are recorded in the witnessed-flow column of the test sheet and signed by the witnessing party. Spot checks of any terminal can be repeated in front of the consultant.",
  },
  {
    q: "What if a system cannot reach design flow?",
    a: "We do not adjust readings to fit. We record the actual result and investigate likely causes, such as fan speed setting, duct restrictions, closed dampers, dirty filters, undersized ductwork or wrong unit selection. We then send the consultant a clear technical note with our recommendations.",
  },
  {
    q: "Do you re-test after corrective work?",
    a: "Yes. Once the corrective work is done, the affected system is re-tested and the report is updated with the final readings.",
  },
  {
    q: "Can you help at design stage?",
    a: "Yes. Our in-house HVAC design team handles heat load calculations, duct sizing and system selection. We can review designs for balance-ability, such as damper and valve locations and test points, before installation.",
  },
];

export default function TestingCommissioningBalancing() {
  return (
    <ServiceDetailLayout
      relatedProjectSlugs={[
        "pure-gym-al-barsha",
        "ave-restaurant-business-bay",
        "cultural-center-al-barsha",
      ]}
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
      schemaFaq={consultantFaq}
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
                  The deliverable is a documented PDF report: measured against design values by area and system,
                  the adjustments made, FPT results, the deficiency log and any shortfall that points to a
                  sizing, leakage or equipment problem rather than a balancing one. It is signed and set out
                  for consultant, landlord and authority review.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-text">Format:</strong> a summary page, a system schematic, and a data sheet
                    for each AHU, FCU, fan and diffuser showing design against measured airflow, static pressure,
                    temperatures, amps and percentage of design. Procedures follow NEBB and AABC-style methods.
                  </li>
                  <li>
                    <strong className="text-text">Photos:</strong> instrument readings, key dampers and equipment
                    nameplates.
                  </li>
                  <li>
                    <strong className="text-text">Instruments:</strong> calibrated, with certificates attached.
                  </li>
                  <li>
                    <strong className="text-text">Delivery:</strong> a draft within 3 to 5 working days of finishing site
                    work, and the final report within 2 days of receiving comments.
                  </li>
                </ul>
                <p>
                  We scope the job after a look at the drawings or a site visit, and give you a clear timeline
                  before starting. If you are installing a system, see our{" "}
                  <Link href="/services/hvac-installation-dubai" className={linkClass}>HVAC installation service</Link>;
                  we can commission what we install or independently verify another contractor&apos;s work.
                </p>
              </div>
            </div>
          </section>

          <section id="instruments" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>TAB instruments: {INSTRUMENT_COUNT} calibrated instruments</h2>
              <div className={bodyClass}>
                <p>
                  AGEC holds {INSTRUMENT_COUNT} instruments for testing, adjusting, balancing and commissioning HVAC
                  systems, listed in its TAB Instrument Register.
                </p>
              </div>
              <div className="mt-8 max-w-5xl">
                <table className="w-full table-fixed text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                      <th scope="col" className="w-[28%] py-3 pr-3 font-semibold sm:pr-4">Category</th>
                      <th scope="col" className="w-[33%] py-3 pr-3 font-semibold sm:pr-4">Instrument</th>
                      <th scope="col" className="w-[39%] py-3 font-semibold">Used for</th>
                    </tr>
                  </thead>
                  {instrumentGroups.map((g) => (
                    <tbody key={g.category} className="align-top text-text-muted">
                      {g.rows.map(([name, use], i) => (
                        <tr key={name} className={i === g.rows.length - 1 ? "border-b border-border" : "border-b border-border/50"}>
                          {i === 0 && (
                            <th scope="rowgroup" rowSpan={g.rows.length} className="break-words py-3 pr-3 font-semibold text-text [overflow-wrap:anywhere] sm:pr-4">
                              {g.category}
                            </th>
                          )}
                          <td className="py-3 pr-3 sm:pr-4">{name}</td>
                          <td className="py-3">{use}</td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                All instruments are calibrated by an accredited calibration laboratory with certificates traceable to
                national/international standards. Copies are submitted with the TAB method statement and the final
                report. Instruments are re-calibrated at the manufacturer&apos;s or specification interval (normally every 12
                months) and checked before use. Make, model and serial number are recorded on every test sheet.
              </p>
            </div>
          </section>

          {sampleReportExists && (
            <section id="sample-report" className="bg-bg-soft py-16 md:py-20">
              <div className="mx-auto max-w-7xl px-6">
                <h2 className={h2Class}>Download a sample TAB report</h2>
                <div className={bodyClass}>
                  <p>
                    See how we document a testing and commissioning job before you ask us to quote one. The sample
                    comes from a real AGEC job with the client, project and location details removed. It has the
                    commissioning certificate, the pre-commissioning checklist and the performance test record.
                  </p>
                </div>
                <div id="real-result" className="mt-8 max-w-3xl rounded-xl border border-primary/40 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Real result</p>
                  <p className="mt-2 leading-relaxed text-text">
                    FCU air balancing, retail fit-out, Dubai (Sept 2026): 5 TR fan coil unit, 3 supply diffusers.
                    Design 2,074 CFM, measured 1,972 CFM: 96% of design, within tolerance.
                  </p>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    Terminals: 1,031 / 576 / 385 CFM against 1,074 / 600 / 400 CFM design.
                  </p>
                </div>
                <a
                  href={SAMPLE_PDF}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-left font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  <Download className="h-4 w-4 shrink-0" aria-hidden="true" /> Sample TAB report (real AGEC job, client details removed) — PDF
                </a>
              </div>
            </section>
          )}

          <section id="consultant-faq" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>TAB FAQ for consultants</h2>
              <div className={bodyClass}>
                <p>
                  The questions consultants most often ask about our TAB and commissioning work.{" "}
                  <a href={FAQ_PDF} className={linkClass}>Download the TAB FAQ for consultants (PDF)</a>
                </p>
              </div>
              <div className="mt-8 max-w-3xl space-y-6">
                {consultantFaq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                    <p className="mt-2 leading-relaxed text-text-muted">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
