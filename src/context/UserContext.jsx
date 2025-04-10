import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../utils/firebaseApp";
import { checkAdmin } from "../utils/crudUtil";
import { toast } from "sonner";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                (await checkAdmin(currentUser.email))
                  ? setAdmin(true)
                  : setAdmin(false);
            } else {
                setAdmin(false);
            }
        })
        return () => unsubscribe()
    }, [])

    const signOutUser = async () => {
        try {
            await signOut(auth)
            toast.success("Signed out successfully!");
        } catch (error) {
            toast.error(error.message)
        }
    }

    const signInUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("Signed in successfully!");
        } catch (error) {
            toast.error(error.message)
        }
    }

    const signUpUser = async (email, password, displayName) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, { displayName })
            toast.success("Applied successfully!");
        } catch (error) {
            toast.error(error.message)
        }
    }

    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email)
            toast.success("Password reset e-mail sent successfully!");
        } catch (error) {
            toast.error(error.message)
        }
    }

    const updateUser = async (displayName, photoURL) => {
        try {
            if (displayName && photoURL) await updateProfile(auth.currentUser, { displayName, photoURL })
            else if (displayName) await updateProfile(auth.currentUser, { displayName })
            else if (photoURL) await updateProfile(auth.currentUser, { photoURL })
            toast.success("Profile successfully updated!");
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <UserContext.Provider value={{ user, signOutUser, signInUser, signUpUser, resetPassword, updateUser, admin, setAdmin }}>
            {children}
        </UserContext.Provider>
    )


}