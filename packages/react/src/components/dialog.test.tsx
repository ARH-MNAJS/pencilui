import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./dialog"

describe("Dialog", () => {
  it("renders trigger and content when open", () => {
    render(
      <Dialog open>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Desc</DialogDescription>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByText("Title")).toHaveAttribute("data-slot", "dialog-title")
    expect(screen.getByText("Desc")).toHaveAttribute("data-slot", "dialog-description")
  })
})
