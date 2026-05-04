import { Toaster as SonnerToaster, type ToasterProps } from "sonner"

export function Toaster({ toastOptions, ...props }: ToasterProps) {
  return (
    <SonnerToaster
      data-slot="toaster"
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: "pencil-border bg-[var(--pencil-paper)] text-[var(--pencil-ink)] shadow-lg",
          description: "text-[var(--pencil-muted)]",
          actionButton:
            "pencil-border pencil-fill-solid pencil-focus inline-flex h-8 items-center px-3 text-xs text-[var(--pencil-paper)]",
          cancelButton:
            "pencil-border pencil-fill-none pencil-focus inline-flex h-8 items-center px-3 text-xs text-[var(--pencil-ink)]",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  )
}

export { toast } from "sonner"
