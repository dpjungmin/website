import * as React from "react"
import { ThemeProvider } from "styled-components"
import { Nav, Footer } from "@components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"

const MdxLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <div id="content">
          <Nav />
          <main className="container fillHeight">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MdxLayout
