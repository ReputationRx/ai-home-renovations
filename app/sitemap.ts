import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog/posts'
import { WORDPRESS_CANONICAL_PATHS } from '@/lib/wordpress-migration'

/** Paths aligned with https://aihomerenovations.com/sitemap_index.xml (pages, posts, categories, landing). */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aihomerenovations.com'

  const staticRoutes = WORDPRESS_CANONICAL_PATHS.filter(
    (p) => !blogPosts.some((post) => `/${post.slug}` === p)
  )

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route === '/blog' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : ['/kitchens', '/bathrooms', '/basements', '/additions', '/gallery', '/contact-us'].includes(route)
          ? 0.9
          : 0.8,
  }))

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...postEntries]
}
