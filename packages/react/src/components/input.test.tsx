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

  it("applies stroke width variant", () => {
    render(<Input placeholder="email" strokeWidth="thick" />)
    expect(screen.getByPlaceholderText("email")).toHaveClass("pencil-stroke-thick")
  })

  it("emits a per-instance --pencil-radius CSS variable", () => {
    render(<Input placeholder="email" />)
    expect(screen.getByPlaceholderText("email").style.getPropertyValue("--pencil-radius")).toMatch(
      /\//,
    )
  })

  it("forwards ref", () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} placeholder="email" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
