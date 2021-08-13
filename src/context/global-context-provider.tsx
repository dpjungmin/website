import * as React from "react"

const GlobalContext = React.createContext<any>(null)
const useGlobalContext = () => React.useContext(GlobalContext)

const GlobalContextProvider: React.FC = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export { GlobalContextProvider, useGlobalContext }
