import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CityPage from '@/components/CityPage'
import { CITIES, getCity, cityPath } from '@/lib/locations'
import { generateMetadata as genMeta } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const city = getCity(slug)
  if (!city) return {}

  return genMeta({
    title: `Home Renovation in ${city.label}`,
    description: `Licensed kitchen, bath, basement, and addition remodeling in ${city.label}. About ${city.miles} miles from our Fairless Hills shop. Permits through ${city.jurisdiction}. Call (267) 243-6125.`,
    path: cityPath(city.slug),
    keywords: [
      `home renovation ${city.name}`,
      `kitchen remodeling ${city.name} ${city.state}`,
      `bathroom renovation ${city.label}`,
      city.county,
    ],
  })
}

export default async function ServiceAreaCityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const city = getCity(slug)
  if (!city) notFound()
  return <CityPage city={city} />
}
