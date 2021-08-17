import * as React from "react"
import { WindowLocation } from "@reach/router"
import { ThemeProvider } from "styled-components"
import { Nav, Footer } from "@components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"

interface LayoutProps {
  readonly location: WindowLocation
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const isHome = location.pathname == "/"

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <div id="content">
          <Nav isHome={isHome} />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export { Layout }
