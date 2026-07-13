# Prompt: Redesign Jimsolutions Technology (Next.js)

This is a **visual redesign of an existing, working codebase** — not a rebuild. Do not change data models, routing, page content, folder structure, or business logic. Do not rename or move files.

**Scope — restyle only these:**
- `src/app/globals.css` — replace tokens/base styles
- `src/components/layout/` (`Navbar.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`) — restyle in place
- `src/components/sections/` — restyle each section component in place; reorder or split a section only where the structure below requires it
- `src/components/ui/` — restyle shared primitives (buttons, cards, badges) in place
- Page files under `src/app/**/page.tsx` — apply new section components/styling, keep existing data fetching and metadata as-is

**Do not touch:**
- `src/data/*.ts` (services, projects, testimonials, faqs) — content stays exactly as-is, only how it's rendered changes
- `src/lib/constants.ts`, `src/lib/schema.ts` — leave untouched
- `src/lib/fontawesome.ts` — already set up for Font Awesome; extend the icon set registered there rather than adding a second icon system
- Routing, `sitemap.ts`, `robots.ts`, `not-found.tsx` — leave untouched

Apply the system below consistently across every existing page (home, about, services, projects, gallery, contact, faq) by restyling their current section components — not by generating new pages.

## Brand direction

This is an electrical, solar/inverter, and appliance installation company in Lagos, Nigeria. The client wants the overall structure, pacing, and institutional feel of **hbmngplc.com** (HBM Nigeria PLC) as the reference for how the site is organized — but built with Jimsolutions' own navy/orange palette, type system, and signature elements below, not HBM's. Use that reference for **layout and section rhythm**, not colors or copy.

Ground every visual choice in the actual subject matter: circuits, panels, wiring, voltage, technical precision. Avoid generic "trustworthy home services" defaults (rounded cards, drop shadows, stock icon illustrations).

## Page structure (reference: hbmngplc.com section order)

Reorganize the homepage — and mirror this rhythm on inner pages where it fits — to follow this sequence instead of the current stacked-cards layout:

1. **Header utility bar** above the main nav: phone, email, hours, address in a thin navy strip with Font Awesome icons — before the logo/nav row, not inside it.
2. **Full-bleed hero slider** (2–3 slides, auto-rotating, manual arrows) with a dark gradient overlay on the photo and left-aligned headline + one CTA, not a static single hero.
3. **"Who we are" narrative section**: a substantial descriptive paragraph (not a headline-only teaser) paired with a **5-item stats row** (icon badge + big number + label), similar weight to HBM's "in numbers" section — expand the current spec strip from 4 to 5 items if a 5th genuine metric exists (e.g. add "Response time").
4. **Services/products grid**: icon-badge-led cards (icon in a colored square, name, one-line "learn more" link) in a clean grid — simpler than the current photo-led service cards, closer to HBM's product list treatment.
5. **Two-panel feature band**: two large linked panels side by side (e.g. "Projects" / "Sustainability" equivalents → "Our Work" / "Why Jimsolutions"), each with a background image, headline, and one-line description.
6. **Testimonial carousel**: star rating + quote + client name/role, one visible at a time with prev/next arrows — replace the current static 3-column testimonial grid.
7. **Recent work / news-style 3-column cards**: date + category + short title, matching HBM's media section pattern, reused here for recent project write-ups.
8. **Closing CTA band**: full-width navy band, short headline, one button — keep the existing "Installation Setup?" band but restyle to this section's proportions.
9. **Heavy structured footer**: logo, nav columns, and a contact block with icon + label + value rows (call/email/hours/address), plus a lightweight "Request a quote" inline form — mirroring HBM's footer weight instead of the current thin footer.

Do not copy HBM's actual color scheme, cement-industry imagery, or copy — only this structural pacing and information density.

**Color** (client-approved combo — use exactly these)
- `--paper: #FFFFFF` — page background
- `--panel-ink: #031B47` — deep navy: headings, dark panels, footer, primary buttons
- `--graphite: #5B6472` — secondary/body text on white
- `--orange: #F45A02` — primary accent: CTAs, active nav state, highlighted headline words, icon badges
- `--orange-dark: #C24601` — accent text/hover on white backgrounds
- `--live: #3FAE6B` — status/live indicators only (not decorative)
- `--line: rgba(3,27,71,0.12)` — hairline borders, replacing box-shadows

