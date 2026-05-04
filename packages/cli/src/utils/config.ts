import { existsSync } from "node:fs"
import fs from "node:fs/promises"
import path from "node:path"
import { z } from "zod"

export const ComponentsConfigSchema = z.object({
  $schema: z.string().optional(),
  tsx: z.boolean().default(true),
  rsc: z.boolean().default(true),
  theme: z.enum(["paper", "graphite", "sepia", "custom"]).default("paper"),
  tailwind: z
    .object({
      css: z.string().default("app/globals.css"),
    })
    .default({ css: "app/globals.css" }),
  aliases: z
    .object({
      components: z.string().default("@/components"),
      ui: z.string().default("@/components/ui"),
      utils: z.string().default("@/lib/utils"),
    })
    .default({
      components: "@/components",
      ui: "@/components/ui",
      utils: "@/lib/utils",
    }),
})

export type ComponentsConfig = z.infer<typeof ComponentsConfigSchema>

export async function readConfig(cwd: string): Promise<ComponentsConfig> {
  const configPath = path.join(cwd, "components.json")
  if (!existsSync(configPath)) {
    throw new Error("components.json not found. Run `pencilui init` first.")
  }
  const text = await fs.readFile(configPath, "utf8")
  return ComponentsConfigSchema.parse(JSON.parse(text))
}

export async function writeConfig(cwd: string, config: ComponentsConfig): Promise<void> {
  const configPath = path.join(cwd, "components.json")
  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8")
}

export function aliasToFsPath(alias: string): string {
  return alias.replace(/^@\//, "")
}
