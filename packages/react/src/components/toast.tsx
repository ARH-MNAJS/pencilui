import { Toaster as SonnerToaster, type ToasterProps } from "sonner"

export function Toaster({ toastOptions, ...props }: ToasterProps) {
  return (
    <SonnerToaster
      data-slot="toaster"
      toastOptions={{
        ...toastOptions,
        unstyled: true,
        classNames: {
          toast:
            "pencil-border pencil-radius-toast pencil-fill-paper pencil-prose-body relative flex w-full items-start gap-3 p-4 text-sm shadow-lg",
          title: "pencil-prose-display text-sm leading-tight",
          description: "text-xs text-[var(--pencil-muted)]",
          icon: "shrink-0 mt-0.5",
          error: "pencil-fill-danger-soft pencil-text-danger pencil-stroke-danger",
          success: "pencil-fill-success-soft pencil-text-success pencil-stroke-success",
          warning: "[--pencil-stroke-color:var(--pencil-warning)]",
          info: "[--pencil-stroke-color:var(--pencil-info)]",
          actionButton:
            "pencil-border pencil-radius-button pencil-fill-solid pencil-focus inline-flex h-8 items-center px-3 text-xs",
          cancelButton:
            "pencil-border pencil-radius-button pencil-fill-paper pencil-focus inline-flex h-8 items-center px-3 text-xs text-[var(--pencil-ink)]",
          closeButton:
            "pencil-border pencil-fill-paper pencil-focus absolute right-2 top-2 inline-flex size-6 items-center justify-center text-xs",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  )
}

export { toast } from "sonner"
