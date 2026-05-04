import { existsSync } from "node:fs"
import fs from "node:fs/promises"
import path from "node:path"
import prompts from "prompts"

import { UTILS_TEMPLATE } from "../templates"
import { ComponentsConfigSchema, type ComponentsConfig, aliasToFsPath } from "../utils/config"
import { writeFileSafe } from "../utils/files"
import { installPackages } from "../utils/install"
import { log } from "../utils/log"

export interface InitOptions {
  yes?: boolean
  cwd: string
  skipInstall?: boolean
}

export async function initCommand(options: InitOptions): Promise<void> {
  const cwd = path.resolve(options.cwd)
  const configPath = path.join(cwd, "components.json")

  if (existsSync(configPath) && !options.yes) {
    const { overwrite } = await prompts({
      type: "confirm",
      name: "overwrite",
      message: "components.json exists. Overwrite?",
      initial: false,
    })
    if (!overwrite) {
      log.warn("init cancelled")
      return
    }
  }

  let config: ComponentsConfig
  if (options.yes) {
    config = ComponentsConfigSchema.parse({
      $schema: "https://pencilui.com/schemas/config.json",
    })
  } else {
    const responses = await prompts([
      {
        type: "select",
        name: "theme",
        message: "Theme preset:",
        choices: [
          { title: "paper (light)", value: "paper" },
          { title: "graphite (dark)", value: "graphite" },
          { title: "sepia (warm)", value: "sepia" },
        ],
        initial: 0,
      },
      {
        type: "confirm",
        name: "rsc",
        message: "Use React Server Components?",
        initial: true,
      },
      {
        type: "text",
        name: "componentsAlias",
        message: "Components alias:",
        initial: "@/components",
      },
      {
        type: "text",
        name: "utilsAlias",
        message: "Utils alias:",
        initial: "@/lib/utils",
      },
      {
        type: "text",
        name: "cssPath",
        message: "Path to globals CSS:",
        initial: "app/globals.css",
      },
    ])
    config = ComponentsConfigSchema.parse({
      $schema: "https://pencilui.com/schemas/config.json",
      theme: responses.theme as ComponentsConfig["theme"],
      rsc: responses.rsc as boolean,
      tailwind: { css: responses.cssPath as string },
      aliases: {
        components: responses.componentsAlias as string,
        ui: `${responses.componentsAlias as string}/ui`,
        utils: responses.utilsAlias as string,
      },
    })
  }

  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8")
  log.success(`wrote ${path.relative(cwd, configPath)}`)

  const utilsRel = `${aliasToFsPath(config.aliases.utils)}.ts`
  const utilsPath = path.join(cwd, utilsRel)
  const utilsResult = await writeFileSafe(utilsPath, UTILS_TEMPLATE)
  if (utilsResult === "written") {
    log.success(`wrote ${path.relative(cwd, utilsPath)}`)
  } else {
    log.info(`${path.relative(cwd, utilsPath)} already exists, skipping`)
  }

  const cssPath = path.join(cwd, config.tailwind.css)
  if (existsSync(cssPath)) {
    const css = await fs.readFile(cssPath, "utf8")
    if (!css.includes("@pencilui/styles/preset.css")) {
      await fs.writeFile(cssPath, `@import "@pencilui/styles/preset.css";\n\n${css}`, "utf8")
      log.success(`patched ${path.relative(cwd, cssPath)}`)
    } else {
      log.info(`${path.relative(cwd, cssPath)} already imports @pencilui/styles, skipping`)
    }
  } else {
    log.warn(
      `${config.tailwind.css} not found — add this to your globals manually:\n  @import "@pencilui/styles/preset.css";`,
    )
  }

  if (!options.skipInstall) {
    log.step("installing @pencilui/react and @pencilui/styles")
    installPackages(cwd, ["@pencilui/react", "@pencilui/styles", "clsx", "tailwind-merge"])
  }

  log.success("init complete")
  log.info("Wrap your root layout with <PencilProvider> from @pencilui/react.")
  log.info("Run `npx pencilui add button` to add your first component.")
}
