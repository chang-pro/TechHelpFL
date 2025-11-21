import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Help FL | Local SEO, Google Optimization & Lead Automation",
  description: "Central Florida Computer Science grad helping Daytona, Ormond Beach, and Port Orange businesses rank #1 on Google, automate follow-up, and scale without heavy ad spend.",
  metadataBase: new URL("https://techhelpflorida.com"),
  keywords: ["Local SEO Daytona Beach", "Google Business Profile Optimization", "Web Design Port Orange", "Lead Automation", "Google Ads Management", "Tech Help FL"],
  authors: [{ name: "Tech Help FL" }],
  creator: "Tech Help FL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techhelpflorida.com",
    title: "Tech Help FL | Local SEO, Google Optimization & Lead Automation",
    description: "Local Computer Science grad helping Central Florida businesses win on Google with automation, web redesigns, and custom tools.",
    siteName: "Tech Help FL",
    images: [
      {
        url: "/images/hero-voxel.png",
        width: 1200,
        height: 630,
        alt: "Tech Help FL Hero Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tech Help FL",
              "image": "https://techhelpflorida.com/images/hero-voxel.png",
              "url": "https://techhelpflorida.com",
              "telephone": "(386) 387-8150",
              "email": "hello@techhelpflorida.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Serving Central Florida",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "postalCode": "32114",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.2108,
                "longitude": -81.0228
              },
              "areaServed": [
                "Daytona Beach",
                "Port Orange",
                "Ormond Beach",
                "New Smyrna Beach"
              ],
              "priceRange": "$$",
              "description": "Local Computer Science graduate helping businesses with local SEO, Google optimization, automation, and conversion-focused sites.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/techhelpfl"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
