//import {React} from 'react'
import { HomePageCards } from '../components/HomePageCards'
import { Change } from '../components/Change'



export const Home = () => {
    
    
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
     

  )
}

