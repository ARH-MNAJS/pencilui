import * as React from "react"

export type PencilTheme = "paper" | "graphite" | "sepia"
export type PencilRandomness = "on" | "off"

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
  children: React.ReactNode
}

export function PencilProvider({
  defaultTheme = "paper",
  randomness = "on",
  children,
  ...rest
}: PencilProviderProps) {
  const value = React.useMemo<PencilContextValue>(
    () => ({ theme: defaultTheme, randomness }),
    [defaultTheme, randomness],
  )

  return (
    <div data-theme={defaultTheme} data-pencil-randomness={randomness} {...rest}>
      <PencilContext.Provider value={value}>{children}</PencilContext.Provider>
    </div>
  )
}

export function usePencilContext(): PencilContextValue {
  return React.useContext(PencilContext)
}
