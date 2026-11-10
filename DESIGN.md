---
name: Dent's Heating And Cooling
description: Owner-operated heating and AC repair for St. Louis, built in hard blocks of the brand's own heat red and cool blue on white.
colors:
  heat-red: "#D8183C"
  heat-red-deep: "#B0102F"
  cool-blue: "#2470B4"
  cool-blue-deep: "#1B5893"
  navy-ink: "#10233F"
  navy-raised: "#1A3355"
  ink-soft: "#3D5270"
  rule-line: "#D6DFEB"
  wash: "#F2F6FB"
  white: "#FFFFFF"
  navy-mist: "#C9D6E8"
  navy-sky: "#A9C8EC"
  navy-ember: "#FF8FA3"
  navy-divider: "#2A4366"
typography:
  display:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  hero:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.25
  button:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  none: "0px"
  disc: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 9vw, 7.5rem)"
  max: "1240px"
  header: "76px"
components:
  button-red:
    backgroundColor: "{colors.heat-red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
    height: "56px"
  button-red-hover:
    backgroundColor: "{colors.heat-red-deep}"
  button-blue:
    backgroundColor: "{colors.cool-blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
    height: "56px"
  button-blue-hover:
    backgroundColor: "{colors.cool-blue-deep}"
  button-navy:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
    height: "56px"
  button-navy-hover:
    backgroundColor: "{colors.navy-raised}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
    height: "56px"
  button-line-hover:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.6rem"
    height: "60px"
  button-ghost-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.5rem"
    height: "56px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.85rem"
    height: "52px"
  symptom-choice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.4rem"
    height: "46px"
  symptom-choice-heat-picked:
    backgroundColor: "{colors.heat-red}"
    textColor: "{colors.white}"
  symptom-choice-cool-picked:
    backgroundColor: "{colors.cool-blue}"
    textColor: "{colors.white}"
  symptom-choice-picked:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
  header-call:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.1rem"
    height: "48px"
  header-call-hover:
    backgroundColor: "{colors.heat-red}"
  icon-badge:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    size: "2.6rem"
---

# Design System: Dent's Heating And Cooling

## Overview

**Creative North Star: "The Heat-and-Cool Work Order"**

The site reads like a clean, well-run service ticket: white paper, navy ink, ruled lines, and solid blocks of the two colors that already live in Dent's logo. Red means heat, blue means cool, and that pairing is the brand's own logic, so it carries meaning everywhere it appears (symptom choices, service panels, numbered steps, icon badges) instead of being sprinkled for decoration. Navy is the working color for structure: the header call block, the property-manager lane, the call band, the footer.

Form is hard-edged and blocky. Buttons are solid rectangles with a heavy Rubik label; inputs are square with a 2px rule; lists are separated by thin rules under a thick 3px navy top rule. Depth is minimal and soft, used only to lift a white card off a photo or a pale wash. Photography is realistic, daylight, St. Louis residential, with no people, and every generated image carries a provenance sidecar.

The logo and its colors are pinned client assets. The system is built around them and never reinterprets them.

