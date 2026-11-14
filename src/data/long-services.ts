// Copy for the long-form service pages that are waiting on facts from the owner.
// No imports on purpose, so scripts (npm run to-confirm) can load this file directly.
//
// GROUND RULE: nothing here may invent a certification, approval, price, project
// or number. Where a fact about AGEC is missing it is written as
// "[TO CONFIRM: …]" and listed by `npm run to-confirm`. General engineering
// explanation (what a duct standard is, how a leakage test works) is fine.

export interface LongSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LongService {
  key: "ducting" | "mep" | "kitchen-exhaust";
  /** English path. */
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  intro: string[];
  sections: LongSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  whatsappText: string;
  ctaHeading: string;
  ctaText: string;
}

export const DUCTING: LongService = {
  key: "ducting",
  path: "/ac-ducting-installation-dubai",
  metaTitle: "AC Ducting Installation & Duct Fabrication Dubai | AGEC",
  metaDescription:
    "AC ducting installation, duct fabrication and modification in Dubai — GI and pre-insulated duct, SMACNA-based construction, leakage testing. Request a quote.",
  h1: "AC Ducting Installation & Duct Fabrication in Dubai",
  kicker: "Ductwork · Installation · Fabrication",
  serviceType: "AC ducting installation and duct fabrication",
  intro: [
    "Ductwork is the part of an air-conditioning system nobody sees once the ceiling is closed, and the part that decides whether the system performs. A correctly sized, well-sealed, properly insulated duct network delivers the design airflow to every room at the supply temperature the equipment was selected for. A poorly built one wastes fan energy, leaks cooled air into the ceiling void, sweats in Dubai's humidity and leaves some rooms warm however low the thermostat is set.",
    "AGEC installs, fabricates and modifies ductwork for villas, offices, retail units and commercial buildings across the UAE, working from the engineering side: duct sizes come from the airflow and pressure-drop calculation, not from whatever was in the ceiling before. This page explains the materials, the construction standard, the testing and the modification work, so you know what to ask for from any contractor, including us.",
  ],
  sections: [
    {
      h2: "What we install and fabricate",
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
        "[TO CONFIRM: the pre-insulated panel type, brands and fire ratings AGEC supplies, and any authority approval that applies to them.]",
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
  ],
  whatsappText: "Hi AGEC, I'd like to discuss AC ducting installation or duct modification.",
  ctaHeading: "Get a quote for ductwork",
  ctaText: "Send us the drawings or a few photos of the space and the system. We reply on call and WhatsApp.",
};

export const MEP: LongService = {
  key: "mep",
  path: "/mep-contractors-dubai",
  metaTitle: "HVAC Contractor for MEP Projects in Dubai | AGEC",
  metaDescription:
    "HVAC contractor for MEP projects in Dubai: air conditioning, ventilation and air filtration — design, installation, shop drawings, commissioning. Get a quote.",
  h1: "HVAC Contractor for MEP Projects in Dubai",
  kicker: "MEP projects · HVAC scope · Coordination",
  serviceType: "HVAC contracting for MEP projects",
  intro: [
    "On most buildings the HVAC package is the largest and most space-hungry part of the MEP scope: big ducts, chilled-water or refrigerant pipework, plant on the roof and risers through every floor. It is also the package that clashes with everyone else. AGEC is an HVAC contractor. Our trade licence covers air-conditioning, ventilation and air-filtration systems, installation and maintenance, and on an MEP project that is the package we take.",
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
        "A building also needs electrical, plumbing and drainage, fire fighting, fire alarm and controls. Those are carried out by their own licensed contractors, appointed by the client or the main contractor, and they are outside our scope. Our role is to make sure the HVAC design and installation fit with their work, and that the interfaces between them are settled before they reach site.",
        "Interfaces that always need an owner are the power supply and isolators for HVAC equipment, condensate drainage routes, fire dampers and smoke-control interface, and controls and BMS integration. We agree in writing at the start of the project who supplies and who connects each of these.",
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
        "Written interface list: power, drainage, controls, fire and smoke",
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
        "Mechanical and ventilation works in Dubai involve authority requirements, particularly around fire and life safety for smoke ventilation, pressurisation and fire dampers, and building-authority requirements for the installation itself. Our ventilation and design documentation is prepared to support Dubai Municipality and Civil Defence review where it applies.",
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
      a: "HVAC only. Our trade licence covers air-conditioning, ventilation and air-filtration systems, installation and maintenance. Electrical, plumbing, fire fighting, fire alarm and controls are delivered by their own contractors, and we coordinate the HVAC interfaces with them.",
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
  whatsappText: "Hi AGEC, I'd like to discuss the HVAC package for an MEP project.",
  ctaHeading: "Discuss the HVAC scope of your project",
  ctaText: "Send us the drawings or the scope. We reply on call and WhatsApp.",
};

// Kitchen exhaust & hood cleaning. Published (see NEW_PAGES.kitchenExhaust). Every claim
// here is one the owner confirmed: Dubai Municipality approval for hood and grease-duct
// cleaning; own trained staff (not subcontracted); schedule set by the client's insurer or
// landlord requirements; scheduled around opening hours incl. after closing; before/after
// photos and a service report after every clean. Do NOT add: NFPA 96 or any Dubai
// Municipality frequency, specific equipment or waste-handling methods, or a certificate /
// hood sticker — none of those were confirmed.
export const KITCHEN_EXHAUST: LongService = {
  key: "kitchen-exhaust",
  path: "/kitchen-exhaust-cleaning-dubai",
  metaTitle: "Kitchen Exhaust & Hood Cleaning Dubai | AGEC",
  metaDescription:
    "Kitchen exhaust, hood and grease duct cleaning for Dubai restaurants and commercial kitchens by Dubai Municipality-approved AGEC. Photos and a service report.",
  h1: "Kitchen Exhaust & Hood Cleaning in Dubai",
  kicker: "Kitchen exhaust · Hood cleaning · Grease duct",
  serviceType: "Kitchen exhaust and hood cleaning",
  intro: [
    "Grease is the fuel in a commercial kitchen fire. It builds up on the hood, in the filters and along the exhaust duct above the cooking line, and a flare-up on the grill can carry fire straight into the duct. Regular, documented cleaning of the whole exhaust path is the practical way to keep that risk down. It is also what landlords and insurers ask to see.",
    "AGEC is approved by Dubai Municipality for kitchen hood and grease-duct cleaning. The work is carried out by our own trained staff, not subcontracted, and scheduled around your opening hours.",
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
      q: "Are you approved to do this work in Dubai?",
      a: "Yes. AGEC is approved by Dubai Municipality for kitchen hood and grease-duct cleaning.",
    },
    {
      q: "How often should a kitchen exhaust be cleaned?",
      a: "It depends on cooking volume and fuel type. High-volume grilling and frying needs far more frequent cleaning than light use. The schedule is normally set by your insurer's or landlord's requirements, and we schedule the cleans accordingly.",
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
  ],
  whatsappText: "Hi AGEC, I'd like to ask about kitchen exhaust and hood cleaning.",
  ctaHeading: "Book a kitchen exhaust clean",
  ctaText: "Tell us about the kitchen and your opening hours. We reply on call and WhatsApp.",
};
