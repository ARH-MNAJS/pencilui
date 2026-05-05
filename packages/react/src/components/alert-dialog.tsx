"use client"

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const AlertDialog = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger
export const AlertDialogPortal = AlertDialogPrimitive.Portal

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(function AlertDialogOverlay({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--pencil-ink)_60%,transparent)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  )
})

export interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> {
  pencilSeed?: string
}

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(function AlertDialogContent({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "modal",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        data-slot="alert-dialog-content"
        className={cn(
          "pencil-border pencil-fill-paper fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </AlertDialogPortal>
  )
})

export const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="alert-dialog-header"
    className={cn("flex flex-col space-y-1.5 text-left", className)}
    {...props}
  />
)

export const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="alert-dialog-footer"
    className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  />
)

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(function AlertDialogTitle({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      data-slot="alert-dialog-title"
      className={cn("pencil-prose-display text-2xl leading-tight", className)}
      {...props}
    />
  )
})

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(function AlertDialogDescription({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      data-slot="alert-dialog-description"
      className={cn("text-sm text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> {
  pencilSeed?: string
}

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(function AlertDialogAction({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "button",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      data-slot="alert-dialog-action"
      className={cn(
        "pencil-border pencil-fill-solid pencil-focus pencil-prose-body inline-flex h-10 items-center justify-center px-4 text-sm",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> {
  pencilSeed?: string
}

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(function AlertDialogCancel({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "button",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      data-slot="alert-dialog-cancel"
      className={cn(
        "pencil-border pencil-fill-paper pencil-focus pencil-prose-body inline-flex h-10 items-center justify-center px-4 text-sm text-[var(--pencil-ink)]",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})
