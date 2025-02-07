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
        setMsg({ signout: 'Sikeres kijelentkezés!' })
    }

    const signInUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setMsg({})
            setMsg({ signin: 'Sikeres bejelentkezés!' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    const signUpUser = async (email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, { displayName })
            setMsg({})
            setMsg({ signup: 'Sikeres regisztráció!' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email)
            setMsg({})
            setMsg({ resetpassword: 'A jelszóvisszaállítási e-mail elküldve! ' })
        } catch (error) {
            setMsg({ err: error.message })
        }
    }

    return (
        <UserContext.Provider value={{ user, signOutUser, msg, setMsg, signInUser, signUpUser, resetPassword }}>
            {children}
        </UserContext.Provider>
    )


}