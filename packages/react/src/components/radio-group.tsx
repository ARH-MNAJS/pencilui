"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { RadioDotSketch } from "./sketches"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(function RadioGroup({ className, ...props }, ref) {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
})

const radioItemVariants = cva(
  "pencil-border pencil-focus peer relative inline-flex size-5 shrink-0 items-center justify-center bg-[var(--pencil-paper)] text-[var(--pencil-ink)] disabled:cursor-not-allowed disabled:opacity-50",
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

export interface RadioGroupItemProps
  extends
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {
  pencilSeed?: string
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(function RadioGroupItem({ className, strokeWidth, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "radio",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-group-item"
      className={cn(radioItemVariants({ strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="grid place-items-center">
        <RadioDotSketch className="size-3 pencil-radio-dot-draw-on" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

export { radioItemVariants }
