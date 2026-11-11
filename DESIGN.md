---
name: Dent's Heating And Cooling
description: Owner-operated heating and AC repair for St. Louis, built in hard blocks of the brand's own heat red and cool blue on white, with dusk-lit photo heroes under a navy tint.
colors:
  heat-red: "#D8183C"
  heat-red-deep: "#B0102F"
  cool-blue: "#2470B4"
  cool-blue-deep: "#1B5893"
  navy-ink: "#10233F"
  navy-raised: "#1A3355"
  navy-scrim: "#0A162C"
  ink-soft: "#3D5270"
  rule-line: "#D6DFEB"
  wash: "#F2F6FB"
  white: "#FFFFFF"
  navy-mist: "#C9D6E8"
  navy-sky: "#A9C8EC"
  navy-ember: "#FF8FA3"
  navy-divider: "#2A4366"
typography:
  hero:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  hero-page:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  panel-bar:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  card-title:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  trust-label:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.25
  nav:
    fontFamily: "'Rubik Variable', 'Rubik', system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)"
    fontWeight: 600
    lineHeight: 1.6
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
  consent:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
  disc: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 9vw, 7.5rem)"
  max: "1240px"
  bar-max: "1440px"
  hero-max: "1500px"
  header: "84px"
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
  button-hero-call:
    backgroundColor: "{colors.heat-red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.75rem"
    height: "64px"
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
    height: "50px"
  symptom-choice-heat-picked:
    backgroundColor: "{colors.heat-red}"
    textColor: "{colors.white}"
  symptom-choice-cool-picked:
    backgroundColor: "{colors.cool-blue}"
    textColor: "{colors.white}"
  symptom-choice-picked:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.4rem, 2.4vw, 2rem)"
  header-call:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.1rem"
    height: "48px"
  header-call-hover:
    backgroundColor: "{colors.heat-red}"
  service-bar-heat:
    backgroundColor: "{colors.heat-red}"
    textColor: "{colors.white}"
    typography: "{typography.panel-bar}"
    rounded: "{rounded.none}"
    padding: "0.85rem clamp(1.1rem, 2vw, 1.6rem)"
  service-bar-cool:
    backgroundColor: "{colors.cool-blue}"
    textColor: "{colors.white}"
    typography: "{typography.panel-bar}"
    rounded: "{rounded.none}"
    padding: "0.85rem clamp(1.1rem, 2vw, 1.6rem)"
  call-band:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
    padding: "clamp(2.75rem, 5vw, 4rem) 0"
  icon-badge:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    size: "3rem"
---

# Design System: Dent's Heating And Cooling

## Overview

**Creative North Star: "The Heat-and-Cool Work Order"**

The site reads like a clean, well-run service ticket: white paper, navy ink, ruled lines, and solid blocks of the two colors that already live in Dent's logo. Red means heat, blue means cool, and that pairing is the brand's own logic, so it carries meaning everywhere it appears (symptom choices, service panel bars, numbered steps, H1 accent rules, icon tints) instead of being sprinkled for decoration. Navy is the working color for structure: the header call block, the photo-hero tint, the property-manager lane, the call band, the footer.

Every top-level page opens on the same move: a full-bleed realistic photograph of a St. Louis home or system, darkened by a navy tint that is heaviest on the left, with a white Rubik headline, a short white line, a red Call button and, where the page takes requests, a white quote card on the right. Below the hero the page returns to white paper: a ruled trust bar, bordered heating and cooling panels with solid color bars, thin rules, and flat blocks. Form is hard-edged; depth is soft and used only to lift a white card off a photo or wash.

The logo and its colors are pinned client assets. The system is built around them and never reinterprets them.

**Key Characteristics:**
- Two-color heat/cool semantics (heat red / cool blue) on white, structured by navy ink.
- Dark photo heroes: full-bleed photo under a left-weighted navy tint, white type, red Call, white quote card.
- Rubik 700 for headings, buttons, trust labels and phone numbers; Rubik 600 for nav; Archivo for reading text.
- Square corners everywhere; the only curve is the round white disc behind the logo mark.
- 1px rule-line borders and dividers, solid color bars, no decorative fills.
- Realistic generated photography, no people, provenance recorded next to each file.

## Colors

A two-accent brand palette (heat red, cool blue) on white, with navy ink doing the structural work and every neutral tinted toward the navy rather than grey.

