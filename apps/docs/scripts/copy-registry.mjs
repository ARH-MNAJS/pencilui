import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REGISTRY_DIR = path.join(__dirname, "..", "..", "..", "packages", "registry")
const PUBLIC_DIR = path.join(__dirname, "..", "public")
const PUBLIC_R_DIR = path.join(PUBLIC_DIR, "r")

await fs.mkdir(PUBLIC_R_DIR, { recursive: true })

const items = await fs.readdir(path.join(REGISTRY_DIR, "r"))
let copied = 0
for (const item of items) {
  if (!item.endsWith(".json")) continue
  await fs.copyFile(path.join(REGISTRY_DIR, "r", item), path.join(PUBLIC_R_DIR, item))
  copied += 1
}

await fs.copyFile(path.join(REGISTRY_DIR, "registry.json"), path.join(PUBLIC_DIR, "registry.json"))

process.stdout.write(`copied ${copied} component manifests + registry.json into public/\n`)
