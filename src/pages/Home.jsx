//import {React} from 'react'

import { HomePageCards } from "../components/HomePageCards";
import { Change } from "../components/Change";
import { useNavigate } from "react-router-dom";

export const Home = ({setRole}) => {

  const navigate = useNavigate()

  return (
    <div className="home bg-gray-950 flex flex-wrap justify-center align-center">
      <div className="container flex flex-wrap">
        <h1 className="wlh1 p-2">WorkLinker</h1>
        <p className="wlp text-3xl">
          <a onClick={()=>navigate('/hrcontact')}>Building teams - Nurturing growth - Inspiring success.</a>
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        <HomePageCards setRole={setRole} />
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 mr-10 justify-center w-full gap-10 pl-1.5 pr-1.5">
        <Change />
        <div className="video_container h-180 m-auto p-0 bg-gray-950 glass text-center justify-center align-center">
          <h2 className="text-4xl text-center text-white pt-10">
            How can I enter?
          </h2>
          <div className="player_wrapper sm:w-max flex object-contain flex-wrap m-10 p-1">
            <video className="sm:w-max" controls={false} muted loop autoPlay>
              <source src="./public/qr.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-wrap">
            <p className="text-center text-2xl  text-white mb-10">
              By using QR authentication, we provide an easy-to-use entry into your workplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
