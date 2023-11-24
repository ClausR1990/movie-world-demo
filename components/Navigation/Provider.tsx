"use client"
import { createContext, useContext, useState } from "react"

type NavigationContextProps = {
  enabled: boolean
  toggleNaviation: (state: boolean) => void
}

const NavigationContext = createContext<NavigationContextProps>({
  enabled: true,
  toggleNaviation: (_state: boolean) => {},
})

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnable] = useState(true)

  const toggleNaviation = (state: boolean) => {
    setEnable(state)
  }

  return (
    <NavigationContext.Provider value={{ enabled, toggleNaviation }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider

export const useNavigation = () => {
  return useContext(NavigationContext)
}
