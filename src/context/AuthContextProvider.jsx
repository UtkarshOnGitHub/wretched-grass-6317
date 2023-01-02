import React from 'react'
import { useState } from 'react';
export const AppContext  = React.createContext();


let auth = localStorage.getItem("asos-token") || ""
const AuthContextProvider = ({children}) => {

    const [isAuth , setIsAuth] = useState(auth);
    const [profileModal , setProfileModal] = useState(false)
    const [profileName , setProfileName] = useState(null)
  return (
    <div>
        <AppContext.Provider value={{isAuth, setIsAuth ,profileModal , setProfileModal ,profileName,setProfileName }}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default AuthContextProvider
