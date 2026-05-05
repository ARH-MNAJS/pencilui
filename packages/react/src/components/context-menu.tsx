"use client"

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import * as React from "react"

import { CheckSketch, RadioDotSketch } from "./sketches"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const ContextMenu = ContextMenuPrimitive.Root
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger
export const ContextMenuGroup = ContextMenuPrimitive.Group
export const ContextMenuPortal = ContextMenuPrimitive.Portal
export const ContextMenuSub = ContextMenuPrimitive.Sub
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

export const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>
>(function ContextMenuSubTrigger({ className, children, ...props }, ref) {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="context-menu-sub-trigger"
      className={cn(
        "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[state=open]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)]",
        className,
      )}
      {...props}
    >
      {children}
    </ContextMenuPrimitive.SubTrigger>
  )
})

export interface ContextMenuSubContentProps extends React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> {
  pencilSeed?: string
}

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(function ContextMenuSubContent({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "dropdown",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      data-slot="context-menu-sub-content"
      className={cn(
        "pencil-border pencil-fill-paper z-50 min-w-32 overflow-hidden p-1 text-[var(--pencil-ink)] shadow-md",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> {
  pencilSeed?: string
}

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(function ContextMenuContent({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "dropdown",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        data-slot="context-menu-content"
        className={cn(
          "pencil-border pencil-fill-paper z-50 min-w-32 overflow-hidden p-1 text-[var(--pencil-ink)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
})

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>
>(function ContextMenuItem({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      data-slot="context-menu-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
})

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(function ContextMenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      data-slot="context-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3.5 place-items-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckSketch className="size-3.5" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(function ContextMenuRadioItem({ className, children, ...props }, ref) {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      data-slot="context-menu-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3 place-items-center">
        <ContextMenuPrimitive.ItemIndicator>
          <RadioDotSketch className="size-3" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
})

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>(function ContextMenuLabel({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      data-slot="context-menu-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(function ContextMenuSeparator({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      data-slot="context-menu-separator"
      className={cn("mx-1 my-1 h-px bg-[var(--pencil-rule)]", className)}
      {...props}
    />
  )
})

export const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="context-menu-shortcut"
    className={cn("ml-auto text-xs tracking-widest text-[var(--pencil-muted)]", className)}
    {...props}
  />
)
