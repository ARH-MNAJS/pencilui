import { existsSync } from "node:fs"
import fs from "node:fs/promises"
import path from "node:path"

export async function writeFileSafe(
  filePath: string,
  content: string,
  options: { overwrite?: boolean } = {},
): Promise<"written" | "skipped"> {
  if (existsSync(filePath) && !options.overwrite) {
    return "skipped"
  }
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, content, "utf8")
  return "written"
}
