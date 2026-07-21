import ImageStrip from '@/components/ImageStrip'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Award, Users, Heart } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { PROCESS_SHOWCASE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'About Us | AI Home Renovations - Fairless Hills, PA',
  description: `Learn about ${BUSINESS.name}, your trusted home renovation experts in ${BUSINESS.baseLocation}. Licensed, insured, and committed to quality craftsmanship.`,
  path: '/about',
  keywords: ['about us', 'home renovation company Fairless Hills'],
})

export default function AboutPage() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="accent-red">{BUSINESS.name}</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Your trusted partner for home renovations in <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span> and surrounding areas
            </p>
            <ImageStrip images={[...PROCESS_SHOWCASE_IMAGES]} className="mt-10 max-w-5xl mx-auto" columnsClassName="grid-cols-2 sm:grid-cols-5" />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed mb-6">
              For over <span className="accent-red font-semibold">15 years</span>, {BUSINESS.name} has been transforming homes throughout <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span> 
              and the surrounding <span className="accent-red font-semibold">Pennsylvania</span> and <span className="accent-red font-semibold">New Jersey</span> communities. We started with a simple mission: 
              to provide homeowners with exceptional renovation services that combine <span className="accent-red font-semibold">quality craftsmanship</span>, 
              transparent communication, and honest pricing.
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed mb-6">
              What sets us apart is our commitment to treating every project as if it were our own home. 
              We understand that home renovations can be stressful, which is why we focus on <span className="accent-red font-semibold">clear communication</span>, 
              detailed planning, and minimizing disruption to your daily life.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              Our team of <span className="accent-red font-semibold">licensed, insured</span> professionals brings years of experience to every project. 
              From small updates to complete home transformations, we have the expertise and resources to 
              bring your vision to life while staying <span className="accent-red font-semibold">on time</span> and <span className="accent-red font-semibold">on budget</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <Award className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our <span className="accent-red">Values</span></h2>
                <ul className="space-y-2 text-gray-900 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Quality craftsmanship in every detail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Transparent, honest communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Respect for your home and time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Fair, upfront pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 accent-red mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Why <span className="accent-red">Choose Us</span></h2>
                <ul className="space-y-2 text-gray-900 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span><span className="accent-red font-semibold">15+</span> years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span><span className="accent-red font-semibold">Licensed</span> and fully insured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span><span className="accent-red font-semibold">500+</span> successful projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span><span className="accent-red font-semibold">100%</span> satisfaction guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#f0f4f8] dark:bg-[#0f172a] rounded-lg p-8 text-center">
            <Heart className="h-12 w-12 accent-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="accent-red">Commitment</span> to You
            </h2>
            <p className="text-lg text-gray-900 dark:text-gray-200 max-w-2xl mx-auto">
              We're not just contractors - we're your <span className="accent-red font-semibold">neighbors</span>, committed to building lasting relationships 
              with homeowners throughout <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span> and surrounding communities. Your <span className="accent-red font-semibold">satisfaction</span> 
              is our success, and we stand behind every project we complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

