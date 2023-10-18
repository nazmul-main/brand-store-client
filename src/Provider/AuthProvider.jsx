/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null)

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // google signin
    const googleLogin = () => {
        return signInWithPopup(auth, googleprovider);
    }

    // sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const authentication = {
        googleLogin,
        createUser,

    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;