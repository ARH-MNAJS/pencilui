import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"

const toggleVariants = cva(
  "pencil-focus inline-flex items-center justify-center text-sm font-medium transition-colors data-[state=on]:pencil-fill-solid data-[state=on]:text-[var(--pencil-paper)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "pencil-border",
        outline: "pencil-border",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ToggleProps
  extends
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  function Toggle({ className, variant, size, ...props }, ref) {
    return (
      <TogglePrimitive.Root
        ref={ref}
        data-slot="toggle"
        className={cn(toggleVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)

export { toggleVariants }
