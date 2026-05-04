# pencilui

Hand-drawn UI components for React. Accessible, themeable, performant.

[Documentation](https://pencilui.com) · [Components](https://pencilui.com/docs/components) · [Themes](https://pencilui.com/themes) · [Playground](https://pencilui.com/playground)

---

> **Pre-v1 — under active development.** Track progress on the [milestones page](https://github.com/ARH-MNAJS/pencilui/milestones).

## Overview

pencilui is a complete React UI component library where every button, input, dialog, and form looks like it was sketched on paper. Wobbly borders, hatched fills, paper textures — but with the keyboard nav, focus management, and ARIA correctness of a serious design system.

Built on Radix UI primitives for behavior and Tailwind v4 for styling. The hand-drawn look is delivered entirely via CSS — no canvas, no runtime path generation, SSR-trivial.

## Features

- A complete component set — buttons, inputs, dialogs, menus, tables, calendars, forms, the whole kit.
- Sketch variants on every component: `scribbled`, `doodled`, `inked`, `crosshatched`.
- Sketch-control props: `strokeWidth`, `edges`, `sloppiness`, `strokeStyle`, `seed`.
- WCAG 2.2 AA accessibility, full keyboard navigation, RTL, `prefers-reduced-motion` aware.
- Light and dark themes; full customization via CSS variables.
- React 18 and 19 — works with Next.js App Router, Vite, Remix.
- Hybrid distribution: a tiny npm runtime plus a CLI that copies styled component shells into your repo. You own the source.
- Strict performance budgets — under 15 KB for the CSS layer, under 25 KB for the React runtime, sub-1 KB per copied shell.

## Installation

```sh
npx pencilui@latest init
npx pencilui@latest add button input dialog
```

See the [installation guide](https://pencilui.com/docs/installation) for framework-specific setup.

## Usage

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button variant="scribbled" sloppiness="high">
      Click me
    </Button>
  )
}
```

Full component reference at [pencilui.com/docs/components](https://pencilui.com/docs/components).

## Contributing

Contributions are welcome. Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a PR.

## License

[MIT](./LICENSE)
