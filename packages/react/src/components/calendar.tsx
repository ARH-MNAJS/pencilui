"use client"

import { DayPicker, type DayButtonProps, type DayPickerProps } from "react-day-picker"

import { Button } from "./button"
import { cn } from "../lib/cn"

export type CalendarProps = DayPickerProps

function DayButton({ day, modifiers, className, ...props }: DayButtonProps) {
  const variant = modifiers.selected ? "default" : "ghost"
  return (
    <Button
      type="button"
      variant={variant}
      size="icon"
      pencilSeed={`day-${day.date.toISOString()}`}
      className={cn(
        "size-8 p-0 font-normal",
        modifiers.outside && "text-[var(--pencil-muted)] opacity-50",
        modifiers.disabled && "text-[var(--pencil-muted)] opacity-50",
        modifiers.today && !modifiers.selected && "ring-1 ring-[var(--pencil-ink)]",
        className,
      )}
      {...props}
    />
  )
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "pencil-prose-display text-base",
        nav: "flex items-center justify-between absolute inset-x-1 top-1",
        button_previous: "size-7 opacity-50 hover:opacity-100",
        button_next: "size-7 opacity-50 hover:opacity-100",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-[var(--pencil-muted)] w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "size-8 text-center text-sm p-0 relative",
        day_button: "size-8",
        outside: "text-[var(--pencil-muted)] opacity-50",
        disabled: "text-[var(--pencil-muted)] opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        DayButton,
      }}
      {...props}
    />
  )
}
