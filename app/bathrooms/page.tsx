import ServicePage from '@/components/ServicePage'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { getServiceGallery } from '@/lib/site-assets'

const content = {
  h1: 'Bathroom Renovation in Fairless Hills, PA | Create Your Dream Bathroom',
  intro: 'Transform your bathroom into a spa-like retreat. From small powder rooms to luxurious master suites, we create beautiful, functional bathrooms that add value and comfort to your home.',
  problem: 'Outdated bathrooms can feel cramped, inefficient, and uninviting. Poor lighting, worn fixtures, and lack of storage make daily routines frustrating. You spend time here every day - it should be a space you love.',
  solution: `Our bathroom renovation experts combine luxury design with practical functionality. We maximize space, improve lighting, and select fixtures that create a spa-like atmosphere. Whether it's a quick refresh or a complete transformation, we deliver results that exceed expectations.`,
  features: [
    'Custom vanity design and installation',
    'Luxury shower and tub installations',
    'Tile work (flooring, walls, backsplashes)',
    'Modern fixture selection and installation',
    'Lighting design and installation',
    'Heated floor options',
    'Storage solutions and organization',
    'Plumbing and electrical updates',
    'Ventilation improvements',
    'Accessibility features (if needed)',
  ],
  faqs: [
    {
      question: 'How long does a bathroom renovation take?',
      answer: 'A typical bathroom renovation takes 3-5 weeks. This includes design, material ordering, demolition, installation, and finishing. Master bathrooms or larger projects may take 5-7 weeks.',
    },
    {
      question: 'Can I use my bathroom during the renovation?',
      answer: 'During a full bathroom renovation, you\'ll need alternate facilities. We work efficiently to minimize the time your bathroom is out of service. For multi-bathroom homes, we can often work on one bathroom at a time.',
    },
    {
      question: 'What is included in a bathroom renovation?',
      answer: 'Our bathroom renovations include new fixtures, tile work, vanity, lighting, plumbing updates, and electrical work. We can also add features like heated floors, custom storage, and luxury upgrades. We\'ll discuss all options during your consultation.',
    },
    {
      question: 'Do you offer bathroom design services?',
      answer: 'Yes! Our design process includes 3D renderings so you can visualize your new bathroom before we begin. We help you select fixtures, finishes, and layouts that match your style and budget.',
    },
  ],
}

export const metadata = genMeta({
  title: 'Bathroom Renovation in Fairless Hills, PA | Expert Bathroom Remodeling',
  description: 'Professional bathroom renovation in Fairless Hills, PA. Luxury fixtures, modern design, and quality craftsmanship. Free consultations. Licensed & insured. Call (267) 243-6125.',
  path: '/bathrooms',
  keywords: ['bathroom renovation Fairless Hills', 'bathroom remodeling PA', 'bathroom remodel'],
})

export default function BathroomsPage() {
  return (
    <ServicePage service={SERVICES.bathrooms} content={content} galleryImages={[...getServiceGallery('bathrooms')]} />
  )
}

