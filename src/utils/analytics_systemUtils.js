import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseApp"

//returns a workers total hours based on id
export const getWorkedHours = async ( workerID ) =>
{
  const cRef = collection(db, "shifts")
  const q = query(cRef, where("name", "==", workerID))
  const workerShifts = await getDocs(q)
  let totalDuration = 0
 
  workerShifts.forEach( ( doc ) => { totalDuration += doc.data().duration })

  //console.log( "total hours: " , totalDuration );

  return totalDuration
}

//returns a workers total payment based on id
export const getWorkerPayment = async ( workerID, setState ) => 
{
    const cRef = collection(db, "workers")
    const q = query(cRef)
    const docs = await getDocs(q)

    const workedHours = await getWorkedHours(workerID)

    docs.forEach( ( doc ) => 
    {
        if (doc.id == workerID) { setState( doc.data().hourlypay * workedHours ) }
    })
}

//returns a workers ID from based on its email
export const getWorkerIdFromEmail = async ( email ) => 
{
    const cRef = collection(db, "workers")
    console.log(email);
    const q = query(cRef, where("email", "==", email))
    const docs = await getDocs(q)

    let docId
    docs.forEach( (doc) => docId = doc.id)
    return docId
}