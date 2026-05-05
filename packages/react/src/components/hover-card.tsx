"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const HoverCard = HoverCardPrimitive.Root
export const HoverCardTrigger = HoverCardPrimitive.Trigger

export interface HoverCardContentProps extends React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
> {
  pencilSeed?: string
}

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(function HoverCardContent(
  { className, align = "center", sideOffset = 4, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "popover",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        data-slot="hover-card-content"
        className={cn(
          "pencil-border pencil-fill-paper z-50 w-64 p-4 text-[var(--pencil-ink)] shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
})
