import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { PencilProvider } from "./pencil-provider"

describe("PencilProvider", () => {
  it("sets data-theme on its root", () => {
    render(
      <PencilProvider data-testid="root" defaultTheme="graphite">
        <span>child</span>
      </PencilProvider>,
    )
    const root = screen.getByTestId("root")
    expect(root).toHaveAttribute("data-theme", "graphite")
  })

  it("writes token overrides as inline CSS variables", () => {
    render(
      <PencilProvider
        data-testid="root"
        tokens={{ paper: "#abcdef", ink: "#111", strokeWidth: "2px" }}
      >
        <span>child</span>
      </PencilProvider>,
    )
    const root = screen.getByTestId("root")
    expect(root.style.getPropertyValue("--pencil-paper")).toBe("#abcdef")
    expect(root.style.getPropertyValue("--pencil-ink")).toBe("#111")
    expect(root.style.getPropertyValue("--pencil-stroke-width")).toBe("2px")
  })

  it("does not set inline style when no tokens given", () => {
    render(
      <PencilProvider data-testid="root">
        <span>child</span>
      </PencilProvider>,
    )
    const root = screen.getByTestId("root")
    expect(root.getAttribute("style")).toBeNull()
  })
})
