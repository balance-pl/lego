import { createContext, useContext } from 'react'

import { Theme } from './types'

const ThemeContext = createContext<Theme>(null!)

const ThemeProvider = ThemeContext.Provider

function useTheme() {
  const context = useContext(ThemeContext)
  console.log('context', context)
  return context
}

export { ThemeProvider, useTheme }
