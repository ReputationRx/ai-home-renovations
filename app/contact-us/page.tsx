import ContactForm from '@/components/ContactForm'
import ImageStrip from '@/components/ImageStrip'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Lightbulb } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { PAGE_BANNER_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Contact Us | Home Renovation Experts in Fairless Hills, PA',
  description: `Schedule your free, no-obligation home renovation consultation in ${BUSINESS.baseLocation}. Expert advice, design ideas, and transparent pricing. Call ${BUSINESS.phoneFormatted}.`,
  path: '/contact-us',
  keywords: ['free consultation', 'home renovation consultation Fairless Hills'],
})

export default function ContactUsPage() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="accent-red">Free</span> Home Renovation Consultation
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Get <span className="accent-red font-semibold">expert advice</span>, design ideas, and transparent pricing - all at <span className="accent-red font-semibold">no cost</span> or obligation
            </p>
            <ImageStrip images={[...PAGE_BANNER_IMAGES]} className="mt-10" columnsClassName="grid-cols-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <Clock className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What to <span className="accent-red">Expect</span></h2>
                <p className="text-gray-900 dark:text-gray-200">
                  Our consultation typically takes 60-90 minutes. We'll visit your home, discuss your goals, 
                  assess your space, and answer all your questions about the renovation process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Who <span className="accent-red">It's For</span></h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Whether you're planning a major remodel or just exploring options, our free consultation 
                  is perfect for homeowners who want honest advice and transparent information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Lightbulb className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What You'll <span className="accent-red">Learn</span></h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We'll discuss design options, material choices, timeline expectations, permit requirements, 
                  and provide a rough cost estimate for your project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"><span className="accent-red">No Pressure</span></h2>
                <p className="text-gray-700 dark:text-gray-300">
                  This is an educational consultation. We're here to help you make informed decisions, 
                  not to pressure you into anything. Take your time to think it over.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#f0f4f8] dark:bg-[#0f172a] rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's Included in Your <span className="accent-red">Free</span> Consultation</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200">In-home visit to assess your <span className="accent-red font-semibold">space</span></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200">Discussion of your <span className="accent-red font-semibold">goals</span> and vision</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Design ideas</span> and material recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Timeline</span> and process overview</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200">Rough <span className="accent-red font-semibold">cost estimate</span></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-900 dark:text-gray-200">Answers to all your <span className="accent-red font-semibold">questions</span></span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Schedule Your <span className="accent-red">Free</span> Consultation</h2>
            <ContactForm />
          </div>

          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">Prefer to talk? Give us a <span className="accent-red font-semibold">call</span>:</p>
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

