import Image from 'next/image'

type ImageStripProps = {
  images: string[]
  columnsClassName?: string
  /** Short label for accessibility when images are decorative alongside headings */
  label?: string
  className?: string
}

export default function ImageStrip({ images, columnsClassName = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', label, className }: ImageStripProps) {
  if (!images.length) return null

  return (
    <div className={className ?? ''}>
      {label ? (
        <p className="sr-only">{label}</p>
      ) : null}
      <div className={`grid gap-3 sm:gap-4 ${columnsClassName}`}>
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-md ring-1 ring-black/5 dark:bg-[#0f172a] dark:ring-white/10">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
