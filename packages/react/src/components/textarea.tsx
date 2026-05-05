"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/cn"
import { usePencilRadius } from "../lib/use-pencil-radius"

const textareaVariants = cva(
  "pencil-border pencil-focus pencil-fill-paper pencil-prose-body relative block min-h-20 w-full px-3 py-2 text-sm placeholder:text-[var(--pencil-muted)] disabled:cursor-not-allowed disabled:opacity-50",
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  pencilSeed?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, strokeWidth, pencilSeed, style, ...props },
  ref,
) {
  const radius = usePencilRadius(
    "textarea",
    pencilSeed !== undefined ? { seed: pencilSeed } : undefined,
  )
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(textareaVariants({ strokeWidth }), className)}
      style={{ ...radius, ...style }}
      {...props}
    />
  )
})

export { textareaVariants }
