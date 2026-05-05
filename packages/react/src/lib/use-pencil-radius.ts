"use client"

import { useId, useMemo, type CSSProperties } from "react"

type Quad = readonly [number, number, number, number]
type Signature = readonly [Quad, Quad, "px" | "%"]

const SIGNATURES = {
  button: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  buttonLg: [[55, 225, 15, 25], [25, 25, 35, 355], "px"],
  buttonSm: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  card: [[5, 5, 5, 5], [25, 25, 25, 5], "px"],
  cardHeader: [[3, 3, 0, 0], [23, 23, 0, 0], "px"],
  cardFooter: [[0, 0, 5, 5], [0, 0, 25, 25], "px"],
  modal: [[15, 5, 5, 25], [5, 25, 25, 5], "px"],
  popover: [[45, 85, 15, 25], [15, 10, 35, 555], "px"],
  toast: [[10, 10, 15, 5], [5, 15, 5, 15], "px"],
  dropdown: [[555, 25, 25, 25], [25, 25, 25, 555], "px"],
  listGroup: [[45, 15, 35, 5], [15, 5, 15, 65], "px"],
  listItem: [[255, 5, 225, 5], [25, 225, 25, 255], "px"],
  navTab: [[45, 15, 225, 5], [25, 225, 25, 255], "px"],
  badge: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  badgePill: [[112, 128, 128, 128], [64, 80, 96, 96], "px"],
  alert: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  progress: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  tooltip: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  breadcrumb: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  pagination: [[425, 255, 25, 25], [25, 25, 5, 25], "px"],
  input: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  textarea: [[55, 225, 15, 25], [25, 25, 35, 355], "px"],
  navbar: [[25, 25, 55, 5], [5, 55, 25, 25], "px"],
  blockquote: [[15, 27, 25, 25], [25, 25, 305, 635], "px"],
  tableBordered: [[5, 25, 5, 25], [25, 5, 25, 5], "px"],
  tableCell: [[5, 5, 25, 4], [5, 4, 3, 5], "px"],
  pre: [[15, 5, 5, 25], [5, 25, 25, 5], "px"],
  separator: [[55, 5, 25, 35], [5, 25, 5, 5], "px"],
  avatar: [[50, 45, 40, 50], [40, 50, 50, 45], "%"],
  checkbox: [[2, 8, 2, 4], [5, 3, 5, 3], "px"],
  radio: [[50, 45, 40, 50], [40, 50, 50, 45], "%"],
  switchTrack: [[30, 35, 30, 30], [30, 50, 30, 45], "%"],
  switchThumb: [[50, 45, 40, 50], [40, 50, 50, 45], "%"],
  sliderTrack: [[255, 25, 225, 25], [25, 225, 25, 255], "px"],
  sliderThumb: [[50, 45, 40, 50], [40, 50, 50, 45], "%"],
  skeleton: [[55, 225, 15, 25], [25, 25, 35, 255], "px"],
} satisfies Record<string, Signature>

export type PencilRadiusKind = keyof typeof SIGNATURES

function hash(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function jitter(
  value: number,
  hashValue: number,
  slot: number,
  variance: number,
  unit: "px" | "%",
): number {
  const byte = (hashValue >>> ((slot * 8) % 32)) & 0xff
  const factor = 1 + ((byte - 128) / 128) * variance
  const raw = value * factor
  if (unit === "%") {
    return Math.min(95, Math.max(5, Math.round(raw)))
  }
  return Math.max(2, Math.round(raw))
}

export function getPencilRadius(kind: PencilRadiusKind, seed: string, variance = 0.18): string {
  const [horiz, vert, unit] = SIGNATURES[kind]
  const h = hash(`${kind}:${seed}`)
  const horizOut = horiz.map((v, i) => `${jitter(v, h, i, variance, unit)}${unit}`).join(" ")
  const vertOut = vert.map((v, i) => `${jitter(v, h, i + 4, variance, unit)}${unit}`).join(" ")
  return `${horizOut} / ${vertOut}`
}

export interface PencilRadiusOptions {
  seed?: string
  variance?: number
}

export function usePencilRadius(
  kind: PencilRadiusKind,
  options?: PencilRadiusOptions,
): CSSProperties {
  const autoId = useId()
  const seed = options?.seed ?? autoId
  const variance = options?.variance ?? 0.18
  return useMemo(
    () => ({ "--pencil-radius": getPencilRadius(kind, seed, variance) }) as CSSProperties,
    [kind, seed, variance],
  )
}
