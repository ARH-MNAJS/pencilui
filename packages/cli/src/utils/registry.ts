import fs from "node:fs/promises"
import path from "node:path"
import { z } from "zod"

const RegistryItemFileSchema = z.object({
  path: z.string(),
  type: z.string(),
  content: z.string(),
})

export const RegistryItemSchema = z.object({
  $schema: z.string().optional(),
  name: z.string(),
  type: z.string(),
  dependencies: z.array(z.string()).default([]),
  devDependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([]),
  files: z.array(RegistryItemFileSchema),
})

export type RegistryItem = z.infer<typeof RegistryItemSchema>

export async function fetchRegistryItem(name: string, registry: string): Promise<RegistryItem> {
  let json: unknown
  if (/^https?:\/\//.test(registry)) {
    const url = `${registry.replace(/\/$/, "")}/${name}.json`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
    }
    json = await res.json()
  } else {
    const filePath = path.isAbsolute(registry)
      ? path.join(registry, `${name}.json`)
      : path.join(process.cwd(), registry, `${name}.json`)
    const text = await fs.readFile(filePath, "utf8")
    json = JSON.parse(text)
  }
  return RegistryItemSchema.parse(json)
}
