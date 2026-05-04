import * as React from "react"

export type PencilTheme = "paper" | "graphite" | "sepia"
export type PencilRandomness = "on" | "off"

export interface PencilTokens {
  paper?: string
  ink?: string
  rule?: string
  muted?: string
  danger?: string
  strokeWidth?: string
  cornerRadius?: string
}

export interface PencilContextValue {
  theme: PencilTheme
  randomness: PencilRandomness
}

const defaultContext: PencilContextValue = {
  theme: "paper",
  randomness: "on",
}

const PencilContext = React.createContext<PencilContextValue>(defaultContext)

export interface PencilProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultTheme?: PencilTheme
  randomness?: PencilRandomness
  tokens?: PencilTokens
  children: React.ReactNode
}

const TOKEN_TO_VAR: Record<keyof PencilTokens, string> = {
  paper: "--pencil-paper",
  ink: "--pencil-ink",
  rule: "--pencil-rule",
  muted: "--pencil-muted",
  danger: "--pencil-danger",
  strokeWidth: "--pencil-stroke-width",
  cornerRadius: "--pencil-corner-radius",
}

function tokensToStyle(tokens: PencilTokens | undefined): React.CSSProperties | undefined {
  if (!tokens) return undefined
  const entries = Object.entries(tokens) as [keyof PencilTokens, string | undefined][]
  const out: Record<string, string> = {}
  for (const [key, value] of entries) {
    if (value !== undefined) out[TOKEN_TO_VAR[key]] = value
  }
  return Object.keys(out).length > 0 ? (out as React.CSSProperties) : undefined
}

export function PencilProvider({
  defaultTheme = "paper",
  randomness = "on",
  tokens,
  children,
  style,
  ...rest
}: PencilProviderProps) {
  const value = React.useMemo<PencilContextValue>(
    () => ({ theme: defaultTheme, randomness }),
    [defaultTheme, randomness],
  )

  const tokenStyle = tokensToStyle(tokens)
  const mergedStyle = tokenStyle || style ? { ...(tokenStyle ?? {}), ...(style ?? {}) } : undefined

  return (
    <div
      data-theme={defaultTheme}
      data-pencil-randomness={randomness}
      style={mergedStyle}
      {...rest}
    >
      <PencilContext.Provider value={value}>{children}</PencilContext.Provider>
    </div>
  )
}

export function usePencilContext(): PencilContextValue {
  return React.useContext(PencilContext)
}
