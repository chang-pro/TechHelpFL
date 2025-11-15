import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patient, In-Home Tech Support",
  description:
    "We solve ANY tech problem: phones, WiFi, scams, TV, passwords, smart homes, computers, and more. Patient, in-home help for everyone in Daytona Beach.",
}

export default function TechSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

