# Draft content: VRF maintenance, air balancing and TAB pages (2026-11-15)

Drafts for review. Nothing here is on the live site, and nothing is committed. Written from the facts you gave plus facts already on agec.ae; anything else is a `[CONFIRM]` placeholder. Tone: UAE English.

| Page | Slug | Status | Title (chars) | Meta (chars) | Body words | FAQs |
|---|---|---|---|---|---|---|
| VRF maintenance | `/vrf-maintenance-dubai` | New | 53 | 152 | ~1,060 | 7 |
| Air balancing | `/air-balancing-dubai` | New | 54 | 151 | ~970 | 7 |
| TAB / testing and commissioning | `/services/tab-testing-adjusting-balancing-dubai` | Update | 52 | 155 | ~930 | 7 |

## Read this first: conflicts and decisions for you

1. **Placeholders.** You asked for `[X]` / `[CONFIRM]`. The site's own marker system only strips `[TO CONFIRM: ...]` in production, so before publishing, convert every `[CONFIRM ...]` to `[TO CONFIRM: ...]` (or delete it). The FAQ answers and the JSON-LD contain no placeholders, so they are safe as written.
2. **Keyword map.** `vrf maintenance dubai` is currently a secondary keyword of `/services/vrf-vrv-systems`, and `air balancing` is a secondary keyword of the TAB page. To keep one URL per keyword, move them to the two new pages in `docs/seo/keyword-map.json`. Also, the map has the TAB keyword as "testing and commissioning hvac dubai"; your brief says "hvac testing and commissioning dubai". I used your wording in the title and H1 ("HVAC Testing and Commissioning in Dubai"); update the map to match.
3. **TAB title.** The live title is "HVAC Testing, Commissioning & Balancing Dubai | AGEC" (you chose it on 15 Nov). It does not contain "testing and commissioning" as a phrase, so the keyword you want to keep targeting is not matched. The draft title fixes that; the old one stays if you prefer it.
4. **Old redirect.** `/air-balancing-airflow-testing-dubai` currently 301s to the TAB page. Once `/air-balancing-dubai` is live, point it there instead (one hop), and update the TAB redirect in `next.config.ts`.
5. **Brand list mismatch.** The VRF installation page names Daikin, Mitsubishi Electric and Carrier; the chiller page names Carrier, Trane, York and Daikin; your list for VRF maintenance is Daikin, Trane, O General, Midea and LG. They can all be true (installation vs maintenance), but check the installation page does not read as if those are the only brands, since this page says "all VRF/VRV types".
6. **Brand lines are service points, not AGEC fault history.** I have no record of which faults you see most on each brand, so each line is a generic service point with a `[CONFIRM: add an AGEC field note]`. Replace them with real field notes before publishing. Do not add "authorised" or "partner" wording unless the manufacturer has confirmed it in writing.
7. **AABC / NEBB.** The site only claims ASHRAE 111, SMACNA, CIBSE Commissioning Code and ASHRAE Guideline 0. The air balancing draft says we can work to the procedure a specification names, and flags AABC/NEBB with a `[CONFIRM]`. Do not claim AABC or NEBB certification or membership unless you hold it.
8. **Calibration certificates.** The existing sample report says calibration details are listed on the signed report. "Certificates attached or on request" is a `[CONFIRM]` until you tell me which.
9. **Response times.** None invented. The VRF page offers the existing commercial AMC tiers (emergency within 4 hours, urgent same day, routine within 48 hours) as a `[CONFIRM]`, and an on-site response target `[X]` only if you want one shown.
10. **Photos.** All six photo files exist in the repo. The balometer photo shows a technician in a "JMR Technical Services" shirt. I moved it to the air balancing page (best match) and gave the TAB page a different hero so the two pages do not share an image. Check whether you want the shirt visible.
11. **Existing sample PDF.** `public/sample-air-balancing-report.pdf` already exists and is marked "example format only"; the air balancing draft links to it. The TAB page needs its own sample (`sample-tab-report.pdf`); the outline is at the end of Page 3.
12. **Implementation note.** The TAB page uses the shared service layout with fixed headings ("What is...", "When you need this service"). The new structure needs either its `extraSection` slot or the long-service page component. The new pages need hreflang pairs only once Arabic twins exist; none are written.
13. **Schema.** The site already outputs one HVACBusiness entity with `@id` `https://agec.ae/#business`. Each Service block points to it by `@id`. The HVACBusiness block is provided as asked and uses the same `@id`; do not render it twice. No rating or review markup is included.

---

# PAGE 1: VRF MAINTENANCE (NEW)

## 1. SEO fields

| Field | Value | Length |
|---|---|---|
| URL slug | `/vrf-maintenance-dubai` | |
| SEO title | VRF Maintenance Dubai | VRV Service, AMC, 24/7 | AGEC | 53 |
| Meta description | VRF maintenance in Dubai: preventive service, error-code diagnostics, AMC and 24/7 breakdown support for Daikin, Trane, O General, Midea and LG systems. | 152 |
| H1 | VRF Maintenance in Dubai: Service, AMC and 24/7 Breakdown Support | |
| Body word count (excl. FAQs, placeholders) | | 1064 |

## 2. Page body (paste order)

# VRF Maintenance in Dubai: Service, AMC and 24/7 Breakdown Support

A VRF (or VRV) system cools many zones from one refrigerant circuit. That makes it efficient and flexible, but it also means one neglected outdoor unit, one blocked drain or one communication fault can take a whole floor out of comfort. Planned maintenance is how you find those problems before the summer does.

