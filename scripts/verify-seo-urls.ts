/**
 * Verify all WordPress canonical paths return 200 on a running Next.js server.
 * Usage: npx tsx scripts/verify-seo-urls.ts [baseUrl]
 * Example: npm run build && npm start & npx tsx scripts/verify-seo-urls.ts http://localhost:3000
 */

import {
  WORDPRESS_CANONICAL_PATHS,
  WORDPRESS_REDIRECTS,
} from '../lib/wordpress-migration'

const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')

/** Match next.config trailingSlash: true */
function fetchPath(path: string): string {
  if (!path) return '/'
  return path.endsWith('/') ? path : `${path}/`
}

async function check(path: string, expectRedirect = false): Promise<{ path: string; ok: boolean; detail: string }> {
  const url = `${base}${fetchPath(path)}`
  const res = await fetch(url, { redirect: expectRedirect ? 'manual' : 'follow' })
  if (expectRedirect) {
    const ok = res.status >= 301 && res.status <= 308
    return { path, ok, detail: `status ${res.status}` }
  }
  const ok = res.ok
  return { path, ok, detail: ok ? '200' : `status ${res.status}` }
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

  console.log(`\nChecking ${WORDPRESS_REDIRECTS.length} redirects (expect 308/307/301)...\n`)

  for (const r of WORDPRESS_REDIRECTS) {
    if (r.source.includes(':')) continue // skip dynamic patterns in smoke test
    const { ok, detail } = await check(r.source, true)
    const label = r.source
    if (ok) {
      console.log(`  OK  ${label} → ${r.destination}`)
    } else {
      console.log(` FAIL ${label} (${detail})`)
      failures.push(`redirect:${label}`)
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
