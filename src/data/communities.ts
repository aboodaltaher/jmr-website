// Copy for the local "AC maintenance in {community}" pages
// (/ac-maintenance/[community]). Which pages are live is controlled in
// ./community-index.ts (`published`).
//
// RULES (same as the case-study data): each page is written separately — no
// swapped-name templating. No invented projects, numbers or client names. Where
// a real fact is missing, the copy carries a visible "[TO CONFIRM: …]" marker
// and the same item is listed in `toConfirm` so nothing is forgotten. The only
// prices quoted are the ones already on /ac-maintenance-dubai.

import { money, prices, maintenanceRows, ONE_OFF_SUMMARY } from "./prices.ts";

export interface CommunitySection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  /** Optional contextual link shown under the section. */
  link?: { href: string; label: string };
}

export interface CommunityFaq {
  q: string;
  a: string;
}

export interface Community {
  slug: string;
  name: string;
  /** YYYY-MM-DD the copy was last changed (feeds the sitemap lastmod). */
  updatedAt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: CommunitySection[];
  projectsHeading: string;
  projectsIntro: string;
  /** Slugs from src/data/projects.ts — real case studies only. */
  projectSlugs: string[];
  faqs: CommunityFaq[];
  /**
   * Set for pages built around real job types (installation, replacement, AMC, leak repair)
   * instead of general maintenance. `name` is the short job name used in headings, schema and
   * the WhatsApp pre-fill; `links` point at the matching service pages (first one is primary).
   */
  job?: { name: string; links: { href: string; label: string }[] };
  /**
   * Real job photos. `src` is a /public path, or a "[TO CONFIRM: photo]" marker until supplied
   * (an open marker keeps the page hidden in production). `alt` is the ALT text.
   */
  photos?: { src: string; alt: string; width?: number; height?: number; caption?: string }[];
  /** WhatsApp pre-fill that names the area. */
  /** Everything the owner must confirm before this page is published. */
  toConfirm: string[];
}

const alBarsha: Community = {
  slug: "al-barsha",
  name: "Al Barsha",
  updatedAt: "2026-11-19",
  metaTitle: "AC Maintenance Al Barsha, Dubai — Villas & Commercial | AGEC",
  metaDescription:
    "AC maintenance in Al Barsha, Dubai for ducted villas and commercial units: dust-driven faults, drain and coil care, AMC. Call or WhatsApp us for a booking.",
  h1: "AC Maintenance in Al Barsha, Dubai",
  intro: [
    "Al Barsha is one of the districts where villa AC maintenance stops being an occasional job and becomes a routine. Many homes here come from the earlier waves of Dubai villa building, so the cooling systems inside them are often a decade or more into very hard working lives. AGEC Technical Services maintains and repairs AC systems for Al Barsha villas, apartments and small commercial units, and we have delivered HVAC installation projects in the area itself.",
    "This page explains what we typically find in Al Barsha, which of our services fit, and how to book a visit.",
  ],
  sections: [
    {
      h2: "Older villas, ducted DX and a lot of dust",
      paragraphs: [
        "The typical Al Barsha villa is cooled by ducted DX split systems: an outdoor condensing unit in the yard or on the roof, and concealed indoor units sitting above false ceilings, pushing air through ductwork to grilles in each room. It is a sensible design, but it hides its own problems. Because the indoor units are out of sight, a clogged coil or a slow drain can run for months before anyone notices.",
        "Dust makes everything worse. Al Barsha sits close to active building sites and open desert edge, so filters clog quickly, the evaporator coil collects a film of fine dust, and the outdoor coil on the roof slowly turns into a felt blanket. A system that was sized correctly years ago ends up working far harder than it should to deliver the same cooling.",
        "A routine visit on a ducted villa system covers the points that decide whether it keeps up through August:",
      ],
      bullets: [
        "filters and coils cleaned, indoor and outdoor",
        "condensate drain line cleared and checked",
        "refrigerant pressure checked against the unit's normal range",
        "electrical connections and controls inspected",
        "a cooling performance test, with a documented service report",
      ],
    },
    {
      h2: "Faults we see most often in Al Barsha villas",
      paragraphs: [
        "The same handful of faults account for most of the calls we get from older villas in this part of Dubai:",
      ],
      bullets: [
        "Weak cooling in the far rooms. Usually a dirty evaporator coil or choked filter, sometimes leaking joints in older ductwork that let cold air escape into the ceiling void.",
        "Water stains or drips from ceiling grilles. A blocked condensate drain, often packed with dust and algae, backs water up into the tray and then through the false ceiling.",
        "Outdoor units tripping at the peak of summer. A dust-blocked condenser coil pushes pressure up until the protection cuts in, often with a tired fan capacitor adding to the problem.",
        "Gas top-ups that do not last. Low refrigerant means a leak, typically at an old joint or a corroded coil, and topping up again and again only postpones the repair.",
        "Rattles and hums. Loose panels, worn fan bearings and ducts that have shifted on their hangers.",
      ],
    },
    {
      h2: "Services that fit Al Barsha homes and businesses",
      paragraphs: [
        `For villas we recommend servicing every three to four months, with the visits placed before and during the summer peak; that is what the dust load in this area justifies. A one-off service is ${ONE_OFF_SUMMARY}, and the exact cost depends on the number and type of units.`,
        "If a unit is already failing, our AC repair service diagnoses the root cause first, and our duct cleaning service clears the coils, drains and ductwork when airflow or smells are the problem. Villas with several units are usually better served by an annual maintenance contract, which schedules the visits and gives priority response for breakdowns.",
        "Commercial premises in Al Barsha, from gyms to shops, are covered by the same engineers on reactive calls or annual contracts.",
      ],
    },
    {
      h2: "AC repair in Al Barsha",
      paragraphs: [
        "Not every call from Al Barsha is routine maintenance. When a villa unit stops cooling, leaks water into the ceiling or starts to smell, it needs a repair visit rather than a service. An engineer diagnoses the root cause first, and you get the price before any work starts.",
        "Repairs cover split, ducted, cassette and VRF units. How a repair visit runs, the most common faults and our repair prices are on the AC repair page.",
      ],
      link: { href: "/ac-repair-dubai", label: "AC repair in Dubai: how a repair visit works" },
    },
  ],
  projectsHeading: "Our work in Al Barsha",
  projectsIntro:
    "We have delivered HVAC projects in Al Barsha, residential and commercial. They are installations, not maintenance contracts, but they show the systems and standards we work to in this part of Dubai.",
  projectSlugs: [
    "villa-al-barsha-dubai",
    "pure-gym-al-barsha",
    "cultural-center-al-barsha",
  ],
  faqs: [
    {
      q: "How often should I service the AC in an Al Barsha villa?",
      a: "Every three to four months. Dust loads in Al Barsha are high, so filters and coils foul faster than in newer, cleaner districts. If you only book once a year, make it before the summer peak and add a second visit during it.",
    },
    {
      q: "Why is my Al Barsha villa leaking water from the ceiling?",
      a: "Most often a blocked condensate drain on a concealed indoor unit. Dust and algae choke the line, water backs up in the tray and then comes through the false ceiling. Clearing and flushing the drain fixes it; leaving it will stain and eventually soften the ceiling board.",
    },
    {
      q: "My villa has several ducted units. Is an AMC worth it?",
      a: "Usually, yes. With three or more units, scheduled visits and priority breakdown response are easier to manage under one contract than as separate callouts. See our AMC page for the plans and what each includes.",
    },
    {
      q: "Do you look after commercial units in Al Barsha, like gyms and shops?",
      a: "Yes. We provide AMC and reactive maintenance for commercial premises, and we have delivered HVAC works for a gym and a public cultural facility in Al Barsha.",
    },
    {
      q: "What does a one-off AC service cost in Al Barsha?",
      a: `A one-off service is ${ONE_OFF_SUMMARY}. The exact cost depends on the number and type of units, and we confirm the price before we start.`,
    },
  ],
  toConfirm: [
    "Al Barsha: confirm the 'faults we see most often' list matches your own job records.",
  ],
};