Do not introduce cream, amber, or copper tones — this is a clean navy/orange/white system, not the warm industrial-paper variant from the earlier draft.

**Type**
- Display: `Big Shoulders Display` (700–900 weight), uppercase, tight leading — headlines only
- Body: `Inter`, 400–600 weight
- Technical/mono: `IBM Plex Mono` — used for eyebrows, labels, stats, captions, nav status pills (anything that reads like a spec or readout)

**Layout rules**
- No rounded corners, no drop shadows, no card grids with icon-title-description-link. Replace with bordered grids using 1px hairlines (`--line`) as dividers instead of shadows/gaps.
- Section headers are not centered eyebrow-pill + heading + subtext. Use left-aligned headers, optionally paired with a right-aligned index label (e.g. "03 CORE DISCIPLINES") in mono.
- Numbered/indexed labels (01 / 02 / 03) are allowed here because services genuinely are a fixed set of disciplines — keep them functional, mono, small.

## Signature elements (use consistently across pages)

1. **Corner-bracket photo frames** — every photo gets four orange corner brackets (3px, L-shaped, absolute-positioned) like a schematic reference mark, plus a small navy mono caption tag in the bottom-left corner (e.g. "FIG. 02 — PANEL INSTALL, IKEJA").
2. **Spec strip** — a horizontal bordered row of 4 stats styled like meter readouts (big Big Shoulders Display number + small mono uppercase label underneath), used after every hero. Alternate the icon badge behind each stat between navy and orange (never both the same color in one row) so the strip reads as a functional key, not decoration.
3. **Live status pill** — a small pulsing dot (`--live` color, CSS pulse animation) + mono label ("ENGINEERS ON DUTY") in the header, and reused anywhere something needs to feel real-time.
4. **CTA underline sweep** — primary buttons are solid `--panel-ink` (navy) with an orange bottom border that animates width 0% → 100% on hover, not a color/opacity fade.
5. **Icon badges** — every icon on the site (stats, services, footer) sits in a solid-color square or circle badge (navy or orange, alternating for visual rhythm), icon itself in white.

## Icons

Use **Font Awesome** (solid style, `fa-solid`) for every icon on the site — the project already has `src/lib/fontawesome.ts` set up for this; register any additional icons there rather than importing them ad hoc per component. Do not use emoji, AI-generated icon illustrations, or mismatched icon sets. Pick icons literally tied to the subject where possible (`fa-bolt`, `fa-solar-panel`, `fa-plug`, `fa-screwdriver-wrench`, `fa-headset`, `fa-shield-halved`) rather than generic placeholders. Keep icon weight and stroke consistent across the whole site — no mixing solid, regular, and duotone styles.

## Motion (restrained — do not overdo)

- Status dot pulses continuously (subtle, 2s cycle).
- CTA hover: amber underline sweep, ~250ms ease.
- On page load, corner brackets can draw in with a short stroke animation.
- No scroll-jacking, no parallax, no more than one motion idea per section.

## Technical implementation notes (Next.js)

- Load fonts via `next/font/google` (Big Shoulders Display, IBM Plex Mono, Inter) — do not use a `<link>` tag.
- Font Awesome is already installed via `src/lib/fontawesome.ts` — use the existing setup, do not add a CDN `<link>` or a second icon package.
- Define all tokens above as CSS custom properties in `globals.css`, referenced everywhere — no hardcoded hex values in components.
- Build a shared `<SpecStrip>`, `<FramedImage>`, `<StatusPill>`, `<IconBadge>`, and `<SectionHeader>` component so the signature elements stay consistent across every page instead of being re-implemented per page.
- Keep the palette to the 6 tokens above. Do not introduce new colors per page.
- Responsive: stack the hero to a single column under 860px, spec strip to 2 columns, service grid to 1 column, hairline borders adjust accordingly (no orphaned borders).

## What to avoid

- Cream background + serif + terracotta accent (generic "AI design" look #1)
- Near-black background + single neon accent (generic "AI design" look #2)
- Centered pill-badge-above-every-heading pattern
- Photo-led cards with rounded corners and drop shadows (the service grid in section 4 above should be icon-badge-led and hairline-bordered instead)
- Emoji or AI-generated icon illustrations anywhere on the site
- Mixing icon styles/weights (stick to Font Awesome solid throughout)