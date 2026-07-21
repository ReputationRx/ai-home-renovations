import ServicePage from '@/components/ServicePage'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { getServiceGallery } from '@/lib/site-assets'

const content = {
  h1: 'Basement Finishing in Fairless Hills, PA | Transform Unused Space',
  intro: 'Turn your unfinished basement into valuable living space. From family rooms to home offices, we create functional, comfortable spaces that add square footage and value to your home.',
  problem: 'Unfinished basements are wasted space. They\'re often damp, dark, and unused - essentially throwing away valuable square footage. You need the extra space, but you\'re not sure if finishing your basement is feasible or worth the investment.',
  solution: `Our basement finishing experts assess your space, address moisture concerns, and create beautiful, functional living areas. We handle everything from framing to finishing, ensuring your basement becomes a comfortable, valuable part of your home.`,
  features: [
    'Moisture assessment and waterproofing solutions',
    'Framing and drywall installation',
    'Electrical and lighting design',
    'HVAC and ventilation planning',
    'Flooring options (carpet, tile, luxury vinyl)',
    'Ceiling options (drywall, drop ceiling)',
    'Custom storage solutions',
    'Bathroom installation (if desired)',
    'Egress window installation (if needed)',
    'Complete finishing and trim work',
  ],
  faqs: [
    {
      question: 'How much does it cost to finish a basement?',
      answer: 'Basement finishing costs vary based on size and features. A basic finish typically ranges from $25-$50 per square foot. Adding a bathroom or custom features increases the cost. We provide detailed estimates based on your specific needs.',
    },
    {
      question: 'Will finishing my basement add value to my home?',
      answer: 'Yes! Finished basements add significant value and appeal to your home. They provide additional living space and can increase your home\'s value by 70-75% of the finishing cost. It\'s one of the best ROI home improvements.',
    },
    {
      question: 'What about moisture and water issues?',
      answer: 'We assess moisture levels and address any water issues before finishing. This may include exterior waterproofing, interior drainage systems, or sump pump installation. We ensure your finished basement stays dry and comfortable.',
    },
    {
      question: 'Do I need permits for basement finishing?',
      answer: 'Yes, basement finishing typically requires permits for electrical, plumbing, and structural work. We handle all permit applications and inspections to ensure your project meets building codes.',
    },
  ],
}

export const metadata = genMeta({
  title: 'Basement Finishing in Fairless Hills, PA | Expert Basement Remodeling',
  description: 'Professional basement finishing in Fairless Hills, PA. Transform unused space into valuable living areas. Free consultations. Licensed & insured. Call (267) 243-6125.',
  path: '/basements',
  keywords: ['basement finishing Fairless Hills', 'basement remodeling PA', 'finished basement'],
})

export default function BasementsPage() {
  return (
    <ServicePage service={SERVICES.basements} content={content} galleryImages={[...getServiceGallery('basements')]} />
  )
}

