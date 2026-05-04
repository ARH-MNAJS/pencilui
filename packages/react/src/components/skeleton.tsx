import * as React from "react"

import { cn } from "../lib/cn"

export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Skeleton({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="skeleton"
        className={cn("pencil-border animate-pulse bg-[var(--pencil-rule)]", className)}
        {...props}
      />
    )
  },
)
