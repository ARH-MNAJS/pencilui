"use client"

import { format } from "date-fns"

import { Button } from "./button"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "../lib/cn"

export interface DatePickerProps {
  value?: Date | undefined
  onChange?: ((date: Date | undefined) => void) | undefined
  placeholder?: string | undefined
  className?: string | undefined
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-slot="date-picker-trigger"
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !value && "text-[var(--pencil-muted)]",
            className,
          )}
        >
          {value ? format(value, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          {...(value !== undefined ? { selected: value } : {})}
          {...(onChange ? { onSelect: onChange } : {})}
        />
      </PopoverContent>
    </Popover>
  )
}
