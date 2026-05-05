"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const toggleVariants = cva(
  "pencil-border pencil-focus pencil-prose-body inline-flex items-center justify-center text-sm transition-colors data-[state=on]:pencil-fill-solid disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "pencil-fill-paper",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ToggleProps
  extends
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  pencilSeed?: string
}

export const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  function Toggle({ className, variant, size, pencilSeed, style, ...props }, ref) {
    const radius = usePencilRadius(
      "button",
      pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
    )
    return (
      <TogglePrimitive.Root
        ref={ref}
        data-slot="toggle"
        className={cn(toggleVariants({ variant, size }), className)}
        style={{ ...radius, ...style }}
        {...props}
      />
    )
  },
)

export { toggleVariants }
