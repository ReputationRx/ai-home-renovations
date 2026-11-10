import Link from 'next/link'
import ImageStrip from '@/components/ImageStrip'
import { MapPin } from 'lucide-react'
import { BUSINESS, INTERIOR_RENOVATIONS_AREA_PATH, SERVICE_AREAS } from '@/lib/constants'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SITE_IMAGES } from '@/lib/site-assets'

const INTERIOR_LEAD =
  'Living rooms, bedrooms, suites, and open-plan layouts—planned for how you actually live. We coordinate finishes, lighting, and trades so your interior remodel feels intentional from day one.'

export const metadata = genMeta({
  title: 'Interior Renovations in Our Service Areas',
  description:
    'Interior renovations for every city we publish, from Fairless Hills, PA 19030 through nearby Pennsylvania and New Jersey communities.',
  path: INTERIOR_RENOVATIONS_AREA_PATH,
  keywords: ['interior renovations', 'interior remodeling', 'home interiors Fairless Hills', 'living space design'],
})

function cityAnchor(city: string) {
  return city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')
}

export default function InteriorRenovationsServiceAreasPage() {
  const paCities = SERVICE_AREAS.filter((city) => city.includes('PA'))
  const njCities = SERVICE_AREAS.filter((city) => city.includes('NJ'))
  const shopCity = `${BUSINESS.address.city}, ${BUSINESS.address.state}`

  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Interior Renovations in Every <span className="accent-red">Community</span> We Serve
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{INTERIOR_LEAD}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Based at <span className="accent-red font-semibold">{BUSINESS.address.full}</span>, we plan interior
            renovations for homeowners in each community below. Shop ZIP{' '}
            <span className="accent-red font-semibold">{BUSINESS.address.zip}</span>.
          </p>
          <ImageStrip
            images={[SITE_IMAGES.interiors[0], SITE_IMAGES.interiors[1], SITE_IMAGES.homeGallery[3], SITE_IMAGES.accents[2]]}
            className="mt-12 max-w-5xl mx-auto"
            columnsClassName="grid-cols-2 md:grid-cols-4"
            label="Interior remodeling inspiration"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 accent-red" />
              <span className="accent-red">Pennsylvania</span> Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paCities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="h-2 w-2 accent-red bg-[#DC2626] rounded-full" />
                  <Link
                    href={`${INTERIOR_RENOVATIONS_AREA_PATH}#${cityAnchor(city)}`}
                    className="text-gray-900 dark:text-gray-200 hover:accent-red hover:underline"
                  >
                    {city}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 accent-red" />
              <span className="accent-red">New Jersey</span> Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {njCities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="h-2 w-2 accent-red bg-[#DC2626] rounded-full" />
                  <Link
                    href={`${INTERIOR_RENOVATIONS_AREA_PATH}#${cityAnchor(city)}`}
                    className="text-gray-900 dark:text-gray-200 hover:accent-red hover:underline"
                  >
                    {city}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#0f172a] rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Shop <span className="accent-red">ZIP</span> Code
          </h2>
          <p className="text-center text-gray-900 dark:text-gray-200">
            <span className="accent-red font-semibold">{BUSINESS.address.zip}</span> — {shopCity}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICE_AREAS.map((city) => {
            const citySlug = cityAnchor(city)
            return (
              <div key={city} id={citySlug} className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-lg p-6 scroll-mt-24">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interior Renovations in {city}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Living rooms, bedrooms, suites, and open-plan layouts—planned for how you actually live in{' '}
                  <span className="accent-red font-semibold">{city}</span>. We coordinate finishes, lighting, and trades so the interior remodel feels intentional from day one.
                  {city === shopCity ? (
                    <>
                      {' '}
                      ZIP <span className="accent-red font-semibold">{BUSINESS.address.zip}</span>.
                    </>
                  ) : null}
                </p>
                <Link href="/contact-us" className="accent-red hover:opacity-80 font-medium">
                  Get Free Estimate →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center bg-[#f0f4f8] dark:bg-[#0f172a] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Plan an <span className="accent-red">Interior</span> Remodel
          </h2>
          <p className="text-gray-900 dark:text-gray-200 mb-6">
            See the interiors overview, or contact us about a living room, bedroom, suite, or open-plan layout in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interiors"
              className="inline-block border-2 border-[#DC2626] text-[#DC2626] px-6 py-3 rounded-lg font-medium hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            >
              Interiors overview
            </Link>
            <Link
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-[#334e68] to-[#102a43] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
