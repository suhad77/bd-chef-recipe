import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebse/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;