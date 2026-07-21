# AI Home Renovations Website

A Next.js website for AI Home Renovations, a home renovation company serving Fairless Hills, PA and surrounding areas.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React Hook Form** + **Zod** (form validation)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Project Structure

```
ai-home-renovations/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── services/           # Service pages
│   ├── free-consultation/  # Free consultation landing
│   ├── free-estimate/      # Free estimate form
│   ├── service-areas/      # Service areas page
│   ├── about/              # About page
│   ├── gallery/            # Portfolio gallery
│   ├── faq/                # FAQ page
│   ├── api/leads/          # Lead form API endpoint
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Site header/navigation
│   ├── Footer.tsx          # Footer with NAP
│   ├── Hero.tsx            # Homepage hero section
│   ├── ServicesGrid.tsx    # Services overview
│   ├── ServicePage.tsx     # Service page template
│   ├── ContactForm.tsx     # Lead capture form
│   └── Schema.tsx          # JSON-LD schema components
├── lib/                    # Utilities and helpers
│   ├── constants.ts        # Business info and data
│   ├── utils.ts            # Utility functions
│   ├── seo.ts              # SEO metadata helpers
│   └── schema.ts           # Schema generation
└── public/                 # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Key Features

### Local SEO Optimization

- **Structured Data**: JSON-LD schema for LocalBusiness, Service, FAQPage
- **Meta Tags**: Optimized title tags and meta descriptions with location keywords
- **NAP Consistency**: Name, Address, Phone consistently displayed across site
- **Service Area Pages**: Dedicated content for service areas
- **Internal Linking**: Strategic internal links for SEO

### Pages

1. **Homepage** (`/`) - Hero, services overview, process, testimonials, FAQ, CTA
2. **Services** (`/services`) - Services overview page
3. **Service Landing Pages**:
   - `/services/kitchens` - Kitchen remodeling
   - `/services/bathrooms` - Bathroom renovation
   - `/services/basements` - Basement finishing
   - `/services/additions` - Home additions
4. **Free Consultation** (`/free-consultation`) - Consultation landing page
5. **Free Estimate** (`/free-estimate`) - Detailed estimate request form
6. **Service Areas** (`/service-areas`) - Service area coverage page
7. **About** (`/about`) - Company information
8. **Gallery** (`/gallery`) - Project portfolio
9. **FAQ** (`/faq`) - Frequently asked questions

## Configuration

### Business Information

Update business details in `lib/constants.ts`:

```typescript
export const BUSINESS = {
  name: 'AI Home Renovations',
  phone: '+1 (267) 243-6125',
  // ... other details
}
```

### Form Submissions

The lead form submits to `/api/leads`. Update `app/api/leads/route.ts` to integrate with your CRM/webhook:

```typescript
// Example: Send to webhook
await fetch('https://your-webhook-url.com/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
```

### Phone Number Tracking

To use call tracking, update the phone number in `lib/constants.ts` or use an environment variable:

```typescript
phoneRaw: process.env.NEXT_PUBLIC_PHONE_TRACKING || '2672436125'
```

## SEO Checklist

- [x] LocalBusiness schema markup
- [x] Service schema markup
- [x] FAQ schema markup
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Meta tags on all pages
- [x] NAP consistency
- [x] Internal linking structure
- [x] Mobile-responsive design
- [x] Fast page load times
- [ ] Google Analytics integration (add GA4 tracking code)
- [ ] Google Search Console verification (add meta tag)

## WordPress Migration Notes

### URL parity (SEO)

Canonical paths and 301 redirects live in `lib/wordpress-migration.ts` and are applied via `next.config.ts` (`trailingSlash: true` matches WordPress).

After `npm run build && npm start`, verify every indexed URL:

```bash
npm run verify:seo-urls -- http://localhost:3000
```

### Images

Place images in `public/images/` directory:
- Logo: `public/images/logo.png`
- Gallery images: `public/images/gallery/`
- Service images: `public/images/services/`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_PHONE_TRACKING` (optional, for call tracking)
- `WEBHOOK_URL` (optional, for form submissions)

## Performance Optimization

- Next.js Image component for optimized images
- Lazy loading for below-fold content
- Code splitting via Next.js App Router
- Tailwind CSS for minimal CSS bundle

## Support

For questions or issues, contact the development team.

---

**Business Information:**
- Name: AI Home Renovations
- Phone: (267) 243-6125
- Address: 323 Austin Drive, Fairless Hills, PA 19030
- Service Area: Fairless Hills, PA + ~70-mile radius
