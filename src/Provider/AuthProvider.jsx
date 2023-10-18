/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null)

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true)



    // google signin
    const googleLogin = () => {
        return signInWithPopup(auth, googleprovider);
    }

    // sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign IN 
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }


    /* Currrent user / using observer */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('User:', user);
            setUser(user);
        });
    }, []);
    





    const authentication = {
        googleLogin,
        createUser,
        signin,
        logout

    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;