const businessBay: Community = {
  slug: "business-bay",
  name: "Business Bay",
  updatedAt: "2026-11-19",
  metaTitle: "AC Maintenance Business Bay, Dubai — Offices & F&B | AGEC",
  metaDescription:
    "AC and FCU maintenance in Business Bay, Dubai for offices and restaurants on district cooling: leaks, weak cooling, rebalancing and AMC. Call or WhatsApp.",
  h1: "AC Maintenance in Business Bay, Dubai",
  intro: [
    "Business Bay is a district of towers, and almost everything about AC maintenance there follows from one fact: the cold usually arrives as chilled water from a district cooling provider, and the equipment inside your unit is what turns it into comfortable air. If your office is warm, your meeting room is noisy, or the unit below yours is complaining about a stain, the problem is nearly always in that in-unit equipment.",
    "AGEC Technical Services maintains and repairs that equipment for offices, shops and restaurants in Business Bay, and we have delivered HVAC work for a restaurant in the district.",
  ],
  sections: [
    {
      h2: "District cooling, FCUs and fit-outs",
      paragraphs: [
        "On district cooling, chilled water is pumped to your floor and passes through a fan coil unit, or FCU. A thermostat opens a control valve, water flows through the coil, and a fan blows air across it and into the space. There is no outdoor condensing unit to service; the equipment that matters is the FCU, its filter and coil, its condensate drain, its valve and actuator, the thermostat, and the ductwork and grilles that carry the air.",
        "Responsibility is usually split: the chilled water plant and risers belong to the provider or the building, while the FCUs and ducting inside a leased unit are normally the tenant's to maintain. Check your lease and the building's rules, and tell us the tower when you call so we can plan around its contractor access requirements.",
        "Business Bay units are also heavily fitted out. Partitions, meeting rooms and server cupboards are added after the original design, and each change quietly alters how air moves around the floor.",
      ],
    },
    {
      h2: "Common faults in Business Bay offices and restaurants",
      paragraphs: [
        "These are the problems that most often bring a call from this district:",
      ],
      bullets: [
        "Condensate tray and drain blockages. An FCU drain that backs up overflows into the ceiling void and can leak into the unit below, which turns a small maintenance miss into a dispute with a neighbour.",
        "Warm office, chilled water on. Dirty filters, a fouled coil, a failed valve actuator or a faulty thermostat can all stop cold water doing its job.",
        "Noisy fans. Worn bearings, loose fixings and duct connectors that have been disturbed during works.",
        "Uneven rooms after a fit-out. Move a wall and some rooms starve while others are overcooled until the system is rebalanced; our testing and balancing service measures and corrects exactly this.",
        "Restaurants: kitchen exhaust and make-up air that no longer balance, so the dining room fills with cooking smells or the kitchen runs hot.",
      ],
    },
    {
      h2: "What fits: FCU servicing, rebalancing and contracts",
      paragraphs: [
        "A scheduled FCU service covers the filter and coil clean, a drain flush, a check of the valve, actuator and thermostat, and a performance test, with a written report. For tenants with several floors or many units, an AMC schedules those visits and gives priority response when something fails.",
        "If you are unhappy with your current contractor, we can take over an existing system after a full audit and a baseline report, so you start with a clear record and a fresh schedule. We provide AMC and reactive maintenance for offices, shops, restaurants and buildings, including FCUs, AHUs, chillers and VRF systems.",
      ],
    },
    {
      h2: "AC repair in Business Bay",
      paragraphs: [
        "In Business Bay offices, shops and restaurants, a breakdown is usually an FCU that has stopped cooling, a drain overflowing into the ceiling void, or a noisy fan. These need a repair visit rather than a service: an engineer diagnoses the root cause first, and you get the price before any work starts.",
        "How a repair visit runs, the most common faults and our repair prices are on the AC repair page.",
      ],
      link: { href: "/ac-repair-dubai", label: "AC repair in Dubai: how a repair visit works" },
    },
  ],
  projectsHeading: "Our work in Business Bay",
  projectsIntro:
    "We delivered the kitchen ventilation and dining-area cooling for a restaurant in Business Bay, balancing the heavy exhaust and make-up air of a commercial kitchen against comfort in the dining room.",
  projectSlugs: ["ave-restaurant-business-bay"],
  faqs: [
    {
      q: "Who is responsible for AC maintenance in a Business Bay office on district cooling?",
      a: "Typically the building or the district cooling provider looks after the plant and risers, and the tenant looks after the FCUs, ducting and thermostats inside the unit. Your lease and the building's rules decide the exact split, and we work on the in-unit side.",
    },
    {
      q: "Why is my Business Bay office warm when the chilled water is running?",
      a: "Usually something in the FCU: a clogged filter, a dirty coil, a failed control valve actuator or a faulty thermostat. We test each in turn rather than assuming the supply is at fault.",
    },
    {
      q: "Can you maintain FCUs and ducted units in a restaurant fit-out?",
      a: "Yes. We have delivered kitchen ventilation and dining-area cooling for a restaurant in Business Bay, so we work with the kitchen exhaust and make-up air balance as well as the dining-room cooling.",
    },
    {
      q: "We moved partitions in our fit-out. Do we need air balancing?",
      a: "Often, yes. Changing the layout changes airflow, and rooms that were comfortable can become stuffy or too cold. Testing and balancing measures the airflow and resets it to suit the new layout.",
    },
    {
      q: "Can you take over maintenance from our current contractor?",
      a: "Yes. We audit the existing system, give you a baseline report, and set up a fresh maintenance schedule.",
    },
  ],
  toConfirm: [
    "Business Bay: confirm the 'faults we see' list and the tenant/building responsibility wording match how you actually work in these towers.",
  ],
};

