'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { FormField, Textarea } from './ui/form'
import { BUSINESS } from '@/lib/constants'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().optional(),
  city: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().optional(),
  budget: z.string().optional(),
  timeframe: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  defaultProjectType?: string
  showBudget?: boolean
  showTimeframe?: boolean
}

export default function ContactForm({
  defaultProjectType,
  showBudget = false,
  showTimeframe = false,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: defaultProjectType || '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Network error'
      alert(`There was an error submitting your form: ${errorMessage}. Please call us directly at ${BUSINESS.phoneFormatted} or try again later.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 sm:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Thank You!</h3>
        <p className="text-sm sm:text-base text-green-700 dark:text-green-400">
          We've received your request and will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField
          label="Full Name"
          required
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <FormField
          label="Phone Number"
          type="tel"
          required
          placeholder="(267) 243-6125"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField
          label="Email Address"
          type="email"
          required
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <FormField
          label="City"
          placeholder="Fairless Hills"
          {...register('city')}
        />
      </div>
      <FormField
        label="Street Address (Optional)"
        placeholder="123 Main Street"
        {...register('address')}
      />
      <div>
        <label htmlFor="projectType" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Project Type
        </label>
        <select
          id="projectType"
          {...register('projectType')}
          className="flex min-h-[44px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-3 py-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2"
        >
          <option value="">Select a project type</option>
          <option value="kitchen">Kitchen Remodeling</option>
          <option value="bathroom">Bathroom Renovation</option>
          <option value="basement">Basement Finishing</option>
          <option value="addition">Home Addition</option>
          <option value="other">Other</option>
        </select>
      </div>
      {showBudget && (
        <div>
          <label htmlFor="budget" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Budget Range
          </label>
          <select
            id="budget"
            {...register('budget')}
            className="flex min-h-[44px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-3 py-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2"
          >
            <option value="">Select budget range</option>
            <option value="under-25k">Under $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-plus">$100,000+</option>
          </select>
        </div>
      )}
      {showTimeframe && (
        <div>
          <label htmlFor="timeframe" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Desired Timeframe
          </label>
          <select
            id="timeframe"
            {...register('timeframe')}
            className="flex min-h-[44px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-3 py-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2"
          >
            <option value="">Select timeframe</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6-12months">6-12 months</option>
            <option value="planning">Just planning</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 block">
          Tell us about your project (Optional)
        </label>
        <Textarea
          id="message"
          placeholder="Describe your renovation goals, timeline, or any specific requirements..."
          rows={4}
          className="min-h-[100px] text-sm sm:text-base"
          {...register('message')}
        />
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
        By submitting this form, you agree to be contacted by {BUSINESS.name}. We respect your privacy.
      </p>
    </form>
  )
}

