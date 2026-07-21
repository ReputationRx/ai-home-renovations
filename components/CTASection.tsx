'use client'

import Image from 'next/image'
import { Phone, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BUSINESS } from '@/lib/constants'
import { SITE_IMAGES } from '@/lib/site-assets'
import {
  navCallButtonProminent,
  navFreeEstimateOutlineLg,
} from '@/lib/site-nav'

export default function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden text-zinc-900 dark:text-zinc-50">
      {/* Full-bleed photo — visibility first; readability via light scrim below */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={SITE_IMAGES.hero}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Light touch of white / navy tint so text stays legible without washing out the image */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/45 via-white/20 to-[var(--primary-100)]/35 dark:from-[#0f172a]/55 dark:via-[#0f172a]/38 dark:to-[#0f172a]/50"
        aria-hidden
      />
      {/* Decorative accents — keep subtle so the photo stays the hero */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#0f172a] opacity-[0.06] mix-blend-multiply blur-3xl filter dark:opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#334e68] opacity-[0.06] mix-blend-multiply blur-3xl filter dark:opacity-[0.08]" />
      </div>

      {/* Pattern — barely there */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      
      <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-zinc-900/10 px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur-sm dark:bg-white/10 dark:text-zinc-100"
          >
            <Sparkles className="h-4 w-4 text-[#DC2626] dark:text-[#DC2626]" />
            <span>Start Your Transformation Today</span>
          </motion.div>
          
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Transform Your <span className="text-[#DC2626] dark:text-[#DC2626]">Home</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl">
            Get your free, no-obligation estimate today. We're here to answer your questions 
            and help bring your renovation vision to life.
          </p>
          <div className="mb-8 flex flex-col flex-wrap items-stretch justify-center gap-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact-us"
              className={`${navFreeEstimateOutlineLg} group justify-center border-white/25 bg-gradient-to-r from-[#334155]/75 to-[#475569]/70 text-white shadow-md hover:from-[#334155]/90 hover:to-[#475569]/85 hover:text-white dark:border-white/20 dark:from-[#334155]/80 dark:to-[#475569]/75 dark:hover:from-[#334155]/95 dark:hover:to-[#475569]/90`}
            >
              <span className="flex items-center gap-2">
                Request <span className="text-[#DC2626] dark:text-[#DC2626]">Free</span> Estimate
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className={`${navCallButtonProminent} justify-center`}
            >
              <Phone className="nav-phone-icon h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden />
              <span className="hidden sm:inline">Call </span>
              {BUSINESS.phoneFormatted}
            </a>
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
            <span className="w-2 h-2 bg-[#DC2626] rounded-full flex-shrink-0"></span>
            Serving {BUSINESS.baseLocation} and surrounding areas • Licensed & Insured
          </p>
        </motion.div>
      </div>
    </section>
  )
}
