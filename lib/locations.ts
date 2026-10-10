/**
 * Local SEO cities within ~25 miles of 323 Austin Drive, Fairless Hills, PA 19030.
 * Each record is unique on purpose — do not clone these pages with name-only swaps.
 */

export type ServiceCity = {
  slug: string
  name: string
  state: 'PA' | 'NJ'
  label: string
  county: string
  miles: number
  zips: string
  jurisdiction: string
  housing: string
  intro: string
  localNote: string
  nearbySlugs: string[]
}

export const LOCAL_CITIES: readonly ServiceCity[] = [
  {
    slug: 'fairless-hills-pa',
    name: 'Fairless Hills',
    state: 'PA',
    label: 'Fairless Hills, PA',
    county: 'Bucks County',
    miles: 0,
    zips: '19030',
    jurisdiction: 'Falls Township building department',
    housing: 'Post-war ranches, split-levels, and brick colonials around Oxford Valley and the US Steel planned neighborhood',
    intro:
      'Fairless Hills is our home base. Crews leave from 323 Austin Drive, so kitchen, bath, and basement work here is same-day coordination instead of a long commute. Most jobs sit in Falls Township, a short hop from Oxford Valley Mall and the Levittown sections just south.',
    localNote:
      'Homes here often share 1950s–70s layouts: galley kitchens, single-bath ranches, and unfinished lower levels. We plan around Falls Township inspections and keep dumpsters and parking off narrow side streets near the Oxford Valley corridor.',
    nearbySlugs: ['levittown-pa', 'bristol-pa', 'morrisville-pa', 'langhorne-pa', 'yardley-pa'],
  },
  {
    slug: 'levittown-pa',
    name: 'Levittown',
    state: 'PA',
    label: 'Levittown, PA',
    county: 'Bucks County',
    miles: 3,
    zips: '19054–19057',
    jurisdiction: 'Bristol Township or Middletown Township, depending on section',
    housing: 'Classic Levitt Cape Cods, Jubilees, and later additions in sections such as Twin Oaks, Pinewood, and Farmbrook',
    intro:
      'Levittown is three miles from our shop and still one of the densest renovation markets in lower Bucks. Original Levitt houses were built fast and small; owners now want open kitchens, second baths, and finished basements without losing the street character.',
    localNote:
      'Permit offices split by section — Bristol Township vs Middletown Township — so we confirm the address before drawings go in. Load-bearing walls in early Capes and low basement headroom are the usual surprises, not luxury finishes.',
    nearbySlugs: ['fairless-hills-pa', 'bristol-pa', 'langhorne-pa', 'bensalem-pa'],
  },
  {
    slug: 'bristol-pa',
    name: 'Bristol',
    state: 'PA',
    label: 'Bristol, PA',
    county: 'Bucks County',
    miles: 4,
    zips: '19007',
    jurisdiction: 'Bristol Borough or Bristol Township',
    housing: 'River-town row homes near Mill Street, twins, and later suburban ranches toward Croydon',
    intro:
      'Bristol sits on the Delaware about four miles from Fairless Hills. Borough work on Mill Street and the historic blocks needs tighter staging than township lots. We handle both Bristol Borough and Bristol Township permits so the address, not the ZIP, drives the paperwork.',
    localNote:
      'Older brick twins often need plumbing stacks and electrical service brought up to code before a kitchen or bath can open. Parking and dumpster placement downtown is planned with the borough, not left to the crew the morning of demo.',
    nearbySlugs: ['levittown-pa', 'fairless-hills-pa', 'morrisville-pa', 'bensalem-pa'],
  },
  {
    slug: 'morrisville-pa',
    name: 'Morrisville',
    state: 'PA',
    label: 'Morrisville, PA',
    county: 'Bucks County',
    miles: 4,
    zips: '19067',
    jurisdiction: 'Morrisville Borough',
    housing: 'Walkable borough homes, twins near the river, and larger properties toward Yardley and Lower Makefield',
    intro:
      'Morrisville is the Pennsylvania side of the Calhoun Street Bridge, four miles from our office and directly across from Trenton. Owners here mix borough lots with 19067 addresses that spill into Yardley and Lower Makefield — we check the municipality before we bid.',
    localNote:
      'Borough lots are tighter than Falls Township ranches. We often sequence kitchen and bath work so a family can keep one working sink, and we coordinate bridge-adjacent parking when the job is near the riverfront.',
    nearbySlugs: ['fairless-hills-pa', 'yardley-pa', 'trenton-nj', 'levittown-pa'],
  },
  {
    slug: 'langhorne-pa',
    name: 'Langhorne',
    state: 'PA',
    label: 'Langhorne, PA',
    county: 'Bucks County',
    miles: 5,
    zips: '19047',
    jurisdiction: 'Langhorne Borough, Langhorne Manor, or Middletown Township',
    housing: 'Borough Victorians plus later Middletown colonials around Oxford Valley and Neshaminy Creek',
    intro:
      'Langhorne is five miles west of Fairless Hills and covers more than one government: the borough, Langhorne Manor, and large stretches of Middletown Township that share the 19047 ZIP. We route permits to the right hall so a kitchen on Maple Avenue is not filed like a house off Maple Point.',
    localNote:
      'Older borough houses often need plaster repair and uneven floor leveling before cabinets land. Township colonials are a different job: islands, pantry pull-outs, and basement rec rooms with existing HVAC trunks in the way.',
    nearbySlugs: ['fairless-hills-pa', 'newtown-pa', 'levittown-pa', 'southampton-pa'],
  },
  {
    slug: 'yardley-pa',
    name: 'Yardley',
    state: 'PA',
    label: 'Yardley, PA',
    county: 'Bucks County',
    miles: 6,
    zips: '19067',
    jurisdiction: 'Yardley Borough or Lower Makefield Township',
    housing: 'Canal-town historic homes plus Lower Makefield colonials and contemporaries off I-95',
    intro:
      'Yardley is six miles upriver from our shop. Borough streets along the Delaware Canal are a different project than a Lower Makefield colonial off Stony Hill or Taylorsville Road — same ZIP, different rules and house types.',
    localNote:
      'Canal-side homes can trigger floodplain and historic-adjacent reviews. Township jobs are more often open-concept kitchens and primary-suite baths. We walk the lot for access before we promise a dumpster location.',
    nearbySlugs: ['morrisville-pa', 'new-hope-pa', 'newtown-pa', 'fairless-hills-pa'],
  },
  {
    slug: 'bensalem-pa',
    name: 'Bensalem',
    state: 'PA',
    label: 'Bensalem, PA',
    county: 'Bucks County',
    miles: 8,
    zips: '19020',
    jurisdiction: 'Bensalem Township',
    housing: 'Split-levels, twins, and townhome clusters from Street Road to the river, plus larger homes near Neshaminy',
    intro:
      'Bensalem is about eight miles south of Fairless Hills along Street Road and the river. It is one township, which simplifies permits, but the housing stock jumps from 1960s split-levels to townhome associations with their own architectural rules.',
    localNote:
      'HOA packets can take longer than the township permit. We ask for those documents up front. Basement finishing is common here; we check moisture and egress before we talk about a bar or extra bedroom.',
    nearbySlugs: ['levittown-pa', 'bristol-pa', 'philadelphia-pa', 'southampton-pa'],
  },
  {
    slug: 'newtown-pa',
    name: 'Newtown',
    state: 'PA',
    label: 'Newtown, PA',
    county: 'Bucks County',
    miles: 8,
    zips: '18940',
    jurisdiction: 'Newtown Borough or Newtown Township',
    housing: 'State Street historic buildings plus township colonials, farmhouses, and newer neighborhoods toward the Bypass',
    intro:
      'Newtown is eight miles from Fairless Hills and splits between a walkable borough and a much larger township. State Street storefronts and stone houses need a lighter touch than a 1990s kitchen off the Newtown Bypass.',
    localNote:
      'Borough historic context can limit exterior changes even when the interior is a full gut. Township jobs more often include mudrooms, finished basements, and additions that have to match existing roof lines and siding.',
    nearbySlugs: ['langhorne-pa', 'yardley-pa', 'southampton-pa', 'doylestown-pa'],
  },
  {
    slug: 'southampton-pa',
    name: 'Southampton',
    state: 'PA',
    label: 'Southampton, PA',
    county: 'Bucks County',
    miles: 10,
    zips: '18966',
    jurisdiction: 'Upper Southampton Township (and neighboring Lower Southampton where the address requires it)',
    housing: 'Mid-century ranches and two-story colonials along Second Street Pike and County Line Road',
    intro:
      'Southampton sits about ten miles from our shop, toward the Bucks–Montgomery line. Most renovation calls come from Upper Southampton colonials and ranches that have not been opened up since the original kitchen was built.',
    localNote:
      'We confirm Upper vs Lower Southampton before permit drawings. Many kitchens here still have a closed wall to the dining room; we check joists and HVAC returns before we promise a wide cased opening.',
    nearbySlugs: ['langhorne-pa', 'newtown-pa', 'warminster-pa', 'bensalem-pa'],
  },
  {
    slug: 'trenton-nj',
    name: 'Trenton',
    state: 'NJ',
    label: 'Trenton, NJ',
    county: 'Mercer County',
    miles: 8,
    zips: '08608–08611, 08618, 08629, 08638',
    jurisdiction: 'City of Trenton',
    housing: 'Brick row homes, twins, and two-family houses in Chambersburg, Villa Park, and the East and West Wards',
    intro:
      'Trenton is eight miles across the river from Fairless Hills. City jobs are a different workflow than Bucks Township ranches: tighter lots, shared walls, and Trenton permit and inspection scheduling. We still run those jobs from the same shop.',
    localNote:
      'Row-home kitchens and baths often share stacks with a neighbor. We scope waste lines and electrical service before demo. Street parking and dumpster permits are part of the bid, not an afterthought.',
    nearbySlugs: ['morrisville-pa', 'hamilton-nj', 'ewing-nj', 'lawrenceville-nj'],
  },
  {
    slug: 'hamilton-nj',
    name: 'Hamilton',
    state: 'NJ',
    label: 'Hamilton, NJ',
    county: 'Mercer County',
    miles: 10,
    zips: '08610, 08619, 08620, 08690',
    jurisdiction: 'Hamilton Township',
    housing: 'Cape Cods, bi-levels, and later colonials from Mercerville and Yardville to Hamilton Square',
    intro:
      'Hamilton Township is about ten miles from Fairless Hills and one of the larger residential towns we serve in Mercer County. Addresses in Mercerville, Yardville, and Hamilton Square all file with the same township, which keeps inspections predictable.',
    localNote:
      'Bi-levels and raised ranches are common; “basement finishing” here often means a walk-out or a half-level, not a deep cellar. We measure headroom and moisture before we quote a rec room.',
    nearbySlugs: ['trenton-nj', 'lawrenceville-nj', 'ewing-nj', 'fairless-hills-pa'],
  },
  {
    slug: 'ewing-nj',
    name: 'Ewing',
    state: 'NJ',
    label: 'Ewing, NJ',
    county: 'Mercer County',
    miles: 10,
    zips: '08618, 08628, 08638',
    jurisdiction: 'Ewing Township',
    housing: 'Colonials and split-levels near The College of New Jersey, plus older homes toward West Trenton',
    intro:
      'Ewing is roughly ten miles from our Pennsylvania shop, just past Trenton. Township inspections are straightforward compared with the city, and many homes near TCNJ and West Trenton are mid-century stock ready for a kitchen or bath that matches how the house is used now.',
    localNote:
      'Some Ewing ZIPs look like Trenton on a map. We file with Ewing Township when the tax record says Ewing, even if the mail says Trenton. That avoids a rejected permit on day one.',
    nearbySlugs: ['trenton-nj', 'lawrenceville-nj', 'pennington-nj', 'hopewell-nj'],
  },
  {
    slug: 'lawrenceville-nj',
    name: 'Lawrenceville',
    state: 'NJ',
    label: 'Lawrenceville, NJ',
    county: 'Mercer County',
    miles: 12,
    zips: '08648',
    jurisdiction: 'Lawrence Township',
    housing: 'Village homes near Route 206 plus later township colonials and contemporaries toward Princeton',
    intro:
      'Lawrenceville is about twelve miles from Fairless Hills, along the Route 206 corridor between Trenton and Princeton. Village lots near the school and church row are a different job than a 1980s colonial off the Lawrence Hopewell Trail.',
    localNote:
      'Lawrence Township handles permits for the village and the later neighborhoods. We match millwork and window proportions on older houses and treat newer homes as layout-and-finish projects with fewer structural surprises.',
    nearbySlugs: ['princeton-nj', 'ewing-nj', 'pennington-nj', 'hamilton-nj'],
  },
  {
    slug: 'warminster-pa',
    name: 'Warminster',
    state: 'PA',
    label: 'Warminster, PA',
    county: 'Bucks County',
    miles: 15,
    zips: '18974',
    jurisdiction: 'Warminster Township',
    housing: 'Post-war ranches and split-levels near Street Road, Ivyland, and the former naval air station neighborhoods',
    intro:
      'Warminster is about fifteen miles from Fairless Hills, still inside a half-hour truck run. A lot of the housing went up after the war and has original kitchens, powder rooms, and partly finished basements that were never meant as daily living space.',
    localNote:
      'Township permits are centralized, which helps. The work itself is often opening a galley kitchen, adding a bath, or making a basement legal for a guest room — including egress and moisture, not just carpet and paint.',
    nearbySlugs: ['southampton-pa', 'doylestown-pa', 'newtown-pa', 'bensalem-pa'],
  },
  {
    slug: 'pennington-nj',
    name: 'Pennington',
    state: 'NJ',
    label: 'Pennington, NJ',
    county: 'Mercer County',
    miles: 14,
    zips: '08534',
    jurisdiction: 'Pennington Borough or Hopewell Township',
    housing: 'Borough Victorians and colonials, plus township lots with more room for additions',
    intro:
      'Pennington is about fourteen miles from our shop. The borough is compact; many 08534 addresses actually sit in Hopewell Township. We read the tax card before we talk addition setbacks or a detached garage conversion.',
    localNote:
      'Borough street parking is tight. Township lots give us more room for a dumpster and material staging. Kitchens here tend to keep painted millwork and better-grade counters rather than a total style reset.',
    nearbySlugs: ['hopewell-nj', 'lawrenceville-nj', 'ewing-nj', 'princeton-nj'],
  },
  {
    slug: 'new-hope-pa',
    name: 'New Hope',
    state: 'PA',
    label: 'New Hope, PA',
    county: 'Bucks County',
    miles: 16,
    zips: '18938',
    jurisdiction: 'New Hope Borough or Solebury Township',
    housing: 'Historic borough buildings and stone farmhouses plus later homes in Solebury',
    intro:
      'New Hope is sixteen miles up the Delaware from Fairless Hills, across from Lambertville. Borough work can involve historic context; Solebury jobs are often stone or frame houses with additions that have to sit well on the lot.',
    localNote:
      'We do not treat New Hope like a Falls Township ranch. Exterior changes, window replacements, and additions get extra review. Interiors still move: kitchens, baths, and better circulation without pretending the house is new construction.',
    nearbySlugs: ['lambertville-nj', 'yardley-pa', 'doylestown-pa', 'hopewell-nj'],
  },
  {
    slug: 'hopewell-nj',
    name: 'Hopewell',
    state: 'NJ',
    label: 'Hopewell, NJ',
    county: 'Mercer County',
    miles: 16,
    zips: '08525',
    jurisdiction: 'Hopewell Borough or Hopewell Township',
    housing: 'Small-borough homes plus township farmhouses and custom lots toward the Sourlands',
    intro:
      'Hopewell is about sixteen miles from Fairless Hills. The borough is walkable and small; the township covers a much larger area of lots, barns, and later houses. Permit path depends on which government collects the taxes.',
    localNote:
      'Township additions and kitchen expansions need setback and well/septic awareness on some lots. Borough jobs are tighter. We walk utilities and access before we lock a design.',
    nearbySlugs: ['pennington-nj', 'lambertville-nj', 'princeton-nj', 'new-hope-pa'],
  },
  {
    slug: 'lambertville-nj',
    name: 'Lambertville',
    state: 'NJ',
    label: 'Lambertville, NJ',
    county: 'Hunterdon County',
    miles: 16,
    zips: '08530',
    jurisdiction: 'City of Lambertville',
    housing: 'Nineteenth-century brick and frame homes on tight streets, plus a few later houses toward the township line',
    intro:
      'Lambertville is sixteen miles from Fairless Hills, directly across the river from New Hope. City lots are narrow, streets are busy on weekends, and many houses predate modern kitchens. We plan staging around that, not around a suburban driveway.',
    localNote:
      'Shared walls, steep stairs, and limited rear access show up on almost every walkthrough. Permits run through the city. We sequence work so a family can stay when the house only has one bath.',
    nearbySlugs: ['new-hope-pa', 'hopewell-nj', 'yardley-pa', 'pennington-nj'],
  },
  {
    slug: 'doylestown-pa',
    name: 'Doylestown',
    state: 'PA',
    label: 'Doylestown, PA',
    county: 'Bucks County',
    miles: 18,
    zips: '18901, 18902',
    jurisdiction: 'Doylestown Borough or Doylestown Township',
    housing: 'Borough Victorians and twins plus township colonials toward Buckingham and New Britain',
    intro:
      'Doylestown is the Bucks County seat, about eighteen miles from Fairless Hills — still inside the 25-mile working radius. Borough streets around the county buildings are a different job than a township colonial off 611 or Almshouse Road.',
    localNote:
      'Borough historic fabric can limit street-facing changes. Township kitchens and additions are more about matching roof pitch and siding. We file with the correct hall and keep material deliveries off downtown event days when we can.',
    nearbySlugs: ['newtown-pa', 'warminster-pa', 'new-hope-pa', 'southampton-pa'],
  },
  {
    slug: 'princeton-nj',
    name: 'Princeton',
    state: 'NJ',
    label: 'Princeton, NJ',
    county: 'Mercer County',
    miles: 20,
    zips: '08540, 08542',
    jurisdiction: 'Municipality of Princeton',
    housing: 'Historic center-borough homes, colonials, and later houses toward the township edges and Princeton Junction',
    intro:
      'Princeton is about twenty miles from Fairless Hills, at the far end of our 25-mile radius. We take kitchen, bath, and interior projects here when access and schedule make sense. Historic streets and later neighborhoods do not get the same spec.',
    localNote:
      'Center-of-town houses may need historic or contextual review for exterior work. We are clearer about that on the first visit than a generic “we do everything” pitch. Interiors, kitchens, and baths are the usual scope we run from Bucks County.',
    nearbySlugs: ['lawrenceville-nj', 'pennington-nj', 'hopewell-nj', 'hamilton-nj'],
  },
  {
    slug: 'philadelphia-pa',
    name: 'Philadelphia',
    state: 'PA',
    label: 'Philadelphia, PA',
    county: 'Philadelphia County',
    miles: 22,
    zips: 'Northeast neighborhoods within ~25 miles (19114, 19115, 19116, 19154 and nearby)',
    jurisdiction: 'City of Philadelphia Department of Licenses and Inspections',
    housing: 'Row homes and twins in the Far Northeast, plus later singles toward the Bucks line',
    intro:
      'From Fairless Hills we regularly reach Northeast Philadelphia — Torresdale, Parkwood, Bustleton, Somerton — about 20–25 miles from the shop. We do not pretend a Center City gut is the same drive or the same permit path as a Far Northeast kitchen.',
    localNote:
      'Philadelphia L&I is a different system than Bucks townships. We file city permits for city addresses and plan for row-home access, shared party walls, and parking. If your house is well outside the Northeast, ask first; we will say so if the trip is outside how we staff jobs.',
    nearbySlugs: ['bensalem-pa', 'levittown-pa', 'southampton-pa', 'bristol-pa'],
  },
]

/** Towns on the old 70-mile list that sit outside the 25-mile local set. */
export const REGIONAL_CITIES = [
  { label: 'Allentown, PA', miles: 45, state: 'PA' as const },
  { label: 'Bethlehem, PA', miles: 45, state: 'PA' as const },
  { label: 'Easton, PA', miles: 40, state: 'PA' as const },
] as const

const nearbyCleanup = (slugs: string[]) =>
  slugs.filter((slug) => LOCAL_CITIES.some((city) => city.slug === slug))

export const CITIES: readonly ServiceCity[] = LOCAL_CITIES.map((city) => ({
  ...city,
  nearbySlugs: nearbyCleanup(city.nearbySlugs),
}))

export const CITY_LABELS = CITIES.map((city) => city.label)

export function getCity(slug: string): ServiceCity | undefined {
  return CITIES.find((city) => city.slug === slug)
}

export function cityPath(slug: string): string {
  return `/service-areas/${slug}`
}

export function citiesByState(state: 'PA' | 'NJ'): ServiceCity[] {
  return CITIES.filter((city) => city.state === state)
}
