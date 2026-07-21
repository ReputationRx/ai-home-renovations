# Design Guide - AI Home Renovations

## Premium Design System

This document outlines the high-end, upscale design system implemented for AI Home Renovations.

---

## Color Palette

### Primary Colors (Navy Blue)
- **Primary 50**: `#f0f4f8` - Lightest background
- **Primary 100**: `#d9e2ec` - Subtle backgrounds
- **Primary 600**: `#486581` - Main brand color
- **Primary 700**: `#334e68` - Hover states
- **Primary 800**: `#243b53` - Dark accents
- **Primary 900**: `#102a43` - Deepest shade

### Accent Colors (Luxury Gold)
- **Accent 400**: `#fbbf24` - Primary accent
- **Accent 500**: `#f59e0b` - Hover states
- **Accent 600**: `#d97706` - Active states

### Grays
- **Gray 50-900**: Professional gray scale for text and backgrounds

---

## Typography

### Font Stack
- **Primary**: Geist Sans (via Next.js)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif

### Font Sizes
- **Hero Headlines**: 5xl-7xl (48px-72px) - Extra bold (800)
- **Section Headlines**: 4xl-5xl (36px-48px) - Extra bold (800)
- **Subheadings**: 2xl-3xl (24px-30px) - Bold (700)
- **Body Text**: base-lg (16px-18px) - Regular (400)
- **Small Text**: sm (14px) - Medium (500)

### Font Weights
- **Extra Bold (800)**: Headlines
- **Bold (700)**: Subheadings, CTAs
- **Semibold (600)**: Important text
- **Medium (500)**: Labels, buttons
- **Regular (400)**: Body text

---

## Spacing System

### Section Padding
- **Mobile**: 6rem (96px) top/bottom
- **Desktop**: 8rem (128px) top/bottom

### Component Spacing
- **Cards**: 8 (32px) padding
- **Buttons**: 6-10 (24px-40px) horizontal padding
- **Grid Gaps**: 6-8 (24px-32px)

---

## Components

### Buttons

#### Primary Button
- **Background**: Gradient from Primary 700 to Primary 900
- **Text**: White
- **Padding**: 14px vertical, 40px horizontal (lg)
- **Border Radius**: 12px (rounded-xl)
- **Shadow**: Premium shadow with hover lift
- **Hover**: Scale 105%, darker gradient, larger shadow

#### Outline Button
- **Border**: 2px solid Primary 700
- **Background**: White
- **Text**: Primary 700
- **Hover**: Primary 50 background, Primary 800 border/text

### Cards

#### Standard Card
- **Border Radius**: 16px (rounded-2xl)
- **Border**: 1px gray-100
- **Shadow**: Premium shadow
- **Hover**: Lift effect (-translate-y-1), larger shadow
- **Padding**: 32px (p-8)

#### Premium Card
- **Background**: Gradient from white to Primary 50
- **Border**: 2px transparent (hover: Accent 200)
- **Enhanced shadow**: Premium shadow-lg

### Hero Section

#### Design Elements
- **Background**: Gradient from Primary 50 via white to Primary 100
- **Animated Blobs**: Subtle background animations
- **Badge**: Glass effect with backdrop blur
- **Image Container**: Rounded-3xl with gradient overlay
- **Floating Badge**: A+ rating badge with accent border

---

## Visual Effects

### Shadows
- **Premium Shadow**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
- **Premium Shadow LG**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

### Gradients
- **Text Gradient**: Primary 700 to Primary 900
- **Button Gradient**: Primary 700 to Primary 900
- **Background Gradients**: Subtle Primary 50 to white transitions

### Glass Effect
- **Background**: `rgba(255, 255, 255, 0.95)`
- **Backdrop Filter**: `blur(10px)`
- Used in: Header, badges, overlays

### Animations
- **Fade In**: Opacity 0 to 1
- **Slide Up**: Y: 20-30px to 0
- **Scale**: 0.9-0.95 to 1
- **Duration**: 0.5-0.8s
- **Easing**: Custom cubic-bezier for smooth motion

