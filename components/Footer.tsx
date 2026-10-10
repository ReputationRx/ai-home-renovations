import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">{BUSINESS.name}</h3>
            <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Licensed, insured home renovation experts serving <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">{BUSINESS.baseLocation}</span> and surrounding areas.
            </p>
            <div className="flex gap-4">
              <a 
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/kitchens" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link 
                  href="/bathrooms" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Bathroom Renovation
                </Link>
              </li>
              <li>
                <Link 
                  href="/basements" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Basement Finishing
                </Link>
              </li>
              <li>
                <Link 
                  href="/additions" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Home Additions
                </Link>
              </li>
              <li>
                <Link 
                  href="/interiors" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Interiors
                </Link>
              </li>
              <li>
                <Link 
                  href="/painting" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/service-areas" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] underline-offset-4 hover:underline transition-colors block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-[#DC2626] dark:text-[#DC2626]" />
                <a 
                  href={`tel:${BUSINESS.phoneRaw}`} 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] transition-colors break-all"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-[#DC2626] dark:text-[#DC2626]" />
                <a 
                  href={`mailto:${BUSINESS.email}`} 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] transition-colors break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-[#DC2626] dark:text-[#DC2626] mt-0.5" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{BUSINESS.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center space-y-2">
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | <span className="text-[#DC2626] dark:text-[#DC2626] font-semibold">Licensed & Insured</span>
          </p>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            Powered by{' '}
            <a
              href="https://slideindm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC2626] dark:text-[#DC2626] font-semibold underline-offset-4 hover:underline"
            >
              Slide in Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

