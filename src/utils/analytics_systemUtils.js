import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseApp"

//returns a workers total hours based on id
export const getWorkedHours = async ( workerEmail ) =>
{
  const cRef = collection(db, "shifts")
  let workerID = await getWorkerIdFromEmail(workerEmail)
  console.log("workerid:",workerID);
  
  const q = await query(cRef, where("name", "==", workerID))
  const workerShifts = await getDocs(q)
  let totalDuration = 0
 
  workerShifts.forEach( ( doc ) => { totalDuration += doc.data().duration })

  //console.log( "total hours: " , totalDuration );

  return totalDuration
}

//returns a workers total payment based on email
export async function getWorkerPayment ( workerEmail, setState )  
{
    const cRef = collection(db, "workers")
    const q = query(cRef)
    const docs = await getDocs(q)
    const workerID = await getWorkerIdFromEmail(workerEmail)


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