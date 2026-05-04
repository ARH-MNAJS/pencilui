import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { RadioGroup, RadioGroupItem } from "./radio-group"

describe("RadioGroup", () => {
  it("renders items as radios", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" aria-label="A" />
        <RadioGroupItem value="b" aria-label="B" />
      </RadioGroup>,
    )
    expect(screen.getAllByRole("radio")).toHaveLength(2)
  })

  it("marks default value as checked", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" aria-label="A" />
        <RadioGroupItem value="b" aria-label="B" />
      </RadioGroup>,
    )
    expect(screen.getByRole("radio", { name: "A" })).toHaveAttribute("data-state", "checked")
  })

  it("sets data-slot on items", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" aria-label="A" />
      </RadioGroup>,
    )
    expect(screen.getByRole("radio")).toHaveAttribute("data-slot", "radio-group-item")
  })
})
