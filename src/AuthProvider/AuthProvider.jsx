import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirBase/firebase.confiq";
 

 
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    //create user firebase
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // observer 
    useEffect(()=>{
         const unSubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }  
    },[])})
    const allData = {createUser,logIn};
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;