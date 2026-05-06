"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

export const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(function InputOTP({ className, containerClassName, ...props }, ref) {
  return (
    <OTPInput
      ref={ref}
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-4 has-[:disabled]:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
})

export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function InputOTPGroup({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        data-slot="input-otp-group"
        className={cn("flex items-center gap-2", className)}
        {...props}
      />
    )
  },
)

export const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(function InputOTPSlot({ index, className, style, ...props }, ref) {
  const ctx = React.useContext(OTPInputContext)
  const slot = ctx?.slots?.[index]
  const char = slot?.char ?? ""
  const hasFakeCaret = slot?.hasFakeCaret ?? false
  const isActive = slot?.isActive ?? false
  const radius = usePencilRadius("input", { seed: `otp-${index}` })
  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      className={cn(
        "pencil-border pencil-fill-paper pencil-prose-body relative flex h-10 w-10 items-center justify-center text-sm transition-all",
        isActive && "z-10 ring-2 ring-[var(--pencil-ink)]",
        className,
      )}
      style={{ ...radius, ...style }}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--pencil-ink)] duration-1000" />
        </div>
      )}
    </div>
  )
})

export const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function InputOTPSeparator({ ...props }, ref) {
  return (
    <div ref={ref} role="separator" data-slot="input-otp-separator" {...props}>
      —
    </div>
  )
})
