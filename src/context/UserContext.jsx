import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../utils/firebaseApp";
import { checkAdmin } from "../utils/crudUtil";
import { toast } from "sonner";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const isAdmin = await checkAdmin(currentUser.email);
        setAdmin(isAdmin);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleAuthError = (error) => { // Handles all potential errors, and shows a toast for them
    const message =
      error.code === "auth/wrong-password"
        ? "Incorrect password"
        : error.message;
    toast.error(message);
    throw error;
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully!");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signUpUser = async (email, password, displayName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (displayName) {
        await updateProfile(user, { displayName });
      }
      toast.success("Account created successfully!");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset e-mail sent!");
    } catch (error) {
      handleAuthError(error);
    }
  };

  const updateUser = async (updates) => {
    try {
      if (!auth.currentUser) throw new Error("No user logged in");
      await updateProfile(auth.currentUser, updates);
      toast.success("Profile updated!");
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        admin,
        loading,
        signOutUser,
        signInUser,
        signUpUser,
        resetPassword,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
