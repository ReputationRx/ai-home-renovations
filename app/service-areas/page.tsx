import Link from 'next/link'
import { MapPin } from 'lucide-react'
import ImageStrip from '@/components/ImageStrip'
import { BreadcrumbSchema } from '@/components/Schema'
import { BUSINESS } from '@/lib/constants'
import { CITIES, REGIONAL_CITIES, citiesByState, cityPath } from '@/lib/locations'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SITE_IMAGES } from '@/lib/site-assets'
import { navLinkClass } from '@/lib/site-nav'

export const metadata = genMeta({
  title: 'Service Areas Within 25 Miles of Fairless Hills, PA',
  description: `Local renovation pages for towns within 25 miles of Fairless Hills, PA. Kitchen, bath, basement, and addition work across Bucks County, PA and nearby Mercer County, NJ.`,
  path: '/service-areas',
  keywords: ['service areas Fairless Hills', 'Bucks County remodeling', 'home renovation near me PA NJ'],
})

export default function ServiceAreasPage() {
  const paCities = citiesByState('PA')
  const njCities = citiesByState('NJ')

  return (
    <section className="bg-white py-16 dark:bg-[#0f172a] md:py-24">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-white">Service Areas</span>
        </nav>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Local renovation pages within <span className="text-[#DC2626]">25 miles</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            We are based at {BUSINESS.address.full}. Each town below has its own page — permits, housing stock, and
            drive distance from Fairless Hills — so you are not reading a copied homepage with the city name swapped.
          </p>
        </div>

        <ImageStrip
          images={[SITE_IMAGES.hero, SITE_IMAGES.homeGallery[7], SITE_IMAGES.interiors[0], SITE_IMAGES.homeGallery[2]]}
          className="mx-auto mb-16 max-w-5xl"
          columnsClassName="grid-cols-2 md:grid-cols-4"
          label="Projects across our 25-mile service radius"
        />

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
              <MapPin className="h-8 w-8 text-[#DC2626]" />
              Pennsylvania
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {paCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={cityPath(city.slug)}
                    className="flex min-h-[52px] items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-gray-900 hover:border-[#DC2626] hover:text-[#DC2626] dark:border-gray-700 dark:text-gray-100"
                  >
                    <span>{city.label}</span>
                    <span className="text-xs text-gray-500">{city.miles === 0 ? 'HQ' : `${city.miles} mi`}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
              <MapPin className="h-8 w-8 text-[#DC2626]" />
              New Jersey
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {njCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={cityPath(city.slug)}
                    className="flex min-h-[52px] items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-gray-900 hover:border-[#DC2626] hover:text-[#DC2626] dark:border-gray-700 dark:text-gray-100"
                  >
                    <span>{city.label}</span>
                    <span className="text-xs text-gray-500">{city.miles} mi</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 rounded-2xl bg-gray-50 p-8 dark:bg-[#111827]">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            {CITIES.length} towns, each with its own URL
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            These pages exist so searchers in Levittown, Bristol, Trenton, and the rest of the 25-mile ring land on
            content about their municipality — not a single homepage that lists every city as a dead link.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {CITIES.map((city) => (
              <li key={city.slug} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-[#0f172a]">
                <Link href={cityPath(city.slug)} className="text-lg font-semibold text-[#DC2626] hover:underline">
                  {city.label}
                </Link>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {city.county} · {city.miles === 0 ? 'shop location' : `${city.miles} miles`} · {city.jurisdiction}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-600">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Outside the 25-mile ranking radius</h2>
          <p className="mx-auto mb-4 max-w-2xl text-gray-700 dark:text-gray-300">
            Allentown, Bethlehem, and Easton were on the old 70-mile list. They are farther than 25 miles, so they do
            not get thin local landing pages. Contact us if you have a project there and we will tell you honestly
            whether we can staff it.
          </p>
          <p className="text-sm text-gray-500">
            {REGIONAL_CITIES.map((c) => `${c.label} (~${c.miles} mi)`).join(' · ')}
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-[#334e68] to-[#102a43] px-6 py-3 font-medium text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