AGEC Technical Services is an engineer-led HVAC contractor in Dubai (Dubai Commercial Licence No. 1221573). We maintain VRF/VRV systems of all types for commercial and residential buildings in Dubai, Sharjah, Ajman, Abu Dhabi, Umm Al Quwain, Ras Al Khaimah and Fujairah, including Daikin VRV, Trane, O General, Midea and LG Multi V. This page covers maintenance, contracts and breakdown support. Planning a new system? See our [VRF/VRV installation service](/services/vrf-vrv-systems).

**Call or WhatsApp +971 58 557 5987 (24/7) or [request a quote](/quote).**

## Preventive maintenance checklist for VRF systems

Each planned visit follows a written checklist, so every outdoor unit, indoor unit and branch is checked the same way every time and readings can be compared from one visit to the next.

### Outdoor units
- Condenser coil and fins inspected and cleaned to restore heat rejection
- Fan motors, blades, mountings and vibration checked
- Inverter board, PCBs and heat sink inspected for dust, heat marks and loose connections
- Compressor and fan running currents compared with previous readings and nameplate data
- Panels, wiring, terminals and refrigerant pipe insulation inspected

### Indoor units
- Filters cleaned or replaced and the indoor coil checked
- Condensate drain pan, drain pipe and drain pump or float switch tested for free flow
- Fan, louvre and electronic expansion valve operation checked
- Room sensors and wired or wireless controllers tested

### Refrigerant circuit
- High and low pressures and key temperatures recorded and compared with manufacturer data
- Joints, service valves and connections checked for leaks
- If the system is low on refrigerant we find and repair the leak first; a top-up alone only hides the problem

### Controls, communications and error codes
- Current and historic error codes read and logged
- Communication between outdoor units, indoor units and any central controller or BMS interface checked
- Setpoints, schedules and lockouts reviewed against how the building is actually used

## Error code diagnostics

VRF systems report faults as codes on the controller or on the outdoor unit display. A code names a circuit, sensor or component; it does not always name the cause. A pressure-sensor code, for example, can come from a refrigerant fault, a failed sensor or a wiring problem.

We record the code, its history and the operating readings first, trace the fault to its root cause, repair it and only then clear the code. Resetting a system without finding the cause usually brings the same fault back, often on the hottest day. [CONFIRM: which diagnostic tools and code references AGEC uses for each brand.]

## Signs your VRF system needs service
- Some zones are warm or cool unevenly while others are fine
- An error code shows on a controller or outdoor unit display
- The system trips, restarts or short-cycles
- Water leaks, ice or condensation at indoor units
- Unusual noise or vibration from an outdoor unit
- The outdoor units run flat out but the building still does not cool
- Indoor units drop off the controller or stop communicating
- Electricity use rises without a change in how the building is used

## How Dubai's heat affects VRF systems

Outdoor air in Dubai regularly passes 45°C in summer, and that is exactly when a VRF outdoor unit has to reject the most heat. A coil that is slightly dirty in winter becomes a real capacity problem in July.

- **Dust and sand** collect on condenser coils and inverter heat sinks, raising pressures and operating temperatures.
- **Direct sun on rooftops** adds to the load on outdoor units, especially where units are packed close together and recirculate their own hot discharge air.
- **Long running hours** wear fan motors, bearings and compressors faster than in cooler climates.
- **Humidity** increases the condensate load, so blocked drains and failing drain pumps show up quickly as ceiling leaks.
- **Coastal air** can corrode fins, fixings and electrical terminals on units near the sea.

This is why we recommend servicing before the summer peak and checking again during it.

## VRF AMC options

A maintenance contract (AMC) puts the visits on a schedule instead of waiting for a breakdown. For VRF and other building plant, our commercial AMC starts with a baseline audit of your units, then agrees the scope, visit frequency and response targets with you in writing.

