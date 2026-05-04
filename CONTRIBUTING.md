# Contributing to pencilui

Thanks for your interest. This document covers what you need to know to contribute.

## Local setup

Requirements: Node 22+, pnpm 9+.

```sh
git clone https://github.com/ARH-MNAJS/pencilui.git
cd pencilui
pnpm install
pnpm build
pnpm test
```

`pnpm install` also installs Husky hooks via the `prepare` script.

## Workflow

1. Open or claim an issue first for non-trivial changes. Drive-by refactors are not accepted.
2. Branch from `main`.
3. Make your change. Keep PRs to one logical concern.
4. Run `pnpm lint && pnpm typecheck && pnpm test && pnpm format:check` locally before pushing.
5. Add a changeset describing the change: `pnpm changeset`.
6. Open a PR. The title must follow Conventional Commits (e.g. `feat(button): add scribbled variant`).

## Conventions

- **Conventional Commits** enforced via `commitlint` on every commit message and PR title.
- **No AI co-author lines** in commits, no AI-attribution footers in PRs or release notes.
- **No comments** unless removing them would leave a future reader confused.
- **TypeScript strict**, ESLint `--max-warnings 0`, Prettier formatted, deterministic tests.
- Tests required for behavioral changes.
- Visual regression baselines updated only via PR review.

## Breaking changes (RFCs)

Breaking changes go through an RFC PR in [`rfcs/`](./rfcs/). Two-week comment period for non-trivial proposals before merge.

## Reporting bugs

Use the GitHub issue template. Include a minimal reproduction (Sandbox link or repo). Issues without repros may be closed.

## License

By contributing, you agree your contributions are licensed under the MIT license (see [`LICENSE`](./LICENSE)).
