/** CDN URLs from aihomerenovations.com (sitemap + homepage). */

export const SITE_ORIGIN = 'https://aihomerenovations.com'

export const SITE_IMAGES = {
  logo: `${SITE_ORIGIN}/wp-content/uploads/2024/03/cropped-Logo-02-scaled-1.jpg`,
  hero: `${SITE_ORIGIN}/wp-content/uploads/2024/05/pexels-alex-tyson-919593032-19980203-scaled.jpg`,
  kitchens: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/service-01.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/service-03.jpg`,
  ],
  bathrooms: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/modern-bathroom-with-big-mirror_1203-1497.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/small-bathroom-with-modern-style-ai-generated_23-2150694914.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/3d-rendering-modern-design-marble-tile-toilet-bathroom_105762-355.avif`,
  ],
  basements: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/hybrid-work-models-blending-office-remote-setu_1022456-161862.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/empty-hallway-background_23-2149408825.jpg`,
  ],
  additions: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/beautiful-kitchen-interior-design_23-2150976539.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/professional-photo-kitchen-undergoing-major-renovation_170984-28534.avif`,
  ],
  painting: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/6.png`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/4-1024x704.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/2-1024x704.jpg`,
  ],
  interiors: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg`,
  ],
  landing: `${SITE_ORIGIN}/wp-content/uploads/2024/06/3.jpg`,
  homeGallery: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/pexels-alex-tyson-919593032-19980203-scaled.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/pexels-alex-tyson-919593032-19980207-scaled.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/industrialstyle-basement-with-exposed-ductwork-oct_1022456-172001.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/1-1024x704.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/3.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/2.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/03/h8-images-05-1.png`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/04/house-for-sale-ogontz-renovated-row-kitchen-brightmls.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/04/IMG_1523-scaled.jpeg`,
  ],
  /** Extra décor assets for landing sections, testimonials, and misc. pages */
  accents: [
    `${SITE_ORIGIN}/wp-content/uploads/2024/05/pexels-alex-tyson-919593032-19980207-scaled.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/06/1-1024x704.jpg`,
    `${SITE_ORIGIN}/wp-content/uploads/2024/03/h8-images-05-1.png`,
  ],
} as const

export type HeroCarouselSlide = {
  image: string
  alt: string
  badge: string
  accent: string
  /** Optional intro line; falls back to default hero copy when omitted */
  lead?: string
}

/** Hero carousel — pairs imagery with rotating headline accents (CDN URLs). */
export const HERO_CAROUSEL_SLIDES: readonly HeroCarouselSlide[] = [
  {
    image: SITE_IMAGES.hero,
    alt: 'Luxury home renovation project',
    badge: 'Premium Home Renovations',
    accent: 'Dream Home',
  },
  {
    image: SITE_IMAGES.kitchens[0],
    alt: 'Custom kitchen remodel with quality cabinetry',
    badge: 'Kitchen Remodeling',
    accent: 'Chef-Worthy Kitchens',
  },
  {
    image: SITE_IMAGES.bathrooms[0],
    alt: 'Modern bathroom renovation with bright finishes',
    badge: 'Bath & Spa',
    accent: 'Spa-Like Baths',
  },
  {
    image: SITE_IMAGES.interiors[0],
    alt: 'Open living space and interior design',
    badge: 'Interiors & Living',
    accent: 'Beautiful Living',
  },
  {
    image: SITE_IMAGES.basements[0],
    alt: 'Finished basement living and recreation space',
    badge: 'Finished Basements',
    accent: 'More Living Space',
  },
]

/** Gallery URLs per core service — used on service detail pages. */
export function getServiceGallery(slug: string): string[] {
  const g = SITE_IMAGES.homeGallery
  switch (slug) {
    case 'kitchens':
      return [
        SITE_IMAGES.kitchens[0],
        SITE_IMAGES.kitchens[1],
        g[7],
        g[3],
        g[4],
        g[8],
      ]
    case 'bathrooms':
      return [
        SITE_IMAGES.bathrooms[0],
        SITE_IMAGES.bathrooms[1],
        SITE_IMAGES.bathrooms[2],
        g[5],
        g[4],
        g[6],
      ]
    case 'basements':
      return [
        SITE_IMAGES.basements[0],
        SITE_IMAGES.basements[1],
        g[2],
        g[1],
        g[0],
        SITE_IMAGES.hero,
      ]
    case 'additions':
      return [
        SITE_IMAGES.additions[0],
        SITE_IMAGES.additions[1],
        SITE_IMAGES.kitchens[0],
        g[7],
        g[8],
        SITE_IMAGES.interiors[0],
      ]
    default:
      return g.slice(0, 6)
  }
}

export const SERVICE_CARD_IMAGES: Record<'kitchens' | 'bathrooms' | 'basements' | 'additions', string> = {
  kitchens: SITE_IMAGES.kitchens[0],
  bathrooms: SITE_IMAGES.bathrooms[0],
  basements: SITE_IMAGES.basements[0],
  additions: SITE_IMAGES.additions[0],
}

/** Secondary grid on home — painting, interiors, exterior-adjacent, windows feel */
export const MORE_SERVICES_IMAGES = [
  SITE_IMAGES.painting[1],
  SITE_IMAGES.interiors[0],
  SITE_IMAGES.homeGallery[2],
  SITE_IMAGES.homeGallery[5],
] as const

export const PROCESS_SHOWCASE_IMAGES = [
  SITE_IMAGES.homeGallery[0],
  SITE_IMAGES.homeGallery[3],
  SITE_IMAGES.homeGallery[4],
  SITE_IMAGES.homeGallery[7],
  SITE_IMAGES.homeGallery[8],
] as const

export const TESTIMONIAL_PROJECT_IMAGES = [
  SITE_IMAGES.kitchens[1],
  SITE_IMAGES.additions[0],
  SITE_IMAGES.basements[0],
] as const

export const PAGE_BANNER_IMAGES = [
  SITE_IMAGES.hero,
  SITE_IMAGES.homeGallery[2],
  SITE_IMAGES.interiors[1],
] as const

export type GalleryItem = {
  category: string
  title: string
  image: string
  description: string
}

/** Portfolio grid — matches imagery used on the live site (sitemap + service pages). */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    category: 'Kitchen',
    title: 'Kitchen remodel showcase',
    image: SITE_IMAGES.kitchens[0],
    description: 'Custom kitchen design and premium finishes.',
  },
  {
    category: 'Kitchen',
    title: 'Modern kitchen renovation',
    image: SITE_IMAGES.kitchens[1],
    description: 'Contemporary layout with quality cabinetry.',
  },
  {
    category: 'Bathroom',
    title: 'Modern bathroom design',
    image: SITE_IMAGES.bathrooms[0],
    description: 'Bright, functional bathroom with premium fixtures.',
  },
  {
    category: 'Bathroom',
    title: 'Spa-inspired bathroom',
    image: SITE_IMAGES.bathrooms[1],
    description: 'Comfortable small-space luxury.',
  },
  {
    category: 'Bathroom',
    title: 'Marble tile bathroom',
    image: SITE_IMAGES.bathrooms[2],
    description: 'Elegant surfaces and modern layout.',
  },
  {
    category: 'Basement',
    title: 'Finished basement living',
    image: SITE_IMAGES.basements[0],
    description: 'Versatile finished lower level.',
  },
  {
    category: 'Basement',
    title: 'Basement hallway & trim',
    image: SITE_IMAGES.basements[1],
    description: 'Clean finishes and lighting.',
  },
  {
    category: 'Addition',
    title: 'Kitchen addition & interior',
    image: SITE_IMAGES.additions[0],
    description: 'Expanded living and cooking space.',
  },
  {
    category: 'Addition',
    title: 'Major renovation in progress',
    image: SITE_IMAGES.additions[1],
    description: 'Professional execution from demo to finish.',
  },
  {
    category: 'Interior',
    title: 'Living space rendering',
    image: SITE_IMAGES.interiors[0],
    description: 'Cohesive flow between living areas.',
  },
  {
    category: 'Interior',
    title: 'Luxury suite interior',
    image: SITE_IMAGES.interiors[1],
    description: 'Resort-inspired bedroom suite planning.',
  },
  {
    category: 'Painting',
    title: 'Interior painting project',
    image: SITE_IMAGES.painting[1],
    description: 'Crisp finishes and professional prep.',
  },
  {
    category: 'Showcase',
    title: 'Industrial basement style',
    image: SITE_IMAGES.homeGallery[2],
    description: 'Modern basement with exposed utilities.',
  },
  {
    category: 'Showcase',
    title: 'Renovated row kitchen',
    image: SITE_IMAGES.homeGallery[7],
    description: 'Bright, updated kitchen space.',
  },
  {
    category: 'Showcase',
    title: 'Open-concept living',
    image: SITE_IMAGES.homeGallery[3],
    description: 'Bright gathering spaces for everyday living.',
  },
  {
    category: 'Showcase',
    title: 'Renovation detail',
    image: SITE_IMAGES.homeGallery[4],
    description: 'Quality craftsmanship across finishes.',
  },
  {
    category: 'Showcase',
    title: 'Residential exterior refresh',
    image: SITE_IMAGES.homeGallery[8],
    description: 'Curb appeal and structural upgrades.',
  },
  {
    category: 'Kitchen',
    title: 'Kitchen workspace',
    image: SITE_IMAGES.homeGallery[5],
    description: 'Functional layout with durable surfaces.',
  },
  {
    category: 'Interior',
    title: 'Design visualization',
    image: SITE_IMAGES.accents[2],
    description: 'Planning your interior transformation.',
  },
  {
    category: 'Basement',
    title: 'Lower-level detail',
    image: SITE_IMAGES.homeGallery[1],
    description: 'Bright, usable basement spaces.',
  },
  {
    category: 'Painting',
    title: 'Fresh coat showcase',
    image: SITE_IMAGES.painting[2],
    description: 'Smooth finishes and trim work.',
  },
]
