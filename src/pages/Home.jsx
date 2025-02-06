//import {React} from 'react'

import { HomePageCards } from '../components/HomePageCards'
import { Change } from '../components/Change'
import ReactPlayer from 'react-player/youtube'



export const Home = () => {
    
    
    return (

      <div className='home bg-gray-950 flex flex-wrap justify-center align-center'>
            <div className="container  flex flex-wrap">
                <h1 className='wlh1 p-2'>WorkLinker</h1>
                <p className='wlp text-3xl mt-15 '>Building Teams, Nurturing Growth, Inspiring Success.</p>
            </div>
            <div className='flex flex-wrap w-full'>
              <HomePageCards/>
              <Change/> 
            </div>
            <div className='videocontainer'>                
                <div className="player_wrapper m-10 p-10">
                  <ReactPlayer className="player" url='https://www.youtube.com/watch?v=GRJGKS9blm8' /> 
                  <p className='text-center'>We are providing an easy enter on your workplace with a QR scanner identification</p>
                </div>
              </div>
           
               
          
           
      </div>
     

  )
}