const dubaiMarina: Community = {
  slug: "dubai-marina",
  name: "Dubai Marina",
  updatedAt: "2026-11-14",
  metaTitle: "AC Maintenance Dubai Marina — FCU Repair & Service | AGEC",
  metaDescription:
    "AC maintenance in Dubai Marina for high-rise apartments on district cooling: FCU leaks, noise, salt-air corrosion and AMC. Call or WhatsApp for a booking.",
  h1: "AC Maintenance in Dubai Marina",
  intro: [
    "Living above the Marina means a view, a sea breeze, and an air conditioning system that works in one of the most demanding environments in the city. Most apartments here are in high-rise towers on district cooling, and the kit inside them has two enemies: moisture that finds its way into the ceiling, and salty, humid air that works on metal around the clock.",
    "AGEC Technical Services maintains and repairs apartment AC for owners, tenants and property managers across the Marina. This page covers what goes wrong in these towers and how we deal with it.",
  ],
  sections: [
    {
      h2: "High-rise apartments on district cooling",
      paragraphs: [
        "Inside a typical Marina apartment, cooling comes from one or more fan coil units, or FCUs, tucked into the ceiling void or a bulkhead. Chilled water from the tower's district cooling connection runs through each FCU's coil, a fan moves room air across it, and a thermostat modulates a valve to hold the temperature. There is no outdoor unit to service, so every maintenance question comes back to the FCU and its pipework, drain and controls.",
        "Because the units are hidden above plasterboard and the water they handle is under your neighbours' floors, small faults in a tower are more consequential than in a villa.",
      ],
    },
    {
      h2: "FCU leaks and noise in Marina apartments",
      paragraphs: [
        "Two complaints dominate: water and sound.",
      ],
      bullets: [
        "Leaks. Cold coils sweat, and the condensate runs to a tray and out through a drain. When the drain line blocks, or the tray corrodes, water overflows into the ceiling void, stains the ceiling and can reach the apartment below, which means a conversation with a neighbour and the building management as well as a repair.",
        "Fan and bearing noise. Worn bearings and unbalanced fan wheels hum and rattle, and the noise travels through the ceiling void into the bedroom.",
        "Valve and pipe noise. A control valve actuator that is failing, or air trapped in the coil, can cause hissing and knocking in the pipework.",
        "Air noise. Dampers set wrongly or grilles partly closed make a whistle that is mistaken for a fault in the unit.",
      ],
    },
    {
      h2: "Salt air, humidity and what they do to coils",
      paragraphs: [
        "Coastal Dubai adds salt-laden humidity to the usual heat and dust, and in our maintenance contract guide we explain how it accelerates coil corrosion. In a Marina apartment that shows up as fouled coils, pitted fixings and terminals, and electronic controls that fail early. The remedy is simple but has to be regular: a clean coil, a flushed drain and a proper inspection of valves, terminals and the thermostat on a schedule, instead of waiting for the first leak.",
      ],
    },
    {
      h2: "Services that fit Marina towers",
      paragraphs: [
        "For owners and landlords we offer scheduled FCU servicing, drain clearing, coil cleaning, and thermostat and valve checks, with a written report after each visit. Property managers and investors with several apartments can put them under one annual maintenance contract. For a single apartment, tell us how many units you have and we will confirm the price before we start. If you rent, check your tenancy contract and ask your landlord who is responsible before booking.",
      ],
    },
  ],
  projectsHeading: "Projects near the Marina",
  projectsIntro:
    "We do not have a published case study in Dubai Marina yet. [TO CONFIRM: number of Dubai Marina jobs or buildings serviced, and any project we can name with the client's permission.] You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "Why is water leaking from my Marina apartment ceiling?",
      a: "In most cases the FCU's condensate drain is blocked, or the tray has corroded, so water overflows into the ceiling void. Stop using the unit, tell building management if water may be reaching the apartment below, and book a visit so we can clear the drain and check the tray.",
    },
    {
      q: "Why is my FCU so noisy?",
      a: "The usual causes are worn fan bearings, a loose fixing, or a control valve actuator and trapped air in the coil. We check each and tell you what needs replacing.",
    },
    {
      q: "Does salt air really damage AC equipment in the Marina?",
      a: "Yes. Salt-laden humidity speeds up corrosion on coils, fixings and electrical terminals. Regular cleaning and inspection keeps it manageable.",
    },
    {
      q: "Do you need a permit or building approval to work in a Marina tower?",
      a: "Most towers ask contractors to notify building management before starting work. We arrange the building management / FM work permit and access for Marina towers before the visit. Tell us the building when you book.",
    },
    {
      q: "I rent my apartment. Who pays for AC maintenance?",
      a: "It depends on your tenancy contract. Check it, or ask your landlord, before you book. Landlords and property managers can put several apartments under one contract with us.",
    },
  ],
  toConfirm: [
    "Dubai Marina: number of jobs or buildings serviced.",
    "Dubai Marina: any project we may name, with the client's permission.",
    "Dubai Marina: whether AGEC handles building access and permit paperwork, and how.",
    "Dubai Marina: confirm the FCU leak and noise descriptions match your job records, and that you actively service Marina towers.",
  ],
};

