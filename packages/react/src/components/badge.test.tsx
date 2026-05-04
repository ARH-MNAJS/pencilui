import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Badge } from "./badge"

describe("Badge", () => {
  it("renders text", () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText("New")).toHaveAttribute("data-slot", "badge")
  })

  it("applies the destructive variant classes", () => {
    render(<Badge variant="destructive">Bad</Badge>)
    expect(screen.getByText("Bad")).toHaveClass("bg-[var(--pencil-danger)]")
  })

  it("applies the outline variant classes", () => {
    render(<Badge variant="outline">Out</Badge>)
    expect(screen.getByText("Out")).toHaveClass("pencil-fill-none")
  })
})
