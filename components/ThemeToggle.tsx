'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'

  if (!mounted) {
    return (
      <span
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-[#0f172a]"
        aria-hidden
      />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-amber-500 shadow-sm transition hover:bg-gray-50 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 dark:border-gray-600 dark:bg-[#0f172a] dark:text-amber-300 dark:hover:bg-white/[0.06] dark:hover:text-amber-200 touch-manipulation"
    >
      {isDark ? <Moon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} /> : <Sun className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} />}
    </button>
  )
}
