import React, {createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebse/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
       return signInWithPopup(auth,googleProvider);
    }
    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider);
    }

    const profileUpdateData= (user, name, photo)=>{
        updateProfile(user,{
            displayName: name, photoURL: photo
        })
        .then(result => {
            // const userProfile = result.user;
        })
        .catch(error=> console.log(error))
        console.log(name,photo);
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
        logOut,
        googleSignIn,
        githubSignIn,
        profileUpdateData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;