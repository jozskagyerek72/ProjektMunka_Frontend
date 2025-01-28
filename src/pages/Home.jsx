import {React} from 'react'
import { Card } from '../components/card'
//import { useState } from 'react'
//import { readWorkers } from '../utils/crudUtil'

export const Home = () => {
    //const [workers, setWorkers] = useState([])
    //readWorkers(setWorkers)
    
    return (
     <div className='page bg-gray-950 flex flex-wrap justify-center align-center'>
      <Card/> 
     </div>
     /* 
    <div>
      {workers.map(worker=>
        <p key={worker.id}> {worker.id} : {worker.name} : {worker.field} : {worker.hourlypay}</p>
      )}
    </div>
    */
  )
}

