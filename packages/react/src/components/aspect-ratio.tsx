"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<
  typeof AspectRatioPrimitive.Root
> {
  pencilSeed?: string
  bordered?: boolean
}

export const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(function AspectRatio({ className, pencilSeed, bordered = true, style, ...props }, ref) {
  const radius = usePencilRadius(
    "card",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      data-slot="aspect-ratio"
      className={cn(bordered && "pencil-border overflow-hidden", className)}
      style={bordered ? { ...radius, ...style } : style}
      {...props}
    />
  )
})
