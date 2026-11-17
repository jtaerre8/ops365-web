---
name: OPS365
description: Outsourcing operativo y automatización (RPA) para logística en Chile
colors:
  navy: "#0C3B6E"
  navy-deep: "#06243F"
  blue: "#3E6488"
  blue-light: "#8EA8C1"
  accent: "#FF7A1A"
  accent-deep: "#D95F06"
  ink: "#17212B"
  surface-gray: "#E8EDF2"
  line: "#C9D6E2"
  whatsapp-green: "#25D366"
  whatsapp-green-deep: "#1EBE5B"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 800
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.03125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sharp: "2px"
  sm: "4px"
  md: "8px"
spacing:
  xs: "12px"
  sm: "22px"
  md: "48px"
  lg: "96px"
  xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "{rounded.sharp}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.sharp}"
    padding: "15px 26px"
  button-ghost-hover:
    textColor: "{colors.accent}"
  button-wa:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "#ffffff"
    rounded: "{rounded.sharp}"
    padding: "15px 26px"
  button-wa-hover:
    backgroundColor: "{colors.whatsapp-green-deep}"
---

# Design System: OPS365

## Overview

**Creative North Star: "The Site Foreman's Clipboard"**

OPS365 sells continuity: an operation that keeps moving while other people's
problems don't. The system reads like a well-run site office, not a startup
pitch deck — a fixed navy structure you can always find your way back to
(the sidebar, the footer, the WhatsApp line), numbered sequences that mean
something (the six-step cycle is a real process, not decoration), and exactly
one loud color used sparingly enough that it still means "pay attention here"
every time it appears.

The system was built, then deliberately stripped of a first pass that read as
generic AI output: small "eyebrow" labels above every heading, identical
icon-card grids, and a colored side-border on callout boxes were all present
at one point and removed on sight once recognized. None of the three come
back.

**Key Characteristics:**
- Flat, bordered, high-contrast — no shadows, no gradients, no blur.
- One navy-deep "peak" band per page carries the single boldest claim; every
  other section stays on white.
- Numbers are earned, not decorative: they appear only where a real sequence
  exists (the six-step cycle), never as a 01/02/03 label on an arbitrary list.
- WhatsApp green is the one color from outside the palette, used only for the
  WhatsApp affordance itself — never adopted as a UI accent.

## Colors

A two-color system — navy carries the brand, orange spends its rarity on the
one thing that should get clicked.

### Primary
- **Navy** (`#0C3B6E`): all headings, body links, borders, the sidebar/footer
  background family's lightest member. The default ink of the brand.

### Secondary
- **Accent Orange** (`#FF7A1A`): reserved for the single most important
  element in view — the first node of the 6-step cycle, a hover state, the
  one highlighted word in a pull-quote. Never a background for a whole
  section; never more than one accent element per viewport.
- **Accent Orange Deep** (`#D95F06`): the orange's own hover/active step,
  used only where the accent itself needs a pressed state.

### Neutral
- **Navy Deep** (`#06243F`): the sidebar, the footer, and the one "peak" band
  per page — the system's only dark surface family.
- **Blue** (`#3E6488`): secondary nav text, lead-paragraph color on white.
- **Blue Light** (`#8EA8C1`): de-emphasized text on navy-deep surfaces
  (footer links, sidebar nav at rest).
- **Ink** (`#17212B`): the CSS `color` default; rarely seen directly since
  headings override to navy and body copy overrides to a near-black.
- **Surface Gray** (`#E8EDF2`): note/callout backgrounds (legal-page asides).
- **Line** (`#C9D6E2`): every hairline divider — section borders, step-list
  rules, input borders at rest.

### Utility (outside the brand palette, on purpose)
- **WhatsApp Green** (`#25D366` / hover `#1EBE5B`): used exclusively for the
  WhatsApp button and floating mobile action bar, because it borrows
  WhatsApp's own recognition rather than competing with it. Never used for
  anything else, and the brand's own accent orange is never used for
  WhatsApp affordances either — the two stay visually distinct channels.

### Named Rules
**The One Peak Rule.** Each page gets exactly one `navy-deep` "peak" band
(`.band-dark`) holding its single boldest claim. A page with zero peaks reads
flat; a page with two or more has no climax. Every other section stays on
white with the default border-bottom rhythm.

