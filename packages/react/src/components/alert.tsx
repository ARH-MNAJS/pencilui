"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const alertVariants = cva(
  "pencil-border pencil-fill-paper relative w-full p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+*]:pl-7",
  {
    variants: {
      variant: {
        default: "",
        destructive: "[--pencil-stroke-color:var(--pencil-danger)] text-[var(--pencil-danger)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  pencilSeed?: string
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { className, variant, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "alert",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <div
      ref={ref}
      role="alert"
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function AlertTitle({ className, ...props }, ref) {
  return (
    <h5
      ref={ref}
      data-slot="alert-title"
      className={cn("pencil-prose-display mb-1 leading-none tracking-tight", className)}
      {...props}
    />
  )
})

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function AlertDescription({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="alert-description"
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
})

export { alertVariants }
