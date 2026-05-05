"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const Drawer = (props: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground {...props} />
)

export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerPortal = DrawerPrimitive.Portal
export const DrawerClose = DrawerPrimitive.Close

export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(function DrawerOverlay({ className, ...props }, ref) {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--pencil-ink)_60%,transparent)]",
        className,
      )}
      {...props}
    />
  )
})

export interface DrawerContentProps extends React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Content
> {
  pencilSeed?: string
}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(function DrawerContent({ className, children, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "modal",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        data-slot="drawer-content"
        className={cn(
          "pencil-border pencil-fill-paper fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      >
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-[var(--pencil-rule)]" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
})

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-header"
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-footer"
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(function DrawerTitle({ className, ...props }, ref) {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      data-slot="drawer-title"
      className={cn("pencil-prose-display text-2xl leading-tight tracking-tight", className)}
      {...props}
    />
  )
})

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(function DrawerDescription({ className, ...props }, ref) {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      data-slot="drawer-description"
      className={cn("text-sm text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})
