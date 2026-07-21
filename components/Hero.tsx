'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BUSINESS } from '@/lib/constants'
import { HERO_CAROUSEL_SLIDES } from '@/lib/site-assets'
import {
  HOME_QUICK_LINKS,
  SPECIAL_OFFERS_HREF,
  navCallButtonProminent,
  navFreeEstimateOutlineLg,
  navLinkClassPadded,
  navSpecialOffersPill,
} from '@/lib/site-nav'
const SLIDE_COUNT = HERO_CAROUSEL_SLIDES.length

const DEFAULT_LEAD = (location: string) =>
  `Licensed, insured, and trusted by homeowners throughout ${location} and surrounding areas. From kitchen remodels to complete home transformations, we bring your vision to life with `

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [manualHold, setManualHold] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const go = useCallback(
    (dir: -1 | 1) => {
      setManualHold(true)
      setIndex((i) => (i + dir + SLIDE_COUNT) % SLIDE_COUNT)
    },
    []
  )

  const goTo = useCallback((i: number) => {
    setManualHold(true)
    setIndex(i)
  }, [])

  useEffect(() => {
    if (!manualHold) return
    const t = window.setTimeout(() => setManualHold(false), 9000)
    return () => window.clearTimeout(t)
  }, [manualHold])

  useEffect(() => {
    if (reduceMotion || manualHold) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDE_COUNT)
    }, 7000)
    return () => window.clearInterval(id)
  }, [reduceMotion, manualHold])

  const slide = HERO_CAROUSEL_SLIDES[index]
  const duration = reduceMotion ? 0 : 0.38

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current
    touchStartX.current = null
    if (start == null) return
    const end = e.changedTouches[0]?.clientX
    if (end == null) return
    const delta = end - start
    if (Math.abs(delta) < 56) return
    if (delta > 0) go(-1)
    else go(1)
  }

  return (
    <section
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--primary-50)] text-zinc-900 dark:bg-[var(--background)] dark:text-zinc-50 sm:min-h-[90vh]"
      aria-roledescription="carousel"
      aria-label="Featured renovations"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.image + slide.accent}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm dark:border-zinc-600 dark:bg-zinc-800/95 dark:text-zinc-100">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#DC2626] dark:text-[#DC2626]" aria-hidden />
                  <span>{slide.badge}</span>
                </div>

                <h1
                  id="hero-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  <span className="block text-zinc-900 dark:text-white">Transform Your</span>
                  <span className="block text-[#DC2626] dark:text-[#DC2626]">{slide.accent}</span>
                  <span className="mt-2 block text-2xl text-zinc-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    in {BUSINESS.baseLocation}
                  </span>
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg md:text-xl lg:text-2xl">
                  {slide.lead ? (
                    <>
                      {slide.lead}{' '}
                      <span className="font-semibold text-[#DC2626] dark:text-[#DC2626]">uncompromising quality</span>.
                    </>
                  ) : (
                    <>
                      {DEFAULT_LEAD(BUSINESS.baseLocation)}
                      <span className="font-semibold text-[#DC2626] dark:text-[#DC2626]">uncompromising quality</span>.
                    </>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>

            <nav
              aria-label="Quick links"
              className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:gap-x-2"
            >
              <Link href={SPECIAL_OFFERS_HREF} className={navSpecialOffersPill}>
                Special Offers
              </Link>
              {HOME_QUICK_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className={navLinkClassPadded}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact-us"
                className={`${navFreeEstimateOutlineLg} group min-w-0 justify-center gap-2`}
              >
                <span className="flex items-center gap-2">
                  Get <span className="text-[#DC2626] dark:text-[#DC2626]">Free</span> Estimate
                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className={`${navCallButtonProminent} min-w-0 justify-center`}
              >
                <Phone className="nav-phone-icon h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden />
                <span className="hidden sm:inline">Call </span>
                {BUSINESS.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 border-t border-zinc-200 pt-6 dark:border-zinc-700 sm:justify-start sm:gap-8 lg:gap-12 sm:pt-8">
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-[#DC2626] dark:text-[#DC2626] sm:text-3xl">15+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-[#DC2626] dark:text-[#DC2626] sm:text-3xl">500+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-[#DC2626] dark:text-[#DC2626] sm:text-3xl">100%</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 sm:text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative min-h-0 w-full">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-200/90 bg-zinc-100 shadow-xl dark:border-white/[0.08] dark:bg-[#0f172a] dark:shadow-black/50"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.image}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    loading={index === 0 ? undefined : 'lazy'}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-4 -left-2 z-20 rounded-xl border-2 border-[#DC2626] bg-white p-4 shadow-lg dark:border-[#DC2626] dark:bg-[#0f172a] sm:-bottom-6 sm:-left-4 sm:rounded-2xl sm:p-6"
            >
              <div className="text-2xl font-bold text-[#DC2626] dark:text-[#DC2626] sm:text-3xl">A+</div>
              <div className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-300">Rated</div>
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 sm:px-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#DC2626] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] dark:border-white/[0.12] dark:bg-[#0f172a]/95 dark:text-zinc-50 dark:hover:text-[#DC2626]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="pointer-events-auto ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-[#DC2626] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] dark:border-white/[0.12] dark:bg-[#0f172a]/95 dark:text-zinc-50 dark:hover:text-[#DC2626]"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
          role="tablist"
          aria-label="Choose slide"
        >
          {HERO_CAROUSEL_SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.badge}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 ${
                i === index
                  ? 'w-8 bg-[#DC2626] dark:bg-[#DC2626]'
                  : 'w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        Slide {index + 1} of {SLIDE_COUNT}: {slide.badge}
      </span>
    </section>
  )
}
