import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Home Renovation Experts in Fairless Hills, PA',
  description: 'AI Home Renovations: Licensed, insured home remodeling in Fairless Hills, PA. Kitchen, bathroom, basement, and addition services. Free consultations. Call (267) 243-6125.',
  keywords: ['home renovation Fairless Hills', 'kitchen remodeling PA', 'bathroom renovation'],
})

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTASection />
    </>
  )
}
