import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import ImageStrip from '@/components/ImageStrip'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Interior & Exterior Painting | Fairless Hills, PA',
  description:
    'Professional interior and exterior painting for home renovations in Fairless Hills, PA. Prep, trim, and durable finishes. Licensed & insured.',
  path: '/painting',
  keywords: ['house painting Fairless Hills', 'interior painting PA', 'exterior painting'],
})

export default function PaintingPage() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Painting &amp; Finishes
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Crisp lines, thorough prep, and coatings built to last—aligned with the same quality standards as our full renovation projects across{' '}
            <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{BUSINESS.baseLocation}</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SITE_IMAGES.painting.map((src, i) => (
            <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden premium-shadow">
              <Image src={src} alt={`Painting project ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What we paint</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Whole-home interior repainting</li>
                <li>Kitchen &amp; bath refresh packages</li>
                <li>Trim, ceilings, and accent walls</li>
                <li>Exterior siding &amp; trim (scope permitting)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why homeowners choose us</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Detailed surface prep and protection</li>
                <li>Premium primers and coatings</li>
                <li>Color coordination with your remodel</li>
                <li>Licensed, insured crews</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ImageStrip
          images={[SITE_IMAGES.homeGallery[4], SITE_IMAGES.accents[0], SITE_IMAGES.accents[1], SITE_IMAGES.kitchens[1]]}
          className="mb-16"
          columnsClassName="grid-cols-2 md:grid-cols-4"
          label="Painting and finish details"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link href="/contact-us" className="text-white">
              Request a quote
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {BUSINESS.phoneFormatted}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
