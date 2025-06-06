import { collection, doc, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "./firebaseApp"

//returns a workers total hours based on id
export const getWorkedHours = async ( workerID ) =>
{
  const cRef = collection(db, "shifts")
  const q = query(cRef, where("workerId", "==", workerID))
  const workerShifts = await getDocs(q)
  let totalDuration = 0
 
  workerShifts.forEach( ( doc ) => { 
    {doc.data().duration ? totalDuration += doc.data().duration : totalDuration += 0} 
})

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
        if (doc.id == workerID) { setState( doc.data().hourlypay * workedHours )}
    })
}

//returns a workers ID from based on its email
export const getWorkerIdFromEmail = async ( email ) => 
{
    const cRef = collection(db, "workers")
    const q = query(cRef, where("email", "==", email))
    const docs = await getDocs(q)

    let docId
    docs.forEach( (doc) => docId = doc.id)
    return docId
}

//returns the shift history of one worker based on id
export const getWorkersShiftsFromId = async ( workerId, setState ) =>
{
    const cRef = collection(db, "shifts")
    const q = query(cRef, where("workerId", "==", workerId), orderBy("start", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
        setState(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
}

//returns the shift history of one worker based on name
export const getWorkersShiftsFromName = async ( name, setState ) =>
{
    const cRef = collection(db, "shifts")
    const q = query(cRef, where("name", "==", name))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
        setState(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
}