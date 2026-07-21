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
  title: 'Interior Remodeling & Design | Fairless Hills, PA',
  description:
    'Interior remodeling, layout improvements, and cohesive design for homes in Fairless Hills, PA and nearby communities.',
  path: '/interiors',
  keywords: ['interior remodeling', 'home interiors Fairless Hills', 'living space design'],
})

export default function InteriorsPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f0f4f8] to-white dark:from-[#0f172a] dark:to-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Interiors That Flow
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Living rooms, bedrooms, suites, and open-plan layouts—planned for how you actually live. We coordinate finishes, lighting, and trades so your interior remodel feels intentional from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact-us" className="text-white">
                  Schedule a consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phoneFormatted}
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {SITE_IMAGES.interiors.map((src, i) => (
              <div key={src} className="relative aspect-[16/10] rounded-2xl overflow-hidden premium-shadow">
                <Image src={src} alt={`Interior design ${i + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {['Space planning', 'Finish & fixture selection', 'Lighting design', 'Trim & millwork', 'Flooring transitions', 'Built-ins & storage'].map((item) => (
            <Card key={item}>
              <CardContent className="p-6">
                <p className="font-semibold text-gray-900 dark:text-white">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <ImageStrip
          images={[SITE_IMAGES.homeGallery[3], SITE_IMAGES.homeGallery[5], SITE_IMAGES.accents[2], SITE_IMAGES.painting[0]]}
          columnsClassName="grid-cols-2 md:grid-cols-4"
          label="Interior remodeling inspiration"
        />
      </div>
    </section>
  )
}
