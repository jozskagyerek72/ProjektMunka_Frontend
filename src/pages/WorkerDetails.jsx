//import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { changeWorkerActiveStatus, readSingleWorker} from "../utils/crudUtil";
import { getWorkersShifts, getWorkersShiftsFromId } from "../utils/analytics_systemUtils";

export const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [shifts, setShifts] = useState(null)


  useEffect(() => {
    readSingleWorker(id, setWorker);
    getWorkersShiftsFromId(id, setShifts)
  }, []);

  shifts&& console.log(shifts);
  

  const handleWorkerStatusChange = () =>
  {
    changeWorkerActiveStatus(worker.id)
    //ide valami fele toast popup kéne ezután
    
  }
  

  return (
    <div className="min-h-dvh bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12 font-bold">Worker details</h1>
      </div>

      {worker && (
        <div className="hero bg-gray-950 min-h-dvh">
          <div
            key={worker.id}
            className="hero-content bg-gray-700 border-1 border-gray-500 shadow-lg shadow-white flex-col lg:flex-row"
          >
            <img
              src={worker && worker.imageURL ? worker.imageURL : './public/blankpeople.jpg'}
              className="max-w-sm rounded-lg w-100 h-120 shadow-2xl"
            />
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-1 gap-5">
              <h2 className="text-4xl ml-5 text-white font-bold">
                {worker && worker.name}
              </h2>
              <div >

              </div>
              <div className="badge m-1  w-full badge-success font-bold text-black hover:border-white border-1">
                {worker && worker.status.toUpperCase()}
              </div>
              <div className="badge m-1 w-full  badge-success font-bold text-black hover:border-white border-1">
                {worker && worker.field.toUpperCase()}
              </div>
              <div className="badge badge-success w-full m-1  font-bold text-black  hover:border-white border-1 ">
                Hourlypay: {worker && worker.hourlypay}Ft
              </div>
              <div className="badge m-1 badge-success w-full  font-bold text-black hover:border-white border-1 ">
                Contact: {worker && worker.email}
              </div>
              <div className="m-auto">
                <button
                  onClick={handleWorkerStatusChange}
                  className="btn btn-xs sm:btn-sm md:btn-md  bg-success hover:bg-green-300 font-bold hover:border-2 w-40  hover:border-white lg:btn-md xl:btn-md"
                >
                  {worker.status == "active"
                    ? "Deactivate worker"
                    : "Activate Worker"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {shifts&& shifts.map((shift)=><p >{new Date(shift.start.seconds *1000).toLocaleString()} - { new Date(shift.end.seconds *1000).toLocaleString()} : {shift.duration}</p>)}
    </div>
  );
};
