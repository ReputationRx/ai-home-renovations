/**
 * Shared nav / CTA classes — single source of truth with Header.
 * Use on the homepage and other surfaces so menus and CTAs stay visually aligned.
 */

export const SPECIAL_OFFERS_HREF = '/elementor-landing-page-825'

/** Desktop primary nav text links (Gallery, Blog, Contact, …) */
export const navLinkClass =
  'text-sm font-medium text-gray-800 dark:text-gray-100 transition-colors hover:text-[#DC2626] dark:hover:text-[#DC2626]'

export const navLinkClassPadded = `${navLinkClass} whitespace-nowrap px-1.5 py-2`

/** Services dropdown trigger */
export const navServicesTriggerClass =
  'inline-flex items-center gap-0.5 rounded-lg px-2 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-red-50 hover:text-[#DC2626] dark:text-gray-100 dark:hover:bg-red-950/50 dark:hover:text-[#DC2626]'

/** Services dropdown items */
export const navDropdownItemClass =
  'block px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-red-50 hover:text-[#DC2626] dark:text-gray-100 dark:hover:bg-red-950/60 dark:hover:text-[#DC2626]'

/** Red “Special Offers” pill — header desktop */
export const navSpecialOffersPillDesktop =
  'whitespace-nowrap rounded-full border-2 border-[#DC2626] bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#DC2626] shadow-sm transition hover:bg-red-100 dark:border-[#DC2626] dark:bg-red-950/50 dark:text-[#DC2626] dark:hover:bg-red-950 max-xl:px-2 max-xl:text-[0.65rem]'

/** Same pill for hero / body CTAs (no max-xl text squeeze) */
export const navSpecialOffersPill =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#DC2626] bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#DC2626] shadow-sm transition hover:bg-red-100 dark:border-[#DC2626] dark:bg-red-950/50 dark:text-[#DC2626] dark:hover:bg-red-950'

/** Red filled call — matches header desktop */
export const navCallButtonDesktop =
  'group/call nav-call-btn inline-flex items-center gap-2 rounded-full bg-[#DC2626] px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 dark:shadow-red-900/40 min-[1100px]:px-4'

/** Compact icon-only call — header mobile */
export const navCallButtonMobileIcon =
  'group/call nav-call-btn inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DC2626] text-white shadow-md transition hover:bg-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 sm:h-10 sm:w-10'

/** Header “Free estimate” outline (Button size sm) */
export const navFreeEstimateHeaderOutline =
  'hidden h-10 shrink-0 border-2 border-[#DC2626] bg-transparent px-3 text-[#DC2626] hover:bg-red-50 dark:border-[#DC2626] dark:text-[#DC2626] dark:hover:bg-red-950/50 lg:inline-flex'

/** Larger outline estimate — hero / bottom CTA */
export const navFreeEstimateOutlineLg =
  'inline-flex min-h-[48px] items-center justify-center rounded-md border-2 border-[#DC2626] bg-transparent px-6 text-base font-semibold text-[#DC2626] shadow-sm transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 dark:border-[#DC2626] dark:text-[#DC2626] dark:hover:bg-red-950/50 sm:min-h-[56px] sm:px-8 sm:text-lg'

/** Prominent filled call — hero / CTA band */
export const navCallButtonProminent =
  'group/call nav-call-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#DC2626] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 dark:shadow-red-900/40 sm:min-h-[56px] sm:px-8 sm:text-lg'

/** Inline “Learn more” / section links — nav-like gray → red on hover */
export const navInlineLinkArrow = `${navLinkClass} inline-flex items-center font-semibold group/link min-h-[44px]`

/** Block-style links (service area grid, footer-like lists) */
export const navLinkClassBlock = `${navLinkClass} flex items-center text-sm sm:text-base py-1 min-h-[44px]`

/** Homepage quick jump links (same destinations as main nav, minus Home) */
export const HOME_QUICK_LINKS = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
  { href: '#services', label: 'Services' },
] as const
