"use client"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import * as React from "react"

import { CheckSketch, RadioDotSketch } from "./sketches"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(function DropdownMenuSubTrigger({ className, children, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="dropdown-menu-sub-trigger"
      className={cn(
        "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[state=open]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)]",
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubTrigger>
  )
})

export interface DropdownMenuSubContentProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
> {
  pencilSeed?: string
}

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(function DropdownMenuSubContent({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "dropdown",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "pencil-border pencil-fill-paper z-50 min-w-32 overflow-hidden p-1 text-[var(--pencil-ink)] shadow-md",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
> {
  pencilSeed?: string
}

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(function DropdownMenuContent({ className, sideOffset = 4, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "dropdown",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        data-slot="dropdown-menu-content"
        className={cn(
          "pencil-border pencil-fill-paper z-50 min-w-32 overflow-hidden p-1 text-[var(--pencil-ink)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
})

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(function DropdownMenuItem({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      data-slot="dropdown-menu-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
})

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3.5 place-items-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckSketch className="size-3.5" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(function DropdownMenuRadioItem({ className, children, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3 place-items-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <RadioDotSketch className="size-3" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
})

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(function DropdownMenuLabel({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      data-slot="dropdown-menu-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      data-slot="dropdown-menu-separator"
      className={cn("mx-1 my-1 h-px bg-[var(--pencil-rule)]", className)}
      {...props}
    />
  )
})

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="dropdown-menu-shortcut"
    className={cn("ml-auto text-xs tracking-widest text-[var(--pencil-muted)]", className)}
    {...props}
  />
)
