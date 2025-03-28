//import {React} from 'react'

import { HomePageCards } from "../components/HomePageCards";
import { Change } from "../components/Change";
import { useNavigate } from "react-router-dom";

export const Home = ({setRole}) => {

  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-wrap justify-center items-center">
      <div className="container flex flex-wrap flex-col justify-center items-center min-h-dvh w-full">
        <h1 className="wlh1 p-2 font-bold">WorkLinker</h1>
        <p className="wlp text-3xl">
          <a onClick={()=>navigate('/hrcontact')}>Building teams - Nurturing growth - Inspiring success.</a>
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        <HomePageCards setRole={setRole} />
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 justify-center items-center w-full pl-1.5 pr-1.5 gap-2.5">
        <Change />
        <div className="flex flex-wrap rounded-2xl justify-center items-center bg-gray-950 glass text-center">
          <h2 className="text-4xl text-center text-white pt-10">
            How can I enter?
          </h2>
          <div className="player_wrapper sm:w-max flex object-contain flex-wrap m-10 p-1">
            <video className="sm:w-max" controls={false} muted loop autoPlay>
              <source src="./public/qr.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-wrap">
            <p className="text-center text-2xltext-white mb-10">
              By using QR authentication, we provide an easy-to-use entry into your workplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
