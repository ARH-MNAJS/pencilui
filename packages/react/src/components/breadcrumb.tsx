import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

import { cn } from "../lib/cn"

export const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }
>(function Breadcrumb({ ...props }, ref) {
  return <nav ref={ref} aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
})

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(function BreadcrumbList({ className, ...props }, ref) {
  return (
    <ol
      ref={ref}
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--pencil-muted)] sm:gap-2.5",
        className,
      )}
      {...props}
    />
  )
})

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  function BreadcrumbItem({ className, ...props }, ref) {
    return (
      <li
        ref={ref}
        data-slot="breadcrumb-item"
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
      />
    )
  },
)

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }
>(function BreadcrumbLink({ asChild, className, ...props }, ref) {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp
      ref={ref}
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-[var(--pencil-ink)]", className)}
      {...props}
    />
  )
})

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function BreadcrumbPage({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      data-slot="breadcrumb-page"
      className={cn("font-normal text-[var(--pencil-ink)]", className)}
      {...props}
    />
  )
})

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-separator"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? "/"}
  </li>
)

export const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-ellipsis"
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    …<span className="sr-only">More</span>
  </span>
)