Commercial cover is priced after a site survey, based on the systems, the number of units and the visit frequency, not a fixed per-machine rate. We can also take over from your current contractor with a full audit and baseline report. See the [commercial AMC options](/ac-amc-dubai#commercial-amc).

- Contract response tiers: [CONFIRM: same as /ac-amc-dubai: emergency within 4 hours, urgent same day, routine within 48 hours]
- Visit frequency for VRF plant: [CONFIRM: for example quarterly]
- Every visit ends with a service report with photos [CONFIRM this applies to VRF contract and one-off visits]

## 24/7 breakdown response

If your VRF system stops cooling, call or WhatsApp +971 58 557 5987 at any hour. Tell us the building, the brand, any code on the controller and, if you can, send a photo of the controller or outdoor unit display. We will tell you the soonest an engineer can attend. [CONFIRM: on-site response target, X hours, only if you want it stated.]

## Brands we maintain

We service all VRF/VRV types, including the brands below. Brand names are trademarks of their respective owners and are listed to show the equipment we work on.

- **Daikin VRV:** outdoor coil cleaning and inverter board checks, which matter most on rooftop units; fault codes read at the controller and the outdoor unit. [CONFIRM: add an AGEC field note]
- **Trane:** wired controller settings, communication between indoor and outdoor units, refrigerant pressures and drain checks. [CONFIRM: add an AGEC field note]
- **O General:** indoor filter and drain care on ducted units, plus outdoor fan-motor and inverter checks. [CONFIRM: add an AGEC field note]
- **Midea:** outdoor coil condition, indoor-to-outdoor communication and condensate drainage. [CONFIRM: add an AGEC field note]
- **LG Multi V:** indoor unit addressing and communication with central controllers, refrigerant pressures and outdoor coil condition. [CONFIRM: add an AGEC field note]

## Why AGEC for VRF maintenance

- Engineer-led service under a licensed HVAC contractor (Dubai Commercial Licence No. 1221573), established 2022
- 33 completed projects across the UAE, including VRF systems such as 224 TR at Basil Mall, Ajman and 109 TR at a villa in Al Mamzar; see our [projects](/projects)
- A written report after every visit, so you keep a maintenance history for each unit
- If a repair changes airflow or refrigerant conditions, we can re-test and rebalance through our [testing, adjusting and balancing](/services/tab-testing-adjusting-balancing-dubai) service

**Book a VRF service: call or WhatsApp +971 58 557 5987, or [get a quote](/quote).**

## 3. FAQs (5-7, short answers)

**How often should a VRF system be serviced in Dubai?**  
It depends on the size of the system, its running hours and how the building is used. Because systems here run for most of the year and collect dust quickly, we recommend a service before the summer peak and regular visits during it. We set the visit frequency for your site when we quote.

**Do you maintain VRF brands other than Daikin?**  
Yes. We service all VRF/VRV types, including Daikin VRV, Trane, O General, Midea and LG Multi V.

**Do you provide 24/7 breakdown support for VRF systems?**  
Yes. You can call or WhatsApp +971 58 557 5987 at any hour. Tell us the building, the brand and any code on the controller, and we will confirm the soonest an engineer can attend.

**What does a VRF maintenance visit include?**  
Outdoor unit coil and fan checks, inverter board and PCB inspection, indoor filter and condensate drain checks, refrigerant pressure and temperature readings, error-code logging and a check of communications between units and controllers, followed by a report.

**My VRF controller shows an error code. What should I do?**  
Note the code and which unit shows it, and avoid repeatedly resetting the system. Call or send us a photo of the controller. A code names a circuit or component, not always the cause, so we check the readings before clearing it.

**How is a VRF AMC priced?**  
After a site survey. Commercial maintenance pricing depends on the systems, the number of units and the visit frequency, so we quote once we have seen the plant.

**Can you take over VRF maintenance from my current contractor?**  
Yes. We start with a baseline audit of every unit, document its condition and any defects, then agree the scope, visit schedule and response targets with you in writing.

## 4. Internal links

| Anchor text | URL | Where |
|---|---|---|
| VRF/VRV installation service | `/services/vrf-vrv-systems` | Intro (once only, to avoid competing) |
| commercial AMC options | `/ac-amc-dubai#commercial-amc` | VRF AMC section |
| testing, adjusting and balancing | `/services/tab-testing-adjusting-balancing-dubai` | Why AGEC bullet |
| projects | `/projects` | Why AGEC bullet |
| request a quote / get a quote | `/quote` | Intro CTA and closing CTA |
| (optional) chiller maintenance | `/services/chiller-maintenance-dubai` | Add in the AMC section if the building also has central chillers |

## 5. Calls to action

- Top, under the intro: **Call or WhatsApp +971 58 557 5987 (24/7)** + **Request a quote** (`/quote`)
- Closing block: call button `tel:+971585575987`, WhatsApp button (use the site's per-page WhatsApp message in `src/data/whatsapp-pages.ts`), quote link
- Sticky mobile bar, header and footer CTAs are already provided by the site template; do not add new ones.

## 6. JSON-LD (Service + FAQPage + HVACBusiness)

The Service and FAQPage blocks below are built from the same text as the page above. The HVACBusiness block uses the same `@id` as the site-wide business entity, so search engines merge them; **do not output it again on the page if the site template already does** (it does). Remove every `[CONFIRM]` before publishing; none of the schema text contains one.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VRF/VRV Maintenance in Dubai",
  "serviceType": "VRF and VRV system maintenance",
  "description": "Preventive maintenance, error-code diagnostics, maintenance contracts (AMC) and 24/7 breakdown support for VRF/VRV systems, including Daikin VRV, Trane, O General, Midea and LG Multi V, in Dubai and across the UAE.",
  "url": "https://agec.ae/vrf-maintenance-dubai",
  "provider": {
    "@id": "https://agec.ae/#business"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VRF/VRV maintenance",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Daikin VRV maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trane VRF maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "O General VRF maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Midea VRF maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LG Multi V maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VRF error-code diagnostics"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VRF AMC (annual maintenance contract)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 VRF breakdown support"
        }
      }
    ]
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should a VRF system be serviced in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the size of the system, its running hours and how the building is used. Because systems here run for most of the year and collect dust quickly, we recommend a service before the summer peak and regular visits during it. We set the visit frequency for your site when we quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you maintain VRF brands other than Daikin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We service all VRF/VRV types, including Daikin VRV, Trane, O General, Midea and LG Multi V."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 24/7 breakdown support for VRF systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can call or WhatsApp +971 58 557 5987 at any hour. Tell us the building, the brand and any code on the controller, and we will confirm the soonest an engineer can attend."
      }
    },
    {
      "@type": "Question",
      "name": "What does a VRF maintenance visit include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outdoor unit coil and fan checks, inverter board and PCB inspection, indoor filter and condensate drain checks, refrigerant pressure and temperature readings, error-code logging and a check of communications between units and controllers, followed by a report."
      }
    },
    {
      "@type": "Question",
      "name": "My VRF controller shows an error code. What should I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Note the code and which unit shows it, and avoid repeatedly resetting the system. Call or send us a photo of the controller. A code names a circuit or component, not always the cause, so we check the readings before clearing it."
      }
    },
    {
      "@type": "Question",
      "name": "How is a VRF AMC priced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After a site survey. Commercial maintenance pricing depends on the systems, the number of units and the visit frequency, so we quote once we have seen the plant."
      }
    },
    {
      "@type": "Question",
      "name": "Can you take over VRF maintenance from my current contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We start with a baseline audit of every unit, document its condition and any defects, then agree the scope, visit schedule and response targets with you in writing."
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://agec.ae/#business",
  "name": "AGEC Technical Services",
  "legalName": "AGEC Technical Services L.L.C.",
  "url": "https://agec.ae",
  "telephone": "+971585575987",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "Dubai Commercial Licence No.",
    "value": "1221573"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
}
```

## 7. Images (3)

| Placement | File | Alt text | Note |
|---|---|---|---|
| Hero | `/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg` | Two Daikin VRV X outdoor units on a rooftop in Business Bay, Dubai, with insulated refrigerant pipework | Real AGEC project photo. Shows the dust and sun exposure the heat section describes. |
| Error code diagnostics section | `/projects/trane-hvac-controls-commissioning-dubai.jpg` | Trane wired controller on a wall in a Dubai project, showing set temperature and status | Real AGEC photo. [CONFIRM] the unit belongs to a VRF system before captioning it as VRF. |
| Brands we maintain section | `/projects/trane-outdoor-units-rooftop-array-dubai.jpg` | Trane outdoor units on a Dubai rooftop with insulated refrigerant pipes and neighbouring plant | Real AGEC photo. Other brands' units are visible in the background; check you are happy to show them. |

Alternative for a residential angle: /projects/agec-vrf-villa-al-mamzar-dubai.jpg (alt: "B+G+1+R villa in Al Mamzar, Dubai, served by a 109 TR VRF system").

---

# PAGE 2: AIR BALANCING (NEW)

## 1. SEO fields

| Field | Value | Length |
|---|---|---|
| URL slug | `/air-balancing-dubai` | |
| SEO title | Air Balancing Dubai | Airflow Testing & Reports | AGEC | 54 |
| Meta description | Air balancing in Dubai: airflow measured at every diffuser, grille, FCU and AHU, adjusted to design and signed off in a report for consultant approval. | 151 |
| H1 | Air Balancing in Dubai: Airflow Testing and Balancing Reports | |
| Body word count (excl. FAQs, placeholders) | | 968 |

## 2. Page body (paste order)

# Air Balancing in Dubai: Airflow Testing and Balancing Reports

Air balancing measures how much air each diffuser, grille, coil and fan is actually moving, then adjusts the system until it matches the design airflow on the consultant's drawings. Until that is done, an air conditioning system is only installed, not proven: some rooms stay warm, others run cold and noisy, and the plant works harder than it should.

AGEC Technical Services provides air balancing as a service in its own right, in Dubai, Sharjah, Ajman, Abu Dhabi, Umm Al Quwain, Ras Al Khaimah and Fujairah. We are an engineer-led HVAC contractor (Dubai Commercial Licence No. 1221573), established 2022. If you also need water-side balancing, commissioning and functional tests, see our full [testing and commissioning (TAB) service](/services/tab-testing-adjusting-balancing-dubai).

**Call or WhatsApp +971 58 557 5987 (24/7) or [request a quote](/quote).**

## What is air balancing?

Air balancing is the part of testing, adjusting and balancing that deals with air. An engineer measures the airflow at each supply, return and exhaust terminal, compares it with the design figure, and adjusts dampers and fan speeds until each space gets what it was designed to get. Every measurement is recorded before and after adjustment, so the result is documented rather than assumed.

A system can be built exactly to the drawings and still be out of balance. Ducts differ in length and resistance, dampers are left in the wrong position and fans run off their design point. Balancing corrects that.

## Signs your system is out of balance

- Some rooms never reach the set temperature while others overcool
- Diffusers whistle, rattle or blow hard, while others in the same room barely move
- Draughts in one area and stale, stuffy air in another
- Fans running at high speed without delivering the airflow on the drawings
- Doors that pull shut or slam because the pressure between spaces is off
- Higher fan energy than the design predicted

None of these proves the cause on its own. Measuring the airflow does: it shows whether the problem is distribution, which balancing fixes, or something else such as a sizing error, duct leakage or an equipment fault, which we report so it can be dealt with.

## When you need air balancing

- **Handover of a new building or floor**, where the airflow must be proven to the design before sign-off
- **Fit-outs and partition changes**, which alter duct runs, terminals and the air each room receives
- **Comfort complaints**: rooms that never cool, rooms that overcool, noisy diffusers, draughts, or stuffy spaces
- **Consultant or authority requirements** for a signed balancing report
- **After duct modifications or equipment changes**, when the old balance no longer applies
- **High CO₂ or poor fresh-air supply**, where outdoor-air quantity needs measuring (see [ventilation and fresh air](/services/ventilation-fresh-air))

## Our air balancing method

### 1. Review the design
We start from the consultant's drawings and design airflows for each terminal, coil and fan. Where there are no drawings we survey the system and agree reference values with you first.

### 2. Pre-checks
Before measuring we confirm the system is ready: filters in place and clean, dampers and fire dampers open, ductwork complete, fans rotating the right way and the system running in a representative mode.

### 3. Measure at diffusers and grilles
Supply, return and exhaust airflow is measured at every terminal with a capture hood, and with an anemometer where a hood cannot be used. We record initial readings for the report.

### 4. Measure at FCUs, AHUs and FAHUs
Airflow at fan coil units, air handling units and fresh air handling units is measured and compared with the design duty, including the outdoor-air quantity on fresh-air units.

### 5. Check static pressure and fan speed
Duct static pressure and fan speed are read to see where the fan is working against its design point. This often explains why a branch is starved or noisy.

### 6. Adjust and re-measure
We set balancing dampers and fan speeds, then re-measure every point, repeating until each terminal is within the tolerance in your specification. The final readings go in the report.

## Instruments and calibration

We use an airflow capture hood (balometer), an anemometer, a digital manometer or static pressure gauge and a tachometer. Instruments are calibrated, and the model and calibration details are listed on the report for each job. [CONFIRM: calibration certificates attached to the report, or supplied on request.]

## Standards we work to

Specifications in the UAE usually name an air balancing procedure. Our method follows ASHRAE, SMACNA and CIBSE guidance, and we can work to the procedure your specification names, including AABC or NEBB-style procedures. [CONFIRM: which AABC or NEBB procedures AGEC actually follows. Do not state AABC or NEBB certification or membership unless AGEC holds it.]

## What you receive

A balancing report, signed by the engineer who carried out the work, that your consultant can review and approve. It includes:

- Project details, drawing reference and system tested
- Design, initial and final airflow for every terminal, with the deviation
- Fan and system readings, including static pressure and fan speed
- Instruments used and their calibration details
- Observations and recommendations, for example an obstructed return grille or a fan that cannot reach its design duty

Acceptance tolerances are set by the project specification and stated on the signed report. [CONFIRM: default tolerance, for example +/-10%, if you want one stated.] See the [sample report format (PDF)](/sample-air-balancing-report.pdf); the values in it are illustrative only.

## Who we work with

- **MEP contractors** who need a balancing sub-contractor to prove their installation before handover
- **Consultants** who need an independent, measured report against their design
- **Fit-out companies** adjusting an existing system after partitions and ceilings change
- **Facility managers** investigating comfort complaints in occupied buildings

## Air balancing or full TAB?

Air balancing covers airflow only. Full testing, adjusting and balancing adds water-side balancing, equipment commissioning, controls verification and functional performance testing. If your project needs more than airflow, our [TAB and commissioning service](/services/tab-testing-adjusting-balancing-dubai) covers it under one team.

**Book air balancing: call or WhatsApp +971 58 557 5987, or [get a quote](/quote).** You can also see our [projects](/projects).

## 3. FAQs (5-7, short answers)

**What is air balancing?**  
Adjusting an HVAC system so each room and branch receives the airflow it was designed for, then recording the measured results in a report.

**When do I need air balancing?**  
At handover of a new building or floor, after a fit-out or duct modification, when rooms are unevenly cooled or noisy, or when a consultant or authority requires a signed balancing report.

**What instruments do you use?**  
An airflow capture hood (balometer), an anemometer, a digital manometer or static pressure gauge and a tachometer. Model and calibration details are listed on the report.

**Do you work to the consultant's design?**  
Yes. We balance to the design values on the approved drawings and report any difference, so the consultant can review and approve.

**Do you balance existing buildings, not only new ones?**  
Yes. We balance occupied buildings after fit-outs, modifications or comfort complaints.

**How long does air balancing take?**  
It depends on the size of the system and the number of terminals. We confirm the time after reviewing the drawings or a site visit, before work starts.

**What is the difference between air balancing and TAB?**  
Air balancing covers airflow only. TAB (testing, adjusting and balancing) also covers water-side balancing, commissioning, controls verification and performance testing.

## 4. Internal links

| Anchor text | URL | Where |
|---|---|---|
| testing and commissioning (TAB) service | `/services/tab-testing-adjusting-balancing-dubai` | Intro and 'Air balancing or full TAB?' section |
| ventilation and fresh air | `/services/ventilation-fresh-air` | When you need air balancing (CO2 / fresh-air bullet) |
| sample report format (PDF) | `/sample-air-balancing-report.pdf` | What you receive (file already in /public) |
| projects | `/projects` | Closing CTA |
| request a quote / get a quote | `/quote` | Intro CTA and closing CTA |
| (optional) HVAC design | `/services/hvac-design` | Add in 'Who we work with' for consultants if you want a design link |

## 5. Calls to action

- Top, under the intro: **Call or WhatsApp +971 58 557 5987 (24/7)** + **Request a quote** (`/quote`)
- Closing block: call button `tel:+971585575987`, WhatsApp button (use the site's per-page WhatsApp message in `src/data/whatsapp-pages.ts`), quote link
- Sticky mobile bar, header and footer CTAs are already provided by the site template; do not add new ones.

## 6. JSON-LD (Service + FAQPage + HVACBusiness)

The Service and FAQPage blocks below are built from the same text as the page above. The HVACBusiness block uses the same `@id` as the site-wide business entity, so search engines merge them; **do not output it again on the page if the site template already does** (it does). Remove every `[CONFIRM]` before publishing; none of the schema text contains one.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Air Balancing in Dubai",
  "serviceType": "HVAC air balancing and airflow testing",
  "description": "Measurement and adjustment of airflow at diffusers, grilles, FCUs, AHUs and FAHUs to the design values, with a balancing report for consultant approval, in Dubai and across the UAE.",
  "url": "https://agec.ae/air-balancing-dubai",
  "provider": {
    "@id": "https://agec.ae/#business"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Air balancing services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airflow measurement at diffusers and grilles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Damper and fan adjustment to design airflow"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FCU, AHU and FAHU airflow balancing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Duct static pressure measurement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air balancing report for consultant approval"
        }
      }
    ]
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is air balancing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adjusting an HVAC system so each room and branch receives the airflow it was designed for, then recording the measured results in a report."
      }
    },
    {
      "@type": "Question",
      "name": "When do I need air balancing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At handover of a new building or floor, after a fit-out or duct modification, when rooms are unevenly cooled or noisy, or when a consultant or authority requires a signed balancing report."
      }
    },
    {
      "@type": "Question",
      "name": "What instruments do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An airflow capture hood (balometer), an anemometer, a digital manometer or static pressure gauge and a tachometer. Model and calibration details are listed on the report."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work to the consultant's design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We balance to the design values on the approved drawings and report any difference, so the consultant can review and approve."
      }
    },
    {
      "@type": "Question",
      "name": "Do you balance existing buildings, not only new ones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We balance occupied buildings after fit-outs, modifications or comfort complaints."
      }
    },
    {
      "@type": "Question",
      "name": "How long does air balancing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the size of the system and the number of terminals. We confirm the time after reviewing the drawings or a site visit, before work starts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between air balancing and TAB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Air balancing covers airflow only. TAB (testing, adjusting and balancing) also covers water-side balancing, commissioning, controls verification and performance testing."
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://agec.ae/#business",
  "name": "AGEC Technical Services",
  "legalName": "AGEC Technical Services L.L.C.",
  "url": "https://agec.ae",
  "telephone": "+971585575987",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "Dubai Commercial Licence No.",
    "value": "1221573"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
}
```

