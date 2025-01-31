//import {React} from 'react'

import { HomePageCards } from '../components/HomePageCards'
import { Change } from '../components/Change'



export const Home = () => {
    
    
    return (

      <div className='home bg-gray-950 flex flex-wrap justify-center align-center'>
            <div className="container  flex flex-wrap">
                <h1 className='wlh1 p-2'>WorkLinker</h1>
                <p className='wlp text-3xl mt-15 '>Building Teams, Nurturing Growth, Inspiring Success.</p>
            </div>
            <div className='flex flex-wrap'>
              <HomePageCards/>
              <Change/> 
            </div>
           
      </div>
     

  )
}

