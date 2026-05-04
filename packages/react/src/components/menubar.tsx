import * as MenubarPrimitive from "@radix-ui/react-menubar"
import * as React from "react"

import { CheckSketch, RadioDotSketch } from "./sketches"
import { cn } from "../lib/cn"

export const MenubarMenu = (
  props: React.ComponentProps<typeof MenubarPrimitive.Menu>,
): React.ReactElement => <MenubarPrimitive.Menu {...props} />
export const MenubarGroup = MenubarPrimitive.Group
export const MenubarPortal = MenubarPrimitive.Portal
export const MenubarSub = (
  props: React.ComponentProps<typeof MenubarPrimitive.Sub>,
): React.ReactElement => <MenubarPrimitive.Sub {...props} />
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup

export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(function Menubar({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      data-slot="menubar"
      className={cn(
        "pencil-border flex h-10 items-center space-x-1 bg-[var(--pencil-paper)] p-1",
        className,
      )}
      {...props}
    />
  )
})

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(function MenubarTrigger({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      data-slot="menubar-trigger"
      className={cn(
        "flex cursor-default select-none items-center px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)]",
        className,
      )}
      {...props}
    />
  )
})

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>
>(function MenubarSubTrigger({ className, children, ...props }, ref) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      className={cn(
        "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[state=open]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)]",
        className,
      )}
      {...props}
    >
      {children}
    </MenubarPrimitive.SubTrigger>
  )
})

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(function MenubarSubContent({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      className={cn(
        "pencil-border z-50 min-w-32 overflow-hidden bg-[var(--pencil-paper)] p-1 text-[var(--pencil-ink)] shadow-md",
        className,
      )}
      {...props}
    />
  )
})

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(function MenubarContent(
  { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
  ref,
) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        data-slot="menubar-content"
        className={cn(
          "pencil-border z-50 min-w-48 overflow-hidden bg-[var(--pencil-paper)] p-1 text-[var(--pencil-ink)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
})

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>(function MenubarItem({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      className={cn(
        "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
})

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(function MenubarCheckboxItem({ className, children, ...props }, ref) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3.5 place-items-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckSketch className="size-3.5" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
})

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(function MenubarRadioItem({ className, children, ...props }, ref) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-[color-mix(in_srgb,var(--pencil-ink)_10%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 grid size-3 place-items-center">
        <MenubarPrimitive.ItemIndicator>
          <RadioDotSketch className="size-3" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
})

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>
>(function MenubarLabel({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-[var(--pencil-muted)]", className)}
      {...props}
    />
  )
})

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(function MenubarSeparator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      data-slot="menubar-separator"
      className={cn("mx-1 my-1 h-px bg-[var(--pencil-rule)]", className)}
      {...props}
    />
  )
})

export const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="menubar-shortcut"
    className={cn("ml-auto text-xs tracking-widest text-[var(--pencil-muted)]", className)}
    {...props}
  />
)