### Primary
- **Heat Red** (heat-red): the primary call to action (Call, Send my request), the Heating panel bar, the heating H1 accent rule, the "No heat" choice icon and picked fill, odd step numbers, the reviews arrow, active nav underline, header call hover. Hover deepens to **Heat Red Deep** (heat-red-deep), which also carries form error text.

### Secondary
- **Cool Blue** (cool-blue): the Cooling panel bar, the cooling H1 accent rule, the "No AC" choice icon and picked fill, the trust-bar icons, even step numbers, the Request Service action in the mobile bar, focus outlines, text selection, checkbox accent, input focus border. Hover deepens to **Cool Blue Deep** (cool-blue-deep).

### Tertiary
- **Navy Ink** (navy-ink): body text and the structural block color (header call button, property-manager lane, call band, footer, navy page bands, thick 3px top rules on lists, the photo-hero ground behind the image). **Navy Raised** (navy-raised) is its hover state.
- **Navy Scrim** (navy-scrim): the photo-hero tint, a deeper navy used only as a translucent overlay on photographs, never as a solid surface.

### Neutral
- **Ink Soft** (ink-soft): secondary text, leads on white, descriptions, the quote-card note.
- **Rule Line** (rule-line): 1px panel borders, list dividers, the trust-bar vertical rules and bottom edge, the header bottom edge and the rule after the logo, 2px input and choice-button borders.
- **Wash** (wash): pale blue-white section ground (tune-up section, service "what Gerald handles" grid, price boxes, prose call-out box).
- **White** (white): page ground, card ground, all type on photo heroes and on solid color blocks.
- **On-navy tints**: **Navy Mist** (navy-mist) for secondary text on navy and on photo heroes (breadcrumbs, call-band line, footer text); **Navy Sky** (navy-sky) for the footer email link; **Navy Ember** (navy-ember) for the property-lane icon and phone hover on navy (a light heat red that stays legible on the dark ground); **Navy Divider** (navy-divider) for rules on navy.

### Named Rules
**The Heat Is Red, Cool Is Blue Rule.** Red belongs to heating and urgent action; blue belongs to cooling and supporting action. When a component has heat and cool variants, the colors map that way, never swapped and never used as interchangeable accents.

**The No Grey Rule.** Every neutral is tinted from the brand navy (ink-soft, rule-line, wash, navy-scrim, the on-navy tints). Do not introduce neutral greys.

**The Pinned Brand Rule.** The logo files in `public/brand` and the red and blue sampled from them are client assets. Never redraw, recolor, restyle or re-letter the logo; use the dark version on light grounds and the light version on navy.

## Typography

**Display Font:** Rubik Variable (fallback Rubik, system-ui)
**Body Font:** Archivo Variable at normal width (fallback Archivo, system-ui)

**Character:** Rubik's rounded-shouldered heavy weight gives headings, buttons and nav a friendly, sturdy voice; Archivo keeps reading text plain and even. The client chose Rubik from a specimen after the extended Archivo display read too wide.

### Hierarchy
- **Hero** (700, clamp(2.3rem, 4.6vw, 4.5rem), 1.02, -0.02em): the home H1 on the dusk photo, white, max about 16ch. The white subline under it runs clamp(1.1rem, 1.5vw, 1.4rem) at 1.4, max 28rem.
- **Hero Page** (700, clamp(2.1rem, 4vw, 3.8rem), 1.03, -0.02em): the H1 on interior photo heroes (About, Contact, service pages), max 16ch, with its accent rule beneath. Leads run clamp(1.05rem, 1.35vw, 1.25rem) at 1.5.
- **Display** (700, clamp(2.3rem, 5vw, 4.5rem), 1.02): titles on the solid page bands (request forms, locations), max 16ch.
- **Headline** (700, clamp(2rem, 4vw, 3.25rem), 1.02): section titles on home. Service-page section titles step down to clamp(1.9rem, 3.4vw, 2.75rem); the call band and tune-up titles to about clamp(1.7rem, 3vw, 2.5rem).
- **Panel Bar** (700, clamp(1.9rem, 3.2vw, 2.9rem), 1.05): "Heating" and "Cooling" in the solid service panel bars.
- **Card Title** (700, clamp(1.6rem, 2.5vw, 2.3rem), 1.1): the quote-card heading.
- **Trust Label** (700, clamp(1.1rem, 1.7vw, 1.5rem), 1.15): the two-line trust-bar labels, max 12ch so each wraps to two lines.
- **Title** (700, 1.1 to 1.2rem, 1.25): step titles, service item names, price-box heads, service tile labels.
- **Nav** (Rubik 600, clamp(0.95rem, 1.15vw, 1.08rem)): header links, Title Case.
- **Button** (700, 1rem, 1.15, 0.01em): every button and the phone number blocks; large buttons step up to 1.05rem, the hero Call to clamp(1.1rem, 1.5vw, 1.4rem). Phone numbers use tabular figures.
- **Body** (Archivo 400, 1.0625rem, 1.6): reading text; long text capped near 44 to 46rem.
- **Label** (Archivo 700, 0.92rem): form labels, the choice legend, choice buttons. FAQ questions use Archivo at 750, about 1.1rem.
- **Consent** (Archivo 400, 0.875rem, 1.45 to 1.5): consent copy, in navy ink, not soft ink, so it stays readable.

