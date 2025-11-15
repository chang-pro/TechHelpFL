import type { Metadata } from "next"
import { LocalBusinessJsonLd } from "./LocalBusinessJsonLd"

export const metadata: Metadata = {
  title: "Local SEO for Small Businesses",
  description:
    "Get found on Google Maps with our complete local SEO optimization services for Main Street businesses.",
}

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LocalBusinessJsonLd />
      {children}
    </>
  )
}

