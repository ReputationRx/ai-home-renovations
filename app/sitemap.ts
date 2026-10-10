import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog/posts'
import { CITIES, cityPath } from '@/lib/locations'
import { absoluteUrl } from '@/lib/seo'
import {
  WORDPRESS_CANONICAL_PATHS,
  WORDPRESS_INDEXED_CATEGORY_SLUGS,
} from '@/lib/wordpress-migration'

const INDEXED_CATEGORY_PATHS = new Set(
  WORDPRESS_INDEXED_CATEGORY_SLUGS.map((slug) => `/category/${slug}`)
)

/** Paths aligned with https://aihomerenovations.com/sitemap_index.xml (pages, posts, categories, landing). */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = WORDPRESS_CANONICAL_PATHS.filter((path) => {
    if (blogPosts.some((post) => `/${post.slug}` === path)) return false
    if (path.startsWith('/category/') && !INDEXED_CATEGORY_PATHS.has(path)) return false
    return true
  })

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route === '/blog' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : ['/kitchens', '/bathrooms', '/basements', '/additions', '/gallery', '/contact-us', '/service-areas'].includes(route)
          ? 0.9
          : 0.8,
  }))

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityEntries: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: absoluteUrl(cityPath(city.slug)),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: city.miles === 0 ? 0.9 : 0.8,
  }))

  return [...staticEntries, ...cityEntries, ...postEntries]
}
