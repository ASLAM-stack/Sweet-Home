import { createContext, useContext } from "react";

 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const allData = {}
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;