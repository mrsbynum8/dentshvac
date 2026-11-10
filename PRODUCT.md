# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro static site (decided 2026-11-10 by ShaRhanda, BookedFirst). It replaces the Vite + React SPA,
whose client-only rendering left Google with empty pages. Deploys to the Cloudflare Pages project `dentshvac`
from GitHub `mrsbynum8/dentshvac` (`main`). Every page must ship as real HTML.

## Users
Two audiences with equal billing (confirmed):
- **Homeowners** in North St. Louis County and St. Louis City whose AC or furnace is failing or
  due for service. They're often searching on a phone, mid-problem, and want to call a real
  person fast and trust that the price is fair.
- **Property managers / multifamily owners** who need a dependable HVAC contractor for units
  and complexes: quick diagnosis, clear invoices, net-30/60/90 terms.

## Product Purpose
The website for Dent's Heating And Cooling Co., LLC (DBA Dent's Heating And Cooling). It has
to turn local searches into phone calls and service requests, and to rank in Google for HVAC
searches near St. Louis, where today it only ranks for its own name. Success means calls and form
requests from non-branded searches, plus a site that every SEO skill can measure.

## Positioning
Owner-operated: Gerald L. Pickett is the technician who answers, diagnoses and does the work.
That means no sales team, no upsell script, and the same person every visit. It also serves
property managers, which the big residential brands in the area don't make central. Other shops
can't truthfully claim "the owner shows up himself."

## Operating Context
- Calls Gerald misses are answered by an AI voice agent (customer-facing, "Amanda/Amelia").
  "Jason" is an internal-only scheduling agent: **never show Jason's number publicly.**
- Leads, jobs, invoices and maintenance reminders run in GoHighLevel (sub-account
  Q3nV40ZxTxM3YVFWznES). The GHL chat widget is on every page.
- Forms that must keep working:
  - The hero/contact form posts to a GHL inbound webhook.
  - `/request-service` (residential) and `/pm-request` (property management) are GHL form embeds
    with A2P/SMS-consent wording.
  - `/gerald` is Gerald's private post-job form. It must stay `noindex` and out of the sitemap.
- `/privacy` and `/terms` carry the SMS-program terms needed for A2P compliance.
- Annual maintenance reminders go out each spring from GHL.

## Capabilities and Constraints
- Services: AC repair and installation, furnace/heating repair and installation, HVAC maintenance
  (spring/fall tune-ups), and property-management/multifamily HVAC. The final service-page list
  comes after the owner call.
- Base: 6942 Forest Hill(s) Dr, St. Louis, MO 63121. **The street spelling is unconfirmed**: GHL
  says "Forest Hill", the onboarding doc and site say "Forest Hills". Use one spelling everywhere once Gerald confirms.
- Phone (314) 420-7803 · info@dentsheatingandcooling.com · dentsheatingandcooling.com.
  Google's profile uses `www.`, so pick one canonical host.
- **Service cities are undecided.** The old site targeted Clayton, Ladue, Webster Groves,
  Kirkwood and Chesterfield; the base is North County. Await the owner's confirmation.
- Hours are undecided. Google lists him as open 24/7; actual hours and emergency availability are unconfirmed.
- SEO requirements: per-page title/meta/H1/canonical, HVACBusiness schema, sitemap.xml, a real 404,
  one canonical host, fast mobile load (LCP < 2.5s).

## Brand Commitments
- **Keep his brand (binding, ShaRhanda 2026-11-10: "you have his logo and stuff, don't redesign
  it"):** the redesign changes layout, type and sections around the existing brand, never the brand itself.
  - Logo: circular red/blue arrow mark + extended wide "DENT'S" wordmark with "HEATING & COOLING"
    tracked below. Files: `public/light logo.png` (white wordmark, for dark grounds), `public/dark logo.png`
    (blue wordmark, for light grounds), `public/dents_favicon.png`. Square 2000px versions are in the client folder
    `dents new logo/`. Never redraw, recolor or restyle the logo.
  - Brand colors, sampled from the logo: **red #D8183C** (heat) and **blue #2470B4** (cool), on white.
    The red/blue = heat/cool pairing is the brand's own logic.
  - Lettering character: the wordmark is a wide, extended geometric sans. Site type should belong with it.
- Name: "Dent's Heating And Cooling" (public).
- Voice: plain, honest, neighborly, owner-operated. No big-company language.
- Footer credit: "Site by BookedFirst", linking to https://getbookedfirst.com.

## Evidence on Hand
- Google Business Profile: claimed, 5.0★ from 2 real reviews (place_id ChIJxRxea72mxqARM9vFKag4bvg).
  Link to it; don't restate counts that will change.
- **No real photos yet** (confirmed): no photos of Gerald, the van or jobs. Don't show fake
  people or stock "technicians" as if they were him.
- **Must not be fabricated or repeated without confirmation:** testimonials (the placeholder
  "Simmons" ones were removed 2026-11-10), "team", "certified technicians", "10-Year Parts &
  Labor", "24/7", "100% satisfaction guarantee", "thousands of homeowners", years in business,
  license numbers.
- Rates exist internally (e.g. A/C maintenance $325) but aren't approved for publishing.

## Product Principles
1. **Truth sells here.** One honest owner beats a big company claim. Every claim must be one
   Gerald can stand behind.
2. **Call first.** The phone number and a request path are reachable from every screen, without hunting.
3. **Two front doors.** A homeowner and a property manager should each see their path within seconds.
4. **Built to be found.** Every page is real HTML that Google can read, with its own purpose and wording.

## Accessibility & Inclusion
WCAG 2.1 AA. Many visitors are on phones under stress (no heat or no AC), so use large tap targets,
readable type, and a phone number that works as a tap-to-call link.
