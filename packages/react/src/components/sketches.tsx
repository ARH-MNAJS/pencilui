import * as React from "react"

export const CheckSketch = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function CheckSketch({ className, ...props }, ref) {
    return (
      <svg
        ref={ref}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M3 8 L7 12 L13 4" />
      </svg>
    )
  },
)

export const RadioDotSketch = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function RadioDotSketch({ className, ...props }, ref) {
    return (
      <svg
        ref={ref}
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="8" cy="8" r="3" />
      </svg>
    )
  },
)
