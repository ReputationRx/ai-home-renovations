/**
 * Verify all WordPress canonical paths return 200 on a running Next.js server.
 * Usage: npx tsx scripts/verify-seo-urls.ts [baseUrl]
 * Example: npm run build && npm start & npx tsx scripts/verify-seo-urls.ts http://localhost:3000
 */

import { CITIES, cityPath } from '../lib/locations'
import {
  WORDPRESS_CANONICAL_PATHS,
  WORDPRESS_INDEXED_CATEGORY_SLUGS,
  WORDPRESS_REDIRECTS,
} from '../lib/wordpress-migration'

const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')

/** Match next.config trailingSlash: true, except file-like last segments (.php). */
function fetchPath(path: string): string {
  if (!path) return '/'
  if (path.endsWith('/')) return path
  const last = path.split('/').pop() ?? ''
  if (last.includes('.')) return path
  return `${path}/`
}

/** Normalize Location / destination for trailingSlash + optional absolute URLs. */
function normalizeDest(value: string): string {
  let dest = value
  if (/^https?:\/\//i.test(dest)) {
    const u = new URL(dest)
    dest = `${u.pathname}${u.search}${u.hash}`
  }
  const hashIdx = dest.indexOf('#')
  if (hashIdx >= 0) {
    const path = dest.slice(0, hashIdx)
    const hash = dest.slice(hashIdx)
    const withSlash = !path || path.endsWith('/') ? path || '/' : `${path}/`
    return `${withSlash}${hash}`
  }
  if (!dest || dest === '/') return '/'
  return dest.endsWith('/') ? dest : `${dest}/`
}

async function check(path: string): Promise<{ path: string; ok: boolean; detail: string }> {
  const url = `${base}${fetchPath(path)}`
  const res = await fetch(url, { redirect: 'follow' })
  const ok = res.ok
  return { path, ok, detail: ok ? '200' : `status ${res.status}` }
}

async function checkRedirect(
  source: string,
  destination: string
): Promise<{ path: string; ok: boolean; detail: string }> {
  const url = `${base}${fetchPath(source)}`
  const res = await fetch(url, { redirect: 'manual' })
  const location = res.headers.get('location') ?? ''
  const statusOk = res.status >= 301 && res.status <= 308
  const destOk = location ? normalizeDest(location) === normalizeDest(destination) : false
  const ok = statusOk && destOk
  return {
    path: source,
    ok,
    detail: ok
      ? `status ${res.status} → ${location}`
      : `status ${res.status} location=${location || '(none)'} expected ${destination}`,
  }
}

async function main() {
  console.log(`Checking ${WORDPRESS_CANONICAL_PATHS.length} canonical paths at ${base}\n`)

  const failures: string[] = []

  for (const path of WORDPRESS_CANONICAL_PATHS) {
    const { ok, detail } = await check(path)
    const label = path || '/'
    if (ok) {
      console.log(`  OK  ${label}`)
    } else {
      console.log(` FAIL ${label} (${detail})`)
      failures.push(label)
    }
  }

  console.log(`\nChecking ${CITIES.length} local city pages...\n`)
  for (const city of CITIES) {
    const path = cityPath(city.slug)
    const { ok, detail } = await check(path)
    if (ok) {
      console.log(`  OK  ${path}`)
    } else {
      console.log(` FAIL ${path} (${detail})`)
      failures.push(path)
    }
  }

  console.log(`\nChecking ${WORDPRESS_REDIRECTS.length} redirects (expect 308/307/301)...\n`)

  for (const r of WORDPRESS_REDIRECTS) {
    if (r.source.includes(':')) continue // skip dynamic patterns in smoke test
    const { ok, detail } = await checkRedirect(r.source, r.destination)
    const label = r.source
    if (ok) {
      console.log(`  OK  ${label} → ${r.destination}`)
    } else {
      console.log(` FAIL ${label} (${detail})`)
      failures.push(`redirect:${label}`)
    }
  }

  console.log('\nChecking /sitemap.xml trailing slashes and Rank Math category set...\n')

  const sitemapRes = await fetch(`${base}/sitemap.xml`)
  if (!sitemapRes.ok) {
    console.log(` FAIL /sitemap.xml (status ${sitemapRes.status})`)
    failures.push('sitemap.xml')
  } else {
    const xml = await sitemapRes.text()
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    const missingSlash = locs.filter((u) => !u.endsWith('/'))
    const emptyCats = ['additions', 'basements', 'bathrooms', 'painting']
      .map((s) => `/category/${s}/`)
      .filter((p) => locs.some((u) => u.endsWith(p) || u.endsWith(p.slice(0, -1))))
    const indexedCats = WORDPRESS_INDEXED_CATEGORY_SLUGS.map((s) => `/category/${s}/`)
    const missingIndexed = indexedCats.filter((p) => !locs.some((u) => u.endsWith(p)))

    if (missingSlash.length) {
      console.log(` FAIL sitemap missing trailing slash (${missingSlash.length}): ${missingSlash.slice(0, 3).join(', ')}`)
      failures.push('sitemap:trailing-slash')
    } else {
      console.log(`  OK  ${locs.length} loc entries all end with /`)
    }
    if (emptyCats.length) {
      console.log(` FAIL sitemap includes empty categories: ${emptyCats.join(', ')}`)
      failures.push('sitemap:empty-categories')
    } else {
      console.log('  OK  empty category archives omitted')
    }
    if (missingIndexed.length) {
      console.log(` FAIL sitemap missing indexed categories: ${missingIndexed.join(', ')}`)
      failures.push('sitemap:indexed-categories')
    } else {
      console.log('  OK  indexed category archives present')
    }
  }

  if (failures.length) {
    console.error(`\n${failures.length} failure(s). Fix routes/redirects before launch.`)
    process.exit(1)
  }
  console.log('\nAll checked URLs passed.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
