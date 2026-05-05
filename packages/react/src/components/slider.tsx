"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"
import * as React from "react"

import { cn } from "../lib/cn"
import { getPencilRadius, usePencilRadius } from "../lib/use-pencil-radius"

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  pencilSeed?: string
}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  function Slider({ className, pencilSeed, style, ...props }, ref) {
    const trackRadius = usePencilRadius(
      "sliderTrack",
      pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
    )
    const thumbRadius = React.useMemo(
      () => getPencilRadius("sliderThumb", pencilSeed ?? "default-thumb"),
      [pencilSeed],
    )
    return (
      <SliderPrimitive.Root
        ref={ref}
        data-slot="slider"
        className={cn("relative flex w-full touch-none select-none items-center", className)}
        style={style}
        {...props}
      >
        <SliderPrimitive.Track
          className="pencil-border relative h-1.5 w-full grow overflow-hidden bg-[var(--pencil-paper)]"
          style={trackRadius}
        >
          <SliderPrimitive.Range className="absolute h-full bg-[var(--pencil-ink)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          className="pencil-border pencil-focus block size-5 bg-[var(--pencil-paper)] shadow transition-transform disabled:pointer-events-none disabled:opacity-50"
          style={{ borderRadius: thumbRadius }}
        />
      </SliderPrimitive.Root>
    )
  },
)
