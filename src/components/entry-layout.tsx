import * as React from 'react'
import { GlobalContextProvider } from '@context'

interface EntryLayoutProps {}

const EntryLayout: React.FC<EntryLayoutProps> = ({ children }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>
}

export { EntryLayout }
