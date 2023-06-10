import { initializeApp } from "firebase/app";
// including by firebase autentication
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useState, useEffect } from "react";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmPrg3SRE8nb2PXjlxKszs5V1i_GBIMvg",
    authDomain: "mwf03auth-fa58b.firebaseapp.com",
    projectId: "mwf03auth-fa58b",
    storageBucket: "mwf03auth-fa58b.appspot.com",
    messagingSenderId: "913976741489",
    appId: "1:913976741489:web:c0c15234ae23ad026955d0"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()


// Login User 

export function loginuser(email,password){

    return signInWithEmailAndPassword(auth, email, password)
}

// sing up user 
export function signupuser(email, password){

    return createUserWithEmailAndPassword(auth, email, password)
}

// logout 
export const logout =() =>{

    signOut(auth)
}

// custome hook  feching login user

export function useAuth(){

    const [currentUser, setcurrentUser] =useState('');


    useEffect (()=>{

        const unsub = onAuthStateChanged(auth, user => {setcurrentUser(user)})
        return unsub;
    },[])

    return currentUser
}
