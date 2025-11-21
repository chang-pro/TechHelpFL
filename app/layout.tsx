import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Help FL | AI Appointment Bots & Automation",
  description: "Central Florida's premier AI automation agency. We build custom AI receptionists that answer calls 24/7, book appointments, and scale your business without new hires.",
  metadataBase: new URL("https://www.techhelpfl.com"),
  keywords: ["AI Receptionist", "Lead Automation", "AI Appointment Booking", "Local SEO Daytona Beach", "Business Automation", "Tech Help FL"],
  authors: [{ name: "Tech Help FL" }],
  creator: "Tech Help FL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.techhelpfl.com",
    title: "Tech Help FL | AI Appointment Bots & Automation",
    description: "Stop missing calls. Our AI receptionists answer 24/7, book appointments, and capture leads instantly.",
    siteName: "Tech Help FL",
    images: [
      {
        url: "https://www.techhelpfl.com/images/hero-voxel.png",
        width: 1200,
        height: 630,
        alt: "Tech Help FL AI Automation",
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
  twitter: {
    card: "summary_large_image",
    title: "Tech Help FL | AI Appointment Bots & Automation",
    description: "Stop missing calls. Our AI receptionists answer 24/7, book appointments, and capture leads instantly.",
    images: ["https://www.techhelpfl.com/images/hero-voxel.png"],
    creator: "@TechHelpFL",
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
              "description": "Central Florida's premier AI automation agency. We build custom AI receptionists that answer calls 24/7, book appointments, and scale your business without new hires.",
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
