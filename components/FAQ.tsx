'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQSchema } from './Schema'
import { darkCanvas, darkTile } from '@/lib/surfaces'

const faqs = [
  {
    question: 'How long does a typical kitchen renovation take?',
    answer: 'Most kitchen renovations take 4-8 weeks depending on the scope of work. A full remodel with custom cabinets typically takes 6-8 weeks, while a smaller refresh can be completed in 4-6 weeks. We provide a detailed timeline during your free consultation.',
  },
  {
    question: 'Do I need permits for my home renovation project?',
    answer: 'Yes, most major renovations require permits. We handle all permit applications and inspections for you. This ensures your project meets local building codes and protects your investment. We\'ll explain the permit process during your consultation.',
  },
  {
    question: 'What is included in a free estimate?',
    answer: 'Our free estimate includes an in-home consultation where we assess your space, discuss your goals, review design options, and provide a detailed written estimate with itemized costs. There\'s no obligation, and we\'re happy to answer all your questions.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, AI Home Renovations is fully licensed and insured. We carry general liability insurance and workers\' compensation insurance to protect you and our team. We\'re happy to provide proof of insurance upon request.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'We work with several financing partners to offer flexible payment options for qualified homeowners. During your consultation, we can discuss financing options that fit your budget and timeline.',
  },
  {
    question: 'Will I need to move out during the renovation?',
    answer: 'It depends on the scope of work. For kitchen renovations, you may need temporary kitchen arrangements. For bathroom remodels, you\'ll need alternate facilities. We work with you to minimize disruption and can discuss living arrangements during planning.',
  },
  {
    question: 'What areas do you serve?',
    answer: `We're based in Fairless Hills, PA and focus on homeowners within about 25 miles — Bucks County towns like Levittown, Bristol, Yardley, and Newtown, plus nearby Mercer County, NJ (Trenton, Hamilton, Princeton). Each of those towns has its own service-area page. Farther cities such as Allentown are outside that ranking radius; ask us if you have a project there.`,
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply call us at (267) 243-6125 or request a free consultation online. We\'ll schedule a convenient time to visit your home, discuss your project, and provide a detailed estimate. No obligation, just honest advice and transparent pricing.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={`py-16 bg-white ${darkCanvas}`}>
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Frequently Asked <span className="text-[#DC2626] dark:text-[#DC2626]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Common questions about home renovations in <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">Fairless Hills, PA</span>
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 dark:border-white/[0.08]"
            >
              <button
                className={`flex min-h-[56px] w-full items-center justify-between bg-white px-4 py-3 text-left transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.04] sm:min-h-[64px] sm:px-6 sm:py-4 ${darkTile}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  className={`border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/[0.08] sm:px-6 sm:py-4 ${darkTile}`}
                >
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

