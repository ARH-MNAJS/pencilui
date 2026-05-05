"use client"

import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  pencilSeed?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "card",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <div
      ref={ref}
      data-slot="card"
      className={cn("pencil-border pencil-fill-paper", className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="card-header"
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    )
  },
)

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      data-slot="card-title"
      className={cn("pencil-prose-display text-2xl leading-tight tracking-tight", className)}
      {...props}
    />
  )
})

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      data-slot="card-description"
      className={cn("text-sm text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardContent({ className, ...props }, ref) {
    return (
      <div ref={ref} data-slot="card-content" className={cn("p-6 pt-0", className)} {...props} />
    )
  },
)

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function CardFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="card-footer"
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
      />
    )
  },
)
