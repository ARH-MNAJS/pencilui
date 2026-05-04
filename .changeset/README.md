# Changesets

This directory holds changesets for the pencilui monorepo. A changeset is a small markdown file describing what changed in a PR — which packages, what kind of bump (major / minor / patch), and a human-readable summary.

Every PR that changes a published package **must** include a changeset.

## Adding a changeset

```sh
pnpm changeset
```

Pick the affected packages, the bump kind, write a one-line summary. The CLI writes a markdown file here. Commit it with your PR.

## Releasing

The release workflow runs on push to `main`:

1. Changesets opens (or updates) a release PR that consumes the markdown files and bumps versions + writes CHANGELOGs.
2. Merging the release PR triggers `npm publish --provenance` for the affected packages.

Documentation: <https://github.com/changesets/changesets>
