import path from "node:path"

import { readConfig } from "../utils/config"
import { writeFileSafe } from "../utils/files"
import { installPackages } from "../utils/install"
import { log } from "../utils/log"
import { fetchRegistryItem } from "../utils/registry"

const DEFAULT_REGISTRY = "https://pencilui.com/r"

export interface AddOptions {
  cwd: string
  overwrite?: boolean
  registry?: string
  skipInstall?: boolean
}

export async function addCommand(components: string[], options: AddOptions): Promise<void> {
  if (components.length === 0) {
    log.warn("no components specified")
    return
  }

  const cwd = path.resolve(options.cwd)
  await readConfig(cwd)
  const registry = options.registry ?? DEFAULT_REGISTRY

  const allDeps = new Set<string>()

  for (const name of components) {
    log.step(`adding ${name}`)
    const item = await fetchRegistryItem(name, registry)

    for (const file of item.files) {
      const targetPath = path.join(cwd, file.path)
      const result = await writeFileSafe(targetPath, file.content, {
        overwrite: options.overwrite ?? false,
      })
      if (result === "written") {
        log.success(`wrote ${path.relative(cwd, targetPath)}`)
      } else {
        log.info(`${path.relative(cwd, targetPath)} exists, skipping`)
      }
    }

    for (const dep of item.dependencies) allDeps.add(dep)
  }

  if (allDeps.size > 0 && !options.skipInstall) {
    log.step(`installing peer dependencies`)
    installPackages(cwd, [...allDeps])
  }

  log.success("done")
}
