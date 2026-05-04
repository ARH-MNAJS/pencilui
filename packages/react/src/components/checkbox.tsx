import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { CheckSketch } from "./sketches"
import { cn } from "../lib/cn"

const checkboxVariants = cva(
  "pencil-border pencil-focus peer relative inline-flex size-5 shrink-0 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:pencil-fill-solid data-[state=checked]:text-[var(--pencil-paper)]",
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

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox(
  { className, strokeWidth, edges, sloppiness, strokeStyle, seed, ...props },
  ref,
) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(
        checkboxVariants({ strokeWidth, edges, sloppiness, strokeStyle, seed }),
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="grid place-items-center">
        <CheckSketch className="size-3.5 pencil-stroke-draw-on" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

export { checkboxVariants }
