# LocalTech Daytona Website

A production-quality Next.js website for LocalTech Daytona, offering Local SEO services for small businesses and in-home tech support for seniors in Daytona Beach and Ormond Beach.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- A code editor (VS Code recommended)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   Place the following images in the `/public/images/` directory:
   - `hero-combined.jpg` - Split-screen hero image for homepage
   - `hero-business.jpg` - Hero image for business page
   - `hero-seniors.jpg` - Hero image for seniors page
   - `phone-maps.png` - Google Maps phone mockup
   - `icon-seo.png` - SEO icon
   - `icon-reviews.png` - Reviews icon
   - `icon-tech.png` - Tech support icon
   - `icon-smart-home.png` - Smart home icon
   - `icon-digits.png` - Photo digitization icon (optional)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
localtech-daytona/
├── app/
│   ├── business/         # Business/SEO services page
│   ├── seniors/          # Seniors tech support page
│   ├── contact/           # Contact form page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Button.tsx         # Reusable button component
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── HeroSplit.tsx      # Homepage hero
│   ├── FeatureCard.tsx    # Feature card component
│   ├── ServicesGrid.tsx   # Services grid
│   ├── StatCard.tsx       # Statistics/metrics card
│   ├── TestimonialCard.tsx # Testimonial card
│   ├── FaqItem.tsx        # FAQ accordion item
│   └── Section.tsx        # Section wrapper
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── public/
│   └── images/            # Image assets
├── content.ts             # Editable content configuration
└── package.json
```

## 🎨 Customization

### Content Editing

All text content, pricing, and configuration can be edited in `/content.ts` without touching component files. This includes:

- Brand information (name, address, phone, email)
- Page headlines and descriptions
- Service packages and pricing
- Testimonials
- FAQ items
- Call-to-action text

### Styling

Brand colors are configured in `tailwind.config.js`:
- Primary: `#1E3A8A` (indigo-800)
- Accent: `#F97316` (orange-500)
- Background: `#F8FAFC` (slate-50)

Fonts: Inter (loaded via Google Fonts)

### Pages

- **Home (`/`)**: Split-screen hero, feature cards, services grid, testimonials
- **Business (`/business`)**: Local SEO services, pricing, results, FAQ
- **Seniors (`/seniors`)**: Tech support packages, hourly rates, testimonials
- **Contact (`/contact`)**: Contact form with service selection

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next.js Metadata API
- **Image Optimization**: next/image

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Accessibility features (ARIA labels, semantic HTML, focus states)
- ✅ Smooth animations with Framer Motion
- ✅ Image optimization with next/image
- ✅ Sticky navigation with blur effect
- ✅ Accessible forms and interactive elements
- ✅ Smooth scrolling

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and configure it

### Environment Variables

Currently, no environment variables are required. If you add a contact form backend, you may need:

```
NEXT_PUBLIC_CONTACT_API_URL=your_api_endpoint
```

## 📝 Notes

- **Contact Form**: The contact form currently logs to console. Connect it to your backend API or email service (e.g., SendGrid, Resend, or Formspree).
- **Calendly Link**: Update the Calendly URL in `content.ts` with your actual booking link.
- **Images**: Ensure all images are optimized before adding to `/public/images/`. Recommended formats: WebP for photos, PNG for icons.
- **Analytics**: Consider adding Google Analytics or Vercel Analytics for production.

## 🐛 Troubleshooting

### Images not showing
- Ensure images are in `/public/images/` (not `/public/Images/`)
- Check image file names match exactly (case-sensitive)
- Verify image extensions are correct

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Styling issues
- Ensure Tailwind is processing all files in `tailwind.config.js`
- Restart dev server after config changes

## 📄 License

This project is proprietary software for LocalTech Daytona.

---

**Built with ❤️ for LocalTech Daytona**
