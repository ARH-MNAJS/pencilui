import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "pencilui",
    template: "%s · pencilui",
  },
  description: "Hand-drawn UI components for React. Accessible, themeable, performant.",
  metadataBase: new URL("https://pencilui.com"),
  openGraph: {
    title: "pencilui",
    description: "Hand-drawn UI components for React. Accessible, themeable, performant.",
    url: "https://pencilui.com",
    siteName: "pencilui",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="paper" suppressHydrationWarning>
      <body>
        <header className="sticky top-0 z-40 border-b border-[var(--pencil-rule)] bg-[var(--pencil-paper)]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              pencilui
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/components" className="hover:underline">
                Components
              </Link>
              <a
                href="https://github.com/ARH-MNAJS/pencilui"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <footer className="border-t border-[var(--pencil-rule)] py-8 text-center text-sm text-[var(--pencil-muted)]">
          <span>Pre-v1 · MIT licensed</span>
        </footer>
      </body>
    </html>
  )
}
