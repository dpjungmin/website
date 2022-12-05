import * as React from "react"
import { WindowLocation } from "@reach/router"
import { ThemeProvider } from "styled-components"
import { Nav, Footer } from "@components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"

interface LayoutProps {
  readonly location: WindowLocation
  readonly children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <div id="content">
          <Nav path={location.pathname} />
          {children}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export { Layout }