## 7. Images (3)

| Placement | File | Alt text | Note |
|---|---|---|---|
| Hero | `/projects/agec-technician-tab-commissioning-airflow-balometer-dubai.jpg` | AGEC technician measuring supply airflow at a ceiling diffuser with an airflow capture hood in a Dubai office | Real photo. The technician's shirt reads "JMR Technical Services" (old name): crop it, reshoot, or confirm you are happy with it. |
| Method section (FCU/AHU/FAHU step) | `/projects/fresh-air-handling-unit-fahu-dubai-agec.jpg` | Fresh air handling unit installed by AGEC on a commercial project in Dubai | Real AGEC photo already used on the ventilation page. |
| What you receive section | `Screenshot of page 1 of /sample-air-balancing-report.pdf` | Sample AGEC air balancing report showing design, initial and final airflow for each terminal | Make a PNG of the PDF's first page. It is clearly marked as an example. |

---

# PAGE 3: TAB / TESTING AND COMMISSIONING (UPDATE)

## 1. SEO fields

| Field | Value | Length |
|---|---|---|
| URL slug | `/services/tab-testing-adjusting-balancing-dubai` | |
| SEO title | HVAC Testing and Commissioning in Dubai | TAB | AGEC | 52 |
| Meta description | HVAC testing and commissioning in Dubai: air and water balancing, chiller and VRF commissioning, functional performance tests and a signed handover report. | 155 |
| H1 | HVAC Testing and Commissioning in Dubai: TAB for New and Existing Buildings | |
| Body word count (excl. FAQs, placeholders) | | 934 |

