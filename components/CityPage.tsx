import Link from 'next/link'
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import ContactForm from './ContactForm'
import ImageStrip from './ImageStrip'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from './Schema'
import { BUSINESS, SERVICES } from '@/lib/constants'
import { CITIES, cityPath, type ServiceCity } from '@/lib/locations'
import { SITE_IMAGES } from '@/lib/site-assets'
import { navLinkClass } from '@/lib/site-nav'

const SERVICE_LINKS = [
  { href: '/kitchens', label: SERVICES.kitchens.title },
  { href: '/bathrooms', label: SERVICES.bathrooms.title },
  { href: '/basements', label: SERVICES.basements.title },
  { href: '/additions', label: SERVICES.additions.title },
  { href: '/interiors', label: 'Interior remodeling' },
  { href: '/painting', label: 'Painting' },
] as const

function cityFaqs(city: ServiceCity) {
  return [
    {
      question: `Do you take kitchen and bath jobs in ${city.name}?`,
      answer: `Yes. ${city.name} is about ${city.miles === 0 ? 'where we are based' : `${city.miles} miles from our Fairless Hills shop`}, so it is inside our 25-mile working radius. We handle ${city.jurisdiction} paperwork with the rest of the project.`,
    },
    {
      question: `Who issues renovation permits in ${city.name}?`,
      answer: `Most ${city.name} jobs file with ${city.jurisdiction}. We confirm the tax parcel before we submit, because some shared ZIPs (${city.zips}) cross municipal lines.`,
    },
    {
      question: `What kind of houses do you usually see in ${city.name}?`,
      answer: city.housing,
    },
  ]
}

export default function CityPage({ city }: { city: ServiceCity }) {
  const nearby = city.nearbySlugs
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is ServiceCity => Boolean(c))
  const faqs = cityFaqs(city)
  const path = cityPath(city.slug)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: city.label, path },
        ]}
      />
      <ServiceSchema
        serviceName={`Home renovation in ${city.label}`}
        description={city.intro}
      />
      <FAQSchema faqs={faqs} />

      <section className="bg-gradient-to-br from-[#f0f4f8] to-white py-16 dark:from-[#0f172a] dark:to-[#0f172a] md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className={navLinkClass}>
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/service-areas" className={navLinkClass}>
                  Service Areas
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-gray-900 dark:text-white">{city.label}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#DC2626]">
              {city.miles === 0
                ? 'Home base · 25-mile local radius'
                : `${city.miles} miles from Fairless Hills · ${city.county}`}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Home Renovation in {city.label}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{city.intro}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact-us" className="text-white">
                  Free estimate in {city.name}
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

          <ImageStrip
            images={[SITE_IMAGES.kitchens[0], SITE_IMAGES.bathrooms[0], SITE_IMAGES.basements[0], SITE_IMAGES.interiors[0]]}
            className="mt-12"
            columnsClassName="grid-cols-2 md:grid-cols-4"
            label={`Renovation work we run from Fairless Hills into ${city.name}`}
          />
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-[#0f172a]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <Card>
            <CardContent className="p-6">
              <MapPin className="mb-3 h-6 w-6 text-[#DC2626]" />
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Drive time from our shop</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {city.miles === 0
                  ? 'Jobs start at 323 Austin Drive. Crews are already in town.'
                  : `About ${city.miles} miles from 323 Austin Drive, Fairless Hills — inside our 25-mile local radius.`}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Permits</h2>
              <p className="text-gray-700 dark:text-gray-300">{city.jurisdiction}. ZIP examples: {city.zips}.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Housing we see</h2>
              <p className="text-gray-700 dark:text-gray-300">{city.housing}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            How we work in {city.name}
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">{city.localNote}</p>

          <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Services for {city.label}</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[56px] items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:border-[#DC2626] hover:text-[#DC2626] dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            {city.name} renovation questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="flex items-start gap-2 font-semibold text-gray-900 dark:text-white">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#DC2626]" />
                  {faq.question}
                </dt>
                <dd className="mt-2 pl-7 text-gray-700 dark:text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-[#0f172a]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Other towns we cover near {city.name}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={cityPath(item.slug)}
                    className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-[#DC2626] hover:text-[#DC2626] dark:border-gray-600 dark:bg-[#0f172a] dark:text-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="inline-flex rounded-full border border-[#DC2626] px-4 py-2 text-sm font-semibold text-[#DC2626]"
                >
                  All 25-mile towns
                </Link>
              </li>
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Request a {city.name} estimate
          </h2>
          <p className="mb-8 text-center text-gray-700 dark:text-gray-300">
            Licensed and insured. Based in Fairless Hills, serving {city.label} within a 25-mile radius.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
