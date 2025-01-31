<<<<<<< HEAD
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useState } from 'react'
// import { addWorker, readShifts, readWorkers } from '../utils/crudUtil'
// import { useEffect } from 'react'
// //import { data } from 'react-router-dom'
=======
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { addWorker, readShifts, readWorkers, startShift } from '../utils/crudUtil'
import { useEffect } from 'react'
//import { data } from 'react-router-dom'
>>>>>>> 61626cb469440ae2ee5e3553829b40bb5647796e

// export const Backendtests = () => {

//   const [workers, setWorkers] = useState([])
//   //useEffect(()=>{readWorkers(setWorkers)},[workers])
//   readWorkers(setWorkers)

//   const [shifts,setShifts] = useState([])
//   readShifts(setShifts)

//   const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()

//   const onSubmit = async (data) =>
//   {
//     let newWorkerData = {...data}
//     addWorker(newWorkerData)
//   }

<<<<<<< HEAD
//   return (
//     <div>
//       <div>
//         <h2>workers:</h2>
//         {workers&& workers.map(worker =>
//           <p style={{color:"black"}} key={worker.id}> {worker.id} : {worker.name} : {worker.field} : {worker.hourlypay}</p>
//         )}
//       </div>
=======
  const onShiftStart = async (data) =>
  {
    let startShiftData = {...data}
    startShift(startShiftData)
  }

  return (
    <div>
      <div>
        <h2>workers:</h2>
        {workers&& workers.map(worker =>
          <p style={{color:"black"}} key={worker.id}> {worker.id} : {worker.name} : {worker.field} : {worker.hourlypay}</p>
        )}
      </div>
>>>>>>> 61626cb469440ae2ee5e3553829b40bb5647796e

//       <h2>add worker:</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("name", { required: true })} type='text' placeholder='name' />
//         <input {...register("field", { required: true })} type='text' placeholder='field' />
//         <input {...register("hourlypay", { required: true })} type='text' placeholder='hourlypay' />
//         <input type="submit"   />
//       </form>

<<<<<<< HEAD
//       <h2>shift:</h2>
//       {shifts&& shifts.map(shift=>
//         <p style={{color:"black"}} key={shift.id}>{shift.workerid} : {shift.workername} | {new Date(shift.start.seconds*1000).toLocaleString()} - {new Date(shift.end.seconds*1000).toLocaleString()} : {shift.totalhours}</p>
//       )}
//     </div>
//   )
// }
=======
      <h2>shift:</h2>
      {shifts&& shifts.map(shift=>
        <p style={{color:"black"}} key={shift.id}>{shift.workerid} : {shift.workername} | {new Date(shift.start.seconds*1000).toLocaleString()} - {new Date(shift.end.seconds*1000).toLocaleString()} : {shift.totalhours}</p>
      )}

      <h2>startshift @workerId:</h2>
      <form onSubmit={handleSubmit(onShiftStart)}>
        <input {...register("name", { required: true })} type='text' placeholder='name' />
        <input type="submit"   />
      </form>
    </div>
  )
}
>>>>>>> 61626cb469440ae2ee5e3553829b40bb5647796e

