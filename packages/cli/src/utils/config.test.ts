import { describe, expect, it } from "vitest"

import { ComponentsConfigSchema, aliasToFsPath } from "./config"

describe("ComponentsConfigSchema", () => {
  it("applies defaults", () => {
    const config = ComponentsConfigSchema.parse({})
    expect(config.theme).toBe("paper")
    expect(config.tsx).toBe(true)
    expect(config.rsc).toBe(true)
    expect(config.tailwind.css).toBe("app/globals.css")
    expect(config.aliases.utils).toBe("@/lib/utils")
  })

  it("accepts custom values", () => {
    const config = ComponentsConfigSchema.parse({
      theme: "graphite",
      rsc: false,
      tailwind: { css: "src/styles/globals.css" },
      aliases: { components: "@/ui", ui: "@/ui/parts", utils: "@/lib/cn" },
    })
    expect(config.theme).toBe("graphite")
    expect(config.rsc).toBe(false)
    expect(config.tailwind.css).toBe("src/styles/globals.css")
    expect(config.aliases.utils).toBe("@/lib/cn")
  })

  it("rejects invalid theme", () => {
    expect(() => ComponentsConfigSchema.parse({ theme: "invalid" })).toThrow()
  })
})

describe("aliasToFsPath", () => {
  it("strips @/ prefix", () => {
    expect(aliasToFsPath("@/lib/utils")).toBe("lib/utils")
  })

  it("returns path unchanged when no @/ prefix", () => {
    expect(aliasToFsPath("lib/utils")).toBe("lib/utils")
  })
})
