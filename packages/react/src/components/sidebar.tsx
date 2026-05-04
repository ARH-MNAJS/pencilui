import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

import { cn } from "../lib/cn"

interface SidebarContextValue {
  collapsed: boolean
  setCollapsed: (next: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const ctx = React.useContext(SidebarContext)
  if (!ctx) throw new Error("Sidebar components must be used within <Sidebar>")
  return ctx
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { className, children, defaultCollapsed = false, onCollapsedChange, ...props },
  ref,
) {
  const [collapsed, setCollapsedState] = React.useState(defaultCollapsed)
  const setCollapsed = React.useCallback(
    (next: boolean) => {
      setCollapsedState(next)
      onCollapsedChange?.(next)
    },
    [onCollapsedChange],
  )
  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <aside
        ref={ref}
        data-slot="sidebar"
        data-collapsed={collapsed}
        className={cn(
          "pencil-border flex h-full flex-col bg-[var(--pencil-paper)] transition-[width] duration-200",
          collapsed ? "w-16" : "w-64",
          className,
        )}
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
})

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function SidebarHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="sidebar-header"
        className={cn(
          "flex h-12 items-center gap-2 border-b border-[var(--pencil-rule)] px-3",
          className,
        )}
        {...props}
      />
    )
  },
)

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function SidebarContent({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="sidebar-content"
      className={cn("flex-1 overflow-auto p-2", className)}
      {...props}
    />
  )
})

export const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function SidebarFooter({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="sidebar-footer"
        className={cn("border-t border-[var(--pencil-rule)] p-2", className)}
        {...props}
      />
    )
  },
)

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(function SidebarMenu({ className, ...props }, ref) {
  return (
    <ul
      ref={ref}
      data-slot="sidebar-menu"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
})

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  function SidebarMenuItem({ className, ...props }, ref) {
    return (
      <li
        ref={ref}
        data-slot="sidebar-menu-item"
        className={cn("relative", className)}
        {...props}
      />
    )
  },
)

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  active?: boolean
}

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  function SidebarMenuButton({ asChild, active, className, ...props }, ref) {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        data-slot="sidebar-menu-button"
        data-active={active}
        className={cn(
          "pencil-focus flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-[color-mix(in_srgb,var(--pencil-ink)_8%,transparent)] data-[active=true]:bg-[color-mix(in_srgb,var(--pencil-ink)_12%,transparent)]",
          className,
        )}
        {...props}
      />
    )
  },
)

export const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function SidebarTrigger({ className, ...props }, ref) {
  const { collapsed, setCollapsed } = useSidebar()
  return (
    <button
      ref={ref}
      type="button"
      data-slot="sidebar-trigger"
      onClick={() => setCollapsed(!collapsed)}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className={cn("pencil-focus inline-flex size-8 items-center justify-center", className)}
      {...props}
    />
  )
})
