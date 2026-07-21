# Images Directory

This directory contains all images downloaded from the WordPress site (aihomerenovations.com).

## Directory Structure

```
images/
├── logo/
│   └── logo.jpg              # Main company logo
├── hero/
│   ├── hero-1.jpg            # Hero section image
│   └── service-cta.jpg       # Service/CTA image
├── gallery/
│   ├── project-1.jpg         # Project gallery image
│   ├── blog-1.jpg            # Blog/gallery image 1
│   ├── blog-3.jpg            # Blog/gallery image 3
│   ├── blog-4.jpg            # Blog/gallery image 4
│   └── blog-7.jpg            # Blog/gallery image 7
└── backgrounds/
    ├── bg-1.png              # Background image 1
    ├── bg-2.jpg               # Background image 2
    ├── bg-3.png               # Background image 3
    └── bg-4.png               # Background image 4
```

## Usage in Next.js

Use the Next.js Image component for optimized images:

```tsx
import Image from 'next/image'

<Image
  src="/images/logo/logo.jpg"
  alt="AI Home Renovations Logo"
  width={200}
  height={100}
  priority
/>
```

## Image Optimization

All images should be optimized before production:
- Use Next.js Image component (automatic optimization)
- Consider WebP format for better compression
- Compress large images using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)

## Notes

- Images downloaded from: https://aihomerenovations.com
- Download date: 2024
- Original WordPress uploads directory: `/wp-content/uploads/2024/`

