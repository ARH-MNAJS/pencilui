import Link from "next/link"

import { listRegistryNames } from "@/lib/registry"

export default async function HomePage() {
  const components = await listRegistryNames()

  return (
    <div className="space-y-16 py-12">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-widest text-[var(--pencil-muted)]">
          Pre-v1 · under active development
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Hand-drawn UI components for React.
        </h1>
        <p className="max-w-2xl text-lg text-[var(--pencil-muted)]">
          A complete component set where every button, input, dialog, and form looks like it was
          sketched on paper — with the keyboard nav, focus management, and ARIA correctness of a
          serious design system.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/components"
            className="pencil-border pencil-fill-solid pencil-focus inline-flex h-11 items-center px-6 text-sm font-medium text-[var(--pencil-paper)]"
          >
            Browse components
          </Link>
          <a
            href="https://github.com/ARH-MNAJS/pencilui"
            className="pencil-border pencil-focus inline-flex h-11 items-center px-6 text-sm font-medium text-[var(--pencil-ink)]"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Quickstart</h2>
        <div className="pencil-border bg-[color-mix(in_srgb,var(--pencil-ink)_4%,transparent)] p-4 font-mono text-sm">
          <pre className="overflow-x-auto">
            <code>{`npx pencilui@latest init
npx pencilui@latest add button input dialog`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          {components.length} components ready
        </h2>
        <p className="text-sm text-[var(--pencil-muted)]">
          {components.slice(0, 12).join(" · ")} and more.
        </p>
        <Link href="/components" className="text-sm underline">
          See all components →
        </Link>
      </section>
    </div>
  )
}
