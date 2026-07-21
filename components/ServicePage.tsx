import { Card, CardContent } from './ui/card'
import ContactForm from './ContactForm'
import { Button } from './ui/button'
import { Phone, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import { ServiceSchema } from './Schema'
import ImageStrip from './ImageStrip'

interface ServicePageProps {
  service: {
    slug: string
    title: string
    shortTitle: string
    description: string
    offer: string
  }
  content: {
    h1: string
    intro: string
    problem: string
    solution: string
    features: string[]
    faqs: Array<{ question: string; answer: string }>
  }
  galleryImages?: string[]
}

export default function ServicePage({ service, content, galleryImages }: ServicePageProps) {
  return (
    <>
      <ServiceSchema serviceName={service.title} description={content.intro} />
      <section className="py-20 bg-gradient-to-br from-[#f0f4f8] to-white dark:from-[#0f172a] dark:to-[#0f172a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {content.h1}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{content.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact-us" className="text-white">
                  Get <span style={{ color: '#DC2626' }}>Free</span> Estimate
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-gray-900">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phoneFormatted}
                </a>
              </Button>
            </div>
          </div>

          {galleryImages && galleryImages.length > 0 ? (
            <div className="mt-12 max-w-6xl mx-auto">
              <ImageStrip images={galleryImages.slice(0, 4)} label={`${service.title} project photos`} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The <span className="accent-red">Problem</span></h2>
              <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed">{content.problem}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-8 ring-1 ring-black/5 dark:bg-[#0f172a] dark:ring-white/[0.08]">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our <span className="accent-red">Solution</span></h2>
              <p className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed">{content.solution}</p>
            </div>
          </div>

          {galleryImages && galleryImages.length > 4 ? (
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                More <span className="accent-red">project inspiration</span>
              </h3>
              <ImageStrip
                images={galleryImages.slice(4)}
                columnsClassName="grid-cols-2 md:grid-cols-3"
                label={`Additional ${service.title} photos`}
              />
            </div>
          ) : null}

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              What's Included in Your <span className="accent-red">{service.title}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-900 dark:text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 rounded-lg bg-[#f0f4f8] p-8 ring-1 ring-black/5 dark:bg-[#0f172a] dark:ring-white/[0.08]">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 accent-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <span className="accent-red">Limited Availability</span> - Book Now
                </h3>
                <p className="text-gray-900 dark:text-gray-200">
                  We only take on a limited number of <span className="accent-red font-semibold">{service.shortTitle.toLowerCase()}</span> projects each month to maintain our high quality standards. 
                  We're currently booking projects for the next <span className="accent-red font-semibold">30-60 days</span>. Contact us today to secure your spot.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              <span className="accent-red">Special Offer</span>: {service.offer}
            </h2>
            <Card className="border-[#DC2626] bg-gradient-to-br from-[#DC2626] to-white dark:border-white/[0.08] dark:from-[#0f172a] dark:to-[#0f172a]">
              <CardContent className="p-8">
                <p className="text-lg text-gray-900 dark:text-gray-200 text-center">
                  {service.offer}. This offer is available for homeowners in <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span> and surrounding areas. 
                  <span className="accent-red font-semibold">Limited time offer</span> - call today to learn more!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions About <span className="accent-red">{service.title}</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {content.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-900 dark:text-gray-200">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to <span className="accent-red">Get Started</span>?
              </h2>
              <p className="text-lg text-gray-900 dark:text-gray-200 mb-6">
                Fill out the form below or call us directly at <span className="accent-red font-semibold">{BUSINESS.phoneFormatted}</span> to schedule your <span className="accent-red font-semibold">free consultation</span>. 
                We serve homeowners throughout <span className="accent-red font-semibold">{BUSINESS.baseLocation}</span> and surrounding communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Free</span> consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Licensed</span> & insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-900 dark:text-gray-200"><span className="accent-red font-semibold">Transparent</span> pricing</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm defaultProjectType={service.slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

