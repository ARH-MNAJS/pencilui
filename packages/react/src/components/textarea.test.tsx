import { render, screen } from "@testing-library/react"
import * as React from "react"
import { describe, expect, it } from "vitest"

import { Textarea } from "./textarea"

describe("Textarea", () => {
  it("renders with placeholder", () => {
    render(<Textarea placeholder="notes" />)
    expect(screen.getByPlaceholderText("notes")).toBeInTheDocument()
  })

  it("sets data-slot to textarea", () => {
    render(<Textarea placeholder="notes" />)
    expect(screen.getByPlaceholderText("notes")).toHaveAttribute("data-slot", "textarea")
  })

  it("forwards ref", () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} placeholder="notes" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
