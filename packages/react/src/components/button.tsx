import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"

const buttonVariants = cva(
  "pencil-border pencil-focus relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[transform,box-shadow] active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "pencil-fill-solid text-[var(--pencil-paper)]",
        destructive: "pencil-fill-solid bg-[var(--pencil-danger)] text-[var(--pencil-paper)]",
        outline: "pencil-fill-none text-[var(--pencil-ink)] hover:pencil-fill-hachure-soft",
        secondary: "pencil-fill-solid bg-[var(--pencil-muted)] text-[var(--pencil-paper)]",
        ghost: "pencil-border-none hover:pencil-fill-hachure-soft",
        link: "pencil-border-none text-[var(--pencil-ink)] underline-offset-4 hover:underline",
        scribbled: "pencil-fill-hachure text-[var(--pencil-ink)]",
      },
      size: {
        sm: "h-8 px-3",
        default: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
      strokeWidth: {
        thin: "pencil-stroke-thin",
        default: "pencil-stroke-default",
        thick: "pencil-stroke-thick",
      },
      edges: {
        rect: "pencil-edges-rect",
        rounded: "pencil-edges-rounded",
        pill: "pencil-edges-pill",
        organic: "pencil-edges-organic",
      },
      sloppiness: {
        low: "pencil-sloppiness-low",
        medium: "pencil-sloppiness-medium",
        high: "pencil-sloppiness-high",
      },
      strokeStyle: {
        solid: "",
        dashed: "pencil-stroke--dashed",
        dotted: "pencil-stroke--dotted",
        double: "pencil-stroke--double",
      },
      seed: {
        1: "pencil-seed-1",
        2: "pencil-seed-2",
        3: "pencil-seed-3",
        4: "pencil-seed-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      strokeWidth: "default",
      edges: "rounded",
      sloppiness: "medium",
      strokeStyle: "solid",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant,
    size,
    strokeWidth,
    edges,
    sloppiness,
    strokeStyle,
    seed,
    asChild = false,
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          strokeWidth,
          edges,
          sloppiness,
          strokeStyle,
          seed,
        }),
        className,
      )}
      {...props}
    />
  )
})

export { buttonVariants }
