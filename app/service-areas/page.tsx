import Link from 'next/link'
import ImageStrip from '@/components/ImageStrip'
import { MapPin } from 'lucide-react'
import { SERVICE_AREAS, BUSINESS } from '@/lib/constants'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Service Areas | Home Renovation in Fairless Hills, PA & Surrounding Areas',
  description: `We serve homeowners throughout ${BUSINESS.baseLocation} and within ${BUSINESS.serviceRadius} miles. Kitchen remodeling, bathroom renovation, and more in PA & NJ.`,
  path: '/service-areas',
  keywords: ['service areas', 'home renovation areas', 'Fairless Hills remodeling'],
})

export default function ServiceAreasPage() {
  const paCities = SERVICE_AREAS.filter(city => city.includes('PA'))
  const njCities = SERVICE_AREAS.filter(city => city.includes('NJ'))

  const serviceTypes = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Additions',
    'Interior Renovations',
  ]

  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="accent-red">Service Areas</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Based in <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span>, we proudly serve homeowners within approximately <span className="accent-red font-semibold">{BUSINESS.serviceRadius} miles</span>{' '}
            throughout <span className="accent-red font-semibold">Pennsylvania</span> and <span className="accent-red font-semibold">New Jersey</span>. Quality home renovation services you can trust.
          </p>
          <ImageStrip
            images={[SITE_IMAGES.hero, SITE_IMAGES.homeGallery[7], SITE_IMAGES.interiors[0], SITE_IMAGES.homeGallery[2]]}
            className="mt-12 max-w-5xl mx-auto"
            columnsClassName="grid-cols-2 md:grid-cols-4"
            label="Projects across our service region"
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
                    href={`/service-areas#${city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')}`}
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
                    href={`/service-areas#${city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')}`}
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
            <span className="accent-red">Services</span> We Offer in These Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {serviceTypes.map((service) => (
              <div key={service} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 accent-red bg-[#DC2626] rounded-full" />
                <span className="text-gray-900 dark:text-gray-200">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICE_AREAS.slice(0, 6).map((city) => {
            const citySlug = city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')
            return (
              <div key={city} id={citySlug} className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{city}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Professional home renovation services in <span className="accent-red font-semibold">{city}</span>. We specialize in <span className="accent-red font-semibold">kitchen remodeling</span>, 
                  <span className="accent-red font-semibold">bathroom renovation</span>, <span className="accent-red font-semibold">basement finishing</span>, and <span className="accent-red font-semibold">home additions</span>.
                </p>
                <Link
                  href="/contact-us"
                  className="accent-red hover:opacity-80 font-medium"
                >
                  Get Free Estimate →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center bg-[#f0f4f8] dark:bg-[#0f172a] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Don't See Your <span className="accent-red">City</span> Listed?
          </h2>
          <p className="text-gray-900 dark:text-gray-200 mb-6">
            We may still serve your area! <span className="accent-red font-semibold">Contact us</span> to find out if we can help with your home renovation project.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-gradient-to-r from-[#334e68] to-[#102a43] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

