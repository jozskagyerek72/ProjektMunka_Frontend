import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../utils/firebaseApp";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const signOutUser = async () => {
        await signOut(auth)
        setMsg({})
        setMsg({ signout: 'Signed out successfully!' })
    }

    const signInUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setMsg({})
            setMsg({ signin: 'Signed in successfully!' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    const signUpUser = async (email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, { displayName })
            setMsg({})
            setMsg({ signup: 'Signed up successfully!' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email)
            setMsg({})
            setMsg({ resetpassword: 'Password reset e-mail sent successfully! ' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    const updateUser = async (displayName, photoURL) => {
        try {
            if (displayName && photoURL) await updateProfile(auth.currentUser, { displayName, photoURL })
            else if (displayName) await updateProfile(auth.currentUser, { displayName })
            else if (photoURL) await updateProfile(auth.currentUser, { photoURL })
            setMsg({})
            setMsg({ update: 'Profile successfully updated! ' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    return (
        <UserContext.Provider value={{ user, signOutUser, msg, setMsg, signInUser, signUpUser, resetPassword, updateUser }}>
            {children}
        </UserContext.Provider>
    )


}