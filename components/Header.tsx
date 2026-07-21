'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { BUSINESS } from '@/lib/constants'
import { SITE_IMAGES } from '@/lib/site-assets'
import {
  SPECIAL_OFFERS_HREF,
  navCallButtonDesktop,
  navCallButtonMobileIcon,
  navDropdownItemClass,
  navFreeEstimateHeaderOutline,
  navLinkClassPadded,
  navServicesTriggerClass,
  navSpecialOffersPillDesktop,
} from '@/lib/site-nav'
import { ThemeToggle } from './ThemeToggle'

const SERVICE_LINKS = [
  { href: '/kitchens', label: 'Kitchens' },
  { href: '/bathrooms', label: 'Bathrooms' },
  { href: '/basements', label: 'Basements' },
  { href: '/additions', label: 'Additions' },
  { href: '/interiors', label: 'Interiors' },
  { href: '/painting', label: 'Painting' },
] as const

const PRIMARY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
] as const

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const closeOnOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md transition-shadow duration-300 dark:border-gray-800 dark:bg-[#0f172a]/95 ${
        isScrolled ? 'shadow-md shadow-black/5 dark:shadow-black/30' : ''
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8" aria-label="Main">
        <div className="flex h-[3.25rem] items-center justify-between gap-2 sm:h-16 md:h-[4.25rem] lg:gap-4">
          {/* Logo — constrained so wordmarks scale cleanly */}
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center py-1"
            aria-label={`${BUSINESS.name} home`}
          >
            <span className="relative block h-8 w-[7.5rem] sm:h-9 sm:w-[8.75rem] md:h-10 md:w-[10rem] lg:h-11 lg:w-[11rem]">
              <Image
                src={SITE_IMAGES.logo}
                alt={BUSINESS.name}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 176px"
                priority
              />
            </span>
          </Link>

          {/* Desktop / large tablet — lg+ */}
          <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex lg:gap-2 xl:gap-3">
            <div className="mr-1 flex flex-wrap items-center justify-end gap-x-1 gap-y-1 xl:gap-x-2">
              {PRIMARY_LINKS.filter((l) => l.href !== '/').map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClassPadded}>
                  {link.label}
                </Link>
              ))}

              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  className={navServicesTriggerClass}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((o) => !o)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {servicesOpen ? (
                  <div
                    className="absolute left-0 top-full z-50 mt-1 min-w-[13rem] rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-white/[0.08] dark:bg-[#0f172a]"
                    role="menu"
                  >
                    {SERVICE_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className={navDropdownItemClass}
                        onClick={() => setServicesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link
                href={SPECIAL_OFFERS_HREF}
                className={navSpecialOffersPillDesktop}
              >
                Special Offers
              </Link>
            </div>

            <div className="flex items-center gap-1.5 border-l border-gray-200 pl-2 dark:border-gray-700 xl:gap-2 xl:pl-3">
              <ThemeToggle />
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className={navCallButtonDesktop}
              >
                <Phone className="nav-phone-icon h-4 w-4 shrink-0" aria-hidden />
                <span className="hidden min-[1100px]:inline">{BUSINESS.phoneFormatted}</span>
                <span className="min-[1100px]:hidden">Call</span>
              </a>
              <Button
                asChild
                size="sm"
                className={navFreeEstimateHeaderOutline}
                variant="outline"
              >
                <Link href="/contact-us">Free estimate</Link>
              </Button>
            </div>
          </div>

          {/* Compact actions — &lt; lg (phone + tablet portrait) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <ThemeToggle />
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className={navCallButtonMobileIcon}
              aria-label={`Call ${BUSINESS.phoneFormatted}`}
            >
              <Phone className="nav-phone-icon h-5 w-5" aria-hidden />
            </a>
            <button
              type="button"
              className="inline-flex h-11 min-w-[44px] items-center justify-center rounded-lg text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/[0.06] sm:h-10"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet overlay menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-[85vh] border-t border-gray-200 dark:border-gray-700' : 'max-h-0'
          }`}
        >
          <div className="max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain py-3">
            <Link
              href={SPECIAL_OFFERS_HREF}
              className="mx-3 mb-3 flex items-center justify-center rounded-xl border-2 border-[#DC2626] bg-red-50 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#DC2626] dark:bg-[#0f172a]/40 dark:text-[#DC2626]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Special Offers
            </Link>

            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-white/[0.06]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <p className="px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</p>
            {SERVICE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 pl-6 text-base text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/[0.06]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mx-3 mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4 dark:border-gray-700">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="group/call nav-call-btn flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-4 py-3 text-base font-semibold text-white shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="nav-phone-icon h-5 w-5 shrink-0" aria-hidden />
                {BUSINESS.phoneFormatted}
              </a>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-[#DC2626] bg-white py-3 text-center text-base font-semibold text-[#DC2626] dark:bg-[#0f172a] dark:text-[#DC2626]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free estimate
              </Link>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Appearance</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
