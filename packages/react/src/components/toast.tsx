import { Toaster as SonnerToaster, type ToasterProps } from "sonner"

export function Toaster({ toastOptions, ...props }: ToasterProps) {
  return (
    <SonnerToaster
      data-slot="toaster"
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: "pencil-border pencil-radius-toast pencil-fill-paper shadow-lg",
          description: "text-[var(--pencil-muted)]",
          actionButton:
            "pencil-border pencil-radius-button pencil-fill-solid pencil-focus inline-flex h-8 items-center px-3 text-xs",
          cancelButton:
            "pencil-border pencil-radius-button pencil-fill-paper pencil-focus inline-flex h-8 items-center px-3 text-xs text-[var(--pencil-ink)]",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  )
}

export { toast } from "sonner"
