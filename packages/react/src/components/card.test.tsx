import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"

describe("Card", () => {
  it("renders the full card composition with data-slot attributes", () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Desc</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    )
    expect(screen.getByTestId("card")).toHaveAttribute("data-slot", "card")
    expect(screen.getByText("Title")).toHaveAttribute("data-slot", "card-title")
    expect(screen.getByText("Desc")).toHaveAttribute("data-slot", "card-description")
    expect(screen.getByText("Body")).toHaveAttribute("data-slot", "card-content")
    expect(screen.getByText("Footer")).toHaveAttribute("data-slot", "card-footer")
  })
})
