import { Command } from "commander"

import { addCommand, type AddOptions } from "./commands/add"
import { initCommand, type InitOptions } from "./commands/init"
import { log } from "./utils/log"

const program = new Command()
  .name("pencilui")
  .description("Hand-drawn UI components for React")
  .version("0.0.0")

program
  .command("init")
  .description("Initialize pencilui in your project")
  .option("-y, --yes", "skip prompts and use defaults")
  .option("-c, --cwd <path>", "working directory", process.cwd())
  .option("--skip-install", "do not run package install")
  .action(async (options: InitOptions) => {
    try {
      await initCommand(options)
    } catch (err) {
      log.error(err instanceof Error ? err.message : String(err))
      process.exitCode = 1
    }
  })

program
  .command("add")
  .description("Add components to your project")
  .argument("<components...>", "component names to add")
  .option("-c, --cwd <path>", "working directory", process.cwd())
  .option("-o, --overwrite", "overwrite existing files")
  .option(
    "--registry <url-or-path>",
    "registry URL or local directory containing <name>.json manifests",
  )
  .option("--skip-install", "do not run package install")
  .action(async (components: string[], options: AddOptions) => {
    try {
      await addCommand(components, options)
    } catch (err) {
      log.error(err instanceof Error ? err.message : String(err))
      process.exitCode = 1
    }
  })

program.parseAsync()
