import * as React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"

const MdxLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <main id="content" className="container">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default MdxLayout
