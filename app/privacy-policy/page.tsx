import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Home Renovations',
  description:
    'Privacy policy for AI Home Renovations. Learn how we handle your contact information and project details for renovation services in Fairless Hills, PA.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-[#f0f4f8] dark:from-[#0f172a] dark:to-[#0f172a]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-gray-800 dark:text-gray-200">
        <div className="relative aspect-[21/9] max-h-56 w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <Image src={SITE_IMAGES.interiors[0]} alt="" fill className="object-cover" sizes="(max-width:896px) 100vw, 896px" priority />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-gray-900 dark:text-gray-200">
          At AI Home Renovations, we respect your privacy. This policy outlines how we collect, use, and protect your
          information when you contact us for renovation services in Fairless Hills, PA, and surrounding areas.
        </p>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What we collect</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-gray-200">
            <li>Contact details you provide (name, phone, email, address)</li>
            <li>Project information (service type, budget, timeline, project notes)</li>
            <li>Basic site analytics (non-identifying) to improve our website</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How we use your information</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-gray-200">
            <li>To contact you about consultations, estimates, and project updates</li>
            <li>To improve our services, scheduling, and communication</li>
            <li>To send occasional updates or offers (you can opt out anytime)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How we protect your data</h2>
          <p className="text-gray-900 dark:text-gray-200">
            We limit access to submitted data to our team members who need it to serve you, and we do not sell or trade
            your information. If we use third-party tools (e.g., email or CRM providers), we work with reputable vendors
            that align with this policy.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your choices</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-gray-200">
            <li>You may request to update or delete your information.</li>
            <li>You can opt out of marketing emails at any time.</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          For questions about this policy, contact us at info@aihomerenovations.com or call +1 (267) 243-6125.
        </p>
      </div>
    </section>
  )
}

