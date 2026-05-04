import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it } from "vitest"

import { Input } from "./input"

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="email" />)
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument()
  })

  it("sets data-slot to input", () => {
    render(<Input placeholder="email" />)
    expect(screen.getByPlaceholderText("email")).toHaveAttribute("data-slot", "input")
  })

  it("applies pencil-border by default", () => {
    render(<Input placeholder="email" />)
    expect(screen.getByPlaceholderText("email")).toHaveClass("pencil-border", "pencil-focus")
  })

  it("applies sketch-control props as classes", () => {
    render(<Input placeholder="email" strokeWidth="thick" sloppiness="high" seed={3} />)
    const el = screen.getByPlaceholderText("email")
    expect(el).toHaveClass("pencil-stroke-thick", "pencil-sloppiness-high", "pencil-seed-3")
  })

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} placeholder="email" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
