import {React} from 'react'
import { Card } from '../components/Card'

//import { useState } from 'react'
//import { readWorkers } from '../utils/crudUtil'

export const Home = () => {
    //const [workers, setWorkers] = useState([])
    //readWorkers(setWorkers)
    
    return (
      <div className='home bg-gray-950 flex flex-wrap justify-center align-center'>
            <div class="container">
              <h1 contenteditable>WorkLinker</h1>
              <p></p>
              <p>Make </p>
            </div>
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

