'use client'

import * as React from 'react'
import { Input } from './input'
import { cn } from '@/lib/utils'

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string
}

export function FormField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  error,
  ...props
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 block mb-1.5 sm:mb-2">
        {label}
        {required && <span className="text-[#DC2626] ml-1">*</span>}
      </label>
      <Input
        id={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={error ? 'border-[#DC2626]' : ''}
        {...props}
      />
      {error && <p className="text-sm text-[#DC2626]">{error}</p>}
    </div>
  )
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ring-offset-white dark:ring-offset-[#0f172a] placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-manipulation resize-y',
        className
      )}
      {...props}
    />
  )
}