### Named Rules
**The Rubik Speaks Up Rule.** Headings, nav, buttons, phone numbers, trust labels and step numerals are Rubik. Body copy, labels, consent and FAQ questions are Archivo. Do not set reading text in Rubik.

**The Phone Number Rule.** A phone number shown as an action is set in Rubik 700 with tabular figures.

## Layout

Content sits in a centered column (max 1240px) with a fluid gutter (clamp(1.25rem, 4vw, 3.5rem)); full-bleed bars (header, property-manager lane, service-panel row) widen to 1440px, and photo heroes hold their content to 1500px on very wide screens. Sections breathe on a fluid vertical rhythm (clamp(4rem, 9vw, 7.5rem)); the hero-adjacent bands (trust bar, service panels, tune-up, call band) run tighter, around clamp(2.5rem, 5vw, 4rem). The sticky header is 84px and anchors scroll with that offset.

**Photo hero.** At 960px and up the hero is a two-column grid: copy left, the quote card right (clamp(400px, 37vw, 560px)), vertically centered, about 640px tall at most and never taller than the viewport under the header. Heroes without a side panel are a single left copy column (max about 640px) at least 460px tall. Below 960px the quote card stacks under the copy on the same dark ground.

**Below the hero.** A three-up trust bar (white, 1px rule-line bottom edge, 1px vertical rules between items); two equal Heating | Cooling panels; a one-line reviews row split by a 1px vertical rule; asymmetric copy-beside-list grids (about 1.05fr to 1fr, and 1fr to 1.6fr for FAQ); a wash tune-up row (photo 0.9fr, copy 1.1fr).

**Responsive.** Navigation collapses to a menu sheet at 1100px. Between 960 and 1279px the quote card's choice grid drops to two columns; at 1180px and up Name, Phone and ZIP sit on one row (1.1fr, 1.1fr, 0.8fr). Two-column grids and the service panels stack at 960px. At 760px the hero tint turns vertical, the hero Call and band buttons go full width, the trust bar and each panel's photo/list body go single column, and a fixed bottom bar (red Call, blue Request Service, 50px) appears with its right side kept clear for the chat bubble. Tap targets are at least 46px, most 48 to 64px.

## Elevation & Depth

Mostly flat. Depth comes from the dark photo hero, from color blocks (navy bands, red and blue panel bars) and from white surfaces set on wash. Shadows are soft and long, used only to lift a white surface off a photo or wash, never as decoration or as a hard offset.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 30px 60px -24px rgb(0 0 0 / 0.6)`): the quote card over a dark photo hero. Over the darkened photo a navy tint disappears, so this one shadow is a deeper neutral dark.
- **Panel lift** (`box-shadow: 0 18px 40px -28px rgb(16 35 63 / 0.45)`): white surfaces on light grounds (the service-page item grid, the other-service tiles).
- **Sheet drop** (`box-shadow: 0 18px 30px -12px rgb(16 35 63 / 0.25)`): the mobile menu sheet under the header.
- **Bar edge** (`box-shadow: 0 -1px 0 #D6DFEB, 0 -10px 24px -16px rgb(16 35 63 / 0.35)`): the fixed mobile action bar.
- **Headline halo** (`text-shadow: 0 2px 18px rgb(0 0 0 / 0.35)`): photo-hero H1s only, a legibility aid over bright window glow, not a visible effect.

### Photo Tint
The photo hero is the one place a gradient lives. A navy-scrim overlay runs left to right from 0.92 opacity at the left edge, holding near 0.8 through the first third, falling to about 0.25 to 0.3 past the middle and 0.1 to 0.18 at the right edge, so white type sits on near-solid navy while the house reads on the right. Under 760px it turns vertical (about 0.3 at the top to 0.94 by 60%) so stacked copy and card sit on the dark end.

### Named Rules
**The Lift, Don't Stamp Rule.** A shadow only lifts a white surface off a photo or wash, and it is always soft and long. Navy-tinted on light grounds; the deeper dark is reserved for the card over a photo. No hard offset shadows, no glass, no glow.

**The Tint, Don't Decorate Rule.** Gradients exist only as the navy scrim that makes type legible on a photograph. No gradient fills on buttons, cards, bands or text.

## Shapes

Square corners throughout (0px): buttons, inputs, choice buttons, cards, panels, icon badges, menu toggle, bands. The only curve is the round white disc (50%) behind the logo mark in the call band. Outlines are drawn as 2px inset strokes (line and ghost buttons, icon badges, menu toggle) or 2px borders (inputs, choices). Containers on white use a 1px rule-line border (service panels) rather than a shadow. Lists use a 3px navy top rule with 1px rule-line dividers.

**H1 accent rule.** Every photo-hero H1 is followed by a 72 by 6px solid bar: heat red on heating pages, cool blue on cooling pages, and a hard half-red, half-blue split on every other photo hero (maintenance, property management, About, Contact; the home H1 carries no rule). The split is a hard 50% stop, never a blend. This small bar is the only red | blue split in the system.

### Named Rules
**The Hard Edge Rule.** Nothing is rounded except the logo disc. No pills, no radius on cards or buttons.

**The Small Split Rule.** The red | blue split appears only as the 72px H1 accent rule. Never extend it into full-width bands, stripes or section dividers.

## Components

### Buttons
Solid, heavy blocks that read as tools.
- **Shape:** square (0px), minimum 56px tall (60px for the large call-band and hero-actions size, 64px for the home hero Call), icon gap 0.6rem.
- **Red:** the primary action (call, send). Hover deepens.
- **Blue:** the cooling-side or secondary request action.
- **Navy:** structural actions on light grounds. Hover to navy raised.
- **Line:** transparent with a 2px inset navy stroke; fills navy with white text on hover.
- **Ghost:** the line button for dark grounds (call band, photo heroes), a 2px inset stroke at 70% white; fills white with navy text on hover.
- **States:** background and color ease over 0.25s on cubic-bezier(0.16, 1, 0.3, 1); pressed nudges down 1px; focus is a 3px cool-blue outline offset 3px; disabled send drops to 65% opacity.
- **Arrow links:** bold text with a trailing arrow that slides 4px right on hover; on the service panels the arrow takes the panel's color ("All heating services", "All cooling services").

### Inputs / Fields
- **Style:** white, 2px rule-line border, square, 52px minimum height, Archivo at body size, bold 0.92rem labels above with optional notes in ink-soft regular.
- **Focus:** border shifts to cool blue (no glow).
- **Error:** status message in bold heat-red-deep text.
- **Consent:** two checkboxes with blue accent, copy at 0.875rem in navy ink.

### Photo Hero (signature)
The shared opening of every top-level page (home, About, Contact, each service page): a full-bleed realistic photograph on a navy ground, the navy-scrim tint (see Elevation & Depth), optional breadcrumb in navy mist, white Rubik H1 with its accent rule (home omits the rule), a white lead, a red Call button (with a ghost secondary where a page needs one), and the quote card on the right when the page takes requests. Home uses the dusk photo with the Gateway Arch; interior pages use their own subject photo with the image anchored at 60% so the house sits right of the copy.

### Quote Card
The request form on photo heroes: white, square, padded clamp(1.4rem, 2.4vw, 2rem), card lift, Rubik card title, an ink-soft note, the symptom choice grid, Name / Phone / ZIP (two columns with ZIP full width; one row of three at 1180px and up), consents, full-width red Send with an arrow.

### Symptom Choice Grid (signature)
A 3-column grid (2 columns from 960 to 1279px and under 420px) of square choice buttons, 50px tall: white with a 2px rule-line border, bold Archivo label beside a Lucide icon (1.35rem, stroke 2.4). The icon is heat red for "No heat" (flame), cool blue for "No AC" (snowflake), navy for the rest. Hover moves the border to navy. When picked, "No heat" fills solid heat red, "No AC" fills solid cool blue, every other choice fills navy, and label and icon turn white. The brand's heat/cool logic in one interaction.

### Trust Bar
A white strip directly under the home hero: three items, each a large cool-blue Lucide line icon (2.4 to 3rem, stroke 1.6) beside a two-line Rubik 700 trust label, separated by 1px rule-line vertical rules, with a 1px rule-line bottom edge. Stacks to a plain list without rules under 760px.

