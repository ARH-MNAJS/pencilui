"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius, type PencilRadiusKind } from "../lib/use-pencil-radius"

const buttonVariants = cva(
  "pencil-border pencil-focus pencil-prose-body relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-[transform,box-shadow] active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "pencil-fill-solid",
        destructive:
          "pencil-fill-solid bg-[var(--pencil-danger)] text-[var(--pencil-paper)] [--pencil-stroke-color:var(--pencil-danger)]",
        outline: "pencil-fill-paper hover:pencil-fill-muted",
        secondary:
          "pencil-fill-solid bg-[var(--pencil-ink-soft)] text-[var(--pencil-paper)] [--pencil-stroke-color:var(--pencil-ink-soft)]",
        ghost: "pencil-border-none hover:pencil-fill-muted",
        link: "pencil-border-none text-[var(--pencil-ink)] underline underline-offset-4",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
      strokeWidth: {
        thin: "pencil-stroke-thin",
        default: "pencil-stroke-default",
        thick: "pencil-stroke-thick",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      strokeWidth: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  pencilSeed?: string
}

function radiusKindFor(size: ButtonProps["size"]): PencilRadiusKind {
  if (size === "lg") return "buttonLg"
  if (size === "sm") return "buttonSm"
  return "button"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, strokeWidth, asChild = false, pencilSeed, style, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button"
  const radius = usePencilRadius(
    radiusKindFor(size),
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export { buttonVariants }
