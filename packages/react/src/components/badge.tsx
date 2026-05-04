import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"

const badgeVariants = cva(
  "pencil-border pencil-edges-pill pencil-sloppiness-medium inline-flex items-center px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "pencil-fill-solid text-[var(--pencil-paper)]",
        secondary: "pencil-fill-solid bg-[var(--pencil-muted)] text-[var(--pencil-paper)]",
        destructive: "pencil-fill-solid bg-[var(--pencil-danger)] text-[var(--pencil-paper)]",
        outline: "pencil-fill-none text-[var(--pencil-ink)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  { className, variant, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
})

export { badgeVariants }
