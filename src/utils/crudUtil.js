
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp, Timestamp, updateDoc, where } from "firebase/firestore"

import { db } from "./firebaseApp"

export const readWorkers = async (setWorkers) => {
  /*const querySnapshot = await getDocs(collection(db, "workers"))
        let workers = []
        querySnapshot.forEach((doc)=>  { workers.push({...doc.data(), id:doc.id}) })
        return workers*/

  const collectionRef = collection(db, "workers");
  const q = query(collectionRef, orderBy("name", "asc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setWorkers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
  return unsubscribe;
};
export const readSingleWorker = async (id, setWorker) => {
  /*const querySnapshot = await getDocs(collection(db, "workers"))
        let workers = []
        querySnapshot.forEach((doc)=>  { workers.push({...doc.data(), id:doc.id}) })
        return workers*/

  
  const q = doc(db, "workers", id)
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setWorker(({ ...snapshot.data(), id: snapshot.id }));
    return unsubscribe;
  });
};


export const addWorker = async (formdata) => {
  const collectionRef = collection(db, "workers");
  console.log(formdata);

  const newItem = { ...formdata };
  await addDoc(collectionRef, newItem);
};

export const startShift = async (formdata, setState) => {
  const collectionRef = collection(db, "shifts");
  console.log(formdata);

  const newItem = { ...formdata, start: Timestamp.now() };
  await addDoc(collectionRef, newItem).then((docRef) => {
    console.log("uj post azonositoja:" + docRef.id);
    setState(docRef.id);
  });
};

export const endShift = async (shiftId) => {
        const docRef = doc(db, "shifts", shiftId)
        let endtime = Timestamp.now()
        let duration = Timestamp.fromMillis(endtime.toMillis() - docRef.start.toMillis())
        // ez igy nem mukodik meg mivel datumot returnol
        await updateDoc(docRef, { end: endtime, duration: duration })
}



export const changeWorkerActiveStatus = async (workerID) =>
{
  const workerRef = doc(db, "workers", workerID)
  const worker = await getDoc(workerRef)
  
  
  if ( worker.exists() )
  {
    if (worker.data().status == "active") 
    {
      await updateDoc(workerRef, {status: "not active"})
    } else 
    {
      await updateDoc(workerRef, {status: "active"})
    }
  } else { console.log("error fetching worker data") }
}

export const getWorkerPayment = async (workerID) =>
{
  const cRef = collection(db, "shifts")
  const q = query(cRef, where("name", "==", workerID))
  const workerShifts = await getDocs(q)
  
}




export const checkAdmin = async (hrEmail) => {
  const collectionRef = collection(db, "admins");
  const q = query(collectionRef, where("email", "==", hrEmail));

  const docs = await getDocs(q)

  let hrExists = false
  docs.forEach((doc)=> {
    if(doc.data() == null) hrExists = false;
    else hrExists = true;
  })
  return hrExists
}

export const readShifts = (setShifts) => {
  const collectionRef = collection(db, "shifts");
  const q = query(collectionRef, orderBy("name", "asc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setShifts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
  return unsubscribe;
};

export const readHRWorkers = (setData) =>
{
  const collectionRef = collection(db, "admins");
  const q = query(collectionRef, orderBy("name", "asc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
  return unsubscribe;
}
