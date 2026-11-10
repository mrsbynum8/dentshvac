// One source of truth for business facts. Only facts Gerald can stand behind.
// Unconfirmed items are marked CONFIRM and kept out of claims.

export const BRAND = {
  name: "Dent's Heating And Cooling",
  short: "Dent's",
  legalName: "Dent's Heating And Cooling Co., LLC",
  dbaName: "Dent's Heating And Cooling Co., LLC DBA Dent’s Heating And Cooling",
  owner: 'Gerald Pickett',
  phone: '314-420-7803',
  phoneHref: 'tel:+13144207803',
  email: 'info@dentsheatingandcooling.com',
  // CONFIRM: GHL says "Forest Hill Dr", onboarding doc + old site say "Forest Hills Dr".
  street: '6942 Forest Hills Dr',
  city: 'St. Louis',
  region: 'MO',
  zip: '63121',
  area: 'St. Louis City & North St. Louis County',
  website: 'dentsheatingandcooling.com',
  geo: { lat: 38.64, lng: -90.321 },
};

export const GOOGLE = {
  placeId: 'ChIJxRxea72mxqARM9vFKag4bvg',
  reviewsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJxRxea72mxqARM9vFKag4bvg',
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJxRxea72mxqARM9vFKag4bvg',
};

export const GHL = {
  webhook:
    'https://services.leadconnectorhq.com/hooks/Q3nV40ZxTxM3YVFWznES/webhook-trigger/b3b719e4-1d6d-4f65-8d9e-7c960f825519',
  formEmbedScript: 'https://brand.dentsheatingandcooling.com/js/form_embed.js',
  chatLoader: 'https://beta.leadconnectorhq.com/loader.js',
  chatResources: 'https://beta.leadconnectorhq.com/chat-widget/loader.js',
  chatWidgetId: '69dee1c2d69ee82bf468e00f',
  forms: {
    // heights measured from the live GHL forms 2026-11-10 (GHL's own data-height values were too short and clipped the forms)
    residential: { id: 's4VkICseV4kNJfxqrM6a', name: 'Dents HC — Residential Service Request', height: 1263, desktop: 1160, mobile: 1590 },
    property: { id: '2iAos47rxlfqZ2VuHYaf', name: 'Dents HC — Property Management Request', height: 1207, desktop: 1670, mobile: 1710 },
    gerald: { id: 'ffStSxOi3VT4ut7sVjEo', name: 'Dents HC — Completed Work Form', height: 1057, desktop: 1440, mobile: 1440 },
  },
};

export type Tone = 'heat' | 'cool' | 'split' | 'navy';

export interface Service {
  slug: string;
  tone: Tone;
  nav: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lead: string;
  covers: string[];
  signs: { heading: string; items: string[] };
  faqs: { q: string; a: string }[];
}

