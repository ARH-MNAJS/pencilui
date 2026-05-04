import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../lib/cn"

export const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    data-slot="resizable-panel-group"
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
)

export const ResizablePanel = ResizablePrimitive.Panel

export const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    data-slot="resizable-handle"
    className={cn(
      "pencil-focus relative flex w-px items-center justify-center bg-[var(--pencil-rule)] data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="pencil-border z-10 flex h-4 w-3 items-center justify-center bg-[var(--pencil-paper)]">
        <span className="size-2 rounded-full bg-[var(--pencil-muted)]" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)