const arabianRanches: Community = {
  slug: "arabian-ranches",
  name: "Arabian Ranches",
  updatedAt: "2026-11-14",
  metaTitle: "AC Maintenance Arabian Ranches — Villa AMC & Service | AGEC",
  metaDescription:
    "AC maintenance in Arabian Ranches, Dubai for villa ducted systems: annual maintenance contracts, servicing and duct cleaning before move-in. Call or WhatsApp.",
  h1: "AC Maintenance in Arabian Ranches",
  intro: [
    "Arabian Ranches is a community of family villas, and the way people live here shapes how their air conditioning should be looked after. These are larger houses with several cooling zones, often handed over between owners and tenants, and the systems are expected to run quietly for the whole season. The result is that annual maintenance contracts are more popular here than almost anywhere else, and duct cleaning before a move-in is a common request.",
    "AGEC Technical Services maintains villa AC systems in Dubai, and this page is written for Arabian Ranches homeowners and tenants.",
  ],
  sections: [
    {
      h2: "Villa ducted systems in a gated community",
      paragraphs: [
        "A typical villa here has a ducted system serving a ground floor and a first floor, usually with more than one outdoor unit and several indoor units above ceilings or in plant cupboards. The thermostats are often in different parts of the house, and each zone is a separate piece of equipment that needs its own filters, coil and drain checked.",
        "The quiet, enclosed nature of these villas hides faults. You do not hear a failing unit over a street, and a first-floor bedroom that runs a few degrees warm can be explained away for weeks before a service is booked.",
      ],
    },
    {
      h2: "Why annual maintenance contracts suit Ranches villas",
      paragraphs: [
        "With several units per house, the arithmetic of separate callouts stops making sense. An annual maintenance contract fixes the price, schedules the visits so each unit is serviced before and during the summer, and gives you priority response if something fails in July.",
        "It also gives the villa a record: what was cleaned, what was measured, what was replaced. That matters when you sell, hand the property to a tenant, or need to show a landlord that the system has been looked after. Our AMC page sets out the plans and what each includes.",
      ],
    },
    {
      h2: "Duct cleaning before you move in",
      paragraphs: [
        "If you are about to move into a Ranches villa, particularly one that has been empty or between tenants, do the air system first, before furniture and belongings go in. Dust settles in ducts and coils during vacancy, and the first time the system runs it blows that dust through every room.",
        "Our duct cleaning service covers the ductwork, the coils and the drains, with disinfection and a written completion report. Booking it before you unpack means one clean, uninterrupted visit.",
      ],
    },
    {
      h2: "What goes wrong in a Ranches villa",
      paragraphs: ["The faults we are called out for most in villas like these:"],
      bullets: [
        "Uneven temperatures between floors, usually from dirty filters, a fouled coil or dampers that need rebalancing.",
        "Condensate drain overflow from indoor units that were not serviced while the villa was empty.",
        "Outdoor condensers clogged with dust, which raises running pressure and the electricity bill.",
        "Thermostats that no longer match the zone they control after a refit.",
      ],
    },
  ],
  projectsHeading: "Projects in Arabian Ranches",
  projectsIntro:
    "We do not have a published case study in Arabian Ranches yet. [TO CONFIRM: number of Arabian Ranches villas serviced or under contract, and any project we can name with the owner's permission.] You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "When should I service the AC before moving into an Arabian Ranches villa?",
      a: "Before you move furniture in. Book a full service and duct clean so the first run of the system is on clean ducts and coils, and so any fault from the vacant period is found while the house is empty.",
    },
    {
      q: "Is an AMC worth it for a Ranches villa?",
      a: "For most villas with several units, yes. It schedules the visits, fixes the annual price, and gives priority response for breakdowns during summer. See our AMC page for the plans.",
    },
    {
      q: "Can you clean the ducts before we move in?",
      a: "Yes. We clean the ductwork, coils and drains, disinfect them, and give you a written completion report.",
    },
    {
      q: "Do you cover all the Arabian Ranches communities?",
      a: "We cover Arabian Ranches 1, 2 and 3. Tell us your street or community when you book and we will confirm.",
    },
    {
      q: "What does a one-off service cost for a Ranches villa?",
      a: `A one-off service is ${ONE_OFF_SUMMARY}. Most villas have 3 or more units. The exact cost depends on the number and type of units, and we confirm it before we start.`,
    },
  ],
  toConfirm: [
    "Arabian Ranches: number of villas serviced or under contract.",
    "Arabian Ranches: any project we may name, with the owner's permission.",
    "Arabian Ranches: which communities AGEC covers.",
    "Arabian Ranches: confirm the villa fault list and the AMC-demand and move-in duct-cleaning statements match your experience.",
  ],
};


const replacePrice = money(prices.installation[4].from as number);
const splitPrice = money(prices.installation[0].from as number);
const ductedPrice = money(prices.installation[2].from as number);
const callout = money(prices.repair[0].from as number);
const amc = prices.amcPlans;
const amcFrom = money(Math.min(...amc.map((p) => p.from)));
const warranty =
  "The manufacturer gives a 5-year warranty on the compressor. AGEC gives a 1-year warranty on the indoor unit and on our installation work.";
