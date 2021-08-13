import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/400-italic.css"
import "@fontsource/open-sans/600.css"

import * as React from "react"
import { GlobalContextProvider } from "@context"

const EntryLayout: React.FC = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>
}

export { EntryLayout }
