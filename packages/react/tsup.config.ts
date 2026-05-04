import { readFileSync } from "node:fs"
import { defineConfig } from "tsup"

const pkg = JSON.parse(readFileSync("./package.json", "utf8"))

const external = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
]

export default defineConfig({
  entry: ["src/index.ts", "src/sketches.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external,
  banner: { js: '"use client";' },
})
