import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

describe("Tabs", () => {
  it("renders tabs and shows the active panel", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Panel A</TabsContent>
        <TabsContent value="b">Panel B</TabsContent>
      </Tabs>,
    )
    expect(screen.getByRole("tab", { name: "A" })).toHaveAttribute("data-state", "active")
    expect(screen.getByText("Panel A")).toBeInTheDocument()
  })

  it("sets data-slot attributes", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Panel A</TabsContent>
      </Tabs>,
    )
    expect(screen.getByRole("tab", { name: "A" })).toHaveAttribute("data-slot", "tabs-trigger")
    expect(screen.getByText("Panel A")).toHaveAttribute("data-slot", "tabs-content")
  })
})
