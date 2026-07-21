import ContactForm from '@/components/ContactForm'
import ImageStrip from '@/components/ImageStrip'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, FileText, Calculator, Clock } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Free Estimate | Home Renovation Quote in Fairless Hills, PA',
  description: `Get your free, detailed home renovation estimate in ${BUSINESS.baseLocation}. Transparent pricing, no hidden fees. Call ${BUSINESS.phoneFormatted} or request online.`,
  path: '/free-estimate',
  keywords: ['free estimate', 'home renovation quote Fairless Hills', 'renovation cost estimate'],
})

export default function FreeEstimatePage() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get Your <span className="accent-red">Free</span> Home Renovation Estimate
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              <span className="accent-red font-semibold">Transparent pricing</span>, detailed breakdowns, and <span className="accent-red font-semibold">no hidden fees</span>. Get started today.
            </p>
            <ImageStrip
              images={[SITE_IMAGES.kitchens[0], SITE_IMAGES.additions[0], SITE_IMAGES.bathrooms[0]]}
              className="mt-10"
              columnsClassName="grid-cols-3"
              label="Renovation projects"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 accent-red mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2"><span className="accent-red">Detailed</span> Estimate</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Itemized breakdown of all costs, materials, and labor
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Calculator className="h-8 w-8 accent-red mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2"><span className="accent-red">No Hidden</span> Fees</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Transparent pricing with everything included upfront
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 accent-red mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2"><span className="accent-red">Quick</span> Response</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  We typically respond within <span className="accent-red font-semibold">24 hours</span> of your request
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 dark:bg-[#0f172a] rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Our <span className="accent-red">Estimate</span> Process Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 accent-red bg-[#DC2626] text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Submit Your <span className="accent-red">Request</span></h3>
                  <p className="text-gray-900 dark:text-gray-200">Fill out the form below with details about your project</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 accent-red bg-[#DC2626] text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">We <span className="accent-red">Review</span> Your Project</h3>
                  <p className="text-gray-900 dark:text-gray-200">Our team reviews your information and prepares for your consultation</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 accent-red bg-[#DC2626] text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">In-Home <span className="accent-red">Consultation</span></h3>
                  <p className="text-gray-900 dark:text-gray-200">We visit your home to assess the space and discuss your vision</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 accent-red bg-[#DC2626] text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Receive Your <span className="accent-red">Estimate</span></h3>
                  <p className="text-gray-900 dark:text-gray-200">You'll receive a detailed, written estimate within <span className="accent-red font-semibold">48 hours</span></p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Request Your <span className="accent-red">Free</span> Estimate</h2>
            <ContactForm showBudget={true} showTimeframe={true} />
          </div>

          <Card className="bg-[#f0f4f8] dark:bg-[#0f172a] border-[#bcccdc] dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Our <span className="accent-red">Estimates</span>?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">No obligation</span> - take your time to decide</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Detailed breakdown</span> of all costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-900 dark:text-gray-200">Valid for <span className="accent-red font-semibold">30 days</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-900 dark:text-gray-200">Includes <span className="accent-red font-semibold">material</span> and <span className="accent-red font-semibold">labor</span> costs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-gray-700 dark:text-gray-300 mb-4"><span className="accent-red font-semibold">Questions</span>? Call us directly:</p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-2xl font-bold accent-red hover:opacity-80"
            >
              {BUSINESS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

