import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, "..", "dist")
const DIRECTIVE = '"use client";\n'

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (full.endsWith(".js")) {
      files.push(full)
    }
  }
  return files
}

const files = await walk(DIST_DIR)
let updated = 0
for (const file of files) {
  const content = await fs.readFile(file, "utf8")
  if (content.startsWith('"use client"') || content.startsWith("'use client'")) continue
  await fs.writeFile(file, DIRECTIVE + content, "utf8")
  updated += 1
}

process.stdout.write(`prepended "use client" to ${updated} files in ${DIST_DIR}\n`)
