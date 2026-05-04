import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"

const textareaVariants = cva(
  "pencil-border pencil-focus relative block min-h-20 w-full px-3 py-2 text-sm placeholder:text-[var(--pencil-muted)] disabled:cursor-not-allowed disabled:opacity-50",
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

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, strokeWidth, edges, sloppiness, strokeStyle, seed, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        textareaVariants({ strokeWidth, edges, sloppiness, strokeStyle, seed }),
        className,
      )}
      {...props}
    />
  )
})

export { textareaVariants }
