/**
 * WordPress → Next.js SEO migration (aihomerenovations.com).
 * Canonical paths match Rank Math sitemap + WP REST API (2024-06).
 */

/** Category archives indexed on the live WordPress site. */
export const WORDPRESS_CATEGORY_SLUGS = [
  'uncategorized',
  'kitchens',
  'interiors',
  'additions',
  'basements',
  'bathrooms',
  'painting',
] as const

export type WordPressCategorySlug = (typeof WORDPRESS_CATEGORY_SLUGS)[number]

export const WORDPRESS_CATEGORY_LABELS: Record<WordPressCategorySlug, string> = {
  uncategorized: 'Uncategorized',
  kitchens: 'Kitchens',
  interiors: 'Interiors',
  additions: 'Additions',
  basements: 'Basements',
  bathrooms: 'Bathrooms',
  painting: 'Painting',
}

/**
 * Rank Math category-sitemap.xml only lists archives that have posts.
 * Empty terms still return 200 (keep generating pages) but must not be sitemap'd.
 */
export const WORDPRESS_INDEXED_CATEGORY_SLUGS = [
  'uncategorized',
  'kitchens',
  'interiors',
] as const satisfies readonly WordPressCategorySlug[]

export type WordPressIndexedCategorySlug = (typeof WORDPRESS_INDEXED_CATEGORY_SLUGS)[number]

/** Every path that should return 200 on the Next.js site (no leading slash on ''). */
export const WORDPRESS_CANONICAL_PATHS = [
  '',
  '/gallery',
  '/painting',
  '/contact-us',
  '/privacy-policy',
  '/interiors',
  '/additions',
  '/basements',
  '/bathrooms',
  '/kitchens',
  '/blog',
  '/coming-soon',
  '/elementor-landing-page-825',
  '/service-areas',
  ...WORDPRESS_CATEGORY_SLUGS.map((s) => `/category/${s}`),
  '/how-to-choose-a-paint-color-for-your-walls-when-remodeling',
  '/the-hesitant-homeowner-what-makes-us-delay-remodeling',
  '/a-stunning-classic-shaker-kitchen-in-halesowen',
  '/common-problems-you-might-encounter-when-remodeling',
] as const

/**
 * 301 redirects for legacy / alternate URLs (sources without trailing slash;
 * Next adds slash when trailingSlash is true).
 *
 * Order matters: Next applies the first matching rule. Specific `/blog/…`
 * aliases must come before the `/blog/:slug` catch-all.
 */
export const WORDPRESS_REDIRECTS: Array<{
  source: string
  destination: string
  permanent: boolean
}> = [
  // README / early Next routes → live WordPress URLs
  { source: '/services', destination: '/', permanent: true },
  { source: '/services/kitchens', destination: '/kitchens', permanent: true },
  { source: '/services/bathrooms', destination: '/bathrooms', permanent: true },
  { source: '/services/basements', destination: '/basements', permanent: true },
  { source: '/services/additions', destination: '/additions', permanent: true },
  { source: '/services/painting', destination: '/painting', permanent: true },
  { source: '/services/interiors', destination: '/interiors', permanent: true },
  // Extra Next-only pages → closest live equivalent
  { source: '/free-consultation', destination: '/contact-us', permanent: true },
  { source: '/free-estimate', destination: '/contact-us', permanent: true },
  { source: '/about', destination: '/', permanent: true },
  { source: '/faq', destination: '/', permanent: true },
  // Shortened blog paths (must precede /blog/:slug)
  {
    source: '/blog/how-to-choose-paint-color-walls-remodeling',
    destination: '/how-to-choose-a-paint-color-for-your-walls-when-remodeling',
    permanent: true,
  },
  {
    source: '/blog/hesitant-homeowner-delay-remodeling',
    destination: '/the-hesitant-homeowner-what-makes-us-delay-remodeling',
    permanent: true,
  },
  {
    source: '/blog/stunning-classic-shaker-kitchen-halesowen',
    destination: '/a-stunning-classic-shaker-kitchen-in-halesowen',
    permanent: true,
  },
  {
    source: '/blog/common-problems-encounter-remodeling',
    destination: '/common-problems-you-might-encounter-when-remodeling',
    permanent: true,
  },
  // WordPress sometimes linked posts under /blog/…; live site serves at root
  { source: '/blog/:slug', destination: '/:slug', permanent: true },
  // WordPress author & feed archives (indexed, low value — point to blog)
  { source: '/author/admin-dev', destination: '/blog', permanent: true },
  { source: '/author/:path*', destination: '/blog', permanent: true },
  { source: '/feed', destination: '/blog', permanent: true },
  { source: '/comments/feed', destination: '/blog', permanent: true },
  // Block admin surface on the new host
  { source: '/wp-admin', destination: '/', permanent: true },
  { source: '/wp-admin/:path*', destination: '/', permanent: true },
  { source: '/wp-login.php', destination: '/', permanent: true },
]
