import { CITY_LABELS } from './locations'

export const BUSINESS = {
  name: 'AI Home Renovations',
  alternateName: 'AI Home Renovation',
  phone: '+1 (267) 243-6125',
  phoneFormatted: '(267) 243-6125',
  phoneRaw: process.env.NEXT_PUBLIC_PHONE_TRACKING || '2672436125',
  email: 'info@aihomerenovations.com',
  address: {
    street: '323 Austin Drive',
    city: 'Fairless Hills',
    state: 'PA',
    zip: '19030',
    full: '323 Austin Drive, Fairless Hills, PA 19030',
  },
  /** Fairless Hills, PA — for LocalBusiness geo + GEO citations */
  geo: {
    latitude: '40.1790',
    longitude: '-74.8550',
  },
  serviceRadius: 25, // miles — local ranking pages live under /service-areas/[city]
  baseLocation: 'Fairless Hills, PA',
  social: {
    facebook: 'https://www.facebook.com/AIHomeRenovations.PA/',
  },
} as const

/** Towns with dedicated local SEO pages (25-mile radius). */
export const SERVICE_AREAS = CITY_LABELS

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

