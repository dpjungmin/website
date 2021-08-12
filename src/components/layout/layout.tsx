import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/400-italic.css"
import "@fontsource/open-sans/600.css"

import * as React from "react"
import { WindowLocation } from "@reach/router"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"

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
