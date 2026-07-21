import GalleryGrid from '@/components/GalleryGrid'
import ImageStrip from '@/components/ImageStrip'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SITE_IMAGES } from '@/lib/site-assets'

export const metadata = genMeta({
  title: 'Project Gallery | Home Renovation Portfolio - Fairless Hills, PA',
  description: 'View our portfolio of completed home renovation projects in Fairless Hills, PA. Kitchen remodels, bathroom renovations, basement finishing, and more.',
  path: '/gallery',
  keywords: ['project gallery', 'renovation portfolio', 'before and after'],
})

export default function GalleryPage() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#f0f4f8] dark:from-[#0f172a] dark:to-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ImageStrip
          images={[SITE_IMAGES.hero, SITE_IMAGES.homeGallery[2], SITE_IMAGES.homeGallery[7], SITE_IMAGES.kitchens[1]]}
          className="mb-16"
          columnsClassName="grid-cols-2 lg:grid-cols-4"
          label="Featured renovation photography"
        />
        <GalleryGrid />
      </div>
    </section>
  )
}
