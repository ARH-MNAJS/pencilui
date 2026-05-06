import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"

import { cn } from "../lib/cn"

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(function Separator({ className, orientation = "horizontal", decorative = true, ...props }, ref) {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot="separator"
      orientation={orientation}
      decorative={decorative}
      className={cn(
        "pencil-separator-line shrink-0",
        orientation === "horizontal" ? "h-2 w-full" : "h-full w-2",
        className,
      )}
      {...props}
    />
  )
})
