import Link from "next/link"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const styles = cva(
  "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        primary: "bg-orange-500 dark:bg-orange-500 text-white hover:bg-orange-600 dark:hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-orange-400 dark:focus:ring-orange-600",
        secondary: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 shadow hover:shadow-lg hover:-translate-y-0.5 focus:ring-indigo-300 dark:focus:ring-blue-600",
        ghost: "bg-transparent text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
      },
    },
    defaultVariants: { variant: "primary" },
  }
)

export function Button({ 
  href, 
  children, 
  variant, 
  className,
  external = false,
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  external?: boolean
}) {
  const baseClassName = cn(styles({ variant }), className)
  
  if (external) {
    return (
      <a href={href} className={baseClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  
  return (
    <Link href={href} className={baseClassName}>
      {children}
    </Link>
  )
}





