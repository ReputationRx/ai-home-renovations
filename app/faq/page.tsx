import FAQ from '@/components/FAQ'
import ImageStrip from '@/components/ImageStrip'
import { generateMetadata as genMeta } from '@/lib/seo'
import { PAGE_BANNER_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'FAQ | Home Renovation Questions Answered - Fairless Hills, PA',
  description: 'Frequently asked questions about home renovations in Fairless Hills, PA. Get answers about timelines, costs, permits, and more.',
  path: '/faq',
  keywords: ['FAQ', 'home renovation questions', 'renovation FAQ'],
})

export default function FAQPage() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="accent-red">Questions</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
            Common questions about home renovations in <span className="accent-red font-semibold">Fairless Hills, PA</span>
          </p>
          <ImageStrip images={[...PAGE_BANNER_IMAGES]} columnsClassName="grid-cols-3" className="mb-12 max-w-4xl mx-auto" />
        </div>
        <FAQ />
      </div>
    </section>
  )
}

