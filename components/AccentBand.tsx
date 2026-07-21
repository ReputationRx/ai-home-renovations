'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Phone, Sparkles, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { SITE_IMAGES } from '@/lib/site-assets'

export default function AccentBand() {
  return (
    <section className="relative min-h-[30vh] bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#DC2626] text-white">
      <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, transparent 35%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2) 0, transparent 30%), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.2) 0, transparent 30%)`
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            Premium Craftsmanship • ADA-conscious design
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Ready to elevate your home with bold design and accessibility in mind?
          </h2>
          <p className="text-lg text-white/90">
            Seamless renovations, clear communication, and spaces that feel luxurious and usable for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 premium-shadow">
              <Link href="/contact-us" className="flex items-center gap-2 text-gray-900">
                Get a Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phoneFormatted}
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:max-w-lg shrink-0"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/25 shadow-xl ring-2 ring-white/10">
            <Image src={SITE_IMAGES.interiors[1]} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 42vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/45 px-3 py-2 text-xs text-white backdrop-blur-sm sm:text-sm">
              Accessible details planned alongside luxury finishes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

