import React from 'react'
import { useState } from 'react'
import { readWorkers } from '../utils/crudUtil'

export const Home = () => {

    const [workers, setWorkers] = useState([])
    readWorkers(setWorkers)
    
    return (
    <div>
      {workers.map(worker=>
        <p key={worker.id}> {worker.id} : {worker.name} : {worker.field} : {worker.hourlypay}</p>
      )}
    </div>
  )
}

