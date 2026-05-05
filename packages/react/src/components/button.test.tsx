import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it } from "vitest"

import { Button } from "./button"

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("default variant uses paper fill (outline-style)", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveClass("pencil-border", "pencil-fill-paper")
    expect(btn).toHaveAttribute("data-variant", "default")
  })

  it("filled variant uses solid ink fill", () => {
    render(<Button variant="filled">Filled</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-fill-solid")
  })

  it("destructive variant routes through the danger token", () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole("button")).toHaveClass(
      "pencil-fill-danger-soft",
      "pencil-text-danger",
      "pencil-stroke-danger",
    )
  })

  it("ghost variant drops the border", () => {
    render(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-border-none")
  })

  it("link variant uses wavy underline", () => {
    render(<Button variant="link">Link</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-link-wavy", "pencil-border-none")
  })

  it("applies stroke width variant", () => {
    render(<Button strokeWidth="thick">Thick</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-stroke-thick")
  })

  it("forwards ref to the underlying button", () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it("supports asChild via Radix Slot", () => {
    render(
      <Button asChild>
        <a href="/foo">Link</a>
      </Button>,
    )
    const link = screen.getByRole("link", { name: "Link" })
    expect(link).toHaveAttribute("href", "/foo")
    expect(link).toHaveClass("pencil-border")
  })

  it("emits a per-instance --pencil-radius CSS variable", () => {
    render(<Button>Radius</Button>)
    expect(screen.getByRole("button").style.getPropertyValue("--pencil-radius")).toMatch(/\//)
  })

  it("derives a stable radius from a custom seed", () => {
    const { rerender } = render(<Button pencilSeed="alpha">A</Button>)
    const first = screen.getByRole("button").style.getPropertyValue("--pencil-radius")
    rerender(<Button pencilSeed="alpha">A</Button>)
    expect(screen.getByRole("button").style.getPropertyValue("--pencil-radius")).toBe(first)
  })
})
