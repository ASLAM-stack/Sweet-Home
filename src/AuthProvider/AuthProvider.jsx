import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../FirBase/firebase.confiq";

 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    //create user firebase
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const allData = {createUser}
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;