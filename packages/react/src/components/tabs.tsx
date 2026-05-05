"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const Tabs = TabsPrimitive.Root

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  pencilSeed?: string
}

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(function TabsList({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "badge",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot="tabs-list"
      className={cn(
        "pencil-border pencil-fill-paper inline-flex h-10 items-center justify-center p-1 text-[var(--pencil-muted)]",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> {
  pencilSeed?: string
}

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(function TabsTrigger({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "navTab",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "pencil-focus inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--pencil-ink)] data-[state=active]:text-[var(--pencil-paper)]",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(function TabsContent({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      data-slot="tabs-content"
      className={cn("pencil-focus mt-2", className)}
      {...props}
    />
  )
})
