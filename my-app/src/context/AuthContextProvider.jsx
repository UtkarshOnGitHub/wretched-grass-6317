import React from 'react'
import { useState } from 'react';
export const AppContext  = React.createContext();
const AuthContextProvider = ({children}) => {


    const [isAuth , setIsAuth] = useState(false);
    const [profileModal , setProfileModal] = useState(false)

    

  return (
    <div>
        <AppContext.Provider value={{isAuth, setIsAuth ,profileModal , setProfileModal}}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default AuthContextProvider
