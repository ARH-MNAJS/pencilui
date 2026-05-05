"use client"

import * as React from "react"

import { type ButtonProps, buttonVariants } from "./button"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  function PaginationContent({ className, ...props }, ref) {
    return (
      <ul
        ref={ref}
        data-slot="pagination-content"
        className={cn("flex flex-row items-center gap-1", className)}
        {...props}
      />
    )
  },
)

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  function PaginationItem({ className, ...props }, ref) {
    return <li ref={ref} data-slot="pagination-item" className={cn("", className)} {...props} />
  },
)

type PaginationLinkProps = {
  isActive?: boolean
  pencilSeed?: string
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

export const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  pencilSeed,
  style,
  ...props
}: PaginationLinkProps) => {
  const radius = usePencilRadius(
    "pagination",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
}

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span>Previous</span>
  </PaginationLink>
)

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
  </PaginationLink>
)

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    data-slot="pagination-ellipsis"
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    …<span className="sr-only">More pages</span>
  </span>
)
