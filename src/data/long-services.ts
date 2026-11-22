// Copy for the long-form service pages that are waiting on facts from the owner.
// No imports on purpose, so scripts (npm run to-confirm) can load this file directly.
//
// GROUND RULE: nothing here may invent a certification, approval, price, project
// or number. Where a fact about AGEC is missing it is written as
// "[TO CONFIRM: …]" and listed by `npm run to-confirm`. General engineering
// explanation (what a duct standard is, how a leakage test works) is fine.

import { isPublished } from "./new-pages";

export interface LongSection {
  /** Optional anchor id for the section. */
  id?: string;
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  /** H3 blocks rendered under the paragraphs and bullets. */
  subsections?: { h3: string; paragraphs?: string[]; bullets?: string[] }[];
}

export interface LongService {
  key: "ducting" | "mep" | "kitchen-exhaust" | "vrf-maintenance" | "air-balancing";
  /** English path. */
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** Short service name for the mid-page "Talk to an engineer about your …" headline (defaults to serviceType). */
  ctaService?: string;
  intro: string[];
  sections: LongSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaHeading: string;
  ctaText: string;
  /** Optional: places named in the Service schema (default: Dubai only). */
  areaServed?: string[];
  /** Optional: named sub-services listed in the Service schema (no prices). */
  offerCatalog?: { name: string; items: string[] };
  /** Optional: real project photos shown after section number `afterSection` (0-based). */
  figures?: { afterSection: number; src: string; alt: string; caption?: string; fit?: "cover" | "contain" }[];
}