const ductedServicePrice = money(maintenanceRows.ducted.from);
// The service checklist published on /ac-maintenance-dubai.
const serviceChecklist = [
  "Filters cleaned",
  "Coils cleaned",
  "Drainage line cleared",
  "Refrigerant pressure checked",
  "Electrical connections and controls inspected",
  "Cooling performance tested",
  "Service report handed over",
];
const maintenanceLink = { href: "/ac-maintenance-dubai", label: "AC maintenance in Dubai: prices and what a visit includes" };
const installLink = { href: "/ac-installation-dubai", label: "AC installation in Dubai" };
const repairLink = { href: "/ac-repair-dubai", label: "AC repair in Dubai" };
const amcLink = { href: "/ac-amc-dubai", label: "AC annual maintenance contracts (AMC)" };

const villanova: Community = {
  slug: "villanova",
  name: "Villanova",
  updatedAt: "2026-11-15",
  metaTitle: "AC Replacement Villanova Dubai | New Unit Fitted | AGEC",
  metaDescription: `AC machine replacement in Villanova, Dubai: we supply the new unit, remove the old one and fit it, from AED ${replacePrice} per unit. Call or WhatsApp AGEC.`,
  h1: "AC Machine Replacement in Villanova, Dubai",
  job: { name: "AC replacement", links: [installLink] },
  photos: [{ src: "[TO CONFIRM: photo of the Villanova AC machine replacement]", alt: "" }],
  intro: [
    "AGEC replaces AC machines in Villanova. When an old unit keeps failing, we supply a new one, take out the old unit and fit the new one, so you deal with one company for the unit and the installation.",
    `Replacing an old unit starts from AED ${replacePrice} per unit, with the new unit included. The exact price depends on the unit and the job, and we confirm it in writing before any work starts.`,
  ],
  sections: [
    {
      h2: "When to replace the machine instead of repairing it",
      paragraphs: [
        "Most faults are worth repairing. A replacement makes sense when the repair stops making sense, and we tell you honestly which side of that line your unit is on.",
      ],
      bullets: [
        "The unit has failed repeatedly and each repair buys only a few weeks.",
        "The compressor has failed and the cost of replacing it approaches the cost of a new unit.",
        "The unit no longer holds the room at temperature in summer even after it has been cleaned and checked.",
        "Parts for an old model are hard to get, or a repair would cost more than the unit is worth.",
      ],
    },
    {
      h2: "What a replacement in Villanova involves",
      paragraphs: [
        "We start with the unit that is there: what it is, how it is connected and what is failing. From that we recommend a replacement of the right size and type and give you a written price.",
        "On the day we remove the old unit and fit the new one. A single split unit takes about 3 hours to install; a ducted unit takes about 7 hours including the ducting. We test the new unit before we leave and show you how to use it. We confirm in the quote what existing pipework and connections are reused and what is new, so the price covers the whole job.",
      ],
    },
    {
      h2: "Warranty on a replacement unit",
      paragraphs: [warranty],
    },
    {
      h2: "Brands we install and repair",
      paragraphs: [
        "Daikin, Trane, O General, Mitsubishi, LG, Carrier and York. If you want to stay with the brand you have, or change to another, tell us when you ask for the quote.",
      ],
    },
  ],
  projectsHeading: "Replacement work in Villanova",
  projectsIntro:
    "A photo of an AC machine replacement we completed in Villanova goes above. You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "How much does an AC replacement cost in Villanova?",
      a: `Replacing an old unit starts from AED ${replacePrice} per unit, with the new unit included. We confirm the exact price in writing once we have seen the unit and the job.`,
    },
    {
      q: "How long does a replacement take?",
      a: "About 3 hours for a single split unit and about 7 hours for a ducted unit including the ducting. We confirm the time when we quote.",
    },
    {
      q: "What warranty does a replacement unit have?",
      a: warranty,
    },
    {
      q: "Should I repair my AC or replace it?",
      a: `It depends on the fault and the age of the unit. An engineer can diagnose it for a call-out fee of AED ${callout} excl. VAT, deducted from the repair bill if you go ahead with the repair, and tell you whether repair or replacement makes sense.`,
    },
  ],
  toConfirm: [
    "Villanova: photo of a real AC machine replacement job (the page stays hidden until it is added).",
  ],
};