**The Earned Number Rule.** A number is only ever shown where it reflects a
real, meaningful sequence (the six-step operating cycle). It is never used to
label an arbitrary list of features or cards — that pattern was tried, read
as generic, and was removed.

## Typography

**Display/Body Font:** Manrope (Google Fonts), with `system-ui, sans-serif`
fallback. One typeface for the entire site — no secondary or monospace face
anywhere.

**Character:** A single confident grotesque doing all the work: very heavy
(800) and uppercase at display size for conviction, and a lighter, generously
leaded body for the paragraphs that have to carry real explanation.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 7.5vw, 5.75rem)`, line-height 0.96,
  uppercase): page `<h1>` only. One per page.
- **Headline** (800, `clamp(1.875rem, 4.6vw, 3rem)`, line-height 1.02,
  uppercase): section `<h2>`.
- **Title** (800, 19px, uppercase, letter-spacing -0.01em): component-level
  `<h3>` (step headings, FAQ questions).
- **Lead** (400, 19px, line-height 1.6, color Blue, max-width 58ch): the one
  supporting sentence directly under an `<h1>`.
- **Body** (400, 16.5px, line-height 1.7, max-width 68ch): paragraph copy.
  Measure is deliberately kept under 68 characters even on wide desktop
  columns.
- **Label** (700, 12px, letter-spacing 0.08em, uppercase): buttons, nav
  links, form field labels — anything that is an instruction rather than a
  sentence.

### Named Rules
**The No-Eyebrow Rule.** No small uppercase label ever sits above a heading
to announce what the heading is about. The heading carries its own weight at
full display size; a label above it was tried, recognized as the single most
common AI-generated-page tell, and deleted everywhere it appeared.

## Layout

Desktop is a fixed 264px left sidebar (`--sidebar-w`) plus a fluid content
column (`main.page{margin-left:264px}`); the content itself centers in a
`.wrap` capped at 900px (1120px on the home hero, where a two-column grid
needs the room). Below 980px the sidebar disappears entirely in favor of a
fixed top bar plus a full-screen slide-in menu, and the content column
regains the full viewport width with 22px side gutters.

Section rhythm is three sizes, chosen per section, not uniform: default
`96px` top/bottom, `.tight` at `56px` for a section that should read as a
coda, `.peak` at `120px` for the one dark band that's meant to feel roomier
than everything around it. All three compress at narrower breakpoints
(64/72px at ≤980px, 48/56px at ≤560px) rather than keeping fixed padding at
every size.

A hairline `1px solid var(--line)` sits under every section except the last
on a page — it's the only separator device in the system; nothing uses a
visible background-color change to mark a section boundary except the one
`.peak.band-dark` per page.

## Elevation & Depth

Flat by design — there is no `box-shadow` anywhere in the system. Depth is
conveyed two ways instead: a `2px solid` border on bordered containers (the
hero panel, buttons' ghost variant), and solid navy-deep fills for the one
dark surface family. A component either sits on white with a border, or it
sits inside a navy-deep block; there is no intermediate elevated-card
treatment.

### Named Rules
**The Flat-By-Default Rule.** No shadows, no blur, no glassmorphism anywhere.
If something needs to stand apart from its neighbors, it earns that either
through the navy-deep fill (`.band-dark`, `.step.is-final`) or a 2px border —
never through a drop shadow.

## Shapes

Corners are nearly square throughout: buttons use a 2px radius (`.btn`,
effectively sharp), callout boxes and the "cycle repeats" highlighted step
use 4px, and the only components that round further are interactive nav
chrome — the sidebar's nav links and its WhatsApp CTA at 8px. Borders are
always `2px solid`, never 1px, except for the single-pixel hairlines that
separate sections and list rows (`1px solid var(--line)`).

### Named Rules
**The No-Side-Tab Rule.** A callout or note never gets a thick colored
border on one side (`border-left: Npx solid accent`). That pattern reads as
an AI-generated-page tell as reliably as the eyebrow label does; callouts get
a flat gray background and nothing else to mark them as a callout.

## Components

### Buttons
- **Shape:** 2px radius, 15px/26px padding, 12px uppercase label type,
  0.08em tracking.
- **Primary** (`.btn-primary`): navy fill, white text; hover swaps the fill
  to accent orange.
- **Ghost** (`.btn-ghost`): transparent with a 2px navy border and navy text;
  hover shifts both border and text to accent orange. On a `.band-dark`
  surface (`.on-dark .btn-ghost`), the border starts at 50%-opacity white
  instead of navy, since navy would vanish against navy-deep.
- **WhatsApp** (`.btn-wa`): the one button that breaks the two-color system
  on purpose — WhatsApp green fill, because the action *is* "open WhatsApp."
- Every button lifts 1px on hover (`transform: translateY(-1px)`) — the
  system's one shared micro-interaction, applied uniformly so it never reads
  as a one-off flourish.

### Step Row (signature component)
The system's recurring way to present an ordered, meaningful list (the
6-step work cycle; the FAQ list reuses the same row shape with the number
column collapsed). A 2-column grid — a large tabular-figure number in accent
orange (52px, 36px on narrow screens) beside a navy 800-weight title and a
body paragraph — separated by hairline borders, with the final/"it repeats"
row promoted to a navy-deep fill (`.step.is-final`) as the one place a list
item gets the peak treatment instead of a whole section.

### Band Dark (signature component)
A full-width navy-deep section (`.band-dark`) holding one oversized pull-quote
(`clamp(1.5rem, 3.2vw, 2.25rem)`, 700 weight, max 30ch) with its single key
phrase wrapped in `<strong>` and recolored to accent orange. This is the "One
Peak Rule" in component form — at most one per page.

### Hero Panel (signature component)
A bordered (2px navy) counterweight to the hero's text column on wide
viewports, so the hero never reads as text-on-emptiness. A navy header bar
(`.hd`, white uppercase label text, space-between) sits above a plain
numbered list reusing the brand's own stepped-bars motif conceptually (each
row: accent-orange tabular number + navy label).

### Cycle Diagram (signature component)
An inline SVG, not a raster image: six numbered nodes (accent orange for
node 01, navy for 02–06) arranged on a circle around a navy-deep hub bearing
the brand's four-bar mark, connected by a dashed ring that animates slowly
(`stroke-dashoffset`, 7s linear, disabled under `prefers-reduced-motion`).
Exists specifically so the "it's a cycle, not a checklist" idea has a real
shape — not just a numbered list — and renders identically at every viewport
width instead of being hidden on mobile.

### Forms
- **Style:** 2px `var(--line)` border, 4px radius, 13px/14px padding, 15px
  type.
- **Focus:** border recolors to accent orange; no glow or shadow.
- **Labels:** 12px uppercase navy, always above the field, never inline or
  floating.

### Navigation
- **Desktop:** fixed navy-deep sidebar; nav links are blue-light at rest,
  white on hover, and get a soft accent-tinted background
  (`rgba(255,122,26,.14)`) plus accent text color when active — the only
  place a translucent accent fill appears in the system.
- **Mobile:** a translucent white top bar (backdrop-blur) with the same brand
  mark plus a hamburger that opens a full-screen navy-deep slide-in panel;
  independently, a **fixed two-button action bar** (WhatsApp green /
  accent orange, always visible, `position:fixed;bottom:0`) stays on screen
  regardless of scroll or menu state — the one navigation element with no
  desktop equivalent, because "contact us" needs to survive scrolling on the
  device where thumbs do the work.

## Do's and Don'ts

### Do:
- **Do** keep exactly one `.band-dark` peak per page.
- **Do** keep the mobile WhatsApp/Contacto action bar fixed and visible on
  every page, independent of the slide-in menu's open/closed state.
- **Do** use the Step Row pattern for any future real sequence; reuse its
  grid rather than inventing a new numbered-list shape.
- **Do** keep buttons' hover lift (`translateY(-1px)`) as the only shared
  micro-interaction; new components should earn their own motion rather than
  borrowing this one by default.

### Don't:
- **Don't** put a small uppercase "eyebrow" label above any heading.
- **Don't** give a card, list item, or callout a colored `border-left` /
  `border-right`.
- **Don't** add a drop shadow anywhere; depth comes from navy-deep fill or a
  2px border only.
- **Don't** add numbers to a list unless the order itself carries real
  information a reader needs.
- **Don't** invent a testimonial, statistic, client logo, or case study to
  fill a section — PRODUCT.md records this as a hard content constraint, not
  just a visual one.
