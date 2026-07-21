export const BUSINESS = {
  name: 'AI Home Renovations',
  phone: '+1 (267) 243-6125',
  phoneFormatted: '(267) 243-6125',
  phoneRaw: '2672436125',
  email: 'info@aihomerenovations.com',
  address: {
    street: '323 Austin Drive',
    city: 'Fairless Hills',
    state: 'PA',
    zip: '19030',
    full: '323 Austin Drive, Fairless Hills, PA 19030',
  },
  serviceRadius: 70, // miles
  baseLocation: 'Fairless Hills, PA',
} as const

export const SERVICE_AREAS = [
  // Pennsylvania
  'Fairless Hills, PA',
  'Bristol, PA',
  'Levittown, PA',
  'Morrisville, PA',
  'Yardley, PA',
  'Newtown, PA',
  'Langhorne, PA',
  'Bensalem, PA',
  'Doylestown, PA',
  'Warminster, PA',
  'Southampton, PA',
  'Philadelphia, PA',
  'Allentown, PA',
  'Bethlehem, PA',
  'Easton, PA',
  // New Jersey
  'Trenton, NJ',
  'Princeton, NJ',
  'Lawrenceville, NJ',
  'Hamilton, NJ',
  'Ewing, NJ',
  'Pennington, NJ',
  'Hopewell, NJ',
  'Lambertville, NJ',
  'New Hope, PA',
] as const

export const SERVICES = {
  kitchens: {
    slug: 'kitchens',
    title: 'Kitchen Remodeling',
    shortTitle: 'Kitchens',
    description: 'Transform your kitchen into the heart of your home with our expert remodeling services.',
    offer: 'Free design consultation and layout review with full kitchen remodel',
  },
  bathrooms: {
    slug: 'bathrooms',
    title: 'Bathroom Renovation',
    shortTitle: 'Bathrooms',
    description: 'Create your dream bathroom with luxury fixtures and modern design.',
    offer: 'Complimentary fixture consultation with full bathroom remodel',
  },
  basements: {
    slug: 'basements',
    title: 'Basement Finishing',
    shortTitle: 'Basements',
    description: 'Turn your unfinished basement into valuable living space.',
    offer: 'Free moisture and feasibility check with full basement project',
  },
  additions: {
    slug: 'additions',
    title: 'Home Additions',
    shortTitle: 'Additions',
    description: 'Expand your home with seamless additions that match your existing style.',
    offer: 'No-obligation feasibility planning session for home additions',
  },
} as const

