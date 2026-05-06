"use client"

import * as React from "react"

import { Badge } from "./badge"
import { Input } from "./input"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { CheckSketch } from "./sketches"
import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export interface MultiselectOption {
  value: string
  label: string
}

export interface MultiselectProps {
  options: MultiselectOption[]
  value?: string[]
  onChange?: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  searchable?: boolean
  className?: string
  pencilSeed?: string
}

export function Multiselect({
  options,
  value = [],
  onChange,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyText = "No results.",
  searchable = true,
  className,
  pencilSeed,
}: MultiselectProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const radius = usePencilRadius(
    "input",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  const selectedSet = React.useMemo(() => new Set(value), [value])
  const selectedOptions = options.filter((o) => selectedSet.has(o.value))
  const normalized = query.trim().toLowerCase()
  const filtered = normalized
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(normalized) || o.value.toLowerCase().includes(normalized),
      )
    : options

  function toggle(v: string) {
    const next = selectedSet.has(v) ? value.filter((x) => x !== v) : [...value, v]
    onChange?.(next)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          data-slot="multiselect-trigger"
          className={cn(
            "pencil-border pencil-focus pencil-fill-paper pencil-fill-paper-hover pencil-prose-body relative flex min-h-10 w-72 items-center justify-between gap-2 px-5 py-1.5 text-left text-sm transition-[transform,box-shadow,background-color,border-color,color] active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
            className,
          )}
          style={radius}
        >
          <div className="flex flex-wrap items-center gap-1">
            {selectedOptions.length === 0 ? (
              <span className="text-[var(--pencil-muted)]">{placeholder}</span>
            ) : (
              selectedOptions.map((opt) => (
                <Badge key={opt.value} variant="secondary">
                  {opt.label}
                </Badge>
              ))
            )}
          </div>
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 opacity-60"
          >
            <path d="M3 5 L7 9 L11 5" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0">
        <div className="flex flex-col">
          {searchable ? (
            <div className="border-b border-[var(--pencil-rule)] p-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-9"
              />
            </div>
          ) : null}
          <ul className="max-h-60 overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-3 text-sm text-[var(--pencil-muted)]">{emptyText}</li>
            ) : (
              filtered.map((opt) => {
                const isSelected = selectedSet.has(opt.value)
                return (
                  <li key={opt.value}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => toggle(opt.value)}
                      data-selected={isSelected}
                      className="pencil-option flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm"
                    >
                      <span className="grid size-4 shrink-0 place-items-center">
                        {isSelected ? <CheckSketch className="size-3.5" /> : null}
                      </span>
                      <span className="flex-1">{opt.label}</span>
                    </button>
                  </li>
                )
              })
            )}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}
