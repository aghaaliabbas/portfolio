# Handoff: Portfolio Redesign (Organic design system)

## Overview
A redesign of aghaaliabbas.github.io/portfolio — three pages (Home, Experience, Services) — in the "Organic" visual system: warm cream ground, terracotta + sage accents, rounded/pill shapes, Caprasimo display type over Figtree body text. This replaces whatever visual system the current React portfolio site uses.

## About the design files
The `.reference.html` files in this bundle are **design references, not production code to copy directly**. They were authored in a prototyping tool's templating syntax, not plain HTML/React:
- `{{ name }}` = a data-bound value (from an array of case studies, jobs, skills, etc. — see the inline data at the bottom of each file, inside the `<script>` block's `renderVals()` method)
- `<sc-for list="{{ items }}" as="item">...</sc-for>` = "repeat this block for each item in the array" (i.e. an `.map()`)
- `<sc-if value="{{ cond }}">...</sc-if>` = conditional rendering
- Everything else (structure, inline styles, classes, copy) is real and should be recreated faithfully.

**The task is to recreate this design in the existing portfolio codebase** (a Create React App project), using React components and CSS (or CSS-in-JS/modules, whatever the codebase already uses) — not to paste these HTML files in as-is.

## Fidelity
**High-fidelity.** Colors, type, spacing, and component shapes below are final — implement them precisely, not just "in the spirit of."

## Design tokens

### Colors
- `--color-bg`: `#f5ead8` (cream page background)
- `--color-surface`: `#ebddc5` (card/panel fill)
- `--color-text`: `#201e1d`
- `--color-accent` (terracotta): `#c67139` — ramp 100→900: `#fff2eb, #ffe1d0, #ffc6a5, #f6a06b, #d67f48, #b2622d, #8c491a, #643312, #402310`
- `--color-accent-2` (sage): `#7a8a5e` — ramp 100→900: `#f0fae1, #e1eecc, #ccdbb2, #aebf92, #8fa073, #728157, #56633f, #3d472b, #272e1b`
- `--color-divider`: `color-mix(in srgb, #201e1d 16%, transparent)`
- Use accent-700/800 (deep ramp steps) for accent-colored body text — the base accent only passes contrast at large/display sizes.

### Type
- Headings: **Caprasimo** (Google Font), weight 400 only. `h1` 42px, `h2` 32px, `h3` 25px, `h4` 20px, line-height 1.12, letter-spacing -0.015em.
- Body: **Figtree** (Google Font), weights 400/600/700. Base 15px / 1.55 line-height.
- Load: `@import url('https://fonts.googleapis.com/css2?family=Caprasimo:wght@400&family=Figtree:wght@400;600;700&display=swap');`

### Shape & spacing
- Corner radius: 16px base (`--radius-md`), 28px for large containers (`--radius-lg`), and cards go further to `calc(--radius-lg * 1.15)`.
- **Buttons, tags, inputs, segmented controls are full pills** (`border-radius: 999px`).
- Spacing scale (1.10× density): 4.4 / 8.8 / 13.2 / 17.6 / 26.4 / 35.2px.
- Shadows: sm `0 1px 2px`, md `0 3px 10px`, lg `0 12px 32px`, all ink-tinted at 14–22% opacity.
- Decorative soft circles (large, low-opacity accent-tinted, positioned behind hero/CTA text) are a signature motif — see `.reference.html` files for placement (`border-radius: 50%`, `z-index: -1`, positioned absolutely in a hero or closing section).
- Photographs/placeholders get a `.washed` treatment: `filter: saturate(0.6) contrast(0.85) brightness(1.1) opacity(0.94)`.

### Layout direction
- Left-aligned, asymmetric. Headings and copy are flush left, never centered.
- Generous whitespace between sections instead of horizontal rules (this system avoids dividers — no `<hr>`-style rules like a "modernist" grid system would use).

## Screens

### 1. Home (`Portfolio.reference.html`)
- Sticky nav: brand name flush left, links (Work / Experience / Services), pill primary button "Book a 15-min call" flush right.
- Hero: pill tag ("AI / Agentic engineer · Lahore, Pakistan · Remote") → large Caprasimo headline → body paragraph (max ~56ch) → two pill buttons (primary + secondary). A large soft sage circle sits behind/right of the headline as decoration.
- Stat strip: 4-column grid of rounded cards (`--color-surface` fill), each with a big terracotta Caprasimo number and a small caption.
- Selected work: section kicker pill, heading, intro line, then a responsive grid of case-study cards (rounded, bordered, `overflow:hidden`) — each has an image/placeholder strip (washed treatment), kicker, title, body, result line, and a row of neutral pill tags. Four placeholder cards currently (real screenshots pending).
- "Where I've done it": two-column — left is a heading + paragraph, right is a stacked list of rounded company-role-years rows.
- Engagement/rates block: 3-column grid of rounded cards (rate range, availability, team option). Toggleable via a prop.
- Contact close: full-bleed terracotta band, white/cream reversed type, large soft circle decoration, headline + 3 pill contact buttons (email, LinkedIn, phone).
- Footer: simple two-item row.

### 2. Experience (`Experience.reference.html`)
- Same nav (Experience link active).
- Hero: pill tag "Experience" + headline + intro paragraph, soft circle decoration.
- Job history: stacked rounded cards, one per employer — left column is company/period/location, right column is role + bullet list (bullets use small filled circles, not squares).
- Skills: section kicker + responsive grid of rounded, bordered cards, one per skill category, each holding a wrapped row of neutral pill tags.
- Bottom row: 3 rounded cards — Education, Freelance record, Consultancy.
- Same terracotta contact close pattern as Home, different headline.

### 3. Services (`Services.reference.html`)
- Same nav (Services link active).
- Hero: pill tag "Services and rates" + headline + intro paragraph, soft circle decoration.
- Services grid: 4 rounded cards, each numbered (01–04), title, body copy.
- Rates: kicker + one rounded/bordered card containing a data table (engagement / rate / notes), plus a caption line about invoicing/minimum contract.
- "How it starts": kicker + 3 rounded numbered cards (steps 01–03).
- Same terracotta contact close pattern.

## Interactions & states
- Buttons: primary = solid terracotta fill, cream text; hover → accent-600; active → accent-700. Secondary = outlined/ghost with divider-color border, subtle ink-tint hover. All buttons and tags are pill-shaped, labels flush left even in wide buttons.
- Focus-visible: 2px solid accent outline, 2px offset, on every interactive element — never the browser default blue ring.
- Table rows: subtle ink-tint hover.
- No sharp corners anywhere in the redesign — if the current codebase has square cards/buttons, round them all.

## Content
All copy (headlines, bullet points, job history, skills, rates) is meant to be carried over verbatim from the reference files — it was sourced from the user's real resume/profile data, not placeholder text. The 4 "Selected work" case studies ARE placeholders (explicitly marked with a monospace label like "case study screen — dashboard") — flag these for the user to replace with real project screenshots and outcome metrics once available.

## Assets
No photography is used yet — the "Selected work" image slots are striped placeholder rectangles with a monospace caption describing what belongs there. No logo/headshot was supplied; the brand mark is just the name set in Caprasimo.

## Files in this bundle
- `Portfolio.reference.html` — Home page reference (see templating note above)
- `Experience.reference.html` — Experience page reference
- `Services.reference.html` — Services page reference
- `styles.css` — the full design-system token sheet + component CSS classes (`.btn`, `.tag`, `.card`, `.nav`, `.table`, etc.) these references were built against. Use this as the canonical source for every color/spacing/radius value — don't eyeball them off a screenshot.

## Using this with Claude Code
1. Unzip this folder into (or alongside) the existing portfolio repo.
2. Open the repo in Claude Code.
3. Point Claude Code at this README plus the reference files and ask it to: "Recreate this design system and these three pages in our existing React/CRA app, replacing the current styling. Keep our component structure and routing; adopt the colors, type, spacing, radii and copy exactly as documented in README.md, using styles.css as the source of truth for token values."
4. Since the current site is a Create React App project, expect Claude Code to translate the CSS custom properties into either a global stylesheet/CSS module or a theme object, and the `sc-for`/`sc-if` reference markup into real `.map()`/conditional JSX — that translation is expected, the visual output should match.
5. Review screen-by-screen against the descriptions above; the case-study cards need real project content before shipping.
