import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebaseApp"

//adds an applicant to the collection, runs after registration
export const addApplicant = async (name, email, description, imgURL) => 
{
    const cRef =  collection(db, "applicants")
    const newApplicant = { name:name, email:email, description:description, imgURL:imgURL}

    await addDoc(cRef, newApplicant)
}
