"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const badgeVariants = cva(
  "pencil-border pencil-prose-body inline-flex items-center px-3 py-0.5 text-xs",
  {
    variants: {
      variant: {
        default: "pencil-fill-solid",
        secondary: "pencil-fill-ink-soft text-[var(--pencil-ink)]",
        destructive: "pencil-fill-danger-soft pencil-text-danger pencil-stroke-danger",
        outline: "pencil-fill-paper",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  pencilSeed?: string
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  { className, variant, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "badge",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <div
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export { badgeVariants }
