export {
  ComponentsConfigSchema,
  aliasToFsPath,
  readConfig,
  writeConfig,
  type ComponentsConfig,
} from "./utils/config"
export { RegistryItemSchema, fetchRegistryItem, type RegistryItem } from "./utils/registry"
export { detectPackageManager, type PackageManager } from "./utils/install"
