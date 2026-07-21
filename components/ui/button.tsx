import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild, children, ...props }, ref) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center rounded-lg sm:rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group touch-manipulation',
      {
        'bg-gradient-to-r from-[#334e68] to-[#102a43] text-white hover:from-[#243b53] hover:to-[#102a43] premium-shadow hover:premium-shadow-lg hover:scale-105 active:scale-100': variant === 'default',
        'border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-800 hover:text-gray-800 dark:border-white/20 dark:bg-[#0f172a] dark:text-white dark:hover:bg-white/[0.06] dark:hover:border-white/30 dark:hover:text-gray-100': variant === 'outline',
        'hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-white/[0.06]': variant === 'ghost',
        'min-h-[44px] h-12 px-6 py-3 text-sm sm:text-base': size === 'default',
        'min-h-[44px] h-10 px-4 py-2 text-sm': size === 'sm',
        'min-h-[48px] sm:min-h-[56px] h-12 sm:h-14 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg': size === 'lg',
      },
      className
    )

    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as { className?: string }
      return React.cloneElement(children, {
        className: cn(buttonClasses, childProps.className),
        ...props,
      } as any)
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }

