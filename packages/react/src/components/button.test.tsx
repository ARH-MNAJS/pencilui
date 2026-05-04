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

  it("applies the scribbled variant", () => {
    render(<Button variant="scribbled">Scribbled</Button>)
    expect(screen.getByRole("button")).toHaveClass("pencil-fill-hachure")
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

  it("applies sketch-control props as classes", () => {
    render(
      <Button strokeWidth="thick" sloppiness="high" edges="organic" seed={2}>
        Sketchy
      </Button>,
    )
    const btn = screen.getByRole("button")
    expect(btn).toHaveClass(
      "pencil-stroke-thick",
      "pencil-sloppiness-high",
      "pencil-edges-organic",
      "pencil-seed-2",
    )
  })

  it("sets data-slot to button", () => {
    render(<Button>Slot</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button")
  })
})
