import { BUSINESS } from './constants'
import type { Metadata } from 'next'

const SITE_ORIGIN = 'https://aihomerenovations.com'

/** Canonical URLs use trailing slashes to match WordPress + next.config trailingSlash. */
export function absoluteUrl(path = ''): string {
  if (!path || path === '/') return `${SITE_ORIGIN}/`
  if (path.startsWith('#')) return `${SITE_ORIGIN}/${path}`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_ORIGIN}${normalized.endsWith('/') ? normalized : `${normalized}/`}`
}

export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const fullTitle = `${title} | ${BUSINESS.name} - ${BUSINESS.baseLocation}`
  const defaultKeywords = [
    'home renovation',
    'remodeling',
    BUSINESS.baseLocation,
    'Fairless Hills',
    ...keywords,
  ]

  return {
    title: fullTitle.length > 60 ? title : fullTitle,
    description: description.length > 155 ? description.slice(0, 152) + '...' : description,
    keywords: defaultKeywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: absoluteUrl(path),
      siteName: BUSINESS.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: absoluteUrl(path),
    },
  }
}

