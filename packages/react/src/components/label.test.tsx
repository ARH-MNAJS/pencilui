import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Label } from "./label"

describe("Label", () => {
  it("renders text", () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText("Email")).toBeInTheDocument()
  })

  it("sets data-slot to label", () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText("Email")).toHaveAttribute("data-slot", "label")
  })
})
