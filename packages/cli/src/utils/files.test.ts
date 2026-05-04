import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { afterEach, describe, expect, it } from "vitest"

import { writeFileSafe } from "./files"

describe("writeFileSafe", () => {
  let tmpDir = ""

  afterEach(async () => {
    if (tmpDir) await fs.rm(tmpDir, { recursive: true, force: true })
    tmpDir = ""
  })

  it("creates parent directories and writes the file", async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "pencilui-test-"))
    const target = path.join(tmpDir, "a", "b", "c.txt")
    const result = await writeFileSafe(target, "hello")
    expect(result).toBe("written")
    expect(await fs.readFile(target, "utf8")).toBe("hello")
  })

  it("skips when the file exists and overwrite is false", async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "pencilui-test-"))
    const target = path.join(tmpDir, "a.txt")
    await fs.writeFile(target, "original")
    const result = await writeFileSafe(target, "new")
    expect(result).toBe("skipped")
    expect(await fs.readFile(target, "utf8")).toBe("original")
  })

  it("overwrites when overwrite is true", async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "pencilui-test-"))
    const target = path.join(tmpDir, "a.txt")
    await fs.writeFile(target, "original")
    const result = await writeFileSafe(target, "new", { overwrite: true })
    expect(result).toBe("written")
    expect(await fs.readFile(target, "utf8")).toBe("new")
  })
})
