import { generateMetadata as genMeta } from '@/lib/seo'
import { blogPosts } from '@/lib/blog/posts'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import ImageStrip from '@/components/ImageStrip'
import { PAGE_BANNER_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Home Renovation Blog | Tips, Trends & Expert Advice',
  description: 'Expert home renovation tips, design trends, and remodeling advice from AI Home Renovations. Learn about kitchen remodels, bathroom renovations, and more.',
  path: '/blog',
  keywords: ['home renovation blog', 'remodeling tips', 'renovation advice', 'home improvement blog'],
})

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-white dark:from-[#0f172a] dark:to-[#0f172a]">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Our <span className="accent-red">Renovation Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert tips, design trends, and renovation advice to help you make informed decisions about your home improvement projects
            </p>
            <ImageStrip images={[...PAGE_BANNER_IMAGES]} className="mt-12 max-w-5xl mx-auto" columnsClassName="grid-cols-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                {post.image && (
                  <Link href={`/${post.slug}`} className="block relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-950/50 text-[#DC2626] dark:text-[#DC2626]">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[--accent-600] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[--accent-600] dark:text-[--accent-400] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#334e68] to-[#102a43] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-[--accent-400]">Renovation Project</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Get expert guidance and professional craftsmanship for your home renovation in {BUSINESS.baseLocation}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold premium-shadow hover:premium-shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Free Estimate
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
      </section>
    </div>
  )
}
