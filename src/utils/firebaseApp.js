import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

//referenciak:
export const db = getFirestore(app)
export const auth = getAuth(app)

