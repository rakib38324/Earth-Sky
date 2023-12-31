import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import PropTypes from 'prop-types';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    
    const signUpWitGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        signUpWitGoogle,
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes ={
    children: PropTypes.element.any
}

export default AuthProvider;