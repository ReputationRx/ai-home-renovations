'use client'

import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROCESS_SHOWCASE_IMAGES } from '@/lib/site-assets'
import { darkCanvas, darkGradientFlat, darkTile, darkTileOutline } from '@/lib/surfaces'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your home to understand your vision, assess the space, and discuss your goals and budget.',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed plans and 3D renderings so you can visualize your new space before we begin.',
    icon: '✏️',
  },
  {
    number: '03',
    title: 'Detailed Estimate',
    description: 'You receive a transparent, itemized estimate with no hidden fees. We explain every detail.',
    icon: '📋',
  },
  {
    number: '04',
    title: 'Project Execution',
    description: 'Our licensed, insured team works efficiently while keeping your home clean and safe throughout the process.',
    icon: '🔨',
  },
  {
    number: '05',
    title: 'Final Walkthrough',
    description: 'We ensure every detail meets our high standards and your satisfaction before we consider the project complete.',
    icon: '✅',
  },
]

export default function Process() {
  return (
    <section className={`section-padding bg-white text-zinc-900 dark:text-zinc-50 ${darkCanvas}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-zinc-900 dark:text-white sm:mb-6 sm:text-4xl md:text-5xl">
            Our <span className="text-[#DC2626] dark:text-[#DC2626]">Simple Process</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg md:text-xl lg:text-2xl">
            From initial <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">consultation</span> to final walkthrough, we make home renovation <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">easy</span> and transparent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5"
          aria-hidden
        >
          {PROCESS_SHOWCASE_IMAGES.map((src, i) => (
            <div key={src + i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 dark:ring-white/10">
              <Image src={src} alt="" fill className="object-cover" sizes="(max-width:1024px) 33vw, 20vw" />
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#bcccdc] via-[#829ab1] to-[#bcccdc] dark:from-[#475569] dark:via-[#94a3b8] dark:to-[#475569]"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`group relative h-full rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-[var(--primary-50)] p-6 transition-all duration-300 hover:-translate-y-2 hover:premium-shadow-lg premium-shadow sm:rounded-2xl sm:p-8 ${darkGradientFlat} ${darkTileOutline}`}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#486581] to-[#243b53] rounded-full flex items-center justify-center premium-shadow">
                  <span className="text-white font-bold text-base sm:text-lg">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 mt-2 sm:mt-4" role="img" aria-label={step.title}>
                  {step.icon}
                </div>
                
                <h3 className="mb-2 text-lg font-bold text-zinc-900 transition-colors group-hover:text-[#DC2626] dark:text-white dark:group-hover:text-[#DC2626] sm:mb-3 sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">{step.description}</p>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 sm:mt-6">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#829ab1] dark:text-[#94a3b8]" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8"
        >
          <div className={`flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--primary-50)] px-4 py-2 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 ${darkTile} ${darkTileOutline}`}>
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600 sm:h-6 sm:w-6" aria-hidden />
            <span className="text-sm font-semibold text-zinc-900 dark:text-white sm:text-base">Licensed & Insured</span>
          </div>
          <div className={`flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--primary-50)] px-4 py-2 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 ${darkTile} ${darkTileOutline}`}>
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600 sm:h-6 sm:w-6" aria-hidden />
            <span className="text-sm font-semibold text-zinc-900 dark:text-white sm:text-base">Free Estimates</span>
          </div>
          <div className={`flex min-h-[44px] items-center gap-2 rounded-lg bg-[var(--primary-50)] px-4 py-2 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 ${darkTile} ${darkTileOutline}`}>
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600 sm:h-6 sm:w-6" aria-hidden />
            <span className="text-sm font-semibold text-zinc-900 dark:text-white sm:text-base">Satisfaction Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

