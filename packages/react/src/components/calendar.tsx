"use client"

import * as React from "react"
import {
  DayPicker,
  type DayButtonProps,
  type DayPickerProps,
  type MonthCaptionProps,
  useDayPicker,
} from "react-day-picker"

import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "../lib/cn"

export type CalendarProps = DayPickerProps

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const NOW = new Date()
const DEFAULT_START_MONTH = new Date(NOW.getFullYear() - 10, 0, 1)
const DEFAULT_END_MONTH = new Date(NOW.getFullYear() + 10, 11, 1)

function DayButton({ day, modifiers, className, ...props }: DayButtonProps) {
  const variant = modifiers.selected ? "filled" : "ghost"
  return (
    <Button
      type="button"
      variant={variant}
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

function NavIconButton({
  direction,
  ...props
}: { direction: "prev" | "next" } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="pencil-focus pencil-fill-paper-hover inline-flex size-8 shrink-0 items-center justify-center text-[var(--pencil-ink)] transition-colors disabled:pointer-events-none disabled:opacity-40"
      aria-label={direction === "prev" ? "Previous month" : "Next month"}
      {...props}
    >
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
      >
        {direction === "prev" ? <path d="M9 3 L5 7 L9 11" /> : <path d="M5 3 L9 7 L5 11" />}
      </svg>
    </button>
  )
}

interface PickerOption {
  value: number
  label: string
}

function GridPicker({
  value,
  label,
  options,
  columns,
  onChange,
  ariaLabel,
}: {
  value: number
  label: string
  options: PickerOption[]
  columns: 3 | 4
  onChange: (value: number) => void
  ariaLabel: string
}) {
  const [open, setOpen] = React.useState(false)
  const gridCols = columns === 3 ? "grid-cols-3" : "grid-cols-4"
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel}
          className="pencil-focus pencil-fill-paper-hover pencil-prose-display inline-flex h-8 items-center gap-1 px-2 text-base text-[var(--pencil-ink)] transition-colors"
        >
          {label}
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60"
          >
            <path d="M3 5 L7 9 L11 5" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent align="center" className="max-h-72 w-auto overflow-y-auto p-2">
        <div className={cn("grid gap-1", gridCols)}>
          {options.map((o) => {
            const isSelected = o.value === value
            return (
              <button
                key={o.value}
                type="button"
                data-selected={isSelected}
                onClick={() => {
                  onChange(o.value)
                  setOpen(false)
                }}
                className="pencil-option pencil-prose-body min-w-14 px-2 py-1.5 text-center text-sm hover:bg-[color-mix(in_srgb,var(--pencil-ink)_8%,transparent)]"
              >
                {o.label}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

function PencilMonthCaption({ calendarMonth }: MonthCaptionProps) {
  const { previousMonth, nextMonth, goToMonth, dayPickerProps } = useDayPicker()
  const date = calendarMonth.date
  const month = date.getMonth()
  const year = date.getFullYear()

  const startYear = (dayPickerProps.startMonth ?? DEFAULT_START_MONTH).getFullYear()
  const endYear = (dayPickerProps.endMonth ?? DEFAULT_END_MONTH).getFullYear()
  const yearOptions: PickerOption[] = []
  for (let y = startYear; y <= endYear; y++) yearOptions.push({ value: y, label: String(y) })

  const monthOptions: PickerOption[] = MONTH_LABELS.map((labelText, value) => ({
    value,
    label: labelText,
  }))

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <NavIconButton
        direction="prev"
        onClick={() => previousMonth && goToMonth(previousMonth)}
        disabled={!previousMonth}
      />
      <div className="flex items-center gap-1">
        <GridPicker
          value={month}
          label={MONTH_LABELS[month] ?? ""}
          options={monthOptions}
          columns={3}
          onChange={(m) => goToMonth(new Date(year, m, 1))}
          ariaLabel="Choose month"
        />
        <GridPicker
          value={year}
          label={String(year)}
          options={yearOptions}
          columns={4}
          onChange={(y) => goToMonth(new Date(y, month, 1))}
          ariaLabel="Choose year"
        />
      </div>
      <NavIconButton
        direction="next"
        onClick={() => nextMonth && goToMonth(nextMonth)}
        disabled={!nextMonth}
      />
    </div>
  )
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  startMonth,
  endMonth,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      hideNavigation
      startMonth={startMonth ?? DEFAULT_START_MONTH}
      endMonth={endMonth ?? DEFAULT_END_MONTH}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        month_caption: "flex w-full",
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
        MonthCaption: PencilMonthCaption,
      }}
      {...props}
    />
  )
}