**Key Characteristics:**
- Two-color heat/cool semantics (red #D8183C / blue #2470B4) on white, structured by navy ink.
- Rubik 700 for every heading, button and phone number; Archivo for reading text.
- Square corners everywhere; the only curve is the round white disc behind the logo mark.
- Thin rules and solid color blocks instead of cards-with-borders or decorative fills.
- Soft navy-tinted shadows only to lift white panels; no hard offset shadows.
- Realistic generated photography, no people, provenance recorded next to each file.

## Colors

A two-accent brand palette (heat red, cool blue) on white, with navy ink doing the structural work and every neutral tinted toward the navy rather than grey.

### Primary
- **Heat Red** (heat-red): the primary call to action (Call, Send my request), heating content, the hero's emphasized clause, the first trust icon, odd step numbers, FAQ plus marks, active nav underline. Hover deepens to **Heat Red Deep** (heat-red-deep), which also carries form error text.

### Secondary
- **Cool Blue** (cool-blue): cooling content, the Request Service action in the mobile bar, check ticks, trust icons, even step numbers, focus outlines, text selection, checkbox accent, input focus border. Hover deepens to **Cool Blue Deep** (cool-blue-deep).

### Tertiary
- **Navy Ink** (navy-ink): body text color and the structural block color (header call button, property-manager lane, call band, footer, default page bands, thick 3px top rules on lists). **Navy Raised** (navy-raised) is its hover state.

### Neutral
- **Ink Soft** (ink-soft): secondary text, leads, descriptions, consent copy.
- **Rule Line** (rule-line): 1px list dividers, header bottom edge, 2px input and choice-button borders.
- **Wash** (wash): pale blue-white section ground (trust strip, services section, price boxes, prose call-out box).
- **White** (white): page ground, card ground, text on all solid color blocks.
- **On-navy tints**: **Navy Mist** (navy-mist) for body text on navy; **Navy Sky** (navy-sky) for the footer email link; **Navy Ember** (navy-ember) for the phone icon and phone hover on navy (a light heat red that stays legible on the dark ground); **Navy Divider** (navy-divider) for rules on navy.

### Named Rules
**The Heat Is Red, Cool Is Blue Rule.** Red belongs to heating and urgent action; blue belongs to cooling and supporting action. When a component has heat and cool variants, the colors map that way, never swapped and never used as interchangeable accents.

**The No Grey Rule.** Every neutral is tinted from the brand navy (ink-soft, rule-line, wash, the on-navy tints). Do not introduce neutral greys.

**The Pinned Brand Rule.** The logo files in `public/brand` and the red and blue sampled from them are client assets. Never redraw, recolor, restyle or re-letter the logo; use the dark version on light grounds and the light version on navy.

## Typography

**Display Font:** Rubik Variable at 700 (fallback Rubik, system-ui)
**Body Font:** Archivo Variable at normal width (fallback Archivo, system-ui)

**Character:** Rubik's rounded-shouldered heavy weight gives headings and buttons a friendly, sturdy voice; Archivo keeps the reading text plain and even. The client chose Rubik from a specimen after the extended Archivo display read too wide.

### Hierarchy
- **Display** (700, clamp(2.4rem, 5.4vw, 5rem), 1.02): interior page band titles, max about 15ch.
- **Hero** (700, clamp(2rem, 3.6vw, 3.5rem), 1.04, -0.02em): the home hero H1 beside the quote card.
- **Headline** (700, clamp(2rem, 4vw, 3.25rem), 1.02): section titles. Service-page section titles step down to clamp(1.75rem, 3.2vw, 2.6rem).
- **Title** (700, 1.05 to 1.8rem, 1.1 to 1.25): step titles, service item names, quote-card title, panel heads (up to 2.2rem on the color heads).
- **Button** (700, 1rem, 1.15, 0.01em): every button and the phone number blocks; phone numbers also use tabular figures.
- **Body** (400, 1.0625rem, 1.6): reading text; long text capped near 44 to 46rem. Leads run 1.05 to 1.35rem at 1.45.
- **Label** (Archivo 700, 0.92rem): form labels, the symptom legend, choice buttons. FAQ questions use Archivo at 750, about 1.1rem.

### Named Rules
**The Rubik Speaks Up Rule.** Headings, buttons, phone numbers, step numerals and the FAQ plus mark are Rubik 700. Body copy, labels and FAQ questions are Archivo. Do not set reading text in Rubik.

**The Phone Number Rule.** A phone number shown as an action is set in Rubik 700 with tabular figures.

## Layout

Content sits in a centered column (max 1240px) with a fluid gutter (clamp(1.25rem, 4vw, 3.5rem)); full-bleed bars (header, property-manager lane) widen to 1440px. Sections breathe on a fluid vertical rhythm (clamp(4rem, 9vw, 7.5rem)). The sticky header is 76px and anchors scroll with that offset.

Grids are simple and asymmetric: copy beside a list (about 1.05fr to 1fr), a narrow title beside a wide FAQ (1fr to 1.6fr), two equal service panels, three-up trust items. The home hero puts copy left and the quote card right (card column clamp(380px, 31vw, 460px)) over a photo filling the right 68% and fading in from the left.

Responsive behavior: navigation collapses to a menu sheet at 1100px; two-column grids stack at 960px; at 760px the trust list and service panels go single-column, hero and band buttons go full width, and a fixed bottom bar (red Call, blue Request Service) appears with its right side kept clear for the chat bubble. Tap targets are at least 46px, most 48 to 60px.

## Elevation & Depth

Mostly flat. Depth comes from color blocks (navy bands, red/blue panel heads) and from white panels set on the pale wash. Shadows are soft, long and navy-tinted, used only to lift a white surface off a photo or wash, never as decoration or as a hard offset.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 30px 60px -24px rgb(16 35 63 / 0.55)`): the quote card floating over the hero photo on desktop.
- **Panel lift** (`box-shadow: 0 18px 40px -28px rgb(16 35 63 / 0.45)`): service panels and the wide tune-up panel on the wash.
- **Sheet drop** (`box-shadow: 0 18px 30px -12px rgb(16 35 63 / 0.25)`): the mobile menu sheet under the header.
- **Bar edge** (`box-shadow: 0 -1px 0 #D6DFEB, 0 -10px 24px -16px rgb(16 35 63 / 0.35)`): the fixed mobile action bar.

### Named Rules
**The Lift, Don't Stamp Rule.** A shadow only lifts a white surface off a photo or wash, and it is always soft and navy-tinted. No hard offset shadows, no glass, no glow.

## Shapes

Square corners throughout (0px): buttons, inputs, choice buttons, panels, icon badges, menu toggle, bands. The only curve is the round white disc (50%) behind the logo mark in the call band. Outlines are drawn as 2px inset strokes (outline buttons, icon badges, menu toggle) or 2px borders (inputs, choices). Lists use a 3px navy top rule with 1px rule-line dividers.

Gradients are not part of the surface language. Two exceptions exist in the build: the maintenance page band's 12px bottom stripe split hard down the middle red | blue (a hard split, not a blend), and the hero photo's edge mask that fades the photo in from the left.

### Named Rules
**The Hard Edge Rule.** Nothing is rounded except the logo disc. No pills, no radius on cards or buttons.

## Components

### Buttons
Solid, heavy blocks that read as tools.
- **Shape:** square (0px), minimum 56px tall (60px for the large hero and call-band size), icon gap 0.6rem.
- **Red:** the primary action (call, send). Hover deepens.
- **Blue:** the cooling-side or secondary request action.
- **Navy:** structural actions on light grounds. Hover to navy raised.
- **Line:** transparent with a 2px inset navy stroke; fills navy with white text on hover.
- **Ghost:** the line button for navy grounds, a 2px inset stroke at 70% white; fills white with navy text on hover.
- **White:** solid white with navy text on red, blue or navy page bands (the phone call button); hovers to navy, or to red on navy bands.
- **States:** background and color ease over 0.25s on cubic-bezier(0.16, 1, 0.3, 1); pressed nudges down 1px; focus is a 3px cool-blue outline offset 3px; disabled send drops to 65% opacity.
- **Arrow links:** bold underlined text with a trailing arrow that slides 4px right on hover.

### Inputs / Fields
- **Style:** white, 2px rule-line border, square, 52px minimum height, Archivo at body size, bold 0.92rem labels above with optional notes in ink-soft regular.
- **Focus:** border shifts to cool blue (no glow).
- **Error:** status message in bold heat-red-deep text.
- **Consent:** two checkboxes with blue accent and small ink-soft copy.

### Symptom Choice Grid (signature)
A 3-column grid (2 columns under 420px) of square choice buttons in the quote card: white with a 2px rule-line border, bold label, hover border to navy. When picked, "No heat" fills solid heat red, "No AC" fills solid cool blue, and every other choice fills navy, all with white text. The brand's heat/cool logic in one interaction.

### Quote Card
The home hero request form: white, padded clamp(1.4rem, 2.4vw, 2rem), Rubik title, symptom grid, name and phone side by side, ZIP full width, consents, full-width red send. Floats with card lift over the photo on desktop; stacks below the photo with a 2px rule-line border on mobile.

### Cards / Containers
- **Service panel:** white, square, panel lift, photo on top (16:9, slow 1.04 zoom on hover), then a solid red or blue head with an icon and Rubik title, then a ruled item list with icon badges.
- **Price / note box:** wash ground, 1.75rem padding, no border, no shadow.

### Icon Badges
Square outline badges (2.6rem) drawn with a 2px inset stroke in currentColor, colored red or blue by side; a solid navy square variant (3.5rem) marks the tune-up panel. Icons are inline Lucide outline glyphs at 2.25 stroke, never an icon font or emoji.

### Navigation
- **Header:** white, sticky, a 1px rule-line bottom edge. Dark logo left, Archivo nav links (650, 0.95rem, Title Case) with a 2px heat-red underline on hover and current page, then a navy phone block in Rubik 700 that turns red on hover.
- **Mobile:** below 1100px a square outline Menu toggle opens a full-width white sheet of Rubik 1.15rem links on rules plus a full-width button; under 560px the phone block shows only its icon.
- **Mobile action bar:** fixed bottom red Call and blue Request Service blocks, 50px tall.
- **Footer:** navy, light logo, Rubik phone number at 1.6rem, small uppercase column headings, navy-mist links, navy-divider base rule.

### Page Bands and Lists
- **Page band:** full-width solid block (navy default, red for heating, blue for cooling, navy with the red | blue stripe for maintenance) with a white Display title and lead.
- **Ruled lists:** numbered visit steps (Rubik numerals alternating red and blue), tick lists with blue checks, and FAQ disclosures with a red plus that rotates 45 degrees when open; all sit under a 3px navy top rule.

## Do's and Don'ts

### Do:
- **Do** map heat to red #D8183C and cool to blue #2470B4 wherever a component has heating and cooling variants.
- **Do** set headings, buttons and phone numbers in Rubik 700, and body copy and labels in Archivo.
- **Do** keep every corner square; reserve the 50% curve for the logo mark's disc.
- **Do** separate list items with 1px rule-line dividers under a 3px navy top rule.
- **Do** use the dark logo on white and the light logo on navy, at their native proportions.
- **Do** keep generated photography realistic, daylight, residential, with no people, and write a provenance sidecar next to every shipped raster.
- **Do** keep tap targets at 46px or taller and the focus outline at 3px cool blue.

### Don't:
- **Don't** redraw, recolor, crop into new shapes or restyle the client's logo files.
- **Don't** round buttons, inputs or cards, or use pill shapes.
- **Don't** blend gradients across surfaces; the only split allowed is the hard red | blue stripe, plus the hero photo's edge fade.
- **Don't** use hard offset shadows, glass or glow; shadows stay soft and navy-tinted.
- **Don't** introduce neutral greys; tint from the navy.
- **Don't** use photography with people in it, stock technicians included.
- **Don't** use emoji or text glyphs as icons; use inline outline SVG.
