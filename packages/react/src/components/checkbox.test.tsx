import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Checkbox } from "./checkbox"

describe("Checkbox", () => {
  it("renders with role checkbox", () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole("checkbox", { name: "Accept" })).toBeInTheDocument()
  })

  it("sets data-slot to checkbox", () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-slot", "checkbox")
  })

  it("reflects defaultChecked state", () => {
    render(<Checkbox defaultChecked aria-label="Accept" />)
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked")
  })

  it("applies sketch-control props as classes", () => {
    render(<Checkbox sloppiness="high" seed={2} aria-label="Accept" />)
    expect(screen.getByRole("checkbox")).toHaveClass("pencil-sloppiness-high", "pencil-seed-2")
  })
})