export const DUCTING: LongService = {
  key: "ducting",
  path: "/ac-ducting-installation-dubai",
  metaTitle: "Ducting Contractors in Dubai — AC Duct Fabrication | AGEC",
  metaDescription:
    "Ducting contractors in Dubai: AC duct installation, fabrication and modification in GI or pre-insulated duct, leakage tested to SMACNA. Request a quote.",
  h1: "Ducting Contractors in Dubai: AC Duct Installation & Fabrication",
  kicker: "Ductwork · Installation · Fabrication",
  serviceType: "AC ducting installation and duct fabrication",
  intro: [
    "AGEC is a ducting contractor in Dubai. We install, fabricate and modify AC ductwork, in galvanised iron (GI) and pre-insulated duct, for villas, offices, retail units and commercial buildings across the UAE.",
    "Ductwork is the part of an air-conditioning system nobody sees once the ceiling is closed, and the part that decides whether the system performs. A correctly sized, well-sealed, properly insulated duct network delivers the design airflow to every room at the supply temperature the equipment was selected for. A poorly built one wastes fan energy, leaks cooled air into the ceiling void, sweats in Dubai's humidity and leaves some rooms warm however low the thermostat is set.",
    "We work from the engineering side: duct sizes come from the airflow and pressure-drop calculation, not from whatever was in the ceiling before. This page explains the materials, the construction standard, the testing and the modification work, so you know what to ask for from any contractor, including us.",
  ],
  sections: [
    {
      h2: "Ducting contractors in Dubai: what we install and fabricate",
      paragraphs: [
        "Our ductwork scope covers new installations and replacements for ducted splits, DX packaged units, VRF ducted indoor units, fresh air handling units and exhaust systems. We fabricate and install rectangular and round duct, flexible connections, volume control dampers, fire dampers where the design calls for them, plenums, diffusers, grilles and the insulation and supports that go with them.",
        "Ductwork is fabricated partly in our own workshop and partly through a fabrication partner, depending on project size and programme.",
      ],
      bullets: [
        "Supply, return and fresh-air ductwork for ducted splits, packaged DX and VRF ducted units",
        "Galvanised iron (GI) and pre-insulated panel duct",
        "Diffusers, grilles, dampers and plenum boxes selected to the design airflow",
        "Duct insulation and vapour barrier to prevent condensation",
        "Hangers, supports and acoustic breaks sized to the duct",
      ],
    },
    {
      h2: "GI duct versus pre-insulated (PIR) duct",
      paragraphs: [
        "The two materials in common use in the UAE are galvanised iron sheet duct, which is then wrapped with insulation on site, and pre-insulated duct made from rigid foam panels with an aluminium facing on both sides. Neither is better in every case; the right choice depends on where the duct runs and what the building requires.",
        "GI duct is strong, takes its shape from the sheet gauge and reinforcement, and suits exposed runs, plant rooms, exhaust and kitchen systems and anywhere a mechanical impact or higher pressure is expected. Because the insulation is applied afterwards, quality depends on how carefully the wrap, joints and vapour barrier are finished. Pre-insulated duct is light, quick to install in tight ceiling voids and comes with insulation already bonded, which makes it popular in villas and fit-outs. Its limits are lower pressure and velocity ratings, more care needed at joints and support spacing, and fire-performance requirements that must be checked against the project and the authority.",
        "Where we supply pre-insulated duct, the panels come from approved suppliers and are fire-rated to the project specification.",
      ],
    },
    {
      h2: "Duct construction to SMACNA",
      paragraphs: [
        "SMACNA's HVAC duct construction standards set out how duct should be built for a given pressure class: the sheet gauge, the type and spacing of reinforcement, the joint and seam types and the support spacing. Following them is what stops a large duct from drumming, bulging or sagging once the fan is running.",
        "The pressure class comes from the fan and the system design. Low-pressure residential and light commercial systems sit at the lower end; fresh-air and exhaust systems with longer runs and higher velocities need heavier construction. We build to the pressure class on the design drawings and, where there is no consultant, we select it from the calculated system pressure. Our reference is the SMACNA HVAC Duct Construction Standards — Metal and Flexible, 4th edition (2020), in line with the SMACNA-compliant practice we follow across our installation, ventilation and balancing work.",
      ],
      bullets: [
        "Sheet gauge and reinforcement chosen for the duct size and pressure class",
        "Sealed longitudinal seams and transverse joints, not just taped over",
        "Support spacing and hanger type matched to duct weight, including insulation",
        "Turning vanes or radius elbows where the airflow needs them",
        "Access doors at dampers and equipment that has to be reached later",
      ],
    },
    {
      h2: "Duct leakage and why it is tested",
      paragraphs: [
        "Every joint in a duct network is a potential leak. Air that leaks before it reaches the room is cooled air you have paid for and not received, and in a ceiling void it can drive condensation and staining. Leakage also starves the farthest branches, which is why the room at the end of the run is so often the warm one.",
        "Leakage testing pressurises a section of duct with a calibrated fan and measures how much air escapes at the test pressure. The result is compared with the allowable leakage for the duct's class. Sealing joints properly during construction is far cheaper than finding leaks after the ceiling is closed, so we seal as we build and test before insulating and before the ceiling goes up.",
        "Ductwork is pressure-tested for leakage per the SMACNA HVAC Air Duct Leakage Test Manual, with the acceptance class set by the project specification, and a test report is issued at handover.",
        "Once the system is running, airflow at each branch and diffuser is measured and adjusted to the design values through our testing, adjusting and balancing service, so the ductwork is proven rather than assumed.",
      ],
    },
    {
      h2: "Duct modification for fit-outs and changes of use",
      paragraphs: [
        "Most ductwork jobs in existing buildings are modifications: a tenant fit-out moves partitions, a new meeting room needs its own supply and return, a villa extension adds rooms, or a kitchen or server area changes the load. Modifying duct is not just adding a branch. Every branch changes the pressure and airflow of the rest, so the work starts with measuring what the system delivers now and checking whether the fan and the main trunk can carry the change.",
        "We survey the existing duct, work out what can be re-used, re-route or resize the sections that cannot, fit new dampers so the system can be balanced again, and re-insulate and seal what we open. Where the existing unit is too small for the change, we say so and recommend the equipment change rather than overloading the duct.",
      ],
      bullets: [
        "Survey and airflow measurement of the existing system before design",
        "New branches, re-routed trunks and resized sections",
        "Re-balancing after the change so every room still gets its design airflow",
        "Reinstatement of insulation, vapour barrier and ceiling access",
      ],
    },
    {
      h2: "How a ducting job runs with AGEC",
      paragraphs: [
        "We start from the drawings, or from a site survey where there are none, and confirm the airflow and static pressure the duct has to deliver. We then produce the duct layout, agree the material and construction class, fabricate and install, seal and test, insulate, and hand over with measured airflow figures. Where a consultant or main contractor is involved we work to their approved drawings and submit shop drawings for approval before fabrication.",
        "For related work, see our HVAC installation service for the full system, testing, adjusting and balancing for airflow proof, and AC duct cleaning for existing ductwork that needs cleaning rather than replacing.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between GI duct and pre-insulated duct?",
      a: "GI duct is galvanised sheet metal that is insulated after installation. Pre-insulated duct is made from rigid insulated panels that arrive with insulation already bonded. GI suits exposed runs, plant rooms, exhaust and higher-pressure systems; pre-insulated panel suits low-pressure supply and return runs in tight ceiling voids. The right choice depends on the route, the pressure class and the building's fire requirements.",
    },
    {
      q: "Do you follow SMACNA for duct construction?",
      a: "Yes. Our installation, ventilation and balancing work follows SMACNA-compliant practices, with the sheet gauge, reinforcement, joints and supports selected for the system's pressure class. We build to the SMACNA HVAC Duct Construction Standards — Metal and Flexible, 4th edition (2020).",
    },
    {
      q: "Why is one room in my villa always warmer than the others?",
      a: "Common causes are an undersized or over-long branch, duct leakage, a kinked or crushed flexible connection, or an unbalanced system where the nearest rooms take most of the air. We measure the airflow at each diffuser against design to find which it is before recommending a fix.",
    },
    {
      q: "Can you modify the ductwork during a fit-out without replacing the unit?",
      a: "Often, yes, if the existing fan and main duct have spare capacity. We measure first. If the change takes the system past what the unit can deliver, we say so and recommend upgrading the equipment rather than overloading the ductwork.",
    },
    {
      q: "How do you stop condensation on ducts?",
      a: "With continuous insulation of the right thickness and an unbroken vapour barrier, sealed joints, and insulation carried through supports and hangers. Dubai's humid ceiling voids make any gap in the vapour barrier a point where moisture forms.",
    },
    {
      q: "Do you test ducts for leakage?",
      a: "Yes. Ductwork is pressure-tested for leakage per the SMACNA HVAC Air Duct Leakage Test Manual, with the acceptance class set by the project specification, and a test report is issued at handover.",
    },
    {
      q: "Do you fabricate the duct yourselves?",
      a: "Partly. Ductwork is fabricated partly in our own workshop and partly through a fabrication partner, depending on project size and programme.",
    },
  ],
  related: [
    { href: "/services/hvac-installation-dubai", label: "HVAC installation" },
    { href: "/services/ventilation-fresh-air", label: "Ventilation & fresh air" },
    { href: "/services/tab-testing-adjusting-balancing-dubai", label: "Testing, adjusting & balancing" },
    { href: "/ac-duct-cleaning-dubai", label: "AC duct cleaning" },
    ...(isPublished("mep") ? [{ href: "/mep-contractors-dubai", label: "HVAC for MEP projects" }] : []),
    { href: "/projects/double-twin-villa-sharjah", label: "Case study: ductwork for a double twin villa, Sharjah" },
    { href: "/projects/private-villa-sharjah-flagship", label: "Case study: concealed ductwork, private villa, Sharjah" },
  ],
  ctaHeading: "Get a quote for ductwork",
  ctaText: "Send us the drawings or a few photos of the space and the system.",
};

export const MEP: LongService = {
  key: "mep",
  path: "/mep-contractors-dubai",
  // MEP-specific wording on purpose: the homepage targets "HVAC contractor Dubai", this page the MEP
  // (HVAC package) intent. Honest scope: AGEC delivers the HVAC package only, not the other MEP trades.
  metaTitle: "HVAC Package for MEP Projects in Dubai | AGEC",
  metaDescription:
    "MEP projects in Dubai: AGEC delivers the HVAC package (design, shop drawings, installation, commissioning) and coordinates it with the other MEP trades.",
  h1: "The HVAC Package for MEP Projects in Dubai",
  kicker: "MEP projects · HVAC scope · Coordination",
  serviceType: "HVAC contracting for MEP projects",
  ctaService: "HVAC package for an MEP project",
  intro: [
    "On most buildings the HVAC package is the largest and most space-hungry part of the MEP scope: big ducts, chilled-water or refrigerant pipework, plant on the roof and risers through every floor. It is also the package that clashes with everyone else. AGEC is an HVAC contractor. Our scope is air-conditioning, ventilation and air-filtration systems, installation and maintenance, and on an MEP project that is the package we take.",
    "This page is deliberately specific. We deliver the HVAC package with our own teams and coordinate its interfaces with the electrical, plumbing, fire-protection and controls contractors, who are appointed separately. We do not offer those trades ourselves.",
  ],
  sections: [
    {
      h2: "What we deliver: the HVAC package",
      paragraphs: [
        "The HVAC scope is where our engineers and installation teams work directly, from the first heat-load calculation to the commissioning report. It covers air-conditioning, ventilation and air-filtration systems, and that is the scope we take responsibility for.",
      ],
      bullets: [
        "HVAC design: heat-load calculations, equipment selection, duct sizing and layout",
        "Supply and installation of VRF/VRV, DX, ducted split and chilled-water systems",
        "Ductwork fabrication and installation, insulation and air distribution",
        "Ventilation, fresh-air and exhaust systems",
        "Testing, adjusting, balancing and commissioning with documented results",
        "Maintenance after handover, including annual contracts",
      ],
    },
    {
      h2: "Other trades: coordinated, not delivered by us",
      paragraphs: [
        "A building also needs electrical, plumbing and drainage, fire fighting, fire alarm and controls. Those are carried out by their own specialist contractors, appointed by the client or the main contractor, and they are outside our scope. Our role is to make sure the HVAC design and installation fit with their work, and that the interfaces between them are settled before they reach site.",
        "Interfaces that always need an owner are the power supply and isolators for HVAC equipment, condensate drainage routes, the points where our ductwork meets fire dampers and the fire alarm, and the link to the building controls. We supply and connect our own HVAC equipment only. For every other item, we agree in writing at the start of the project which contractor is responsible, so nothing is left without an owner.",
      ],
    },
    {
      h2: "Coordination: where MEP projects are won or lost",
      paragraphs: [
        "Most MEP problems are not equipment problems; they are space problems. Two services want the same ceiling void, a beam sits where a duct was drawn, or a drain has no fall. These are far cheaper to settle on a drawing than above a finished ceiling.",
        "We coordinate the HVAC layout against the structure, ceilings and other services before fabrication, flag clashes in writing with a proposed resolution, and keep the coordinated drawings current as the design changes. Where a consultant or main contractor runs a BIM or coordination process we take part in it; where there is none we set up a simple clash-review routine for the HVAC interfaces.",
      ],
      bullets: [
        "Clash review of ducts, pipework and equipment against structure and other services",
        "Ceiling-void and riser allocation agreed before fabrication",
        "Written interface list: power, drainage, controls and fire-alarm interfaces, with an owner for each",
        "Regular coordination with the consultant and main contractor",
      ],
    },
    {
      h2: "Shop drawings and submittals",
      paragraphs: [
        "Before anything is fabricated or ordered, the contractor submits shop drawings and equipment submittals for the consultant's approval. For HVAC this includes duct and pipework shop drawings, equipment data sheets and selection reports, sections at tight locations, builder's-work requirements and the testing and commissioning method statement.",
        "Our team prepares HVAC shop drawings from the approved design and the coordinated layout, and issues them for approval with the supporting data. Work does not start on a package until its drawings are approved, which keeps changes on paper where they cost the least.",
      ],
    },
    {
      h2: "Authority approvals",
      paragraphs: [
        "Mechanical and ventilation works in Dubai involve authority requirements for the installation itself. Fire and life-safety systems, including smoke control and pressurisation, are designed and approved by the fire-protection designer and contractor, not by us. Where our HVAC system interfaces with them, for example a fire damper in our ductwork or shutdown of air handling units on alarm, we coordinate that interface and document our side of it.",
        "The consultant submits authority approvals and NOCs; AGEC prepares and supplies the HVAC drawings, calculations and documents for submission.",
      ],
    },
    {
      h2: "Testing, commissioning and handover",
      paragraphs: [
        "An HVAC package is not finished when the equipment is on the roof. Systems are tested, balanced and commissioned: airflows measured and adjusted, water or refrigerant circuits verified, controls tested against the sequence of operation, and results recorded. We follow ASHRAE 111, SMACNA and CIBSE commissioning guidance and hand over the measured figures, not just a completion certificate.",
        "After handover we keep the system running through annual maintenance contracts, so the people who built the system are the ones looking after it.",
      ],
    },
    {
      h2: "Who this suits",
      paragraphs: [
        "This suits projects where air-conditioning and ventilation are the dominant package: villas and villa communities, retail and F&B fit-outs, offices, gyms, clinics and data rooms. It also suits main contractors who want one accountable HVAC subcontractor with in-house design, installation and commissioning, rather than separate parties for each stage.",
        "If you need one contractor for every trade on a building, we are not that contractor: we are the HVAC package within it, and we will work with the other trades your project appoints.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you do the whole MEP package or only HVAC?",
      a: "HVAC only. Our scope is air-conditioning, ventilation and air-filtration systems, installation and maintenance. Electrical, plumbing, fire fighting, fire alarm and controls are delivered by their own contractors, and we coordinate the HVAC interfaces with them.",
    },
    {
      q: "Can you work under a main contractor or consultant?",
      a: "Yes. We work to the consultant's approved drawings and specification, submit shop drawings and equipment submittals for approval before fabrication, and attend coordination meetings.",
    },
    {
      q: "Who prepares the HVAC shop drawings?",
      a: "Our team prepares them from the approved design and the coordinated layout, and we issue them for approval together with equipment data and the testing and commissioning method statement.",
    },
    {
      q: "Do you handle authority approvals?",
      a: "The consultant submits authority approvals and NOCs. AGEC prepares and supplies the HVAC drawings, calculations and documents for submission.",
    },
    {
      q: "Do you provide commissioning and handover documents?",
      a: "Yes. HVAC systems are tested, balanced and commissioned, with measured airflows and settings recorded and handed over, following ASHRAE 111, SMACNA and CIBSE guidance.",
    },
    {
      q: "Do you maintain the systems after handover?",
      a: "Yes, through annual maintenance contracts covering scheduled servicing and breakdown response.",
    },
  ],
  related: [
    { href: "/services/hvac-design", label: "HVAC design & consultancy" },
    { href: "/services/hvac-installation-dubai", label: "HVAC installation" },
    { href: "/services/tab-testing-adjusting-balancing-dubai", label: "Testing, adjusting & balancing" },
    { href: "/ac-amc-dubai", label: "AC maintenance contracts" },
    { href: "/about", label: "About AGEC" },
  ],
  ctaHeading: "Discuss the HVAC scope of your project",
  ctaText: "Send us the drawings or the scope.",
};

// Kitchen exhaust & hood cleaning. Published (see NEW_PAGES.kitchenExhaust). Every claim
// here is one the owner confirmed: own trained staff (not subcontracted); schedule set by the
// client's insurer or landlord requirements; scheduled around opening hours incl. after closing;
// before/after photos and a service report after every clean. AGEC holds NO authority approval
// or licence claim (owner, Nov 2026: docs/business-facts.md). Do NOT add: any approval, NFPA 96
// or any authority frequency, specific equipment or waste-handling methods, or a certificate /
// hood sticker.
export const KITCHEN_EXHAUST: LongService = {
  key: "kitchen-exhaust",
  path: "/kitchen-exhaust-cleaning-dubai",
  metaTitle: "Kitchen Exhaust & Hood Cleaning Dubai | AGEC",
  metaDescription:
    "Kitchen exhaust, hood and grease duct cleaning for Dubai restaurants and kitchens by AGEC's own trained team, with photos and a service report.",
  h1: "Kitchen Exhaust & Hood Cleaning in Dubai",
  kicker: "Kitchen exhaust · Hood cleaning · Grease duct",
  serviceType: "Kitchen exhaust and hood cleaning",
  intro: [
    "Grease is the fuel in a commercial kitchen fire. It builds up on the hood, in the filters and along the exhaust duct above the cooking line, and a flare-up on the grill can carry fire straight into the duct. Regular, documented cleaning of the whole exhaust path is the practical way to keep that risk down. It is also what landlords and insurers ask to see.",
    "The work is carried out by AGEC's own trained staff, not subcontracted, and scheduled around your opening hours.",
  ],
  sections: [
    {
      h2: "Why kitchen exhaust is a fire-safety item",
      paragraphs: [
        "Cooking releases grease as vapour and fine droplets. The exhaust fan pulls them into the hood, and whatever the filters do not catch condenses on the cooler surfaces of the duct as a sticky film. Layer by layer that film becomes a thick, combustible deposit. A flare-up on a grill or fryer can ignite grease in the hood and carry flame into the duct, where it can run the length of the system, through the ceiling void and up to the roof discharge, in places nobody can reach with an extinguisher.",
        "A clean exhaust path does not remove the chance of a flare-up, but it removes the fuel that turns a flare-up into a building fire. That is why landlords and insurers commonly require commercial kitchens to keep their exhaust cleaned, and why they ask to see the records.",
      ],
    },
    {
      h2: "What is cleaned",
      paragraphs: [
        "The exhaust path runs from the hood above the cooking equipment, through the grease filters, into the duct, and up to the exhaust fan and discharge point. Each part collects grease differently, and cleaning only the part you can see leaves the rest as a hazard.",
      ],
      bullets: [
        "Hood canopy, plenum and grease filters",
        "Horizontal and vertical grease duct runs, with access panels where fitted",
        "Exhaust fan, fan housing and the roof or wall discharge",
        "Make-up air intake, where grease or dust is drawn in",
      ],
    },
    {
      h2: "Access: the part most kitchens get wrong",
      paragraphs: [
        "A duct can only be cleaned where it can be reached. Many kitchen exhaust systems were installed with too few access panels, or with panels that were later covered by ceiling, cladding or other services. Where a section cannot be reached, it cannot be cleaned, and the grease in it keeps building.",
        "Access is therefore the first thing to look at: where the panels are, whether there are enough of them, and whether long horizontal runs and vertical risers can be reached end to end. Adding a panel is a modification to a grease duct and has to be done properly, with a sealed, grease-tight panel, not an improvised cut in the duct.",
      ],
    },
    {
      h2: "How often it needs doing",
      paragraphs: [
        "Frequency depends on what is cooked and how much. A high-volume grill or fryer line builds up grease far faster than a light-use kitchen, and solid-fuel cooking faster again. In practice the schedule is set by your insurer's or landlord's requirements, and we schedule the cleans accordingly.",
        "Grease filters are a separate, much shorter cycle. They are the first line of defence and in an active kitchen they are removed and washed far more often than the duct is cleaned. A kitchen with filters in poor condition will load its duct with grease much faster.",
      ],
    },
    {
      h2: "Scheduled around your service",
      paragraphs: [
        "A kitchen cannot close for days, so cleaning is planned around your opening hours, including after closing. We operate 24 hours, which means the visit can be set for when the kitchen is quiet.",
        "The work is carried out by AGEC's own trained staff. It is not subcontracted.",
      ],
    },
    {
      h2: "How a cleaning visit runs",
      paragraphs: [
        "Every visit follows the same order, so nothing is skipped and the record is comparable from one visit to the next.",
      ],
      bullets: [
        "Walk the system with your kitchen manager: hood, filters, duct runs, access panels, fan and discharge point.",
        "Protect the kitchen: cover equipment and floors, and switch the exhaust off and isolate it before work starts.",
        "Photograph the hood, filters, duct interior and fan before cleaning begins.",
        "Remove and degrease the filters, then clean the hood canopy and plenum.",
        "Clean the duct runs section by section through the access panels, then the fan housing and the discharge.",
        "Refit the filters and panels, and test that the exhaust runs and captures properly.",
        "Photograph the same points again, then send the photos and a service report.",
      ],
    },
    {
      h2: "Compliance: what your landlord or insurer will ask for",
      paragraphs: [
        "Commercial kitchens are subject to fire-safety requirements set by the authorities, and an inspection, your landlord or your insurer may ask to see evidence that the exhaust is cleaned.",
        "The exact requirement for your premises depends on the type of kitchen and the building, so confirm it with your landlord or the authority. What we provide is the evidence: dated before-and-after photographs and a service report for each visit, which you keep on file. For a kitchen in a hotel, mall or restaurant group, we can schedule recurring visits under a [maintenance contract](/ac-amc-dubai).",
      ],
    },
    {
      h2: "Before and after: what the photos show",
      paragraphs: [
        "The before photos show the condition we found: the grease film on the filters and hood, and the deposit inside the duct and on the fan. The after photos show the same points clean, taken from the same position so you can compare them directly.",
        "If a section could not be reached, the report says which and why, so a blocked access panel is recorded and can be fixed, rather than hidden. If you run several kitchens, the reports let you compare them and spot the one that loads with grease fastest.",
      ],
    },
    {
      h2: "Photos and a service report",
      paragraphs: [
        "After every clean you receive before-and-after photographs and a service report. Those are what you show a landlord or an insurer, and what you keep on file for the next visit.",
      ],
    },
    {
      h2: "When a duct or fan needs more than cleaning",
      paragraphs: [
        "Cleaning sometimes shows that the exhaust itself is the problem: undersized duct, a hood that does not capture the cooking line, no make-up air so the kitchen is under negative pressure, or an exhaust fan that no longer delivers its design airflow. Symptoms are smoke spilling from the hood, doors that are hard to open or slam shut, and grease and heat reaching the dining area.",
        "Because AGEC designs, installs and balances kitchen ventilation systems, including the restaurant ventilation on our AVE Restaurant project, we can measure the airflow and recommend the correction, not only clean what is there. Exhaust and make-up air need to be balanced together, which is the kind of work covered by our ventilation and fresh-air service.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why does a kitchen exhaust need cleaning?",
      a: "Grease collects in the hood, filters and duct and can ignite from a flare-up at the cooking line. Cleaning the full exhaust path removes that fuel.",
    },
    {
      q: "Who carries out the cleaning?",
      a: "AGEC's own trained staff. The work is not subcontracted, and it is scheduled around your opening hours, including after closing.",
    },
    {
      q: "How often should a kitchen exhaust be cleaned?",
      a: "It depends on cooking volume and fuel type. High-volume grilling and frying needs far more frequent cleaning than light use. The schedule is normally set by your insurer's or landlord's requirements, and we schedule the cleans accordingly.",
    },
    {
      q: "What records do I get for a landlord or an inspection?",
      a: "Dated before-and-after photographs of the hood, filters, duct and fan, and a service report for each visit. If a section could not be reached, the report says which and why.",
    },
    {
      q: "Do you work out of hours?",
      a: "Yes. Cleans are scheduled around your opening hours, including after closing. We operate 24 hours.",
    },
    {
      q: "Who carries out the cleaning?",
      a: "AGEC's own trained staff. The work is not subcontracted.",
    },
    {
      q: "Will I get a record of the cleaning?",
      a: "Yes. After every clean you receive before-and-after photographs and a service report.",
    },
  ],
  related: [
    { href: "/services/ventilation-fresh-air", label: "Ventilation & fresh air" },
    { href: "/projects/ave-restaurant-business-bay", label: "AVE Restaurant case study" },
    { href: "/ac-duct-cleaning-dubai", label: "AC duct cleaning" },
    { href: "/ac-amc-dubai", label: "Maintenance contracts (AMC)" },
  ],
  ctaHeading: "Book a kitchen exhaust clean",
  ctaText: "Tell us about the kitchen and your opening hours.",
};

// ---------------------------------------------------------------------------------------------
// VRF maintenance and air balancing (built 2026-11-15; unpublished until the owner approves).
// ---------------------------------------------------------------------------------------------

export const VRF_MAINTENANCE: LongService = {
  "key": "vrf-maintenance",
  "path": "/vrf-maintenance-dubai",
  "metaTitle": "VRF Maintenance Dubai | VRV Service, AMC, 24/7 | AGEC",
  "metaDescription": "VRF maintenance in Dubai: preventive service, error-code diagnostics, AMC and 24/7 breakdown support for Daikin, Trane, O General, Midea and LG systems.",
  "h1": "VRF Maintenance in Dubai: Service, AMC and 24/7 Breakdown Support",
  "kicker": "VRF Maintenance · Service · AMC",
  "serviceType": "VRF and VRV system maintenance",
  "ctaService": "VRF maintenance",
  "intro": [
    "A VRF (or VRV) system cools many zones from one refrigerant circuit. That makes it efficient and flexible, but it also means one neglected outdoor unit, one blocked drain or one communication fault can take a whole floor out of comfort. Planned maintenance is how you find those problems before the summer does.",
    "AGEC Technical Services provides VRF maintenance in Dubai as an engineer-led HVAC contractor. We maintain VRF/VRV systems of all types for commercial and residential buildings in Dubai, Sharjah, Ajman, Abu Dhabi, Umm Al Quwain, Ras Al Khaimah and Fujairah, including Daikin VRV, Trane, O General, Midea and LG Multi V. This page covers maintenance, contracts and breakdown support. Planning a new system? See our [VRF/VRV installation service](/services/vrf-vrv-systems)."
  ],
  "sections": [
    {
      "h2": "VRF Maintenance in Dubai: What Our Service Covers",
      "paragraphs": [
        "Every planned visit follows a written preventive maintenance checklist, so every outdoor unit, indoor unit and branch is checked the same way every time and readings can be compared from one visit to the next."
      ],
      "subsections": [
        {
          "h3": "The checklist for every visit",
          "bullets": [
            "Read the error log and operating data with the service checker or BMS",
            "Check refrigerant pressures and temperatures against design",
            "Wash the outdoor unit coils and check the fans and fan motors",
            "Check compressor amps, oil level and return, and crankcase heaters",
            "Clean indoor unit filters, coils and drain pans, and test the drain pumps",
            "Check refrigerant piping, insulation and branch kits for leaks",
            "Inspect controllers, communication wiring and addressing",
            "Inspect electrical panels and tighten terminals",
            "Issue a written report with readings and recommendations"
          ]
        },
        {
          "h3": "Outdoor units",
          "bullets": [
            "Condenser coil and fins inspected and cleaned to restore heat rejection",
            "Fan motors, blades, mountings and vibration checked",
            "Inverter board, PCBs and heat sink inspected for dust, heat marks and loose connections",
            "Compressor and fan running currents compared with previous readings and nameplate data",
            "Panels, wiring, terminals and refrigerant pipe insulation inspected"
          ]
        },
        {
          "h3": "Indoor units",
          "bullets": [
            "Filters cleaned or replaced and the indoor coil checked",
            "Condensate drain pan, drain pipe and drain pump or float switch tested for free flow",
            "Fan, louvre and electronic expansion valve operation checked",
            "Room sensors and wired or wireless controllers tested"
          ]
        },
        {
          "h3": "Refrigerant circuit",
          "bullets": [
            "High and low pressures and key temperatures recorded and compared with manufacturer data",
            "Joints, service valves and connections checked for leaks",
            "If the system is low on refrigerant we find and repair the leak first; a top-up alone only hides the problem"
          ]
        },
        {
          "h3": "Controls, communications and error codes",
          "bullets": [
            "Current and historic error codes read and logged",
            "Communication between outdoor units, indoor units and any central controller or BMS interface checked",
            "Setpoints, schedules and lockouts reviewed against how the building is actually used"
          ]
        }
      ]
    },
    {
      "id": "fcu-maintenance",
      "h2": "FCU (fan coil unit) maintenance",
      "paragraphs": [
        "A fan coil unit (FCU) is the indoor unit that cools air with chilled water from a central plant. Each FCU is checked the same way every visit:"
      ],
      "bullets": [
        "Clean or replace the air filters",
        "Clean the cooling coil",
        "Clean the drain pan and flush the drain line",
        "Check the fan motor and bearings",
        "Check the control valve and the thermostat"
      ]
    },
    // TODO(owner): a table of brand error codes (Daikin, LG, etc.) — owner to supply; none is shown. Also owner to supply:
    // real VRF case photos (none exist yet), so none are shown on this page.
    {
      "h2": "Error code diagnostics",
      "paragraphs": [
        "VRF systems report faults as codes on the controller or on the outdoor unit display. A code names a circuit, sensor or component; it does not always name the cause. A pressure-sensor code, for example, can come from a refrigerant fault, a failed sensor or a wiring problem.",
        "We record the code, its history and the operating readings first, trace the fault to its root cause, repair it and only then clear the code. Resetting a system without finding the cause usually brings the same fault back, often on the hottest day.",
        "We diagnose with manufacturer service software where available (Daikin Service Checker, LG LGMV), plus digital manifold gauges, clamp meters, insulation testers, thermal imaging cameras, electronic leak detectors and nitrogen pressure testing."
      ]
    },
    {
      "h2": "Signs your VRF system needs service",
      "paragraphs": [],
      "bullets": [
        "Some zones are warm or cool unevenly while others are fine",
        "An error code shows on a controller or outdoor unit display",
        "The system trips, restarts or short-cycles",
        "Water leaks, ice or condensation at indoor units",
        "Unusual noise or vibration from an outdoor unit",
        "The outdoor units run flat out but the building still does not cool",
        "Indoor units drop off the controller or stop communicating",
        "Electricity use rises without a change in how the building is used"
      ]
    },
    {
      "h2": "How Dubai's heat affects VRF systems",
      "paragraphs": [
        "Outdoor air in Dubai regularly passes 45°C in summer, and that is exactly when a VRF outdoor unit has to reject the most heat. A coil that is slightly dirty in winter becomes a real capacity problem in July.",
        "This is why we recommend servicing before the summer peak and checking again during it."
      ],
      "bullets": [
        "**Dust and sand** collect on condenser coils and inverter heat sinks, raising pressures and operating temperatures.",
        "**Direct sun on rooftops** adds to the load on outdoor units, especially where units are packed close together and recirculate their own hot discharge air.",
        "**Long running hours** wear fan motors, bearings and compressors faster than in cooler climates.",
        "**Humidity** increases the condensate load, so blocked drains and failing drain pumps show up quickly as ceiling leaks.",
        "**Coastal air** can corrode fins, fixings and electrical terminals on units near the sea."
      ]
    },
    {
      "h2": "VRF AMC options",
      "paragraphs": [
        "A maintenance contract (AMC) puts the visits on a schedule instead of waiting for a breakdown. For VRF and other building plant, our commercial AMC starts with a baseline audit of your units, then agrees the scope, visit frequency and response targets with you in writing.",
        "VRF visits are priced per indoor unit, per visit, for villas and buildings alike; the price is shown below. Commercial systems are quoted after a site visit, based on the systems, the number of units and the visit frequency. We can also take over from your current contractor with a full audit and baseline report. See the [commercial AMC options](/ac-amc-dubai#commercial-amc)."
      ],
      "bullets": [
        "Response tiers: emergency within 4 hours, urgent same day, routine within 48 hours",
        "Visit frequency: quarterly preventive maintenance as standard; monthly visits are available for critical sites such as data rooms, hotels and hospitals",
        "A service report with photos after every visit, for AMC contracts and one-off visits"
      ]
    },
    {
      "h2": "24/7 breakdown response",
      "paragraphs": [
        "If your VRF system stops cooling, call or WhatsApp us at any hour. Tell us the building, the brand, any code on the controller and, if you can, send a photo of the controller or outdoor unit display. Response follows our tiers: emergency within 4 hours, urgent same day, routine within 48 hours."
      ]
    },
    {
      "h2": "Brands we maintain",
      "paragraphs": [
        "We service all VRF/VRV types, including Daikin VRV, Trane, O General, Midea and LG Multi V. Below are the faults and service points we see most often on each brand. Brand names are trademarks of their respective owners and are listed to show the equipment we work on."
      ],
      "bullets": [
        "**Daikin VRV:** inverter PCB faults, refrigerant leaks at branch joints and communication errors between outdoor and indoor units.",
        "**Trane:** communication wiring faults, electronic expansion valve (EEV) issues, and condenser coils clogged by dust and sand that cause high-pressure trips in summer.",
        "**O General:** indoor–outdoor communication errors, thermistor/sensor faults, and EEV faults that cause uneven cooling between indoor units.",
        "**Midea:** outdoor PCB and inverter module faults linked to voltage fluctuations, thermistor faults, and condenser coil fouling.",
        "**LG Multi V:** high discharge temperature and compressor oil-return issues in peak summer, communication errors, and inverter PCB faults."
      ]
    },
    {
      "h2": "Why AGEC for VRF maintenance",
      "paragraphs": [],
      "bullets": [
        "Engineer-led HVAC contractor, established 2022",
        "33 completed projects across the UAE, including VRF systems such as 224 TR at Basil Mall, Ajman and 109 TR at a villa in Al Mamzar; see our [projects](/projects)",
        "A service report with photos after every visit, so you keep a maintenance history for each unit",
        "If a repair changes airflow or refrigerant conditions, we can re-test and rebalance through our [testing, adjusting and balancing](/services/tab-testing-adjusting-balancing-dubai) service"
      ]
    }
  ],
  "faqs": [
    {
      "q": "How often should a VRF system be serviced in Dubai?",
      "a": "We recommend quarterly preventive maintenance as standard, with a service before the summer peak. Monthly visits are available for critical sites such as data rooms, hotels and hospitals."
    },
    {
      "q": "Do you maintain VRF brands other than Daikin?",
      "a": "Yes. We service all VRF/VRV types, including Daikin VRV, Trane, O General, Midea and LG Multi V."
    },
    {
      "q": "Do you provide 24/7 breakdown support for VRF systems?",
      "a": "Yes. You can call or WhatsApp us at any hour. Tell us the building, the brand and any code on the controller. Response follows our tiers: emergency within 4 hours, urgent same day, routine within 48 hours."
    },
    {
      "q": "What does a VRF maintenance visit include?",
      "a": "Outdoor unit coil and fan checks, inverter board and PCB inspection, indoor filter and condensate drain checks, refrigerant pressure and temperature readings, error-code logging and a check of communications between units and controllers, followed by a service report with photos."
    },
    {
      "q": "My VRF controller shows an error code. What should I do?",
      "a": "Note the code and which unit shows it, and avoid repeatedly resetting the system. Call us or send a photo of the controller. A code names a circuit or component, not always the cause, so we check the readings before clearing it."
    },
    {
      "q": "How is a VRF AMC priced?",
      "a": "After a site survey. Commercial maintenance pricing depends on the systems, the number of units and the visit frequency, so we quote once we have seen the plant."
    },
    {
      "q": "Can you take over VRF maintenance from my current contractor?",
      "a": "Yes. We start with a baseline audit of every unit, document its condition and any defects, then agree the scope, visit schedule and response targets with you in writing."
    }
  ],
  "related": [
    {
      "href": "/ac-amc-dubai#commercial-amc",
      "label": "Commercial maintenance and AMC"
    },
    {
      "href": "/services/chiller-maintenance-dubai",
      "label": "Chiller maintenance"
    },
    {
      "href": "/services/tab-testing-adjusting-balancing-dubai",
      "label": "Testing, commissioning and balancing"
    },
    {
      "href": "/projects/vrf-villa-al-mamzar-dubai",
      "label": "Case study: 109 TR VRF villa, Al Mamzar"
    },
    {
      "href": "/projects/basil-mall-ajman",
      "label": "Case study: 224 TR VRF, Basil Mall Ajman"
    }
  ],
  "ctaHeading": "Book a VRF service",
  "ctaText": "Call, WhatsApp or request a quote for VRF maintenance, a contract or breakdown support.",
  "areaServed": [
    "Dubai",
    "Sharjah",
    "Ajman",
    "Abu Dhabi",
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Fujairah"
  ],
  "offerCatalog": {
    "name": "VRF/VRV maintenance",
    "items": [
      "Daikin VRV maintenance",
      "Trane VRF maintenance",
      "O General VRF maintenance",
      "Midea VRF maintenance",
      "LG Multi V maintenance",
      "VRF error-code diagnostics",
      "VRF AMC (annual maintenance contract)",
      "24/7 VRF breakdown support"
    ]
  },
  "figures": [
    {
      "afterSection": 0,
      "src": "/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg",
      "alt": "Two Daikin VRV X outdoor units on a rooftop in Business Bay, Dubai, with insulated refrigerant pipework"
    },
    {
      "afterSection": 1,
      "src": "/projects/trane-hvac-controls-commissioning-dubai.jpg",
      "alt": "Trane wired controller on a wall in a Dubai project, showing set temperature and status"
    },
    {
      "afterSection": 6,
      "src": "/projects/trane-outdoor-units-rooftop-array-dubai.jpg",
      "alt": "Trane outdoor units on a Dubai rooftop with insulated refrigerant pipes and neighbouring plant"
    }
  ]
};

export const AIR_BALANCING: LongService = {
  "key": "air-balancing",
  "path": "/air-balancing-dubai",
  "metaTitle": "Air Balancing Dubai | Airflow Testing & Reports | AGEC",
  "metaDescription": "Air balancing in Dubai: airflow measured at every diffuser, grille, FCU and AHU, adjusted to design and signed off in a report for consultant approval.",
  "h1": "Air Balancing in Dubai: Airflow Testing and Balancing Reports",
  "kicker": "Air Balancing · Airflow Testing",
  "serviceType": "HVAC air balancing and airflow testing",
  "ctaService": "air balancing",
  "intro": [
    "Air balancing measures how much air each diffuser, grille, coil and fan is actually moving, then adjusts the system until it matches the design airflow on the consultant's drawings. Until that is done, an air conditioning system is only installed, not proven: some rooms stay warm, others run cold and noisy, and the plant works harder than it should.",
    "AGEC Technical Services provides air balancing in Dubai as a service in its own right, and in Sharjah, Ajman, Abu Dhabi, Umm Al Quwain, Ras Al Khaimah and Fujairah. We are an engineer-led HVAC contractor, established 2022. If you also need water-side balancing, commissioning and functional tests, see our full [testing and commissioning (TAB) service](/services/tab-testing-adjusting-balancing-dubai)."
  ],
  "sections": [
    {
      "h2": "What is air balancing?",
      "paragraphs": [
        "Air balancing is the part of testing, adjusting and balancing that deals with air. An engineer measures the airflow at each supply, return and exhaust terminal, compares it with the design figure, and adjusts dampers and fan speeds until each space gets what it was designed to get. Every measurement is recorded before and after adjustment, so the result is documented rather than assumed.",
        "A system can be built exactly to the drawings and still be out of balance. Ducts differ in length and resistance, dampers are left in the wrong position and fans run off their design point. Balancing corrects that."
      ]
    },
    {
      "h2": "Signs your system is out of balance",
      "paragraphs": [
        "None of these proves the cause on its own. Measuring the airflow does: it shows whether the problem is distribution, which balancing fixes, or something else such as a sizing error, duct leakage or an equipment fault, which we report so it can be dealt with."
      ],
      "bullets": [
        "Some rooms never reach the set temperature while others overcool",
        "Diffusers whistle, rattle or blow hard, while others in the same room barely move",
        "Draughts in one area and stale, stuffy air in another",
        "Fans running at high speed without delivering the airflow on the drawings",
        "Doors that pull shut or slam because the pressure between spaces is off",
        "Higher fan energy than the design predicted"
      ]
    },
    {
      "h2": "When you need air balancing",
      "paragraphs": [],
      "bullets": [
        "**Handover of a new building or floor**, where the airflow must be proven to the design before sign-off",
        "**Fit-outs and partition changes**, which alter duct runs, terminals and the air each room receives",
        "**Comfort complaints**: rooms that never cool, rooms that overcool, noisy diffusers, draughts, or stuffy spaces",
        "**Consultant or authority requirements** for a signed balancing report",
        "**After duct modifications or equipment changes**, when the old balance no longer applies",
        "**High CO₂ or poor fresh-air supply**, where outdoor-air quantity needs measuring (see [ventilation and fresh air](/services/ventilation-fresh-air))"
      ]
    },
    {
      "h2": "Air Balancing in Dubai: Our Method",
      "paragraphs": [],
      "subsections": [
        {
          "h3": "1. Review the design",
          "paragraphs": [
            "We start from the consultant's drawings and design airflows for each terminal, coil and fan. Where there are no drawings we survey the system and agree reference values with you first."
          ]
        },
        {
          "h3": "2. Pre-checks",
          "paragraphs": [
            "Before measuring we confirm the system is ready: filters in place and clean, dampers and fire dampers open, ductwork complete, fans rotating the right way and the system running in a representative mode."
          ]
        },
        {
          "h3": "3. Measure at diffusers and grilles",
          "paragraphs": [
            "Supply, return and exhaust airflow is measured at every terminal with a capture hood, and with an anemometer where a hood cannot be used. We record initial readings for the report."
          ]
        },
        {
          "h3": "4. Measure at FCUs, AHUs and FAHUs",
          "paragraphs": [
            "Airflow at fan coil units, air handling units and fresh air handling units is measured and compared with the design duty, including the outdoor-air quantity on fresh-air units."
          ]
        },
        {
          "h3": "5. Check static pressure and fan speed",
          "paragraphs": [
            "Duct static pressure and fan speed are read to see where the fan is working against its design point. This often explains why a branch is starved or noisy."
          ]
        },
        {
          "h3": "6. Adjust and re-measure",
          "paragraphs": [
            "We set balancing dampers and fan speeds, then re-measure every point, repeating until each terminal is within the acceptance tolerance (±10% of design airflow unless your specification or consultant requires tighter). The final readings go in the report."
          ]
        }
      ]
    },
    {
      "h2": "Instruments and calibration",
      "paragraphs": [
        "We use an airflow capture hood (balometer), an anemometer, a digital manometer or static pressure gauge and a tachometer. Instruments are calibrated, and calibration certificates are attached to every final balancing report, with the model and calibration details for each instrument used."
      ]
    },
    {
      "h2": "Standards we work to",
      "paragraphs": [
        "Specifications in the UAE usually name an air balancing procedure. Our procedures follow AABC/NEBB and ASHRAE guidelines, together with SMACNA and CIBSE guidance, and we balance to the design values and tolerances in your specification."
      ]
    },
    {
      "h2": "What you receive",
      "paragraphs": [
        "You receive a balancing report, signed by the engineer who carried out the work, that your consultant can review and approve. Acceptance tolerance is ±10% of design airflow at terminals, unless the project specification or consultant requires a tighter tolerance. See the [sample report format (PDF)](/sample-air-balancing-report.pdf); the values in it are illustrative only. The report includes:"
      ],
      "bullets": [
        "Project details, drawing reference and system tested",
        "Design, initial and final airflow for every terminal, with the deviation",
        "Fan and system readings, including static pressure and fan speed",
        "Instruments used, with calibration certificates attached",
        "Observations and recommendations, for example an obstructed return grille or a fan that cannot reach its design duty"
      ]
    },
    {
      "h2": "Who we work with",
      "paragraphs": [],
      "bullets": [
        "**MEP contractors** who need a balancing sub-contractor to prove their installation before handover",
        "**Consultants** who need an independent, measured report against their design",
        "**Fit-out companies** adjusting an existing system after partitions and ceilings change",
        "**Facility managers** investigating comfort complaints in occupied buildings"
      ]
    },
    {
      "h2": "Air balancing or full TAB?",
      "paragraphs": [
        "Air balancing covers airflow only. Full testing, adjusting and balancing adds water-side balancing, equipment commissioning, controls verification and functional performance testing. If your project needs more than airflow, our [TAB and commissioning service](/services/tab-testing-adjusting-balancing-dubai) covers it under one team. You can also see our [projects](/projects)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is air balancing?",
      "a": "Adjusting an HVAC system so each room and branch receives the airflow it was designed for, then recording the measured results in a report."
    },
    {
      "q": "When do I need air balancing?",
      "a": "At handover of a new building or floor, after a fit-out or duct modification, when rooms are unevenly cooled or noisy, or when a consultant or authority requires a signed balancing report."
    },
    {
      "q": "What instruments do you use?",
      "a": "An airflow capture hood (balometer), an anemometer, a digital manometer or static pressure gauge and a tachometer. Calibration certificates are attached to the final report."
    },
    {
      "q": "How long does the balancing report take?",
      "a": "A draft report comes within 3 to 5 working days of finishing site work. The final report follows within 2 days of receiving comments. It is a PDF with a summary page, a system schematic and a data sheet for each AHU, FCU, fan and diffuser, with photos of instrument readings, key dampers and equipment nameplates."
    },
    {
      "q": "Do you work to the consultant's design?",
      "a": "Yes. We balance to the design values on the approved drawings and report any difference, so the consultant can review and approve."
    },
    {
      "q": "Do you balance existing buildings, not only new ones?",
      "a": "Yes. We balance occupied buildings after fit-outs, modifications or comfort complaints."
    },
    {
      "q": "How long does air balancing take?",
      "a": "It depends on the size of the system and the number of terminals. We confirm the time after reviewing the drawings or a site visit, before work starts."
    },
    {
      "q": "What is the difference between air balancing and TAB?",
      "a": "Air balancing covers airflow only. TAB (testing, adjusting and balancing) also covers water-side balancing, commissioning, controls verification and performance testing."
    }
  ],
  "related": [
    {
      "href": "/services/tab-testing-adjusting-balancing-dubai",
      "label": "Testing, commissioning and balancing"
    },
    {
      "href": "/services/ventilation-fresh-air",
      "label": "Ventilation and fresh air"
    },
    {
      "href": "/services/hvac-design",
      "label": "HVAC design and consultancy"
    },
    {
      "href": "/projects/pure-gym-al-barsha",
      "label": "Case study: Pure Gym, Al Barsha (ventilation and balancing)"
    },
    {
      "href": "/projects/ave-restaurant-business-bay",
      "label": "Case study: AVE Restaurant (kitchen and dining air balancing)"
    }
  ],
  "ctaHeading": "Book air balancing",
  "ctaText": "Call, WhatsApp or request a quote for air balancing and airflow testing.",
  "areaServed": [
    "Dubai",
    "Sharjah",
    "Ajman",
    "Abu Dhabi",
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Fujairah"
  ],
  "offerCatalog": {
    "name": "Air balancing services",
    "items": [
      "Airflow measurement at diffusers and grilles",
      "Damper and fan adjustment to design airflow",
      "FCU, AHU and FAHU airflow balancing",
      "Duct static pressure measurement",
      "Air balancing report for consultant approval"
    ]
  },
  "figures": [
    {
      "afterSection": 0,
      "src": "[TO CONFIRM: AGEC balometer photo — path under /projects, with an AGEC-branded technician]",
      "alt": "AGEC technician measuring supply airflow at a ceiling diffuser with an airflow capture hood in a Dubai office"
    },
    {
      "afterSection": 3,
      "src": "/projects/fresh-air-handling-unit-fahu-dubai-agec.jpg",
      "alt": "Fresh air handling unit installed by AGEC on a commercial project in Dubai"
    },
    {
      "afterSection": 7,
      "src": "/images/sample-air-balancing-report-page-1.png",
      "alt": "Sample AGEC air balancing report showing design, initial and final airflow for each terminal",
      "caption": "Page 1 of the sample report. All values are illustrative.",
      "fit": "contain"
    }
  ]
};
