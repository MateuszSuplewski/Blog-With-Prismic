import React from 'react'

import { ThemeProvider } from 'styled-components'
import themeSettings from './theme'
import AnimatedRoutes from './components/AnimatedRoutes'
export const App = () => {
  return (
    <ThemeProvider theme={themeSettings}>
      <AnimatedRoutes/>
    </ThemeProvider>
  )
}

export default App