## 2. Page body (paste order)

# HVAC Testing and Commissioning in Dubai: TAB for New and Existing Buildings

Testing and commissioning is the step that proves an HVAC system delivers what it was designed to deliver. A system can be installed perfectly and still leave some rooms warm and others cold, because the air and water were never set to the design figures or the controls and safeties were never tested under load.

AGEC Technical Services carries out testing, adjusting and balancing (TAB) and commissioning for HVAC systems in Dubai and across the UAE. We are an engineer-led HVAC contractor (Dubai Commercial Licence No. 1221573), established 2022, with 33 completed projects. Our methodology follows ASHRAE 111 and SMACNA for TAB and the CIBSE Commissioning Code and ASHRAE Guideline 0 for commissioning.

**Call or WhatsApp +971 58 557 5987 (24/7) or [request a quote](/quote).**

## What our testing and commissioning covers

- Pre-commissioning checklists before any system is started
- Air balancing at terminals, FCUs, AHUs and FAHUs
- Water balancing through coils, terminals and circuits
- Chiller commissioning
- VRF commissioning
- Functional performance testing against the design sequences
- Controls and BMS point-to-point verification
- A signed report of measured against design values

## Pre-commissioning checklists

Commissioning starts before the equipment is switched on. We check that the system is complete and safe to start, and record the result in a checklist for each system:

