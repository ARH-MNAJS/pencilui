"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const Collapsible = CollapsiblePrimitive.Root

export interface CollapsibleTriggerProps extends React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Trigger
> {
  pencilSeed?: string
  showChevron?: boolean
}

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerProps
>(function CollapsibleTrigger(
  { className, children, pencilSeed, showChevron = true, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "button",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      data-slot="collapsible-trigger"
      className={cn(
        "pencil-border pencil-focus pencil-fill-paper pencil-fill-paper-hover pencil-prose-body inline-flex h-10 items-center justify-between gap-3 px-5 text-sm transition-[transform,background-color] active:translate-y-px",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    >
      <span className="truncate">{children}</span>
      {showChevron ? (
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pencil-disclosure-icon shrink-0 opacity-70"
        >
          <path d="M3 5 L7 9 L11 5" />
        </svg>
      ) : null}
    </CollapsiblePrimitive.Trigger>
  )
})

export interface CollapsibleContentProps extends React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Content
> {
  pencilSeed?: string
}

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(function CollapsibleContent({ className, children, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "card",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      data-slot="collapsible-content"
      className="pencil-collapsible-content overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "pencil-border pencil-fill-paper pencil-prose-body mt-3 px-5 py-4 text-sm text-[var(--pencil-muted)]",
          className,
        )}
        style={{ ...radius, ...style }}
      >
        {children}
      </div>
    </CollapsiblePrimitive.Content>
  )
})
