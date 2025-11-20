# Tech Help FL - Local SEO & Automation Landing Page

One-page Next.js site focused on helping Central Florida businesses rank on Google, automate lead follow-up, and convert visitors with a modern, voxel-inspired brand.

## Getting Started

1. Install dependencies:  
   `npm install`
2. Run the dev server:  
   `npm run dev`
3. Open `http://localhost:3000`

## Content & Customization

- All copy, CTAs, and service cards live in `content.ts`.
- Primary styles come from Tailwind (`tailwind.config.js`) and fonts loaded in `app/layout.tsx`.
- Images live in `public/images/` (reuses existing voxel/hero assets).

Key sections on the single page:
- Hero with dual CTAs (free audit + click-to-call)
- Problem/solution, services, process, social proof, about, FAQ, and contact form + Calendly link

## Project Structure

```
app/
  layout.tsx   # Metadata + layout
  page.tsx     # One-page layout
components/    # UI sections (hero, services, process, FAQ, etc.)
public/images/ # Brand imagery
content.ts     # Editable content
```

## Deployment

- Build: `npm run build`
- Start: `npm start`
- Vercel ready out of the box; no extra env vars required.
