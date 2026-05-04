import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { afterEach, describe, expect, it } from "vitest"

import { fetchRegistryItem } from "./registry"

describe("fetchRegistryItem (local path)", () => {
  let tmpDir = ""

  afterEach(async () => {
    if (tmpDir) await fs.rm(tmpDir, { recursive: true, force: true })
    tmpDir = ""
  })

  it("reads and validates a manifest from disk", async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "pencilui-test-"))
    const manifest = {
      name: "button",
      type: "registry:ui",
      files: [{ path: "components/ui/button.tsx", type: "registry:ui", content: "// hello" }],
    }
    await fs.writeFile(path.join(tmpDir, "button.json"), JSON.stringify(manifest))
    const item = await fetchRegistryItem("button", tmpDir)
    expect(item.name).toBe("button")
    expect(item.files).toHaveLength(1)
    expect(item.dependencies).toEqual([])
  })

  it("throws for missing manifest", async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "pencilui-test-"))
    await expect(fetchRegistryItem("missing", tmpDir)).rejects.toThrow()
  })
})
