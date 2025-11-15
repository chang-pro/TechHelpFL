import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500/70",
  {
    variants: {
      variant: {
        default: "border-transparent bg-orange-500 text-white",
        secondary: "border-transparent bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50",
        destructive: "border-transparent bg-red-500 text-white",
        outline: "text-gray-900 dark:text-gray-50 border-gray-300 dark:border-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

