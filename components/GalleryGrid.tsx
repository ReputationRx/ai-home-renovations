'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GALLERY_ITEMS } from '@/lib/site-assets'

export default function GalleryGrid() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our <span className="accent-red">Project Gallery</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Browse our portfolio of completed home renovation projects in <span className="accent-red font-semibold">Fairless Hills, PA</span> and
          surrounding areas
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY_ITEMS.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-semibold text-[--accent-400] mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-[--primary-700] dark:text-gray-200">{project.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Want to see more? <span className="accent-red font-semibold">Schedule a consultation</span> to view our complete portfolio and discuss your
          project.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#334e68] to-[#102a43] text-white px-8 py-4 rounded-xl font-semibold premium-shadow hover:premium-shadow-lg hover:scale-105 transition-all duration-300"
        >
          Schedule Consultation
        </Link>
      </motion.div>
    </>
  )
}
