'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { motion } from 'framer-motion'
import { MORE_SERVICES_IMAGES, SERVICE_CARD_IMAGES } from '@/lib/site-assets'
import { navInlineLinkArrow } from '@/lib/site-nav'
import { darkGradientFlat } from '@/lib/surfaces'

export default function ServicesGrid() {
  const additionalServices = [
    {
      title: 'Flooring Installation & Refinishing',
      description: 'Hardwood, luxury vinyl plank, tile, and carpet installs with dust-controlled sanding and premium finishes.',
    },
    {
      title: 'Interior & Exterior Painting',
      description: 'Color consultation, drywall repair, trim, and whole-home repainting for a clean, elevated look.',
    },
    {
      title: 'Roofing & Siding',
      description: 'High-performance roofing, gutters, and siding replacements to protect and refresh your exterior.',
    },
    {
      title: 'Windows & Doors',
      description: 'Energy-efficient window and door replacements, weatherproofing, and elegant trim upgrades.',
    },
  ]

  return (
    <section
      id="services"
      className={`section-padding scroll-mt-20 bg-gradient-to-b from-white to-[#f0f4f8] ${darkGradientFlat}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our <span className="text-[#DC2626] dark:text-[#DC2626]">Premium Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Serving <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{SERVICES.kitchens.title.toLowerCase()}</span>, <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{SERVICES.bathrooms.title.toLowerCase()}</span>, 
            <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{SERVICES.basements.title.toLowerCase()}</span>, and <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{SERVICES.additions.title.toLowerCase()}</span> 
            throughout <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">Fairless Hills, PA</span> and surrounding communities.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.values(SERVICES).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer overflow-hidden border-2 border-transparent pt-0 hover:border-[#DC2626] dark:hover:border-[#DC2626] transition-colors">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={SERVICE_CARD_IMAGES[service.slug as keyof typeof SERVICE_CARD_IMAGES]}
                    alt={`${service.shortTitle} remodeling photo`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  <Link href={`/${service.slug}`} className={`${navInlineLinkArrow} gap-1`}>
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">More Ways We <span className="text-[#DC2626] dark:text-[#DC2626]">Elevate</span> Your Home</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-service craftsmanship beyond major remodels—perfect for <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">finishing touches</span> and protection.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full overflow-hidden border border-gray-200 pt-0 dark:border-gray-700 hover:border-[#DC2626] dark:hover:border-[#DC2626] hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={MORE_SERVICES_IMAGES[index]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <Link href="/contact-us" className={`${navInlineLinkArrow} gap-1`}>
                      Schedule a consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
