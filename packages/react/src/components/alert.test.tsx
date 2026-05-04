import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Alert, AlertDescription, AlertTitle } from "./alert"

describe("Alert", () => {
  it("renders with role alert and data-slot", () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Body</AlertDescription>
      </Alert>,
    )
    const alert = screen.getByRole("alert")
    expect(alert).toHaveAttribute("data-slot", "alert")
    expect(screen.getByText("Title")).toHaveAttribute("data-slot", "alert-title")
    expect(screen.getByText("Body")).toHaveAttribute("data-slot", "alert-description")
  })

  it("applies the destructive variant border", () => {
    render(<Alert variant="destructive">Heads up</Alert>)
    expect(screen.getByRole("alert")).toHaveClass("border-[var(--pencil-danger)]")
  })
})
