"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const inputVariants = cva(
  "pencil-border pencil-focus pencil-fill-paper pencil-prose-body relative block h-10 w-full px-3 text-sm placeholder:text-[var(--pencil-muted)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      strokeWidth: {
        thin: "pencil-stroke-thin",
        default: "pencil-stroke-default",
        thick: "pencil-stroke-thick",
      },
    },
    defaultVariants: {
      strokeWidth: "default",
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  pencilSeed?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, strokeWidth, type, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "input",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(inputVariants({ strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export { inputVariants }
