"use client"

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(function NavigationMenu({ className, children, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      data-slot="navigation-menu"
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
})

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(function NavigationMenuList({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      data-slot="navigation-menu-list"
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      {...props}
    />
  )
})

export const NavigationMenuItem = NavigationMenuPrimitive.Item

export const navigationMenuTriggerStyle = cva(
  "pencil-focus pencil-prose-body pencil-fill-paper-hover inline-flex h-10 items-center justify-center px-4 py-2 text-sm transition-colors",
)

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(function NavigationMenuTrigger({ className, children, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  )
})

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(function NavigationMenuContent({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      data-slot="navigation-menu-content"
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto",
        className,
      )}
      {...props}
    />
  )
})

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(function NavigationMenuLink({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      data-slot="navigation-menu-link"
      className={cn(
        "pencil-nav-underline pencil-focus pencil-prose-body block w-fit px-3 py-2 text-sm",
        className,
      )}
      {...props}
    />
  )
})

export interface NavigationMenuViewportProps extends React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
> {
  pencilSeed?: string
}

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(function NavigationMenuViewport({ className, pencilSeed, style, ...props }, ref) {
  const radius = usePencilRadius(
    "popover",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        data-slot="navigation-menu-viewport"
        className={cn(
          "pencil-border pencil-fill-paper origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden text-[var(--pencil-ink)] shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        style={{ ...radius, ...style }}
        {...props}
      />
    </div>
  )
})
