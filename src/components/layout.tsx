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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <div id="content">{children}</div>
      </div>
    </ThemeProvider>
  )
}

export { Layout }
