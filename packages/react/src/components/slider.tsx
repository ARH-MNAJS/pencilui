import * as SliderPrimitive from "@radix-ui/react-slider"
import * as React from "react"

import { cn } from "../lib/cn"

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(function Slider({ className, ...props }, ref) {
  return (
    <SliderPrimitive.Root
      ref={ref}
      data-slot="slider"
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="pencil-border relative h-1.5 w-full grow overflow-hidden bg-[var(--pencil-rule)]">
        <SliderPrimitive.Range className="absolute h-full bg-[var(--pencil-ink)]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className="pencil-border pencil-focus block size-5 bg-[var(--pencil-paper)] shadow transition-transform disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  )
})
