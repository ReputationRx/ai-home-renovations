import ServicePage from '@/components/ServicePage'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { getServiceGallery } from '@/lib/site-assets'

const content = {
  h1: 'Home Additions in Fairless Hills, PA | Expand Your Living Space',
  intro: 'Need more space? We design and build seamless home additions that match your existing home\'s style and add valuable square footage. From master suites to family rooms, we create spaces that feel like they\'ve always been part of your home.',
  problem: 'Your family has outgrown your home, but you love your neighborhood and don\'t want to move. You need more space - another bedroom, a larger kitchen, or a dedicated home office. Moving is expensive and disruptive, but you\'re not sure if an addition is feasible.',
  solution: `Our home addition experts design and build additions that seamlessly integrate with your existing home. We match architectural styles, materials, and finishes so your addition looks like it was always part of the original structure. We handle everything from design to permits to final inspection.`,
  features: [
    'Architectural design and planning',
    'Feasibility assessment and site evaluation',
    'Permit acquisition and management',
    'Foundation and structural work',
    'Roofing and siding that matches existing',
    'Electrical and plumbing installation',
    'HVAC integration',
    'Interior finishing and trim work',
    'Window and door installation',
    'Complete project management',
  ],
  faqs: [
    {
      question: 'How much does a home addition cost?',
      answer: 'Home addition costs vary significantly based on size, complexity, and finishes. Basic additions typically range from $150-$300 per square foot. We provide detailed estimates after assessing your specific needs and site conditions.',
    },
    {
      question: 'How long does a home addition take?',
      answer: 'Most home additions take 3-6 months from design to completion. This includes design, permits, construction, and finishing. Larger or more complex additions may take longer. We provide a detailed timeline during planning.',
    },
    {
      question: 'Do I need permits for a home addition?',
      answer: 'Yes, home additions require multiple permits including building, electrical, plumbing, and sometimes zoning. We handle all permit applications and ensure your addition meets all local building codes and regulations.',
    },
    {
      question: 'Will an addition match my existing home?',
      answer: 'Absolutely! We carefully match your existing home\'s architectural style, materials, and finishes. Our goal is to make your addition look like it was always part of the original structure. We\'ll show you samples and renderings before construction begins.',
    },
  ],
}

export const metadata = genMeta({
  title: 'Home Additions in Fairless Hills, PA | Expert Home Expansion',
  description: 'Professional home additions in Fairless Hills, PA. Seamless expansions that match your existing home. Free consultations. Licensed & insured. Call (267) 243-6125.',
  path: '/additions',
  keywords: ['home additions Fairless Hills', 'home expansion PA', 'house addition'],
})

export default function AdditionsPage() {
  return (
    <ServicePage service={SERVICES.additions} content={content} galleryImages={[...getServiceGallery('additions')]} />
  )
}

