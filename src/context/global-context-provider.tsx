import * as React from 'react'

const GlobalContext = React.createContext<any>(null)
const useGlobalContext = () => React.useContext(GlobalContext)

interface GlobalContextProviderProps {}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export { GlobalContextProvider, useGlobalContext }