### Service Panels (Heating | Cooling)
Two equal panels with a 1px rule-line border and no shadow. Each opens with a solid bar (heat red or cool blue) carrying the Rubik panel-bar title as a link, then a body split into a photo plate on the left (46%, cover-cropped, at least 240px tall) and an icon list on the right: Lucide icons at 1.6rem, stroke 1.75, with the first icon in the panel's color and the rest in navy, items at clamp(1rem, 1.25vw, 1.12rem), and the "All … services" arrow link last. Under 760px the photo moves on top at 16:9.

### Call Band
A full-width navy band: the logo mark on a round white disc (clamp(72px, 7vw, 96px), 12px padding), a white Rubik headline (clamp(1.7rem, 3vw, 2.5rem)) with a navy-mist line, and two large buttons (red Call, ghost Request service). Three columns on desktop, the actions drop below at 1100px, everything stacks full width at 760px.

### Cards / Containers
- **Service-page item grid:** white cells separated by 1px rule-line gaps, panel lift, each with a 3rem square icon badge (2px inset stroke in the page's tone color) and Rubik title.
- **Other-service tiles:** white, panel lift, 16:10 photo with a slow 1.04 zoom on hover, then a solid label bar in the service's tone (red, blue or navy).
- **Price / note box:** wash ground, 1.5 to 1.75rem padding, no border, no shadow; a solid navy 3rem icon square marks it.

### Icon System
Inline Lucide outline SVG, never an icon font or emoji. Default stroke 2.25 at text size; stroke thins as icons grow (2.4 on the small choice icons, 1.75 on 1.6rem panel icons, 1.6 on the large trust icons) so the line weight reads the same.

### Navigation
- **Header:** white, sticky, 84px, a 1px rule-line bottom edge. Dark logo left at clamp(170px, 19vw, 290px) followed by a 1px rule-line vertical rule, Rubik 600 nav links with a 2px heat-red underline on hover and on the current page, then a navy phone block in Rubik 700 that turns red on hover.
- **Mobile:** below 1100px the logo rule drops and a square outline Menu toggle opens a full-width white sheet of Rubik 1.15rem links on rules plus a full-width red Call; under 560px the phone block shows only its icon.
- **Mobile action bar:** fixed bottom red Call and blue Request Service blocks, 50px tall.
- **Property-manager lane:** a full-width navy link bar (1440px max), navy-ember building icon, bold Rubik lead-in, navy-mist line, arrow link right.
- **Footer:** navy, light logo, Rubik phone number at 1.6rem, small uppercase column headings, navy-mist links, navy-divider base rule.

### Page Bands and Lists
- **Page band:** full-width solid block (navy, heat red or cool blue by subject) with a white Display title and lead, used on the request forms and location pages.
- **Ruled lists:** numbered visit steps (Rubik numerals alternating red and blue), tick lists, and FAQ disclosures; all sit under a 3px navy top rule with 1px dividers.

## Do's and Don'ts

### Do:
- **Do** map heat to heat red and cool to cool blue wherever a component has heating and cooling variants.
- **Do** open top-level pages with the photo hero: realistic photo, navy-scrim tint heaviest on the left, white Rubik H1, red Call.
- **Do** set headings, buttons, nav and phone numbers in Rubik, and body copy, labels and consent in Archivo.
- **Do** keep every corner square; reserve the 50% curve for the logo mark's disc.
- **Do** border white panels with a 1px rule line and separate list items with 1px dividers under a 3px navy top rule.
- **Do** use the dark logo on white and the light logo on navy, at their native proportions.
- **Do** keep generated photography realistic, residential St. Louis, with no people, and write a provenance sidecar next to every shipped raster.
- **Do** keep tap targets at 46px or taller and the focus outline at 3px cool blue.

### Don't:
- **Don't** redraw, recolor, crop into new shapes or restyle the client's logo files.
- **Don't** round buttons, inputs or cards, or use pill shapes.
- **Don't** use full-width red | blue split bands or stripes; the split lives only in the 72px H1 accent rule.
- **Don't** use gradients except the navy scrim over a photograph.
- **Don't** use hard offset shadows, glass or glow.
- **Don't** introduce neutral greys; tint from the navy.
- **Don't** use photography with people in it, stock technicians included.
- **Don't** use emoji or text glyphs as icons; use inline outline SVG.