const miraOasis: Community = {
  slug: "mira-oasis",
  name: "Mira Oasis",
  updatedAt: "2026-11-21",
  metaTitle: "AC Installation & Maintenance, Mira Oasis Dubai | AGEC",
  metaDescription: `Ducted AC installation and AC maintenance in Mira Oasis, Dubai: new unit included from AED ${ductedPrice} per ton, plus servicing and AMC. Call AGEC.`,
  h1: "AC Installation and Maintenance in Mira Oasis, Dubai",
  job: { name: "ducted AC installation", links: [installLink] },
  photos: [
    {
      src: "/projects/mira-oasis-ducted-ac-installation.jpg",
      alt: "Ducted AC unit installed above the ceiling with insulated flexible ducts in a Mira Oasis villa, Dubai",
      width: 1600,
      height: 1200,
    },
    {
      src: "/projects/mira-oasis-duct-installation-ceiling-unit.jpg",
      alt: "Ceiling-mounted ducted AC unit and insulated ductwork during duct installation in Mira Oasis, Dubai",
      width: 1600,
      height: 900,
    },
  ],
  intro: [
    "AGEC installs ducted AC in Mira Oasis. The first photo below is a ducted unit we installed above the ceiling of a Mira Oasis villa, connected to insulated flexible ducts. The second shows a ceiling-mounted unit and its insulated ductwork during duct installation in Mira Oasis.",
    `A ducted split is supplied and installed from AED ${ductedPrice} per ton, new unit included. We confirm the exact price in writing before work starts.`,
    "Mira Oasis is a community of townhouses and villas, usually laid out over two or three floors. On a layout like that the choice is normally between a split unit in each room and a ducted system with the unit above the ceiling and a grille in each room. We install both, and we tell you which suits your floor plan.",
  ],
  sections: [
    {
      h2: "How a ducted AC works in a villa",
      paragraphs: [
        "A ducted unit sits in the ceiling void and sends cooled air through ducts to grilles or diffusers in the rooms. Only the grilles show, so the ceiling stays clean. The ducts carry cold air through a hot ceiling void, so they are insulated, as in the photo.",
      ],
    },
    {
      h2: "What is included in the price",
      paragraphs: ["The ducted installation price covers the whole job, not just the unit:"],
      bullets: [
        "The new AC unit, supplied by us",
        "Copper piping",
        "Pipe insulation",
        "Drain connection",
        "Electrical connection",
        "The ducting",
      ],
    },
    {
      h2: "How long it takes",
      paragraphs: [
        "About 7 hours for a ducted unit, including the ducting. We confirm the time in the quote, and jobs with several units take longer.",
      ],
    },
    {
      h2: "Warranty",
      paragraphs: [warranty],
    },
    {
      h2: "Brands we install and repair",
      paragraphs: ["Daikin, Trane, O General, Mitsubishi, LG, Carrier and York."],
    },
    {
      h2: "AC maintenance in Mira Oasis",
      paragraphs: [
        "AGEC also maintains AC in Mira Oasis, including the ducted systems we install. We recommend servicing every 3 to 4 months, with the most important visits before and during the summer peak.",
        `A ducted unit service is AED ${ductedServicePrice} per machine, and a one-off service is ${ONE_OFF_SUMMARY}. We confirm the price in writing before work starts. Every visit covers:`,
      ],
      bullets: serviceChecklist,
      link: maintenanceLink,
    },
  ],
  projectsHeading: "Ducted installation in Mira Oasis",
  projectsIntro:
    "The photos above are from our Mira Oasis installations. You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "How much does ducted AC installation cost in Mira Oasis?",
      a: `A ducted split starts from AED ${ductedPrice} per ton, supplied and installed, with the new unit included. We confirm the exact price in writing.`,
    },
    {
      q: "How long does ducted installation take?",
      a: "About 7 hours for a ducted unit including the ducting.",
    },
    {
      q: "Are the ducts insulated?",
      a: "Yes. The ducts run through the ceiling void, so we use insulated ducts, as shown in the photo above.",
    },
    {
      q: "What warranty do I get?",
      a: warranty,
    },
    {
      q: "How much does AC maintenance cost in Mira Oasis?",
      a: `A ducted unit service is AED ${ductedServicePrice} per machine. A one-off service is ${ONE_OFF_SUMMARY}. We confirm the exact price in writing before work starts.`,
    },
    {
      q: "How often should I service my AC in Mira Oasis?",
      a: `Every 3 to 4 months, with the most important visits before and during the summer peak. An annual maintenance contract schedules the visits for you: 2, 4 or 6 a year, from AED ${amcFrom} per machine per visit excluding VAT.`,
    },
  ],
  toConfirm: [],
};

const dubaiHills: Community = {
  slug: "dubai-hills",
  name: "Dubai Hills",
  updatedAt: "2026-11-21",
  metaTitle: "AC Installation & Maintenance, Dubai Hills | AGEC",
  metaDescription: `AC installation, machine replacement and AC maintenance in Dubai Hills: new unit included, replacement from AED ${replacePrice} per unit. Call AGEC.`,
  h1: "AC Installation and Maintenance in Dubai Hills",
  job: { name: "AC installation and replacement", links: [installLink] },
  // The linear-diffuser photo (dubai-hills-ac-installation-linear-diffuser.jpg) was never received.
  // When it arrives, add it here with the ALT: "AGEC technician fitting a linear slot diffuser during
  // AC installation in a Dubai Hills villa".
  photos: [
    {
      src: "/projects/dubai-hills-duct-installation-corridor.jpg",
      alt: "Insulated duct boxes and ducted AC units installed along a ceiling during duct installation in Dubai Hills, Dubai",
      width: 900,
      height: 1600,
    },
  ],
  intro: [
    "AGEC installs AC and replaces AC machines in Dubai Hills, supplying the new unit and fitting it. The photo below shows duct installation in Dubai Hills: insulated duct boxes and ducted units along the ceiling.",
    `Replacing an old unit starts from AED ${replacePrice} per unit, new unit included. New installations are priced per ton. We confirm the exact price in writing before work starts.`,
    "Dubai Hills mixes villas, townhouses and apartments, so the right machine is rarely the same twice. A larger villa may suit several units replaced together, or a VRF system with separate control for each room; an apartment usually needs one split or cassette unit. We price each case on its own.",
  ],
  sections: [
    {
      h2: "AC installation in Dubai Hills",
      paragraphs: [
        "These are the types we install, with our supply-and-install prices, new unit included:",
      ],
      bullets: [
        `Split AC: AED ${splitPrice} per ton.`,
        `Cassette AC: AED ${money(prices.installation[1].from as number)} per ton.`,
        `Ducted split AC: from AED ${ductedPrice} per ton.`,
        `VRF for homes: from AED ${money(prices.installation[3].from as number)} per ton.`,
      ],
    },
    {
      h2: "Replacing one machine or several",
      paragraphs: [
        "If one unit has failed and the others are fine, we replace that one and match it to the system you have. If several units are old, it can make sense to replace them together, so the home is cooled evenly and you are not calling us for the next failure a month later. We give you the price per unit so you can decide.",
      ],
    },
    {
      h2: "How we size the new machine",
      paragraphs: [
        "A replacement is a chance to correct the size of the system. We look at the room, how it is used and how much heat comes into it, and recommend a size in tons. Send us a photo of the room and the old unit's label and we can give you a first idea before any visit.",
      ],
    },
    {
      h2: "Warranty and time",
      paragraphs: [
        warranty,
        "A single split unit takes about 3 hours to install and a ducted unit about 7 hours including the ducting. Jobs with several machines take longer, and we give you the time in the quote.",
      ],
    },
    {
      h2: "Brands we install and repair",
      paragraphs: ["Daikin, Trane, O General, Mitsubishi, LG, Carrier and York."],
    },
    {
      h2: "AC maintenance in Dubai Hills",
      paragraphs: [
        "AGEC also maintains AC in Dubai Hills, for the units we install and for other units. We recommend servicing every 3 to 4 months, with the most important visits before and during the summer peak.",
        `A one-off service is ${ONE_OFF_SUMMARY}. We confirm the price in writing before work starts. Every visit covers:`,
      ],
      bullets: serviceChecklist,
      link: maintenanceLink,
    },
  ],
  projectsHeading: "Installation work in Dubai Hills",
  projectsIntro:
    "The photo above is from a Dubai Hills duct installation. You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "How much does AC installation cost in Dubai Hills?",
      a: `Split and cassette units are AED ${splitPrice} per ton supplied and installed, a ducted split is from AED ${ductedPrice} per ton, and replacing an old unit starts from AED ${replacePrice} per unit. New unit included. We confirm the exact price in writing.`,
    },
    {
      q: "Can I change the type of AC when I replace it?",
      a: "Yes. We install split, cassette, ducted split and VRF for homes. Tell us what you have and what you want, and we recommend what fits the layout.",
    },
    {
      q: "How do I know what size to replace it with?",
      a: "We size by the room, how it is used and the heat coming in, not by the size of the old machine. Send a photo of the room and an engineer will recommend a size.",
    },
    {
      q: "What warranty do I get on the new machine?",
      a: warranty,
    },
    {
      q: "How much does AC maintenance cost in Dubai Hills?",
      a: `A one-off service is ${ONE_OFF_SUMMARY}, and a ducted unit service is AED ${ductedServicePrice} per machine. We confirm the exact price in writing before work starts.`,
    },
    {
      q: "Do you maintain the AC after installing or replacing it?",
      a: `Yes. We do AC maintenance and repair for the units we install, and for other units. An annual maintenance contract schedules the visits: 2, 4 or 6 a year, from AED ${amcFrom} per machine per visit excluding VAT.`,
    },
  ],
  toConfirm: [],
};

