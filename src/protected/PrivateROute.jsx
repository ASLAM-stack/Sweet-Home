import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateROute = ({children}) => {

    const {user,loader} =useContext(AuthContext)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateROute;