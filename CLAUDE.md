# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
---

# JMR Technical Services — Project Context

## About the Company
JMR Technical Services LLC is a Dubai-based HVAC contracting company specializing in design, installation, testing & commissioning, and maintenance of advanced air conditioning systems. Serves residential, commercial, and villa projects. Core expertise: VRF/VRV systems, chillers, DX units, ventilation, fresh air systems, HVAC design, heat load calculations, duct sizing, system balancing, performance testing, technical consultancy.

## Site Goal
Lead generation. Visitors should be able to (1) request a quotation, (2) book a service, (3) contact the team. Every page must have at least one clear conversion CTA.

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS for styling
- React Hook Form + Zod for form validation
- Lucide React for icons
- next/font for typography
- next/image for all images
- Server actions for form submissions (no separate API needed initially)

## Brand
- Company name: JMR Technical Services LLC (placeholder — may change)
- Vibe: Bold, modern, tech-forward. Confident but not aggressive. Professional engineering credibility, not warm-and-fuzzy.
- Reference: thehealthyhome.me — clean, service-focused, trust-heavy

## Color Palette (CSS variables)
```css
  --color-primary: #FF6B1A;
  --color-primary-dark: #E55A0F;
  --color-bg: #FFFFFF;
  --color-bg-soft: #FAFAF7;
  --color-text: #1A1A1A;
  --color-text-muted: #6B7280;
  --color-border: #E5E7EB;
```

## Typography
- Headings: Inter or Space Grotesk (bold, geometric, modern)
- Body: Inter (clean, highly readable)
- Generous line-height (1.6+) for body, tight (1.1-1.2) for headings
- Large hero headings (60-80px desktop)

## Site Structure (14 pages)
1. Home — /
2. About — /about
3. Services overview — /services
4. VRF/VRV Systems — /services/vrf-vrv-systems
5. Chillers — /services/chillers
6. DX Units — /services/dx-units
7. Ventilation & Fresh Air — /services/ventilation-fresh-air
8. HVAC Design & Consultancy — /services/hvac-design
9. Testing & Commissioning — /services/testing-commissioning
10. Maintenance — /services/maintenance
11. Projects — /projects
12. Request a Quotation — /quote
13. Book a Service — /book
14. Contact — /contact

## Contact Details
- Phone: +971 55 363 3139
- Email: sales@jmrtechnical.com
- Location: Dubai, UAE

## Content Tone
- Direct, technical, confident. Engineers, not marketers.
- Use specifics over adjectives.
- Every service page should answer: What is it? When do you need it? Why JMR? What's the process?

## Component Architecture
- Server components by default; client components only when needed (forms, interactive UI)
- Shared components in components/
- Layout in app/layout.tsx with shared Header/Footer
- Tailwind utility classes

## Images
- All images via next/image
- Placeholder images: use unsplash for now (HVAC, air conditioning, ducts, cooling towers)
- Logo: placeholder text logo "JMR" until real logo dropped in public/logo.svg

## SEO Basics
- Each page has proper metadata export (title, description)
- Semantic HTML
- Schema.org JSON-LD for LocalBusiness on contact page
