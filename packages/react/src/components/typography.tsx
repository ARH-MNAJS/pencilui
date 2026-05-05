"use client"

import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const TypographyH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function TypographyH1({ className, ...props }, ref) {
  return (
    <h1
      ref={ref}
      data-slot="typography-h1"
      className={cn(
        "pencil-prose-display scroll-m-20 text-4xl tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  )
})

export const TypographyH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function TypographyH2({ className, ...props }, ref) {
  return (
    <h2
      ref={ref}
      data-slot="typography-h2"
      className={cn(
        "pencil-prose-display scroll-m-20 border-b border-[var(--pencil-rule)] pb-2 text-3xl tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  )
})

export const TypographyH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function TypographyH3({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      data-slot="typography-h3"
      className={cn("pencil-prose-display scroll-m-20 text-2xl tracking-tight", className)}
      {...props}
    />
  )
})

export const TypographyH4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(function TypographyH4({ className, ...props }, ref) {
  return (
    <h4
      ref={ref}
      data-slot="typography-h4"
      className={cn("pencil-prose-display scroll-m-20 text-xl tracking-tight", className)}
      {...props}
    />
  )
})

export const TypographyP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function TypographyP({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      data-slot="typography-p"
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
})

export const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(function TypographyBlockquote({ className, style, ...props }, ref) {
  const radius = usePencilRadius("blockquote")
  return (
    <blockquote
      ref={ref}
      data-slot="typography-blockquote"
      className={cn("mt-6 border-l-2 border-[var(--pencil-ink)] pl-6 italic", className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export const TypographyInlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(function TypographyInlineCode({ className, style, ...props }, ref) {
  const radius = usePencilRadius("badge")
  return (
    <code
      ref={ref}
      data-slot="typography-code"
      className={cn(
        "pencil-border pencil-prose-mono relative bg-[var(--pencil-paper-tint)] px-[0.4rem] py-[0.2rem] text-sm",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export const TypographyLead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function TypographyLead({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      data-slot="typography-lead"
      className={cn("text-xl text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export const TypographyMuted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function TypographyMuted({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      data-slot="typography-muted"
      className={cn("text-sm text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})
