"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  pencilSeed?: string
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(function Progress({ className, value, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "progress",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(
        "pencil-border relative h-3 w-full overflow-hidden bg-[var(--pencil-paper)]",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-[var(--pencil-ink)] transition-transform"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
