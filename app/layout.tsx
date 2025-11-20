import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Help FL | Local SEO, Google Optimization & Lead Automation",
  description: "Central Florida Computer Science grad helping Daytona, Ormond Beach, and Port Orange businesses rank #1 on Google, automate follow-up, and scale without heavy ad spend.",
  metadataBase: new URL("https://techhelpflorida.com"),
  openGraph: {
    title: "Tech Help FL | Local SEO, Google Optimization & Lead Automation",
    description: "Local Computer Science grad helping Central Florida businesses win on Google with automation, web redesigns, and custom tools.",
    images: ["/images/hero-voxel.png"],
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
              "telephone": "(386) 387-8150",
              "email": "hello@techhelpflorida.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Daytona Beach",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "priceRange": "$$",
              "description": "Local Computer Science graduate helping businesses with local SEO, Google optimization, automation, and conversion-focused sites."
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
