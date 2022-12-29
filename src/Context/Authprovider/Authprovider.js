import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

 export const AuthContext=createContext();
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loding,setLoding]=useState(true);


     const createUser=(email,password)=>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const login =(email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password)
     };

     const logOut=()=>{
        return signOut(auth);
     }

     useEffect(()=>{
   const unSuscribe=  onAuthStateChanged(auth,createUser=>{
    console.log(createUser);
    setUser(createUser)
    setLoding(false);
   });
        return ()=>{
            return unSuscribe();
        }

     },[])


    const authInfo={
        user,
        loding,
        createUser,
        login,
        logOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;