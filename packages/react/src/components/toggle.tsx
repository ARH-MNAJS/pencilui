"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const toggleVariants = cva(
  "pencil-border pencil-focus pencil-toggle pencil-prose-body inline-flex h-10 items-center justify-center px-3 text-sm disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "pencil-fill-paper",
      },
    },
    defaultVariants: {
      variant: "default",
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
  function Toggle({ className, variant, pencilSeed, style, ...props }, ref) {
    const radius = usePencilRadius(
      "button",
      pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
    )
    return (
      <TogglePrimitive.Root
        ref={ref}
        data-slot="toggle"
        className={cn(toggleVariants({ variant }), className)}
        style={{ ...radius, ...style }}
        {...props}
      />
    )
  },
)

export { toggleVariants }
