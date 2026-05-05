"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> {
  pencilSeed?: string
}

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(function PopoverContent(
  { className, align = "center", sideOffset = 4, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "popover",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        data-slot="popover-content"
        className={cn(
          "pencil-border pencil-fill-paper z-50 w-72 p-4 text-[var(--pencil-ink)] shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
