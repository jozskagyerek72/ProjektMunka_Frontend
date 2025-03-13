import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebaseApp"

//adds an inactive worker to the collection, runs after registration
export const addApplicant = async (name, email, imgURL) => 
{
    const cRef =  collection(db, "workers")
    const newApplicant = { name:name, email:email, imgURL:imgURL, field:"kisegítő", hourlypay:2000, status:"not active"}

    await addDoc(cRef, newApplicant)
}
