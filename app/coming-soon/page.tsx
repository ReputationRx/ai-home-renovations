import Link from 'next/link'
import Image from 'next/image'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Coming Soon',
  description: 'AI Home Renovations — new content launching soon.',
  path: '/coming-soon',
  keywords: ['AI Home Renovations'],
})

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <Image src={SITE_IMAGES.hero} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-[#0f172a]/75 dark:bg-black/80" />
      </div>
      <div className="relative z-10 text-center max-w-lg rounded-2xl bg-white/95 dark:bg-[#0f172a]/95 px-8 py-12 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          We are updating this section. For renovation questions or estimates, please reach out anytime.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#334e68] to-[#102a43] text-white rounded-xl font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
