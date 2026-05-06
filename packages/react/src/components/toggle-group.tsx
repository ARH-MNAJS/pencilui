"use client"

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & { pencilSeed?: string }
>(function ToggleGroup({ className, pencilSeed, style, children, ...props }, ref) {
  const radius = usePencilRadius(
    "button",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      data-slot="toggle-group"
      className={cn(
        "pencil-border pencil-focus inline-flex h-10 items-stretch overflow-hidden",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  )
})

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(function ToggleGroupItem({ className, children, ...props }, ref) {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      data-slot="toggle-group-item"
      className={cn(
        "pencil-toggle pencil-focus pencil-prose-body inline-flex h-full items-center justify-center px-4 text-sm border-l border-[var(--pencil-rule)] first:border-l-0 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
