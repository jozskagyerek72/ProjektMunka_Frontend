import {React} from 'react'
import { Card } from '../components/Card'
import { HomePageCards } from '../components/HomePageCards'
import { Change } from '../components/Change'

//import { useState } from 'react'
//import { readWorkers } from '../utils/crudUtil'

export const Home = () => {
    //const [workers, setWorkers] = useState([])
    //readWorkers(setWorkers)
    
    return (
      <div className='home bg-gray-950 flex flex-wrap justify-center align-center'>
            <div className="container">
              <h1>WorkLinker</h1>
              <p></p>
              <p>Building Teams, Nurturing Growth, Inspiring Success.</p>
            </div>
            <div className='flex flex-wrap'>
              <HomePageCards/>
            </div>
            <div>
              <Change/>
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

