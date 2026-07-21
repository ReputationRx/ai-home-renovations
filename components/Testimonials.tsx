'use client'

import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { TESTIMONIAL_PROJECT_IMAGES } from '@/lib/site-assets'
import { darkGradientFlat } from '@/lib/surfaces'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Fairless Hills, PA',
    rating: 5,
    text: 'AI Home Renovations transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and completed the project on time. Highly recommend!',
    service: 'Kitchen Remodel',
    avatar: '👩',
    projectImage: TESTIMONIAL_PROJECT_IMAGES[0],
  },
  {
    name: 'Michael Chen',
    location: 'Bristol, PA',
    rating: 5,
    text: 'We added a master suite addition and couldn\'t be happier. The design process was smooth, and the quality of work exceeded our expectations. Worth every penny.',
    service: 'Home Addition',
    avatar: '👨',
    projectImage: TESTIMONIAL_PROJECT_IMAGES[1],
  },
  {
    name: 'Jennifer Martinez',
    location: 'Levittown, PA',
    rating: 5,
    text: 'Our basement is now our favorite space in the house! The team handled everything from permits to finishing touches. Professional, reliable, and great communication throughout.',
    service: 'Basement Finishing',
    avatar: '👩‍💼',
    projectImage: TESTIMONIAL_PROJECT_IMAGES[2],
  },
]

export default function Testimonials() {
  return (
    <section className={`section-padding bg-gradient-to-b from-white to-[var(--primary-50)] text-zinc-900 dark:text-zinc-50 ${darkGradientFlat}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-zinc-900 dark:text-white sm:mb-6 sm:text-4xl md:text-5xl">
            What Our <span className="text-[#DC2626] dark:text-[#DC2626]">Customers Say</span>
          </h2>
          <p className="text-base text-zinc-700 dark:text-zinc-300 sm:text-lg md:text-xl lg:text-2xl">
            Real reviews from homeowners in <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">Fairless Hills, PA</span> and surrounding areas
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent pt-0 hover:border-[#DC2626] dark:hover:border-[#DC2626] group transition-colors">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={testimonial.projectImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 sm:p-8">
                  {/* Quote icon */}
                  <div className="mb-3 sm:mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#9fb3c8] dark:text-[#64748b] group-hover:text-[#486581] dark:group-hover:text-[#94a3b8] transition-colors" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[#DC2626] text-[#DC2626]" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="mb-4 text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mb-6 sm:text-base lg:text-lg">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  {/* Author info */}
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#829ab1] to-[#486581] flex items-center justify-center text-xl sm:text-2xl flex-shrink-0" role="img" aria-label={testimonial.name}>
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-zinc-900 dark:text-white sm:text-base">{testimonial.name}</p>
                      <p className="truncate text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">{testimonial.location}</p>
                      <p className="text-xs sm:text-sm text-[#DC2626] dark:text-[#DC2626] font-medium mt-1 truncate">{testimonial.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

