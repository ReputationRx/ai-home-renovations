import Image from 'next/image'
import Link from 'next/link'
import ImageStrip from '@/components/ImageStrip'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Special Offer | AI Home Renovations',
  description: `Limited availability for premium renovations in ${BUSINESS.baseLocation}. Request your consultation today.`,
  path: '/elementor-landing-page-825',
  keywords: ['home renovation Fairless Hills', 'remodeling consultation'],
})

export default function ElementorLandingPage() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={SITE_IMAGES.landing} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#102a43]/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Renovate With Confidence</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10">
            Book a consultation with {BUSINESS.name}—licensed, insured, and serving homeowners throughout {BUSINESS.baseLocation} and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact-us">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                {BUSINESS.phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 bg-white py-14 dark:border-gray-700 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ImageStrip
            images={[SITE_IMAGES.kitchens[0], SITE_IMAGES.bathrooms[0], SITE_IMAGES.basements[0], SITE_IMAGES.additions[0]]}
            columnsClassName="grid-cols-2 md:grid-cols-4"
            label="Recent project styles"
          />
        </div>
      </section>
    </>
  )
}
