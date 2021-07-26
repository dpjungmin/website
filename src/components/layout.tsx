import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@styles'

interface LayoutProps {
  readonly location: WindowLocation
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  console.log(location)

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  )
}

export { Layout }
