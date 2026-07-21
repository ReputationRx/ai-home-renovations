import ServicePage from '@/components/ServicePage'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { getServiceGallery } from '@/lib/site-assets'

const content = {
  h1: 'Kitchen Remodeling in Fairless Hills, PA | Transform Your Cooking Space',
  intro: 'Your kitchen is the heart of your home. Let us transform it into a beautiful, functional space that your family will love for years to come. Serving Fairless Hills, PA and surrounding areas.',
  problem: 'Outdated kitchens can make your entire home feel dated. Limited counter space, poor lighting, and inefficient layouts make cooking and entertaining a challenge. You deserve a kitchen that matches your lifestyle and adds real value to your home.',
  solution: `At ${SERVICES.kitchens.title}, we design and build kitchens that combine beauty with functionality. From custom cabinetry to modern appliances, we create spaces that make cooking a joy and entertaining effortless. Our team handles everything from design to installation, ensuring a seamless process.`,
  features: [
    'Custom cabinet design and installation',
    'Countertop selection and installation (quartz, granite, marble)',
    'Modern appliance integration',
    'Lighting design and installation',
    'Backsplash design and installation',
    'Flooring options (tile, hardwood, luxury vinyl)',
    'Plumbing and electrical updates',
    'Island and breakfast bar design',
    'Pantry organization solutions',
    'Complete project management',
  ],
  faqs: [
    {
      question: 'How long does a kitchen remodel take?',
      answer: 'Most kitchen remodels take 6-8 weeks from start to finish. This includes design, ordering materials, demolition, installation, and final touches. We provide a detailed timeline during your consultation.',
    },
    {
      question: 'Do I need to move out during the kitchen renovation?',
      answer: 'Most homeowners can stay in their home during a kitchen remodel. We set up a temporary kitchen area and work efficiently to minimize disruption. We\'ll discuss living arrangements during planning.',
    },
    {
      question: 'What is the average cost of a kitchen remodel in Fairless Hills?',
      answer: 'Kitchen remodel costs vary based on size, materials, and scope. A minor refresh can start around $15,000-$25,000, while a full remodel with custom cabinets typically ranges from $40,000-$80,000+. We provide detailed estimates with no obligation.',
    },
    {
      question: 'Do you handle permits for kitchen renovations?',
      answer: 'Yes, we handle all necessary permits and inspections. This ensures your project meets local building codes and protects your investment. We\'ll explain the permit process during your consultation.',
    },
  ],
}

export const metadata = genMeta({
  title: 'Kitchen Remodeling in Fairless Hills, PA | Expert Kitchen Renovation',
  description: 'Professional kitchen remodeling in Fairless Hills, PA. Custom cabinets, modern appliances, and beautiful designs. Free consultations. Licensed & insured. Call (267) 243-6125.',
  path: '/kitchens',
  keywords: ['kitchen remodeling Fairless Hills', 'kitchen renovation PA', 'custom kitchen cabinets'],
})

export default function KitchensPage() {
  return (
    <ServicePage service={SERVICES.kitchens} content={content} galleryImages={[...getServiceGallery('kitchens')]} />
  )
}

