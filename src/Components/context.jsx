import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {

    const [isloggedin, setIsLoggedIn] = useState(false);

    return <AuthContext.Provider value={{ isloggedin ,setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export default CustomProvider;