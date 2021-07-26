import * as React from 'react'
import { WindowLocation } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@styles'
import { themeManager } from '@lib'

interface LayoutProps {
  readonly location: WindowLocation
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  console.log(location)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    themeManager.init()
    setIsLoading(false)
  }, [])

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isLoading && children}
      </ThemeProvider>
    </div>
  )
}

export { Layout }
