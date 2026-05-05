"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const buttonVariants = cva(
  "pencil-border pencil-focus pencil-prose-body relative inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap px-4 text-sm transition-[transform,box-shadow,background-color,border-color,color,text-decoration-thickness] active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "pencil-fill-paper pencil-fill-paper-hover text-[var(--pencil-ink)]",
        filled: "pencil-fill-solid text-[var(--pencil-paper)]",
        destructive:
          "pencil-fill-danger-soft pencil-fill-danger-soft-hover pencil-text-danger pencil-stroke-danger",
        secondary: "pencil-fill-ink-soft pencil-fill-ink-soft-hover text-[var(--pencil-ink)]",
        ghost:
          "pencil-border-none bg-transparent text-[var(--pencil-ink)] pencil-fill-ink-soft-hover",
        link: "pencil-border-none pencil-link-wavy bg-transparent text-[var(--pencil-ink)]",
      },
      strokeWidth: {
        thin: "pencil-stroke-thin",
        default: "pencil-stroke-default",
        thick: "pencil-stroke-thick",
      },
    },
    defaultVariants: {
      variant: "default",
      strokeWidth: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  pencilSeed?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, strokeWidth, asChild = false, pencilSeed, style, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button"
  const radius = usePencilRadius(
    "button",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant ?? "default"}
      className={cn(buttonVariants({ variant, strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export { buttonVariants }
