import { createContext } from 'react'

export const ThemeContext= createContext();
const ThemeProvider = ({children}) => {
    const globalClorsCode={
        primaryColor: "blue",
        secondaryColor: "black",
        successColor: "green",
        dangerColor: "red",
      }
  return (
    <div>
      <ThemeContext.Provider value={globalClorsCode}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