- Equipment installed to the approved drawings and accessible for service
- Electrical supplies, protection and motor rotation checked
- Water systems flushed, filled and vented, strainers clean
- Ductwork complete, dampers open and filters fitted
- Controls wired and addressed, with safeties and interlocks ready to test

Problems found here are cheaper to fix than problems found after handover. They are listed in a deficiency log for the contractor to close out.

## Air and water balancing

**Air balancing** measures airflow at every diffuser, grille and unit, and adjusts dampers and fan speeds until each space matches the design. This page covers it in summary; our dedicated [air balancing service](/air-balancing-dubai) explains the method, instruments and report in full.

**Water balancing** sets chilled-water flow through coils, FCUs and terminals using balancing valves, so every circuit receives its design flow. We also check pump duty points and pressure drops. Together, air and water balancing remove the usual causes of uneven comfort.

## Chiller commissioning

A chiller plant is commissioned as a system, not as a single machine. We verify:

- Chilled-water and condenser-water flow rates and temperature differentials
- Compressor operation and performance against the design duty
- Controls, sequencing, setpoints, interlocks and safety cut-outs
- Pump and cooling tower operation where the plant is water-cooled

Readings are recorded against the design figures and any shortfall is reported with its likely cause. For ongoing care of the plant, see our [chiller maintenance](/services/chiller-maintenance-dubai) service.

