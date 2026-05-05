"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { CheckSketch } from "./sketches"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const checkboxVariants = cva(
  "pencil-border pencil-focus peer relative inline-flex size-5 shrink-0 items-center justify-center bg-[var(--pencil-paper)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:pencil-fill-solid",
  {
    variants: {
      strokeWidth: {
        thin: "pencil-stroke-thin",
        default: "pencil-stroke-default",
        thick: "pencil-stroke-thick",
      },
    },
    defaultVariants: {
      strokeWidth: "default",
    },
  },
)

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  pencilSeed?: string
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox({ className, strokeWidth, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "checkbox",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(checkboxVariants({ strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="grid place-items-center">
        <CheckSketch className="size-3.5 pencil-stroke-draw-on" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

export { checkboxVariants }
