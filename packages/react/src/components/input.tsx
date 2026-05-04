import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"

const inputVariants = cva(
  "pencil-border pencil-focus relative block h-10 w-full px-3 text-sm placeholder:text-[var(--pencil-muted)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
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
      strokeWidth: "default",
      edges: "rounded",
      sloppiness: "medium",
      strokeStyle: "solid",
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, strokeWidth, edges, sloppiness, strokeStyle, seed, type, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ strokeWidth, edges, sloppiness, strokeStyle, seed }),
        className,
      )}
      {...props}
    />
  )
})

export { inputVariants }
