import type { Metadata } from "next"
import Link from "next/link"

import { listRegistryNames } from "@/lib/registry"

export const metadata: Metadata = {
  title: "Components",
  description: "Every component in pencilui.",
}

export default async function ComponentsIndexPage() {
  const names = await listRegistryNames()

  return (
    <div className="space-y-8 py-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-[var(--pencil-muted)]">{names.length} components.</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {names.map((name) => (
          <Link
            key={name}
            href={`/components/${name}`}
            className="pencil-border pencil-focus block bg-[var(--pencil-paper)] p-4 transition-colors hover:bg-[color-mix(in_srgb,var(--pencil-ink)_5%,transparent)]"
          >
            <div className="font-medium">{name}</div>
            <div className="text-xs text-[var(--pencil-muted)]">/components/{name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
