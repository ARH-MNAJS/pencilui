import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Switch } from "./switch"

describe("Switch", () => {
  it("renders with role switch", () => {
    render(<Switch aria-label="Notifications" />)
    expect(screen.getByRole("switch", { name: "Notifications" })).toBeInTheDocument()
  })

  it("sets data-slot to switch", () => {
    render(<Switch aria-label="Notifications" />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-slot", "switch")
  })

  it("reflects defaultChecked state", () => {
    render(<Switch defaultChecked aria-label="Notifications" />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked")
  })
})
