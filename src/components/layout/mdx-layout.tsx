import * as React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "@styles"
import { theme } from "@theme"
import { Article } from "@styles/pages/blog/post.styles"

const Container = styled(Article)`
  padding-top: 120px;
  padding-bottom: 100px;

  li {
    margin-bottom: 0.5rem;
  }
`

const MdxLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="root">
        <main id="content" className="container fillHeight">
          <Container>{children}</Container>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default MdxLayout
