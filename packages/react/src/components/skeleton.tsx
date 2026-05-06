"use client"

import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  pencilSeed?: string
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { className, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "skeleton",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <div
      ref={ref}
      data-slot="skeleton"
      className={cn(
        "animate-pulse bg-[color-mix(in_srgb,var(--pencil-ink)_14%,transparent)]",
        className,
      )}
      style={{ ...radius, borderRadius: "var(--pencil-radius)", ...style }}
      {...props}
    />
  )
})
