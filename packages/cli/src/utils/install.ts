import { spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import path from "node:path"

export type PackageManager = "pnpm" | "yarn" | "npm" | "bun"

export function detectPackageManager(cwd: string): PackageManager {
  if (existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm"
  if (existsSync(path.join(cwd, "yarn.lock"))) return "yarn"
  if (existsSync(path.join(cwd, "bun.lockb"))) return "bun"
  return "npm"
}

export function installPackages(cwd: string, packages: string[]): void {
  if (packages.length === 0) return
  const pm = detectPackageManager(cwd)
  const cmd = pm === "yarn" || pm === "bun" ? "add" : "install"
  spawnSync(pm, [cmd, ...packages], { cwd, stdio: "inherit" })
}
