import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Tech Help Florida",
  description:
    "Local tech support and SEO services in Central Florida. Patient, friendly help with any tech problem.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

