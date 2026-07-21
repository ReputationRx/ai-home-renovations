import { notFound } from 'next/navigation'
import { blogPosts, blogPostSlugs } from '@/lib/blog/posts'
import { generateMetadata as genMeta } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export const dynamicParams = false

export async function generateStaticParams() {
  return blogPostSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

  return genMeta({
    title: post.title,
    description: post.description,
    path: `/${post.slug}`,
    keywords: post.tags,
  })
}

export default async function BlogPostArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => {
        if (line.startsWith('# ')) {
          return `<h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4">${line.substring(2)}</h1>`
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-6 mb-3">${line.substring(3)}</h2>`
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">${line.substring(4)}</h3>`
        }
        if (line.startsWith('- **') || line.startsWith('* **')) {
          const match = line.match(/\*\*(.*?)\*\*: (.*)/)
          if (match) {
            return `<li class="mb-2"><strong class="text-gray-900 dark:text-white">${match[1]}</strong>: <span class="text-gray-700 dark:text-gray-300">${match[2]}</span></li>`
          }
        }
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return `<li class="mb-2 text-gray-700 dark:text-gray-300">${line.substring(2)}</li>`
        }
        if (line.trim() === '') {
          return '<br />'
        }
        if (line.trim().length > 0) {
          return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${line}</p>`
        }
        return ''
      })
      .join('\n')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-white dark:from-[#0f172a] dark:to-[#0f172a]">
      <article className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[--accent-600] dark:text-[--accent-400] font-semibold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {post.image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 premium-shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-950/50 text-[#DC2626] dark:text-[#DC2626]">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {post.description}
            </p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#0f172a] text-gray-700 dark:text-gray-300"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-12">
            <div className="bg-gradient-to-r from-[#334e68] to-[#102a43] rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your <span className="text-[--accent-400]">Renovation</span>?
              </h2>
              <p className="text-lg mb-6 text-gray-100">
                Contact AI Home Renovations for expert guidance and professional craftsmanship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold premium-shadow hover:premium-shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Call {BUSINESS.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/${relatedPost.slug}`}
                    className="block bg-white dark:bg-[#0f172a] rounded-xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                  >
                    {relatedPost.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[--accent-600] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
