// Copy for the local "AC maintenance in {community}" pages
// (/ac-maintenance/[community]). Which pages are live is controlled in
// ./community-index.ts (`published`).
//
// RULES (same as the case-study data): each page is written separately — no
// swapped-name templating. No invented projects, numbers or client names. Where
// a real fact is missing, the copy carries a visible "[TO CONFIRM: …]" marker
// and the same item is listed in `toConfirm` so nothing is forgotten. The only
// prices quoted are the ones already on /ac-maintenance-dubai.

export interface CommunitySection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
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
  /** WhatsApp pre-fill that names the area. */
  /** Everything the owner must confirm before this page is published. */
  toConfirm: string[];
}

const alBarsha: Community = {
  slug: "al-barsha",
  name: "Al Barsha",
  updatedAt: "2026-11-14",
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
        "For villas we recommend servicing every three to four months, with the visits placed before and during the summer peak; that is what the dust load in this area justifies. A one-off service starts from AED 350 per machine, with a minimum of three units, and the exact cost depends on the number and type of units.",
        "If a unit is already failing, our AC repair service diagnoses the root cause first, and our duct cleaning service clears the coils, drains and ductwork when airflow or smells are the problem. Villas with several units are usually better served by an annual maintenance contract, which schedules the visits and gives priority response for breakdowns.",
        "Commercial premises in Al Barsha, from gyms to shops, are covered by the same engineers on reactive calls or annual contracts.",
      ],
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
      a: "From AED 350 per machine, with a minimum of three units. The exact cost depends on the number and type of units, and we confirm the price before we start.",
    },
  ],
  toConfirm: [
    "Al Barsha: confirm the 'faults we see most often' list matches your own job records.",
  ],
};

const businessBay: Community = {
  slug: "business-bay",
  name: "Business Bay",
  updatedAt: "2026-11-14",
  metaTitle: "AC Maintenance Business Bay, Dubai — Offices & F&B | AGEC",
  metaDescription:
    "AC and FCU maintenance in Business Bay, Dubai for offices and restaurants on district cooling: leaks, weak cooling, rebalancing and AMC. Call or WhatsApp us.",
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
      a: "From AED 350 per machine, with a minimum of three units, which most villas exceed. The exact cost depends on the number and type of units, and we confirm it before we start.",
    },
  ],
  toConfirm: [
    "Arabian Ranches: number of villas serviced or under contract.",
    "Arabian Ranches: any project we may name, with the owner's permission.",
    "Arabian Ranches: which communities AGEC covers.",
    "Arabian Ranches: confirm the villa fault list and the AMC-demand and move-in duct-cleaning statements match your experience.",
  ],
};

export const communities: Community[] = [
  alBarsha,
  businessBay,
  dubaiMarina,
  arabianRanches,
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
