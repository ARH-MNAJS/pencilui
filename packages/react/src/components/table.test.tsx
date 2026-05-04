import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"

describe("Table", () => {
  it("renders a basic table with data-slot attributes", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )
    expect(screen.getByRole("table")).toHaveAttribute("data-slot", "table")
    expect(screen.getByText("Name")).toHaveAttribute("data-slot", "table-head")
    expect(screen.getByText("Alice")).toHaveAttribute("data-slot", "table-cell")
  })
})