## VRF commissioning

VRF systems depend on correct refrigerant conditions and communication between many units. Commissioning covers:

- Refrigerant pressures and temperatures recorded under operation
- Communication and addressing between outdoor units, indoor units and controllers
- A test run of every indoor unit, with airflow checked at the terminals
- Operating currents and error-code history reviewed
- Settings and schedules confirmed with the client

## Functional performance testing

Functional performance testing (FPT) proves the system behaves correctly under real operating conditions, not just that it starts. We run each design sequence, such as fan and pump staging, fresh-air control, interlocks and alarms, and record the expected result, the actual result and a pass or fail. Failures go into the deficiency log and are re-tested after correction.

## Controls and BMS verification

Balanced airflow and water flow only hold if the controls behave. We check BMS inputs and outputs point to point, confirm setpoints and control sequences, and test alarms and interlocks.

## Standards and instruments

Our methodology follows ASHRAE 111 and SMACNA for TAB and the CIBSE Commissioning Code and ASHRAE Guideline 0 for commissioning. Readings are taken with calibrated, traceable instruments and recorded area by area, so each figure in the report can be traced back to a measurement. We work to the design figures on the approved drawings and specification, and we report what we measure whether it passes or not. [CONFIRM: calibration certificates attached to each report, or supplied on request.]

## Reports and handover

The deliverable is a documented report: measured against design values by area and system, the adjustments made, FPT results, the deficiency log and any shortfall that points to a sizing, leakage or equipment problem rather than a balancing one. It is signed and set out for consultant, landlord and authority review.

## Who needs it and when

- Handover of a new building or a new HVAC installation
- A consultant or developer requiring independent verification
- Fit-outs, retrofits or extensions that change the duct or pipe network
- Uneven comfort with the system running constantly
- Retro-commissioning of an older building to restore performance

If you are installing a system, see our [HVAC installation service](/services/hvac-installation-dubai); we can commission what we install or independently verify another contractor's work.

We balance and commission to the design figures on the approved drawings and specification, and report measured against design so the consultant can sign off. We scope the job after a look at the drawings or a site visit, and give you a clear timeline before starting.

## Download a sample TAB report

See how we document a testing and commissioning job before you ask us to quote one. The sample shows the layout of an AGEC TAB report: the checklists, the measured-against-design tables, the functional test sheets and the sign-off. All project names and values are illustrative and do not describe a real job.

**[Download Sample TAB Report (PDF)](/sample-tab-report.pdf)** [CONFIRM: file to be created, see outline below]

**Need testing and commissioning for your project? Call or WhatsApp +971 58 557 5987, or [get a quote](/quote).**

## 3. FAQs (5-7, short answers)

**What is the difference between testing, commissioning and balancing?**  
Balancing (TAB) sets airflow and water flow to the design figures. Commissioning is the wider process of proving the whole system works: controls, safeties and equipment performance. We provide both as one service.

**What is included in pre-commissioning checks?**  
Checks that the system is complete and safe to start: equipment installed to the drawings, electrical supplies and rotation, water systems flushed and filled, ductwork complete and controls wired. Results are recorded in a checklist and any defects in a deficiency log.

**Do you commission chillers and VRF systems?**  
Yes. Chiller commissioning covers flows, temperature differentials, compressor performance and controls. VRF commissioning covers refrigerant pressures and temperatures, communication between units and a test run of every indoor unit.

**What is functional performance testing?**  
A test of each design sequence under real operating conditions, such as staging, fresh-air control, interlocks and alarms, with the expected result, the actual result and a pass or fail recorded.

**What do I receive at the end?**  
A signed report showing measured against design values, the adjustments made, functional test results and any deficiencies, set out for consultant, landlord or authority review.

**Do you balance air only?**  
Yes, if that is all you need. See our air balancing service at /air-balancing-dubai. Full TAB adds water-side balancing, commissioning and functional testing.

**Can you test and commission an existing building?**  
Yes. As well as new-build handover, we re-commission and re-balance existing buildings to restore performance, fix comfort complaints and reduce wasted fan and pump energy.

## 4. Internal links

| Anchor text | URL | Where |
|---|---|---|
| air balancing service | `/air-balancing-dubai` | Air and water balancing section (the only link to the air balancing page needed in the body) |
| chiller maintenance | `/services/chiller-maintenance-dubai` | Chiller commissioning section |
| HVAC installation service | `/services/hvac-installation-dubai` | Who needs it section |
| request a quote / get a quote | `/quote` | Intro CTA and closing CTA |
| (optional) VRF maintenance | `/vrf-maintenance-dubai` | VRF commissioning section, once the new page is live |
| (optional) commercial AMC | `/ac-amc-dubai#commercial-amc` | After handover, for ongoing maintenance |

## 5. Calls to action

