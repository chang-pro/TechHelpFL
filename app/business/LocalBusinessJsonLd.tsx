export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tech Help FL",
    "telephone": "(386) 387-8150",
    "url": "https://techhelpfl.com/business",
    "areaServed": ["Daytona Beach", "Ormond Beach", "Port Orange"]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}