const alWasl: Community = {
  slug: "al-wasl",
  name: "Al Wasl",
  updatedAt: "2026-11-15",
  metaTitle: "AC Maintenance Contract Al Wasl Dubai | AMC | AGEC",
  metaDescription: `AC maintenance contracts in Al Wasl, Dubai: 2, 4 or 6 visits a year from AED ${amcFrom} per machine per visit, plus drain repairs. Call or WhatsApp AGEC.`,
  h1: "AC Maintenance Contracts (AMC) in Al Wasl, Dubai",
  job: { name: "AC maintenance contract", links: [amcLink, repairLink] },
  photos: [
    {
      src: "/projects/al-wasl-ac-maintenance-coil-cleaning.jpg",
      alt: "Technician cleaning the condenser coil of a packaged AC unit during an AMC visit in Al Wasl, Dubai",
      width: 950,
      height: 1600,
    },
    {
      src: "/projects/al-wasl-ac-drain-rectification.jpg",
      alt: "AC condensate drain connection being corrected after a previous contractor's installation, Al Wasl, Dubai",
      width: 1206,
      height: 1600,
    },
  ],
  intro: [
    "AGEC looks after AC in Al Wasl under annual maintenance contracts. A contract fixes the visits for the year, so your units are serviced on schedule and you do not have to remember to book. The first photo below is a technician cleaning the condenser coil of a packaged unit during an AMC visit in Al Wasl.",
    `Plans are priced per machine per visit, from AED ${amcFrom} excluding VAT, with 2, 4 or 6 visits a year.`,
    "Al Wasl is an established part of central Dubai, with villas of different ages and low-rise buildings. Properties of different ages can carry different generations of AC equipment, so a contract starts by listing every machine on the property: its type, brand and condition. We then set the visits around that list.",
  ],
  sections: [
    {
      h2: "What an AC maintenance contract gives you",
      paragraphs: [
        "Without a contract, AC servicing tends to happen after something goes wrong. A contract turns it into a schedule: we visit, service every machine, and send a report each time.",
      ],
      bullets: [
        "Scheduled visits for the year, set when you sign.",
        "A service report after each visit.",
        "A discount on parts if a repair is needed.",
        "A response time set by the plan: within 48 hours, within 24 hours, or same day.",
      ],
    },
    {
      h2: "The three plans",
      paragraphs: ["All prices are per machine, per visit, excluding VAT."],
      bullets: amc.map(
        (p) =>
          `${p.name}: ${p.visits} visits a year, from AED ${money(p.from)}. ${p.response}. ${p.partsDiscount} off parts.`,
      ),
    },
    {
      h2: "Correcting a previous contractor's drain connection",
      paragraphs: [
        "The second photo above shows an AC condensate drain connection being corrected in Al Wasl after a previous contractor's installation. A drain that is connected badly can leave water with nowhere to go, so we correct the connection so the water drains away. If you have a unit that leaks or drains badly after an earlier installation, see AC repair in Dubai below.",
      ],
    },
    {
      h2: "One-off service instead",
      paragraphs: [
        `If you would rather not sign a contract, a one-off service is ${ONE_OFF_SUMMARY}. A contract works out lower per visit.`,
      ],
    },
    {
      h2: "How to start",
      paragraphs: [
        "Tell us how many machines you have and what type they are. We confirm the plan and the price in writing before the first visit.",
      ],
    },
  ],
  projectsHeading: "Work in Al Wasl",
  projectsIntro:
    "The photos above are from our work in Al Wasl. You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "How much is an AC maintenance contract in Al Wasl?",
      a: `Plans are from AED ${amcFrom} per machine per visit, excluding VAT, depending on how many visits you choose.`,
    },
    {
      q: "How many visits a year should I choose?",
      a: "The Basic plan has 2 visits, Standard 4 and Premium 6. Because AC runs for most of the year in Dubai, more visits keep the units cleaner and catch faults earlier.",
    },
    {
      q: "Do the plans include reports?",
      a: "Yes, every plan includes a service report after each visit.",
    },
    {
      q: "What if a repair is needed during the contract?",
      a: "We quote the repair in writing first. The plans include a discount on parts: 5% on Basic, 10% on Standard and 15% on Premium.",
    },
    {
      q: "Can you fix a drain that a previous contractor connected badly?",
      a: `Yes. We have corrected a condensate drain connection in Al Wasl after a previous contractor's installation. Diagnosis is AED ${callout} excl. VAT, deducted from the repair bill if you go ahead with the repair, and the exact repair price is quoted after diagnosis.`,
    },
  ],
  toConfirm: [],
};