// Service lists come from his real invoice catalog (Joist import), not from marketing copy.
export const SERVICES: Service[] = [
  {
    slug: 'heating',
    tone: 'heat',
    nav: 'Heating',
    title: "Furnace & Heating Repair in St. Louis | Dent's Heating And Cooling",
    description:
      'Furnace repair, furnace replacement, heat pumps and tune-ups in St. Louis and North County. The owner diagnoses and does the work. Call 314-420-7803.',
    h1: 'Furnace and heating repair in St. Louis',
    lead:
      "When the house won't warm up, you get Gerald: the owner, on the phone and at your door. He finds what failed, tells you the price before any work starts, and gets the heat back on.",
    covers: [
      'Gas furnace repair: control boards, pressure switches, high-limit switches, blower motors',
      'Flame sensor cleaning and ignition problems',
      'Electric furnace repair, sequencers and heat kits',
      'Furnace replacement (60,000 to 100,000 BTU), with the mechanical permit pulled',
      'Heat pump service and installation',
      'Annual furnace cleaning and tune-ups',
      'Thermostat installation and wiring conversions',
    ],
    signs: {
      heading: 'Call when',
      items: [
        "The furnace runs but the house won't warm up",
        'It starts, shuts off, and starts again',
        'Burning, electrical or rumbling smells or sounds',
        'The heat pump blows cold air in heating mode',
        "The thermostat says one thing and the house feels another",
      ],
    },
    faqs: [
      {
        q: 'Can you give me a price over the phone?',
        a: 'Not for repairs. Part prices change with the supplier, so Gerald diagnoses the system first, checks the current cost of the part, and calls you with the price before doing the work.',
      },
      {
        q: 'What if Gerald can’t pick up?',
        a: 'Call 314-420-7803. If Gerald can’t pick up, the line takes your details and he calls you back.',
      },
      {
        q: 'Should I repair or replace my furnace?',
        a: "That depends on the furnace's age, what failed, and how often it has needed work. Gerald will tell you plainly which makes sense for your house and budget.",
      },
    ],
  },
  {
    slug: 'cooling',
    tone: 'cool',
    nav: 'Cooling',
    title: "AC Repair & Installation in St. Louis | Dent's Heating And Cooling",
    description:
      'Air conditioning repair, AC installation, refrigerant leak checks and tune-ups in St. Louis and North County. Owner-operated. Call 314-420-7803.',
    h1: 'AC repair and installation in St. Louis',
    lead:
      'St. Louis summers are hard on air conditioners. When yours quits, Gerald finds the failure, from a burnt-out capacitor to a refrigerant leak, quotes it at today’s parts price, and fixes it.',
    covers: [
      'AC repair: capacitors, contactors, condenser fan motors, transformers',
      'Refrigerant leak diagnostics and system leak inspections',
      'R-410A and R-454B refrigerant service',
      'Condensing unit installation (2 to 4 ton), line sets and electrical disconnects',
      'Air handlers, A-coils and filter racks',
      'Spring AC maintenance',
      'System conversions',
    ],
    signs: {
      heading: 'Call when',
      items: [
        'The AC runs but blows warm air',
        "The outside unit won't start, or hums without running",
        'Ice on the lines or water around the indoor unit',
        "The house won't get below the mid-70s on hot days",
        'The breaker trips when the AC kicks on',
      ],
    },
    faqs: [
      {
        q: 'How much does AC repair cost?',
        a: 'It depends on the part. A capacitor is a small repair; a compressor or coil is not. Gerald diagnoses first and calls you with the current parts price before he starts.',
      },
      {
        q: 'My AC is old. Repair it or replace it?',
        a: "If it's an older R-22 system or needs a major part, replacement is often the smarter money. Gerald will walk you through both options and the numbers.",
      },
      {
        q: 'Do you install new AC systems?',
        a: 'Yes: condensing units, line sets, coils and air handlers, with the mechanical permit pulled where the city or county requires one.',
      },
    ],
  },
  {
    slug: 'maintenance',
    tone: 'split',
    nav: 'Maintenance',
    title: "AC & Furnace Tune-Ups in St. Louis | Dent's Heating And Cooling",
    description:
      'Spring AC maintenance and fall furnace tune-ups in St. Louis and North County, with yearly reminders so you never forget. Call 314-420-7803.',
    h1: 'AC and furnace tune-ups in St. Louis',
    lead:
      'Most breakdowns start as small wear: a weak capacitor, a dirty flame sensor, a clogged filter. A tune-up before each season catches them while they are still cheap.',
    covers: [
      'Spring AC maintenance: cleaning, contactor check and amp-draw readings',
      'Fall gas furnace tune-up and flame sensor cleaning',
      'Electric furnace maintenance checks',
      'Filter and airflow checks',
      'A yearly reminder each spring so your tune-up is never forgotten',
    ],
    signs: {
      heading: 'Book a tune-up when',
      items: [
        'Spring is coming and the AC sat all winter',
        'Fall is coming and the furnace sat all summer',
        'Your energy bills crept up with no change in use',
        "You can't remember the last time anyone looked at it",
      ],
    },
    faqs: [
      {
        q: 'How often should I get a tune-up?',
        a: 'Twice a year is best: the AC before cooling season and the furnace before heating season.',
      },
      {
        q: 'Will you remind me?',
        a: 'Yes. Customers get a reminder every spring to schedule their maintenance.',
      },
    ],
  },
  {
    slug: 'property-management',
    tone: 'navy',
    nav: 'Property Managers',
    title: "HVAC for Property Managers & Multifamily in St. Louis | Dent's",
    description:
      'HVAC repair for apartment complexes, multifamily buildings and rental properties in St. Louis, from the owner who does the work. Call 314-420-7803.',
    h1: 'HVAC service for property managers and multifamily',
    lead:
      "Units go down and tenants call you. Send the property and unit, Gerald diagnoses it, fixes it on the spot when the part is on the truck, and schedules the return with you when it isn't.",
    covers: [
      'Heating and cooling repair for apartments, multifamily buildings and rentals',
      'Diagnosis, with on-the-spot repair when parts are on hand',
      'Parts ordered from the supply house and the return visit scheduled with the property',
      'Seasonal maintenance across units',
    ],
    signs: {
      heading: 'Send a request for',
      items: [
        'A unit with no heat or no cooling',
        'A make-ready that needs the system checked',
        'Recurring problems on the same building',
        'Seasonal maintenance across a property',
      ],
    },
    faqs: [
      {
        q: 'How do we send work?',
        a: 'Use the property request form, or call or text 314-420-7803 with the property and the issue.',
      },
      {
        q: 'What payment terms do you offer?',
        a: 'Commercial invoices go out on net-30, net-60 or net-90 terms, by ACH or check depending on your company.',
      },
    ],
  },
];

// Old site city pages. Kept at their URLs but noindex until Gerald confirms where he wants work.
export const LOCATIONS = [
  { slug: 'clayton', name: 'Clayton' },
  { slug: 'ladue', name: 'Ladue' },
  { slug: 'webster-groves', name: 'Webster Groves' },
  { slug: 'kirkwood', name: 'Kirkwood' },
  { slug: 'chesterfield', name: 'Chesterfield' },
];

export const FAQS = [
  {
    q: 'How do I know if my AC needs repair?',
    a: 'Warm air, weak airflow, unusual noises, leaks and rising energy bills can all be signs your AC needs professional repair.',
  },
  {
    q: 'Can you give me a price over the phone?',
    a: 'Not for repairs. Part prices change with the supplier, so Gerald diagnoses the system, checks the current price, and calls you with it before any work begins.',
  },
  {
    q: 'How often should I schedule HVAC maintenance?',
    a: 'Most systems should be serviced twice a year, once before cooling season and once before heating season.',
  },
  {
    q: 'When should I replace my HVAC system?',
    a: 'If your system is older, needs frequent repairs, struggles to heat or cool, or drives up your bills, it may be time to consider replacement.',
  },
  {
    q: 'Who will come to my house?',
    a: 'Gerald Pickett, the owner. Dent’s is owner-operated, so the person you talk to is the person who does the work.',
  },
];

export const NAV = [
  { href: '/services/heating', label: 'Heating' },
  { href: '/services/cooling', label: 'Cooling' },
  { href: '/services/maintenance', label: 'Maintenance' },
  { href: '/services/property-management', label: 'Property Managers' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
