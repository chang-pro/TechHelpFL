import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-[1200px] px-6", className)}>
      {children}
    </section>
  )
}

