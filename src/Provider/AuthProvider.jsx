/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext(null)

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)



    // google signin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    }

    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign IN 
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    /* Currrent user / using observer */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });
    }, []);
    





    const authentication = {
        googleLogin,
        createUser,
        signin,
        logout,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;