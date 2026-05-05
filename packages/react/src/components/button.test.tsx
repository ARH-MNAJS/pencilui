import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it } from "vitest"

import { Button } from "./button"

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies the default variant classes", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveClass("pencil-border", "pencil-fill-solid")
  })

  it("applies the outline variant", () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-fill-paper")
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
    const btn = screen.getByRole("button")
    expect(btn.style.getPropertyValue("--pencil-radius")).toMatch(/\//)
  })

  it("derives a stable radius from a custom seed", () => {
    const { rerender } = render(<Button pencilSeed="alpha">A</Button>)
    const first = screen.getByRole("button").style.getPropertyValue("--pencil-radius")
    rerender(<Button pencilSeed="alpha">A</Button>)
    expect(screen.getByRole("button").style.getPropertyValue("--pencil-radius")).toBe(first)
  })

  it("sets data-slot to button", () => {
    render(<Button>Slot</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button")
  })
})