- Top, under the intro: **Call or WhatsApp +971 58 557 5987 (24/7)** + **Request a quote** (`/quote`)
- Closing block: call button `tel:+971585575987`, WhatsApp button (use the site's per-page WhatsApp message in `src/data/whatsapp-pages.ts`), quote link
- Sticky mobile bar, header and footer CTAs are already provided by the site template; do not add new ones.

## 6. JSON-LD (Service + FAQPage + HVACBusiness)

The Service and FAQPage blocks below are built from the same text as the page above. The HVACBusiness block uses the same `@id` as the site-wide business entity, so search engines merge them; **do not output it again on the page if the site template already does** (it does). Remove every `[CONFIRM]` before publishing; none of the schema text contains one.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "HVAC Testing and Commissioning in Dubai",
  "serviceType": "HVAC testing, adjusting, balancing and commissioning",
  "description": "Pre-commissioning checks, air and water balancing, chiller and VRF commissioning, functional performance testing and signed handover reports for HVAC systems in Dubai and across the UAE.",
  "url": "https://agec.ae/services/tab-testing-adjusting-balancing-dubai",
  "provider": {
    "@id": "https://agec.ae/#business"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Testing and commissioning services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pre-commissioning checklists"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air balancing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water balancing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chiller commissioning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VRF commissioning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Functional performance testing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Controls and BMS verification"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commissioning and balancing reports"
        }
      }
    ]
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between testing, commissioning and balancing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Balancing (TAB) sets airflow and water flow to the design figures. Commissioning is the wider process of proving the whole system works: controls, safeties and equipment performance. We provide both as one service."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in pre-commissioning checks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Checks that the system is complete and safe to start: equipment installed to the drawings, electrical supplies and rotation, water systems flushed and filled, ductwork complete and controls wired. Results are recorded in a checklist and any defects in a deficiency log."
      }
    },
    {
      "@type": "Question",
      "name": "Do you commission chillers and VRF systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Chiller commissioning covers flows, temperature differentials, compressor performance and controls. VRF commissioning covers refrigerant pressures and temperatures, communication between units and a test run of every indoor unit."
      }
    },
    {
      "@type": "Question",
      "name": "What is functional performance testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A test of each design sequence under real operating conditions, such as staging, fresh-air control, interlocks and alarms, with the expected result, the actual result and a pass or fail recorded."
      }
    },
    {
      "@type": "Question",
      "name": "What do I receive at the end?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A signed report showing measured against design values, the adjustments made, functional test results and any deficiencies, set out for consultant, landlord or authority review."
      }
    },
    {
      "@type": "Question",
      "name": "Do you balance air only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if that is all you need. See our air balancing service at /air-balancing-dubai. Full TAB adds water-side balancing, commissioning and functional testing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you test and commission an existing building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. As well as new-build handover, we re-commission and re-balance existing buildings to restore performance, fix comfort complaints and reduce wasted fan and pump energy."
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://agec.ae/#business",
  "name": "AGEC Technical Services",
  "legalName": "AGEC Technical Services L.L.C.",
  "url": "https://agec.ae",
  "telephone": "+971585575987",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "Dubai Commercial Licence No.",
    "value": "1221573"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Sharjah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ajman"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Abu Dhabi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Umm Al Quwain"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ras Al Khaimah"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Fujairah"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
}
```

## 7. Images (3)

| Placement | File | Alt text | Note |
|---|---|---|---|
| Hero (replaces the balometer photo, which moves to the air balancing page) | `/projects/trane-hvac-controls-commissioning-dubai.jpg` | Trane wired controller at a Dubai project during commissioning, showing set temperature and status | Real AGEC photo. |
| Chiller commissioning section | `/projects/chiller-installation-dubai-agec.jpg` | Chiller plant installed and maintained by AGEC for a commercial project in Dubai | Real AGEC photo; same alt text as on the chiller page. |
| Download sample section | `Screenshot of page 1 of the new sample TAB report` | First page of a sample AGEC testing and commissioning report with checklists and measured-against-design tables | Create after the sample PDF exists. |

## 8. Sample TAB report: what the PDF should contain

1. Cover and project details: project, client, location, system, report number, date, drawing and specification references, engineer name
2. Marked 'EXAMPLE FORMAT ONLY' on every page, with illustrative values, like the existing air balancing sample
3. Scope and systems tested, and what is excluded
4. Design basis: consultant drawings, design airflows and flows, acceptance tolerance (set per project)
5. Instruments used, with model, serial number and calibration date
6. Pre-commissioning checklist results: item, status, comment, signed off (pass / fail / N/A)
7. Air-side results: terminal reference, location, type, design, initial, final, deviation %
8. Water-side results: circuit, design flow, initial, final, pressure drop, temperature differential
9. Chiller commissioning sheet: chilled and condenser water flows, entering and leaving temperatures, compressor readings, safeties tested
10. VRF commissioning sheet: pressures and temperatures, communication and addressing check, test run per indoor unit, error-code history
11. Functional performance test sheets: sequence, expected result, actual result, pass / fail, retest date
12. Deficiency log: item, location, responsibility, action, status
13. Observations and recommendations, including items outside the TAB scope
14. Sign-off block for tester and reviewer, plus appendices (calibration certificates, marked-up drawings)

**Button and text:** see the 'Download a sample TAB report' section in the body. File to create: `public/sample-tab-report.pdf`, 4-6 pages, in the style of the existing `public/sample-air-balancing-report.pdf`, marked as an example on every page.
