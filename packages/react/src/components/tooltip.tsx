"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> {
  pencilSeed?: string
}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(function TooltipContent({ className, sideOffset = 4, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "tooltip",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        data-slot="tooltip-content"
        className={cn(
          "pencil-border z-50 overflow-hidden bg-[var(--pencil-ink)] px-3 py-1.5 text-xs text-[var(--pencil-paper)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
})
