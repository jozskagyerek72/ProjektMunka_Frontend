//import {React} from 'react'

import { HomePageCards } from "../components/HomePageCards";
import { Change } from "../components/Change";


export const Home = () => {
  return (
    <div className="home bg-gray-950 flex flex-wrap justify-center align-center">
      <div className="container  flex flex-wrap">
        <h1 className="wlh1 p-2">WorkLinker</h1>
        <p className="wlp text-3xl mt-15 ">
          Building Teams, Nurturing Growth, Inspiring Success.
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        <HomePageCards />
        <Change />
      </div>
      <div className="video_container bg-gray-800 text-center">
        <h2 className="text-4xl text-center text-white">What are we using?</h2>
        <div className="player_wrapper flex object-contain flex-wrap m-10 p-10">
          <video controls muted>
            <source src="./public/qr.mp4" type="video/mp4" />
          </video>
          {/* <p className='mobile text-2xl text-white'>Video only shows on desktop.</p> */}
        </div>

        <div className="flex flex-wrap">
          <p className="text-center text-2xl  text-white mb-10">
            We are providing an easy enter in your workplace with a QR scanner
            identification.
          </p>
        </div>
        
      </div>
     
      
    </div>
  );
};
