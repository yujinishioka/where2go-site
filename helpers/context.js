import { createContext, useState } from "react";

export const Context = createContext({})

const HandleProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLogin = () => {
        setIsLoggedIn(true);
    };
    
    const onLogout = () => {
    setIsLoggedIn(false);
    };
    
    return(
        <Context.Provider value={{ isLoggedIn, onLogin, onLogout }}>
            {children}
        </Context.Provider>
    )
}

export default HandleProvider;