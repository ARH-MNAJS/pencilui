import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { listRegistryNames, readRegistryItem } from "@/lib/registry"

export async function generateStaticParams() {
  const names = await listRegistryNames()
  return names.map((name) => ({ name }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const { name } = await params
  return {
    title: name,
    description: `${name} — pencilui component`,
  }
}

export default async function ComponentPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  const item = await readRegistryItem(name)
  if (!item) notFound()

  const file = item.files[0]

  return (
    <article className="space-y-10 py-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-[var(--pencil-muted)]">Component</p>
        <h1 className="text-4xl font-semibold tracking-tight">{name}</h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-[var(--pencil-muted)]">
          Run the CLI from the root of your project:
        </p>
        <div className="pencil-border bg-[color-mix(in_srgb,var(--pencil-ink)_4%,transparent)] p-4 font-mono text-sm">
          <code>npx pencilui@latest add {name}</code>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Dependencies</h2>
        {item.dependencies.length === 0 ? (
          <p className="text-sm text-[var(--pencil-muted)]">No additional dependencies.</p>
        ) : (
          <ul className="flex flex-wrap gap-2 text-sm">
            {item.dependencies.map((dep) => (
              <li
                key={dep}
                className="pencil-border bg-[var(--pencil-paper)] px-2 py-1 font-mono text-xs"
              >
                {dep}
              </li>
            ))}
          </ul>
        )}
      </section>

      {file && (
        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Source</h2>
            <span className="font-mono text-xs text-[var(--pencil-muted)]">{file.path}</span>
          </div>
          <pre className="pencil-border max-h-[640px] overflow-auto bg-[color-mix(in_srgb,var(--pencil-ink)_4%,transparent)] p-4 font-mono text-xs leading-relaxed">
            <code>{file.content}</code>
          </pre>
        </section>
      )}

      <section className="border-t border-[var(--pencil-rule)] pt-8">
        <Link href="/components" className="text-sm underline">
          ← All components
        </Link>
      </section>
    </article>
  )
}
