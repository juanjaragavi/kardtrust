# KardTrust Branding Guide

**Version:** 1.0.0  
**Last Updated:** October 22, 2025  
**Project Type:** Next.js 15+ Financial Comparison Portal  
**Target Market:** United States

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Brand Identity](#brand-identity)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Logo Assets](#logo-assets)
6. [Brand Voice & Messaging](#brand-voice--messaging)
7. [Visual Design System](#visual-design-system)
8. [Component Styling](#component-styling)
9. [SEO & Metadata](#seo--metadata)
10. [Technical Configuration](#technical-configuration)
11. [Content Guidelines](#content-guidelines)
12. [Localization](#localization)
13. [Implementation References](#implementation-references)

---

## Brand Overview

### Brand Name

#### **KardTrust**

### Legal Entity

#### **TOP NETWORKS INC**

### Brand Positioning

KardTrust is a trusted financial comparison platform specializing in credit cards, personal loans, and financial guidance for the United States market. We empower consumers to make informed financial decisions through expert advice, comprehensive comparisons, and user-friendly tools.

### Mission Statement

To provide Americans with the most comprehensive, accurate, and user-friendly financial comparison tools and educational resources, helping them find the perfect credit cards and loans tailored to their unique needs.

### Target Audience

- **Primary:** US consumers aged 25-55 seeking credit cards and personal loans
- **Secondary:** Financial novices seeking educational content
- **Geographic:** United States (all states and territories)

### Brand Personality

- **Trustworthy:** Reliable, accurate information backed by expert research
- **Accessible:** Simple, jargon-free language that anyone can understand
- **Modern:** Contemporary design with cutting-edge comparison tools
- **Empowering:** Tools and knowledge that put control in users' hands

---

## Brand Identity

### Brand Keywords

- Trust
- Clarity
- Empowerment
- Expertise
- Simplicity
- American

### Brand Promise

"Your trusted guide to finance in the United States."

### Value Propositions

1. **Expert Guidance:** Professional financial advice tailored for US consumers
2. **Comprehensive Comparison:** Side-by-side analysis of credit cards and loans
3. **Personalized Recommendations:** Smart tools that match products to individual needs
4. **Educational Resources:** Clear, actionable financial literacy content
5. **Always Up-to-Date:** Current information on rates, terms, and offers

---

## Color Palette

### Primary Colors

#### Primary Red

- **HEX:** `#DC2626` (Tailwind: red-600)
- **HEX Light:** `#EF4444` (Tailwind: red-500)
- **HEX Dark:** `#B91C1C` (Tailwind: red-700)
- **HEX Accent:** `#F87171` (Tailwind: red-400)
- **Usage:** Primary CTAs, brand elements, emphasis, trust indicators
- **Accessibility:** WCAG AA compliant on white backgrounds
- **CSS Variable:** `--primary`
- **Tailwind Classes:** `bg-primary`, `text-primary`, `border-primary`

#### Secondary Blue

- **HEX:** `#2563EB` (Tailwind: blue-600)
- **HEX Light:** `#3B82F6` (Tailwind: blue-500)
- **HEX Dark:** `#1D4ED8` (Tailwind: blue-700)
- **HEX Navy:** `#1E3A8A` (Tailwind: blue-900)
- **Usage:** Secondary CTAs, links, interactive elements, information
- **CSS Variable:** `--secondary`
- **Tailwind Classes:** `bg-secondary`, `text-secondary`, `border-secondary`

### Neutral Colors

#### Grayscale

- **Gray-900:** `#111827` - Primary text, headings
- **Gray-800:** `#1F2937` - Body text, darker elements
- **Gray-700:** `#374151` - Secondary text
- **Gray-500:** `#6B7280` - Muted text, meta information
- **Gray-100:** `#F3F4F6` - Backgrounds, subtle separators
- **White:** `#FFFFFF` - Page background, card backgrounds

### Accent Colors

#### Footer Blue

- **HEX:** `#3F67B9` - Footer background
- **HEX Light:** `#55B9FF` - Footer hover states, accents
- **Usage:** Footer section, social media icons, secondary accents

### Theme Colors (PWA)

- **Background:** `#FFFFFF`
- **Theme:** `#DC2626` (Primary Red)

### Color Usage Guidelines

#### Text Colors

- **Primary Text:** Gray-900 (`#111827`)
- **Secondary Text:** Gray-700 (`#374151`)
- **Muted Text:** Gray-500 (`#6B7280`)
- **Link Text:** Blue-900 (`#1E3A8A`)
- **Link Hover:** Primary Red with underline

#### Background Colors

- **Page Background:** White with subtle gradient
- **Card Background:** White
- **Section Background:** Gray-100 (alternating sections)
- **Footer Background:** `#3F67B9`

#### Interactive Elements

- **Primary Button:** `#DC2626` background, white text
- **Primary Button Hover:** `#B91C1C`
- **Secondary Button:** White background, gray-900 text, gray-300 border
- **Secondary Button Hover:** Gray-100 background
- **Link Default:** `#1E3A8A`
- **Link Hover:** `#DC2626` with underline

### Accessibility Standards

- All color combinations meet WCAG 2.1 Level AA standards (4.5:1 contrast ratio minimum)
- Primary red on white: 5.6:1 contrast ratio
- Gray-900 on white: 16.5:1 contrast ratio
- All interactive elements have clear focus states

---

## Typography

### Font Family

#### Primary Font: Inter

- **Usage:** All text content
- **Weight Range:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Format:** Google Fonts, self-hosted
- **Fallback Stack:** `var(--font-inter), system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif`
- **CSS Variable:** `--font-inter`
- **Character Set:** Latin (includes US English)
- **Loading Strategy:** `display: swap` for performance

### Typography Scale

#### Headings

##### H1

- **Font Size:** 16px
- **Font Weight:** 700 (Bold)
- **Line Height:** 28px (1.75)
- **Color:** Gray-800 (`#1F2937`)
- **Class:** `.text-h1`
- **Usage:** Page titles, hero headings

##### H2

- **Font Size:** 12px
- **Font Weight:** 400 (Regular)
- **Line Height:** 24px (2)
- **Color:** Gray-800
- **Class:** `.text-h2`
- **Usage:** Section headings, major divisions

##### H3

- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 24px (1.71)
- **Color:** Gray-800
- **Class:** `.text-h3`
- **Usage:** Sub-sections, card titles

#### Body Text

##### Paragraph

- **Font Size:** 14px (text-sm)
- **Font Weight:** 400 (Regular)
- **Line Height:** 20px (1.43)
- **Color:** Gray-800
- **Class:** `.text-body`
- **Usage:** Standard body content

##### List Items

- **Font Size:** 14px (text-sm)
- **Line Height:** 20px
- **Color:** Gray-800
- **Class:** `.text-list`
- **Usage:** Bulleted and numbered lists

#### Specialized Text

##### Links

- **Font Size:** Inherits from parent
- **Color:** Blue-900 (`#1E3A8A`)
- **Hover Color:** Primary Red with underline
- **Class:** `.text-link`
- **Decoration:** Underline on hover

##### Meta/Caption

- **Font Size:** 14px (text-sm)
- **Line Height:** 20px
- **Color:** Gray-800
- **Class:** `.text-meta`
- **Usage:** Captions, dates, secondary information

##### CTA Text

- **Font Size:** 12px
- **Font Weight:** 500 (Medium)
- **Class:** `.text-cta`
- **Usage:** Call-to-action buttons

##### Large Text

- **Font Size:** 24px
- **Font Weight:** 700 (Bold)
- **Class:** `.text-large`
- **Usage:** Hero statements, emphasis

#### Component-Specific Typography

##### Card Title

- **Font Weight:** 500 (Medium)
- **Font Size:** 14px (text-sm)
- **Line Height:** 20px
- **Margin Bottom:** 4px
- **Class:** `.card-title`

##### Card Meta

- **Font Size:** 14px (text-sm)
- **Line Height:** 20px
- **Opacity:** 90%
- **Class:** `.card-meta`

##### Badge Text

- **Font Size:** 14px (text-sm)
- **Line Height:** 20px
- **Background:** Gray-100
- **Color:** Gray-800
- **Padding:** 4px 8px
- **Border Radius:** Full (pill shape)
- **Class:** `.badge-text`

##### Navigation Link

- **Font Size:** 14px (text-sm)
- **Color:** Gray-800
- **Hover Color:** `#222442`
- **Transition:** Colors, 200ms
- **Line Height:** 20px
- **Class:** `.nav-link`

#### Footer Typography

##### Footer H2

- **Font Size:** 12px
- **Color:** White
- **Line Height:** Tight
- **Class:** `.footer-h2`

##### Footer H3

- **Font Size:** 12px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** White
- **Line Height:** Tight
- **Class:** `.footer-h3`

##### Footer Text

- **Font Size:** 14px (text-sm)
- **Color:** White
- **Line Height:** 20px
- **Class:** `.footer-text`

##### Footer Meta

- **Font Size:** 14px (text-sm)
- **Color:** White
- **Line Height:** 20px
- **Class:** `.footer-meta`

### Typography Best Practices

1. **Hierarchy:** Maintain clear visual hierarchy through size and weight
2. **Readability:** Ensure sufficient line height for comfortable reading
3. **Consistency:** Use defined classes for all text elements
4. **Accessibility:** Minimum 14px font size for body text
5. **Performance:** Use font-display: swap to prevent FOIT

---

## Logo Assets

### Logo Specifications

#### Color Logo (Light Backgrounds)

- **URL:** `https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-dark.png?w=200&q=75`
- **Alt Text:** "KardTrust"
- **Dimensions:** 160px × 42px (optimal display size)
- **Format:** PNG (optimized)
- **File Size:** ~4KB
- **Usage:** Header, light backgrounds, general use
- **Background:** Transparent
- **Location Variable:** `logos.colorLogo` (lib/images/logos.ts)

#### White Logo (Dark Backgrounds)

- **URL:** `https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-clear.png?w=200&q=75`
- **Alt Text:** "KardTrust"
- **Dimensions:** 160px × 42px (optimal display size)
- **Format:** PNG (optimized)
- **File Size:** ~4KB
- **Usage:** Footer, dark backgrounds
- **Background:** Transparent
- **Location Variable:** `logos.whiteLogo` (lib/images/logos.ts)

### Logo Usage Guidelines

#### Minimum Size

- **Digital:** 120px width minimum
- **Print:** 1 inch width minimum

#### Clear Space

- Maintain minimum clear space equal to the height of the "K" in KardTrust on all sides

#### Don'ts

- ❌ Do not stretch or distort the logo
- ❌ Do not change logo colors
- ❌ Do not add effects (shadows, outlines, etc.)
- ❌ Do not place on busy backgrounds without sufficient contrast
- ❌ Do not rotate the logo

### Favicon & PWA Icons

#### Favicon

- **Location:** `/favicon.png`, `/favicon.ico`
- **Format:** PNG (primary), ICO (fallback)
- **Sizes:** 32×32, 48×48, 64×64
- **Source:** `https://media.topfinanzas.com/images/kardtrust/favicon.png`

#### Apple Touch Icon

- **Location:** `/apple-touch-icon.png`
- **Format:** PNG
- **Size:** 180×180
- **Background:** White with padding

#### PWA Icons

- **192×192:** `/images/optimized/favicon-640.webp`
- **512×512:** `/images/favicon.webp`
- **Format:** WebP for optimal performance
- **Purpose:** Progressive Web App manifest icons

### CDN & Image Optimization

- **CDN:** `https://media.topfinanzas.com/`
- **Query Parameters:** `?w=200&q=75` for optimization
- **Strategy:** Preconnect to CDN for faster loading
- **Caching:** Long-term caching (31536000 seconds)

---

## Brand Voice & Messaging

### Voice Characteristics

#### Tone Attributes

1. **Trustworthy** - Authoritative without being patronizing
2. **Clear** - Simple language, no unnecessary jargon
3. **Helpful** - Focus on user benefit and education
4. **Professional** - Expert knowledge delivered accessibly
5. **Encouraging** - Empower users to take control of their finances

### Writing Guidelines

#### Language Style

- **Active Voice:** Preferred over passive
- **Second Person:** Direct address to user ("You can...")
- **Present Tense:** Immediate, actionable guidance
- **Concise:** Value user's time with clear, brief explanations
- **American English:** US spelling, terminology, and cultural references

#### Terminology

##### Use These Terms (US Market)

- Credit card (not "card" alone)
- Personal loan (not "consumer loan")
- APR (Annual Percentage Rate)
- Credit score
- Interest rate
- Monthly payment
- Credit limit
- Rewards program
- Cash back
- Balance transfer

##### Avoid These Terms

- UK-specific financial terms
- Complex financial jargon without explanation
- Ambiguous abbreviations
- Overly casual slang
- Promotional hyperbole

### Key Messages

#### Primary Messages

1. **Trust:** "Your trusted guide to finance in the United States"
2. **Expertise:** "Expert guides and tools tailored for the US market"
3. **Comparison:** "Compare the best US credit cards, loans, and financial solutions"
4. **Personalization:** "Find the perfect credit card tailored to your needs"
5. **Education:** "Make informed financial decisions"

#### Call-to-Action Language

- **Primary CTA:** "VIEW MY OPTIONS"
- **Secondary CTAs:**
  - "Compare Credit Cards"
  - "Find Your Card"
  - "Get Started"
  - "Learn More"
  - "Read Full Guide"

#### Legal/Compliance Language

- **Disclaimer Template:** "KardTrust strives to maintain accurate and up-to-date information. This information may differ from what you see when visiting the website of a financial institution, service provider or specific product. All financial products, commercial products and services are presented without warranty. When evaluating offers, please review the Terms and Conditions of the financial institution. Pre-qualified offers are not binding."

- **Data Policy:** "By signing up, I agree to receive text messages at the phone number and email provided and I agree that I can unsubscribe from the SMS and Email list at any time. SMS message rates may apply. I also confirm that I am over 18 years old and accept the terms set out in the Terms of Use and Privacy Policy."

---

## Visual Design System

### Design Principles

1. **Clarity First:** Every design decision should enhance user understanding
2. **Mobile-First:** Optimize for mobile, enhance for desktop
3. **Performance:** Fast loading times are non-negotiable
4. **Accessibility:** WCAG 2.1 AA compliance minimum
5. **Consistency:** Maintain visual harmony across all touchpoints

### Spacing System

#### Tailwind Spacing Scale (in pixels)

- `space-y-1`: 4px
- `space-y-2`: 8px
- `space-y-3`: 12px
- `space-y-4`: 16px
- `space-y-5`: 20px
- `space-y-6`: 24px
- `space-y-8`: 32px
- `space-y-10`: 40px
- `space-y-12`: 48px

#### Component Spacing

- **Card Padding:** 16px (p-4) mobile, 24px (p-6) desktop
- **Section Padding:** 48px (py-12) mobile, 96px (py-24) desktop
- **Container Max Width:** 1280px (container)
- **Container Padding:** 16px (px-4) mobile, 24px (px-6) desktop

### Border Radius

- **Small:** `calc(var(--radius) - 4px)` - Subtle rounding
- **Medium:** `calc(var(--radius) - 2px)` - Standard components
- **Large:** `var(--radius)` - Cards, prominent elements
- **Full:** `9999px` - Pills, badges, rounded buttons

### Shadows

#### Component Shadows

- **Small:** Subtle depth for cards
- **Medium:** Default buttons, interactive elements
- **Large:** Modals, popovers, elevated content

#### CSS Classes

- `.shadow-sm` - Light shadow
- `.shadow-md` - Medium shadow
- `.shadow-lg` - Large shadow

### Animation

#### Duration Standards

- **Fast:** 200ms - Hover states, color changes
- **Standard:** 300ms - Element transitions
- **Slow:** 500ms - Page transitions, complex animations

#### Easing

- **Standard:** `ease-in-out` - Most transitions
- **Sharp:** `ease-out` - Entering elements
- **Smooth:** `ease-in` - Exiting elements

#### Custom Animations

- **Fade In:** 500ms ease-in-out
- **Slide Up:** 500ms ease-in-out, translateY(20px) to 0
- **Slide Down:** 500ms ease-in-out, translateY(-20px) to 0

---

## Component Styling

### Button Styles

#### Primary Button

- **Background:** `#DC2626` (Primary Red)
- **Background Hover:** `#B91C1C` (Primary Dark)
- **Text Color:** White
- **Font Weight:** 500 (Medium)
- **Padding:** 12px 32px (py-3 px-8)
- **Border Radius:** Full (rounded-full)
- **Transition:** Colors, 200ms
- **Class:** `.btn-primary`
- **Shadow:** Medium on hover with slight lift

#### Secondary Button

- **Background:** White
- **Background Hover:** Gray-100
- **Text Color:** Gray-900
- **Border:** 1px solid Gray-300
- **Font Weight:** 500 (Medium)
- **Padding:** 12px 32px (py-3 px-8)
- **Border Radius:** Full (rounded-full)
- **Transition:** Colors, 200ms
- **Class:** `.btn-secondary`

#### CTA Button (Orange)

- **Background:** `#F97316` (Orange-500)
- **Background Hover:** `#EA580C` (Orange-600)
- **Text Color:** White
- **Font Weight:** 600 (Semi-Bold)
- **Padding:** 12px 24px (py-3 px-6)
- **Border Radius:** Full
- **Font Size:** 18px (text-lg)
- **Shadow:** Medium, enhances on hover
- **Transform:** translateY(-2px) on hover (desktop only)
- **Class:** `.cta-button-orange`

#### CTA Button (Blue)

- **Background:** `#2563EB` (Secondary Blue)
- **Background Hover:** `#1D4ED8` (Secondary Dark)
- **Text Color:** White
- **Properties:** Same as orange CTA
- **Class:** `.cta-button-blue`

#### Button Best Practices

- Use hover effects only on devices with true hover capability
- Provide simple active state feedback on touch devices
- Avoid transforms on mobile to prevent double-tap issues
- Maintain minimum touch target of 44×44 pixels

### Card Styles

#### Standard Card

- **Background:** White
- **Border:** None or 1px solid Gray-200
- **Border Radius:** Large (lg)
- **Padding:** 16px (p-4) mobile, 24px (p-6) desktop
- **Shadow:** Small (shadow-sm)
- **Hover:** Slightly elevated shadow (shadow-md)

#### Featured Card

- **Background:** White
- **Border:** 2px solid Primary Red
- **Border Radius:** Large
- **Padding:** 24px (p-6)
- **Shadow:** Medium (shadow-md)

### Form Elements

#### Input Fields

- **Background:** White
- **Border:** 1px solid Gray-300
- **Border Radius:** Medium
- **Padding:** 10px 16px
- **Font Size:** 14px
- **Focus Border:** Primary Red
- **Focus Ring:** 2px Primary Red with 20% opacity

#### Labels

- **Font Weight:** 500 (Medium)
- **Font Size:** 14px
- **Color:** Gray-700
- **Margin Bottom:** 8px

#### Checkboxes & Radio Buttons

- **Accent Color:** Primary Red
- **Size:** 20×20 pixels minimum
- **Focus Ring:** Primary Red

### Banner Sections

#### Hero Banner

- **Background Image (Desktop):** `https://media.topfinanzas.com/images/kardtrust/banner-home.webp`
- **Background Image (Mobile):** `https://media.topfinanzas.com/images/banner-home-mobile.webp`
- **Background Position:** Center center
- **Background Size:** Cover
- **Padding:** 64px (py-16) mobile, 160px (py-40) desktop
- **Text Overlay:** White background with 90% opacity, 12px padding, rounded corners
- **Class:** `.banner-section`, `.banner-section-desktop`, `.banner-section-mobile`

### Navigation Styles

#### Desktop Navigation

- **Background:** White
- **Border Bottom:** 1px solid Gray-200
- **Height:** Auto (comfortable padding)
- **Font Size:** 14px
- **Text Color:** Gray-800
- **Hover Color:** `#222442`
- **Transition:** 200ms

#### Mobile Navigation

- **Background:** White
- **Full Width:** Yes
- **Slide Animation:** From right
- **Backdrop:** Semi-transparent dark overlay

#### Mega Menu

- **Background:** White
- **Border:** 1px solid Gray-200
- **Shadow:** Large (shadow-lg)
- **Border Radius:** Medium
- **Padding:** 24px
- **Max Width:** Container width

### Footer Styles

#### Footer Container

- **Background:** `#3F67B9` (Footer Blue)
- **Text Color:** White (all text)
- **Padding:** 48px vertical (py-12)
- **Grid:** 1 column mobile, 4 columns desktop

#### Footer Links

- **Color:** White
- **Hover Color:** `#55B9FF` (Light Blue)
- **Text Decoration:** Underline on hover
- **Font Size:** 14px (text-sm)
- **Transition:** Colors, 200ms

#### Social Icons

- **Size:** 28×28 pixels (h-7 w-7)
- **Color:** White
- **Hover Color:** `#55B9FF`
- **Spacing:** 16px between icons

---

## SEO & Metadata

### Site Metadata

#### Primary Metadata

- **Site Name:** KardTrust
- **Title Template:** "[Page Title] - KardTrust"
- **Default Title:** "KardTrust - Your Guide to US Credit Cards & Loans"
- **Description:** "Compare the best US credit cards, loans, and financial solutions with KardTrust. Expert guides and tools tailored for the US market."
- **Keywords:** "credit cards US, personal loans US, compare credit cards, compare loans, financial advice US, KardTrust"
- **Language:** en-US (American English)
- **Base URL:** <https://kardtrust.com>

#### Open Graph

##### Default OG Tags

- **og:title:** "KardTrust - Your Guide to US Credit Cards & Loans"
- **og:description:** "Compare the best US credit cards, loans, and financial solutions with KardTrust."
- **og:url:** <https://kardtrust.com>
- **og:site_name:** KardTrust
- **og:locale:** en_US
- **og:type:** website

##### OG Image

- **URL:** `https://media.topfinanzas.com/images/placeholder-image.webp`
- **Width:** 900px
- **Height:** 600px
- **Alt:** "KardTrust - Financial Guides and Solutions"

#### Twitter Card

##### Twitter Card Tags

- **twitter:card:** summary_large_image
- **twitter:title:** "KardTrust - Your Guide to US Credit Cards & Loans"
- **twitter:description:** "Compare the best US credit cards, loans, and financial solutions with KardTrust."
- **twitter:image:** `https://media.topfinanzas.com/images/placeholder-image.webp`

### Schema Markup

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KardTrust",
  "url": "https://kardtrust.com",
  "logo": "https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-dark.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PANAMA, PANAMA CITY",
    "addressLocality": "AV. AQUILINO DE LA GUARDIA",
    "postalCode": "OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
    "addressCountry": "PA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-20-1234-5678",
    "contactType": "customer support",
    "email": "info@topfinanzas.com"
  },
  "sameAs": ["https://www.instagram.com/kardtrust/"]
}
```

### Viewport Configuration

- **Width:** device-width
- **Initial Scale:** 1
- **Maximum Scale:** 1
- **Theme Color:** #DC2626 (Primary Red)

---

## Technical Configuration

### Framework & Dependencies

#### Core Technology Stack

- **Framework:** Next.js 15.4.3 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.x (strict mode)
- **Node.js:** 18+ required
- **Package Manager:** npm

#### Styling Dependencies

- **Tailwind CSS:** 3.4.17
- **tailwindcss-animate:** 1.0.7
- **PostCSS:** 8.x
- **Autoprefixer:** 10.4.20

#### UI Libraries

- **Radix UI:** Complete primitive collection
- **Framer Motion:** Latest (animations)
- **Lucide React:** 0.454.0 (icons)
- **class-variance-authority:** 0.7.1
- **clsx:** 2.1.1
- **tailwind-merge:** 2.5.5

#### Form Libraries

- **react-hook-form:** 7.54.1
- **@hookform/resolvers:** 3.9.1
- **zod:** 3.24.1

#### Content & MDX

- **@next/mdx:** 15.4.3
- **@mdx-js/loader:** 3.1.0
- **@mdx-js/react:** 3.1.0
- **next-mdx-remote:** 5.0.0
- **gray-matter:** 4.0.3

#### Analytics & Tracking

- **Google Tag Manager:** Custom implementation
- **Google Ads:** Custom implementation
- **Google Ad Manager:** Custom implementation
- **AdZep:** Custom integration with SPA bridge

#### API Integrations

- **Google Sheets API:** googleapis 152.0.0
- **SendGrid:** @sendgrid/mail 8.1.5
- **Nodemailer:** 6.10.1

#### Utilities

- **date-fns:** 3.6.0
- **js-cookie:** 3.0.5
- **Sharp:** 0.34.1 (image optimization)

### Development Server

#### Configuration

- **Port:** 3005 (custom, not default 3000)
- **Turbopack:** Enabled for dev mode
- **Commands:**
  - Dev: `npm run dev` (runs on port 3005 with Turbopack)
  - Build: `npm run build`
  - Start: `npm start` (production server on port 3005)
  - Lint: `npm run lint`

### Build Configuration

#### Output

- **Mode:** Standalone
- **Asset Prefix:** undefined (uses relative paths)
- **Base Path:** "" (root)

#### Static Assets

- **CDN:** `https://media.topfinanzas.com/`
- **Cache Strategy:** Public, max-age=31536000, immutable
- **Optimization:** WebP format with query parameters

#### Performance Optimizations

- **Image Optimization:** Next.js Image with Sharp
- **Font Loading:** Google Fonts with display: swap
- **Critical CSS:** Inlined in document head
- **Resource Hints:** Preconnect to CDN

### Environment Variables

#### Required Variables

- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google Sheets API
- `GOOGLE_PRIVATE_KEY` - Google Sheets API
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- `SENDGRID_API_KEY` - Email service
- `NEXT_PUBLIC_KIT_API_KEY` - Newsletter integration

#### Environment Files

- `.env.production` - Production environment (in /opt/app/ on server)
- `.env.local` - Local development overrides
- `.env` - Shared environment variables

### File Paths & Aliases

#### TypeScript Path Alias

- **Alias:** `@/`
- **Resolves To:** Project root
- **Usage:** `import { Button } from "@/components/ui/button"`

#### Key Directories

- `/app` - Next.js App Router pages
- `/components` - React components
- `/lib` - Utilities, contexts, data
- `/public` - Static assets
- `/content` - MDX blog content

### Browser Support

- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari 12+, Chrome for Android
- **JavaScript:** ES2020+ features
- **No IE Support:** Modern web standards only

---

## Content Guidelines

### Content Structure

#### Page Hierarchy

1. **Homepage:** Overview, featured content, primary CTAs
2. **Category Pages:** Financial Solutions, Credit Cards, Personal Loans, Personal Finance
3. **Product Comparison Tools:** Card Recommender
4. **Blog:** Educational articles, guides, news
5. **Utility Pages:** About Us, Contact Us, Privacy Policy, Terms, Cookie Policy

#### Navigation Structure

##### Main Navigation

- Card Recommender
- Blog
- About Us
- Contact Us

##### Categories Dropdown

- Financial Solutions (MOFU)
- Credit Cards (MOFU sub-category)
- Personal Loans (MOFU sub-category)
- Personal Finance (TOFU)
- Card Recommender (Tool)

##### Blog Categories

- Personal Finance
- Credit Cards
- Loans & Financing
- Financial Tips
- Product Reviews

### Content Types

#### Educational Articles (TOFU)

- **Purpose:** Build awareness, educate users
- **Topics:** Financial literacy, money management, credit basics
- **Tone:** Educational, approachable, empowering
- **Length:** 1000-1500 words
- **Format:** Clear headings, bullet points, examples

#### Product Guides (MOFU)

- **Purpose:** Compare options, explain products
- **Topics:** Credit card types, loan options, product features
- **Tone:** Informative, comparative, helpful
- **Length:** 1500-2500 words
- **Format:** Tables, comparisons, pros/cons, FAQs

#### Product Reviews (BOFU)

- **Purpose:** Detailed analysis of specific products
- **Topics:** Individual credit cards, specific loans
- **Tone:** Analytical, balanced, detailed
- **Length:** 2000-3000 words
- **Format:** Specs, benefits, drawbacks, who it's for

### Content Standards

#### Writing Requirements

1. **Accuracy:** All financial information must be current and verified
2. **Disclaimers:** Include appropriate legal disclaimers
3. **Citations:** Link to authoritative sources when citing statistics
4. **Formatting:** Use consistent heading hierarchy (H1 → H2 → H3)
5. **Readability:** Target 8th-10th grade reading level

#### SEO Requirements

1. **Title Tags:** 50-60 characters, include primary keyword
2. **Meta Descriptions:** 150-160 characters, compelling copy
3. **Headings:** Include keywords naturally in H1 and H2
4. **Image Alt Text:** Descriptive, include keywords when relevant
5. **Internal Links:** Link to relevant content (3-5 per article)

#### Image Requirements

1. **Format:** WebP primary, JPG/PNG fallback
2. **Optimization:** Compressed, appropriate dimensions
3. **Alt Text:** Required for all images
4. **Lazy Loading:** Enabled by default (Next.js Image)
5. **CDN:** Hosted on `https://media.topfinanzas.com/`

### User Experience Content

#### Form Labels

- **Email:** "Email"
- **First Name:** "First Name"
- **Last Name:** "Last Name"
- **Phone:** "Mobile"

#### Form Placeholders

- **Email:** "<example@email.com>"
- **Name:** "Your first name"
- **Last Name:** "Your last name"
- **Phone:** "11 digits (e.g. 07123456789)"

#### Progress Indicators

- **Format:** "[X]% complete, keep going!"
- **Completion:** "[X]% complete!"

#### Important Notices

- **Prefix:** "Important:"
- **Email Verification:** "please check that your email is correct so we can send you the information you need"

#### Footer Content

##### Legal Disclaimer

"KardTrust strives to maintain accurate and up-to-date information. This information may differ from what you see when visiting the website of a financial institution, service provider or specific product. All financial products, commercial products and services are presented without warranty. When evaluating offers, please review the Terms and Conditions of the financial institution. Pre-qualified offers are not binding."

##### Copyright

- **Short:** "Copyright Top Networks Inc. 2025"
- **Full:** "ALL RIGHTS RESERVED, ©TOP NETWORKS INC 2025. REPRODUCTION IN WHOLE OR IN PART BY ANY MEANS OR FORM WITHOUT WRITTEN AND EXPRESS AUTHORISATION FROM THE COPYRIGHT HOLDER IS PROHIBITED."

---

## Localization

### Market Configuration

#### Primary Market

- **Country:** United States
- **Language:** English (US)
- **Locale:** en_US
- **Timezone:** Multiple (EST, CST, MST, PST)

### Regional Settings

#### Date Format

- **Standard:** MM/DD/YYYY (American format)
- **Long Format:** "January 15, 2025"
- **Short Format:** "01/15/2025"

#### Number Format

- **Decimal Separator:** Period (.)
- **Thousands Separator:** Comma (,)
- **Example:** 1,234.56

#### Currency

- **Currency Code:** USD
- **Symbol:** $
- **Format:** $1,234.56
- **Display:** Symbol before amount, no space

#### Phone Numbers

- **Format:** (XXX) XXX-XXXX or XXX-XXX-XXXX
- **International Prefix:** +1
- **Example:** (555) 123-4567

#### Addresses

- **Format:**

  ```markdown
  Street Address
  City, State ZIP
  United States
  ```

- **State Format:** Two-letter abbreviations (e.g., NY, CA, TX)
- **ZIP Code:** 5 digits or 5+4 format (12345 or 12345-6789)

### Language Specifications

#### Spelling

- **Standard:** American English
- **Examples:**
  - Use "color" not "colour"
  - Use "center" not "centre"
  - Use "analyze" not "analyse"
  - Use "labor" not "labour"

#### Financial Terminology

- **Credit Card:** Not "credit card" or "card product"
- **APR:** Annual Percentage Rate (always spell out on first use)
- **FICO Score:** Use this term for credit scores
- **Balance Transfer:** Not "balance switch"
- **Cash Back:** Two words, not "cashback"
- **Credit Limit:** Not "credit line" alone

#### Cultural Considerations

- Reference US holidays and seasons
- Use US measurements (miles, pounds, Fahrenheit)
- Reference US financial institutions and systems
- Consider regional diversity in examples

### Constants & Static Fields

#### Brand Constants (from lib/constants.ts)

```typescript
export const BRAND_STATIC_FIELDS = {
  Pais: "Reino Unido",
  Marca: "Top Finanzas",
} as const;
```

**Note:** These constants appear to be legacy from the UK template and should be updated for US market alignment in future iterations.

---

## Implementation References

### Critical File Locations

#### Configuration Files

- `/package.json` - Dependencies and scripts
- `/next.config.mjs` - Next.js configuration
- `/tailwind.config.js` - Tailwind CSS configuration
- `/tsconfig.json` - TypeScript configuration
- `/site.webmanifest` - PWA manifest

#### Styling Files

- `/app/globals.css` - Global styles and utility classes
- `/app/critical.css` - Critical CSS inlined in head

#### Layout Components

- `/app/layout.tsx` - Root layout with metadata
- `/components/layout/header.tsx` - Site header
- `/components/layout/footer.tsx` - Site footer

#### Content Configuration

- `/lib/constants.ts` - Site constants and strings
- `/lib/texts/header/content.ts` - Header text content
- `/lib/texts/footer/content.ts` - Footer text content
- `/lib/navigation/headerNavigation.ts` - Navigation structure
- `/lib/navigation/footerNavigation.ts` - Footer navigation
- `/lib/images/logos.ts` - Logo configurations

#### Analytics

- `/components/analytics/gtm.tsx` - Google Tag Manager
- `/components/analytics/google-ads.tsx` - Google Ads
- `/components/analytics/gam.tsx` - Google Ad Manager
- `/components/analytics/adzep.tsx` - AdZep integration
- `/components/analytics/adzep-spa-bridge.tsx` - SPA bridge for ads
- `/components/analytics/utm-persister.tsx` - UTM tracking

### Component Library

#### UI Components (`/components/ui/`)

- `button.tsx` - Button variants
- `card.tsx` - Card components
- `input.tsx` - Form inputs
- `label.tsx` - Form labels
- `badge.tsx` - Badge elements
- `pagination.tsx` - Pagination
- `back-to-top.tsx` - Scroll to top button
- `featured-posts-grid.tsx` - Blog post grid
- `featured-post-card.tsx` - Blog post card

#### Form Components (`/components/forms/`)

- Multi-step form components
- Form validation logic
- Field components

#### Analytics Components (`/components/analytics/`)

- Complete analytics integration
- UTM tracking system
- AdZep ad management
- Validation panels (development)

### Hooks

#### Custom Hooks (`/hooks/`)

- `use-mobile.tsx` - Mobile detection
- `use-toast.ts` - Toast notifications
- `use-recommender-page-guard.ts` - Route protection

### Utility Functions (`/lib/utils/`)

- `cn()` - Class name merging (clsx + tailwind-merge)
- Image optimization helpers
- Text formatting utilities
- Navigation utilities

### Scripts (`/scripts/`)

- `git-workflow.sh` - Automated git deployment
- `deploy_update.sh` - Deployment automation
- Testing scripts for integrations

---

## Version History

### Version 1.0.0 (October 22, 2025)

- Initial branding guide created
- Documented current state of KardTrust project
- Established color palette (Primary Red #DC2626, Secondary Blue #2563EB)
- Defined typography system (Inter font family)
- Created comprehensive component styling guidelines
- Documented SEO and metadata standards
- Established content and localization guidelines
- Provided complete technical configuration reference

---

## LLM & Agent Optimization

### Parsing Instructions for Autonomous Agents

This branding guide is structured for optimal parsing by Large Language Models and autonomous agents. Key features:

1. **Hierarchical Structure:** Clear H2/H3/H4 heading hierarchy
2. **Semantic Sections:** Logically grouped information
3. **Searchable Keywords:** Bold key terms and values
4. **Code Blocks:** Configuration and code examples in proper format
5. **Consistent Formatting:** Tables, lists, and references follow patterns
6. **Cross-References:** Links to specific files and locations
7. **Explicit Values:** No ambiguous descriptions; exact hex codes, pixel values, class names
8. **Implementation Context:** File paths and variable names for direct usage

### Update Procedures

When updating branding elements:

1. **Update This Document:** Reflect changes in relevant sections
2. **Update Configuration Files:** Modify Tailwind config, constants, etc.
3. **Update Components:** Apply changes to UI components
4. **Test Thoroughly:** Verify changes across all breakpoints
5. **Document Changes:** Add to version history with date and description

### Key Value Extraction Guide

For agents extracting specific values:

- **Colors:** Section "Color Palette" → Hex codes and Tailwind classes
- **Typography:** Section "Typography" → Font sizes, weights, line heights
- **Spacing:** Section "Visual Design System" → Tailwind spacing values
- **Components:** Section "Component Styling" → CSS classes and properties
- **Files:** Section "Implementation References" → Exact file paths
- **Metadata:** Section "SEO & Metadata" → Meta tags and descriptions
- **Brand Voice:** Section "Brand Voice & Messaging" → Tone, terminology, key messages

---

## Contact & Maintenance

### Brand Stewardship

**Owner:** TOP NETWORKS INC  
**Email:** <info@topfinanzas.com>  
**Website:** <https://kardtrust.com>

### Social Media

- **Instagram:** <https://www.instagram.com/kardtrust/>

### Support

- **Customer Support:** +44-20-1234-5678
- **Technical Issues:** Via contact form at /contact-us

### Document Maintenance

- **Review Frequency:** Quarterly
- **Last Review:** October 22, 2025
- **Next Review:** January 22, 2026
- **Owner:** Development & Marketing Teams

---

## **End of KardTrust Branding Guide v1.0.0**
