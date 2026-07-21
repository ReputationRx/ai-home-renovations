import Link from 'next/link'
import Image from 'next/image'
import ImageStrip from '@/components/ImageStrip'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog/posts'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { PAGE_BANNER_IMAGES } from '@/lib/site-assets'
import {
  WORDPRESS_CATEGORY_LABELS,
  WORDPRESS_CATEGORY_SLUGS,
  type WordPressCategorySlug,
} from '@/lib/wordpress-migration'

export async function generateStaticParams() {
  return WORDPRESS_CATEGORY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!WORDPRESS_CATEGORY_SLUGS.includes(slug as WordPressCategorySlug)) return {}

  const label = WORDPRESS_CATEGORY_LABELS[slug as WordPressCategorySlug]

  return genMeta({
    title: `${label} — Blog`,
    description: `Articles in ${label} from AI Home Renovations.`,
    path: `/category/${slug}`,
    keywords: ['home renovation blog'],
  })
}

export default async function CategoryArchivePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!WORDPRESS_CATEGORY_SLUGS.includes(slug as WordPressCategorySlug)) {
    notFound()
  }

  const posts = blogPosts.filter((p) => p.wpCategorySlug === slug)

  const heading = WORDPRESS_CATEGORY_LABELS[slug as WordPressCategorySlug]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-white dark:from-[#0f172a] dark:to-[#0f172a] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{heading}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Posts filed under this topic.{' '}
          <Link href="/blog" className="text-[#DC2626] dark:text-[#DC2626] font-semibold underline-offset-4 hover:underline">
            View all articles
          </Link>
        </p>

        <ImageStrip images={[...PAGE_BANNER_IMAGES]} className="mb-12 max-w-5xl" columnsClassName="grid-cols-3" />

        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No posts in this category yet.</p>
        ) : (
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug} className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden premium-shadow">
                {post.image && (
                  <Link href={`/${post.slug}`} className="relative sm:w-72 shrink-0 aspect-video sm:aspect-auto sm:min-h-[200px]">
                    <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 288px" />
                  </Link>
                )}
                <div className="p-6 flex flex-col justify-center">
                  <Link href={`/${post.slug}`} className="text-2xl font-bold text-gray-900 dark:text-white hover:text-[#DC2626] dark:hover:text-[#DC2626] mb-2">
                    {post.title}
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                  <Link href={`/${post.slug}`} className="text-[#DC2626] dark:text-[#DC2626] font-semibold">
                    Read more →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
