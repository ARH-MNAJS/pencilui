"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { getPencilRadius, usePencilRadius } from "../lib/use-pencil-radius"

const switchVariants = cva(
  "pencil-border pencil-focus pencil-switch-track peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center px-0.5 disabled:cursor-not-allowed disabled:opacity-50",
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

export interface SwitchProps
  extends
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  pencilSeed?: string
}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  function Switch({ className, strokeWidth, pencilSeed, style, ...props }, ref) {
    const seed = pencilSeed
    const trackRadius = usePencilRadius("switchTrack", seed !== undefined ? { seed } : undefined)
    const thumbRadius = React.useMemo(
      () => getPencilRadius("switchThumb", seed ?? "default-thumb"),
      [seed],
    )
    return (
      <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        className={cn(switchVariants({ strokeWidth }), className)}
        style={{ ...trackRadius, ...style }}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="block size-4 bg-[var(--pencil-ink)] shadow transition-transform duration-200 ease-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 motion-reduce:transition-none motion-reduce:duration-0"
          style={{ borderRadius: thumbRadius }}
        />
      </SwitchPrimitive.Root>
    )
  },
)

export { switchVariants }
