import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const REGISTRY_DIR = path.join(
  path.dirname(__filename),
  "..",
  "..",
  "..",
  "packages",
  "registry",
  "r",
)

export interface RegistryItemFile {
  path: string
  type: string
  content: string
}

export interface RegistryItem {
  name: string
  type: string
  dependencies: string[]
  files: RegistryItemFile[]
}

export async function listRegistryNames(): Promise<string[]> {
  const files = await fs.readdir(REGISTRY_DIR)
  return files
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""))
    .sort()
}

export async function readRegistryItem(name: string): Promise<RegistryItem | null> {
  try {
    const text = await fs.readFile(path.join(REGISTRY_DIR, `${name}.json`), "utf8")
    return JSON.parse(text) as RegistryItem
  } catch {
    return null
  }
}