---

## Design Tools Recommendations

### For Design Mockups & Prototyping

1. **Figma** (Recommended)
   - Best for: Collaborative design, component libraries, prototyping
   - Free tier available
   - Export assets directly
   - Great for responsive design

2. **Adobe XD**
   - Best for: High-fidelity prototypes, animations
   - Part of Creative Cloud
   - Good for complex interactions

3. **Sketch**
   - Best for: Mac-only teams
   - Strong plugin ecosystem
   - Good for detailed UI design

### For Graphics & Branding

1. **Canva Pro**
   - Best for: Quick graphics, social media, marketing materials
   - Easy to use
   - Template library
   - Good for non-designers

2. **Adobe Illustrator**
   - Best for: Logo design, vector graphics, brand identity
   - Industry standard
   - Precise control

3. **Adobe Photoshop**
   - Best for: Image editing, photo manipulation
   - Essential for photo work

### For Inspiration

1. **Dribbble** - UI/UX design inspiration
2. **Behance** - Portfolio showcase
3. **Awwwards** - Award-winning websites
4. **Pinterest** - Design mood boards

---

## Design Principles

### 1. Luxury & Trust
- Deep navy blues convey professionalism and trust
- Gold accents add premium feel
- Generous white space for elegance

### 2. Clarity & Hierarchy
- Clear typography hierarchy
- Consistent spacing system
- Visual flow guides user attention

### 3. Premium Interactions
- Smooth animations (300ms transitions)
- Hover effects on interactive elements
- Micro-interactions for feedback

### 4. Mobile-First
- Responsive breakpoints
- Touch-friendly targets (min 44px)
- Optimized for all screen sizes

### 5. Performance
- Optimized images
- CSS-only animations where possible
- Minimal JavaScript for interactions

---

## Implementation Notes

### CSS Variables
All colors are defined as CSS variables for easy theming:
```css
--primary-600: #486581;
--accent-500: #f59e0b;
```

### Tailwind Classes
Custom utilities added:
- `.gradient-text` - Gradient text effect
- `.premium-shadow` - Standard premium shadow
- `.premium-shadow-lg` - Large premium shadow
- `.glass-effect` - Glass morphism effect
- `.section-padding` - Consistent section spacing

### Framer Motion
Used for:
- Page load animations
- Scroll-triggered animations
- Hover interactions
- Smooth transitions

---

## Brand Guidelines

### Logo Usage
- Minimum size: 120px width
- Clear space: 2x logo height
- Never stretch or distort

### Color Usage
- Primary navy: Main brand color (60%)
- Gold accent: CTAs, highlights (10%)
- Grays: Text, backgrounds (30%)

### Imagery Style
- High-quality, professional photos
- Natural lighting preferred
- Before/after comparisons
- Lifestyle shots of completed projects

---

## Accessibility

- **Contrast Ratios**: WCAG AA compliant (4.5:1 minimum)
- **Focus States**: Visible outlines on all interactive elements
- **Touch Targets**: Minimum 44x44px
- **Text Sizes**: Minimum 16px body text
- **Alt Text**: All images have descriptive alt text

---

## Next Steps

1. **Add Real Images**: Replace placeholders with high-quality project photos
2. **Logo Design**: Create professional logo (recommend Figma or Illustrator)
3. **Brand Photography**: Schedule professional photo shoot
4. **Icon Set**: Consider custom icon set or premium icon library
5. **Animation Refinement**: Fine-tune animation timings based on user testing

---

## Resources

- **Color Palette Generator**: [Coolors.co](https://coolors.co)
- **Typography Pairing**: [FontPair.co](https://fontpair.co)
- **Design Inspiration**: [Dribbble](https://dribbble.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide Icons](https://lucide.dev)

---

**Last Updated**: 2024
**Design System Version**: 1.0

