//import {React} from 'react'

import { HomePageCards } from "../components/HomePageCards";
import { Change } from "../components/Change";

export const Home = () => {
  return (
    <div className="home bg-gray-950 flex flex-wrap justify-center align-center text-4xl">
      <div className="container  flex flex-wrap">
        <h1 className="wlh1 p-2">WorkLinker</h1>
        <p className="wlp text-3xl mt-15 ">
          Building Teams, Nurturing Growth, Inspiring Success.
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        <HomePageCards />
        
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 justify-center w-full  p-10 gap-10">
      <Change />
      <div className="video_container h-180 m-auto p-0 bg-gray-950 glass text-center justify-center align-center">
        <h2 className="text-4xl text-center text-white">What are we using?</h2>
        <div className="player_wrapper sm:w-max flex object-contain flex-wrap m-10 p-1">
          <video className="sm:w-max" controls muted>
            <source src="./public/qr.mp4" type="video/mp4" />
          </video>    
        </div>

        <div className="flex flex-wrap">
          <p className="text-center text-2xl  text-white mb-10">
            We are providing an easy enter in your workplace with a QR scanner
            identification.
          </p>
        </div>

      </div>
      



      


      </div>
    </div>
  );
};