const sustainableCity: Community = {
  slug: "sustainable-city",
  name: "Sustainable City",
  updatedAt: "2026-11-21",
  metaTitle: "AC Repair & Maintenance, The Sustainable City | AGEC",
  metaDescription: `AC leak repair, compressor replacement and AC maintenance in The Sustainable City, Dubai. AMC from AED ${amcFrom} per machine per visit. Call AGEC.`,
  h1: "AC Repair and Maintenance in The Sustainable City, Dubai",
  job: { name: "AC leak repair and compressor replacement", links: [repairLink] },
  photos: [
    {
      src: "/projects/sustainable-city-ac-compressor-replacement.jpg",
      alt: "Worn twin scroll compressors in an AC outdoor unit before compressor replacement, The Sustainable City, Dubai",
      width: 1187,
      height: 1600,
    },
  ],
  intro: [
    "AGEC finds and fixes AC leaks in The Sustainable City, and replaces compressors. The photo below shows worn twin scroll compressors in an outdoor unit in The Sustainable City before the compressors were replaced.",
    `Diagnosis costs AED ${callout} excl. VAT, deducted from the repair bill if you go ahead with the repair. The exact repair price is quoted after diagnosis, in writing, before any work starts.`,
    "The Sustainable City is a community of villas, townhouses and apartments. Whether a home is cooled by split units or a ducted system, a leak usually shows up as a stain on a ceiling, water at an indoor unit, or a unit that stops cooling. We start by finding which of those it is, and where the leak comes from.",
  ],
  sections: [
    {
      h2: "Water leaks from the indoor unit",
      paragraphs: [
        "Water from an indoor unit is almost always condensate that cannot drain. The usual causes are a blocked or misaligned drain line, a damaged drain tray, bare or damaged pipe insulation that sweats, or a coil that has frozen and is melting. We trace the water to its source, clear and flush the drain, check the tray and insulation, and find out why a frozen coil iced up.",
      ],
    },
    {
      h2: "Refrigerant leaks",
      paragraphs: [
        "Refrigerant runs in a sealed loop and is not used up, so a system that is low on gas has a leak. Topping up without fixing the leak hides the problem and the cooling fades again. We find the leak, repair it and then recharge to the correct level, so the repair lasts.",
      ],
    },
    {
      h2: "Compressor replacement",
      paragraphs: [
        "The compressor is the heart of an outdoor unit. When it is worn or has failed, the unit cannot cool. We diagnose first, because not every failed compressor is worth replacing. Where replacing it approaches the cost of a new unit, we say so and give you the reasoning and the price in writing before any work starts. If a new unit is the better choice, see AC installation in Dubai.",
      ],
    },
    {
      h2: "How an AC repair visit works",
      paragraphs: [
        "We inspect the unit and measure the system to find the source of the problem. We tell you the price in writing before any work starts. We carry out the repair and send a short report with what we measured.",
      ],
    },
    {
      h2: "AC maintenance in The Sustainable City",
      paragraphs: [
        "AGEC also services and maintains AC in The Sustainable City. A blocked drain line is a common cause of water at an indoor unit, and a service clears the drainage line and checks the refrigerant pressure. We recommend servicing every 3 to 4 months, with the most important visits before and during the summer peak.",
        `A one-off service is ${ONE_OFF_SUMMARY}, and a ducted unit service is AED ${ductedServicePrice} per machine. We confirm the price in writing before work starts. Every visit covers:`,
      ],
      bullets: serviceChecklist,
      link: maintenanceLink,
    },
  ],
  projectsHeading: "Repairs in The Sustainable City",
  projectsIntro:
    "The photo above is from a compressor replacement in The Sustainable City. You can see the projects we have published on our projects page.",
  projectSlugs: [],
  faqs: [
    {
      q: "How much does an AC leak repair cost?",
      a: `Diagnosis is AED ${callout} excl. VAT, deducted from the repair bill if you go ahead with the repair. The exact repair price depends on the leak and is quoted in writing after diagnosis.`,
    },
    {
      q: "Why is my AC leaking water?",
      a: "Most often a blocked or misaligned drain line, a damaged tray, uninsulated pipework that sweats, or a frozen coil that drips as it melts. We trace the water to its source and fix it.",
    },
    {
      q: "Is a gas top-up enough for a refrigerant leak?",
      a: "No. Refrigerant is not used up, so low gas means a leak. We find and repair the leak and then recharge, so the fault does not return.",
    },
    {
      q: "Is it worth replacing a compressor?",
      a: "Sometimes. If replacing it approaches the cost of a new unit, we tell you and give you the price of both in writing before any work starts.",
    },
    {
      q: "Can you come urgently?",
      a: "We respond within an hour, at any time of day. Call or WhatsApp us with your location and what the unit is doing.",
    },
    {
      q: "How much does AC maintenance cost in The Sustainable City?",
      a: `A one-off service is ${ONE_OFF_SUMMARY}, and a ducted unit service is AED ${ductedServicePrice} per machine. An annual maintenance contract is from AED ${amcFrom} per machine per visit excluding VAT. We confirm the exact price in writing.`,
    },
    {
      q: "Can regular maintenance prevent AC leaks?",
      a: "It helps. Every visit clears the drainage line and checks the refrigerant pressure, which are two common sources of leaks. A leak that is already there needs diagnosis first: see the repair answers above.",
    },
  ],
  toConfirm: [],
};

export const communities: Community[] = [
  alBarsha,
  businessBay,
  dubaiMarina,
  arabianRanches,
  miraOasis,
  villanova,
  dubaiHills,
  alWasl,
  sustainableCity,
];

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

/** Word count of the unique, area-specific copy on a community page. */
export function uniqueWordCount(c: Community): number {
  const text = [
    ...c.intro,
    ...c.sections.flatMap((s) => [s.h2, ...s.paragraphs, ...(s.bullets ?? [])]),
    c.projectsHeading,
    c.projectsIntro,
    ...c.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
