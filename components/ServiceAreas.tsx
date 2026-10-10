import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { citiesByState, cityPath } from '@/lib/locations'
import { navInlineLinkArrow, navLinkClassBlock } from '@/lib/site-nav'
import { darkCanvas } from '@/lib/surfaces'

export default function ServiceAreas() {
  const paCities = citiesByState('PA')
  const njCities = citiesByState('NJ')

  return (
    <section id="service-areas" className={`py-20 scroll-mt-20 bg-gray-50 ${darkCanvas}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Serving <span className="text-[#DC2626] dark:text-[#DC2626]">{BUSINESS.baseLocation}</span> and Surrounding Areas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Based in <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{BUSINESS.baseLocation}</span>, we proudly serve homeowners within approximately <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{BUSINESS.serviceRadius} miles</span>{' '}
            throughout <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">Pennsylvania</span> and <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">New Jersey</span>. Quality home renovation services you can trust.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#DC2626] dark:text-[#DC2626] flex-shrink-0" />
              <span className="text-[#DC2626] dark:text-[#DC2626]">Pennsylvania</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {paCities.map((city) => (
                <Link
                  key={city.slug}
                  href={cityPath(city.slug)}
                  className={navLinkClassBlock}
                >
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#DC2626] dark:text-[#DC2626] flex-shrink-0" />
              <span className="text-[#DC2626] dark:text-[#DC2626]">New Jersey</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {njCities.map((city) => (
                <Link
                  key={city.slug}
                  href={cityPath(city.slug)}
                  className={navLinkClassBlock}
                >
                  {city.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Link href="/service-areas" className={`${navInlineLinkArrow} text-sm sm:text-base`}>
            View all 25-mile town pages →
          </Link>
        </div>
      </div>
    </section>
  )
}

