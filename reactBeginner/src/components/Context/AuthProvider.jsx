import { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userName, setUserName] = useState("");
  return (
    <div>
      <AuthContext.Provider value={{userName, setUserName}}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
