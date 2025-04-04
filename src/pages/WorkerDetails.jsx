//import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { changeWorkerActiveStatus, readSingleWorker} from "../utils/crudUtil";

import { getWorkersShiftsFromId } from "../utils/analytics_systemUtils";


import { toast } from "sonner";

export const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [shifts, setShifts] = useState(null)


  useEffect(() => {
    readSingleWorker(id, setWorker);
    getWorkersShiftsFromId(id, setShifts)
  }, []);

   const handleWorkerStatusChange = async () => {
     try {
       const toastId = toast.loading("Updating worker status...");

       await changeWorkerActiveStatus(worker.id);

       const updatedWorker = {
         ...worker,
         status: worker.status === "active" ? "not active" : "active",
       };
       setWorker(updatedWorker);

       toast.success(
         `Worker status changed to ${updatedWorker.status} successfully!`,
         { id: toastId }
       );
     } catch (error) {
       toast.error("Failed to update worker status");
     }
   };

  return (
    <div className="min-h-dvh bg-gray-950 pt-20 pb-10 flex flex-col items-center justify-center">
      <div className="text-center justify-center items-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12 font-bold">Worker details</h1>
      </div>

      {worker && (
        <div className="hero bg-gray-950">
          <div
            key={worker.id}
            className="hero-content bg-gray-700 shadow-md shadow-gray-600 rounded-xl flex-col lg:flex-row"
          >
            <div className="flex justify-center items-center w-60">
              <img
                src={
                  worker && worker.imageURL
                    ? worker.imageURL
                    : "./public/blankpeople.jpg"
                }
                className="w-full rounded-full shadow-2xl object-cover"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-10">
              <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-1 gap-5">
                <h2 className="text-4xl ml-5 text-white font-bold">
                  {worker && worker.name}
                </h2>
                <div></div>
                <div className="badge m-1  w-full badge-success font-bold text-black hover:border-white border-1">
                  {worker && worker.status.toUpperCase()}
                </div>
                <div className="badge m-1 w-full  badge-success font-bold text-black hover:border-white border-1">
                  {worker && worker.field.toUpperCase()}
                </div>
                <div className="badge badge-success w-full m-1  font-bold text-black  hover:border-white border-1 ">
                  Hourly pay: {worker && worker.hourlypay}Ft
                </div>
                <div className="badge m-1 badge-success w-full  font-bold text-black hover:border-white border-1 ">
                  Contact: {worker && worker.email}
                </div>
              </div>
              <div className="m-auto">
                <button
                  onClick={handleWorkerStatusChange}
                  className={
                    worker.status == "active"
                      ? "bg-warning btn btn-xs sm:btn-sm md:btn-md hover:bg-amber-300 font-bold hover:border-2 w-40  hover:border-white lg:btn-md xl:btn-md"
                      : "bg-success btn btn-xs sm:btn-sm md:btn-md hover:bg-green-300 font-bold hover:border-2 w-40  hover:border-white lg:btn-md xl:btn-md"
                  }
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

      <div className="text-center mt-5">
        <h1 className="font-bold text-3xl">Recent shifts</h1>
      </div>
      <table className="table-fixed border-collapse mt-3 bg-gray-700 rounded-xl text-center shadow-md shadow-gray-700">
        <thead>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
            Shift start
          </th>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
            Shift duration
          </th>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
            Earned wage
          </th>
        </thead>
        <tbody>
          {shifts &&
            shifts.map((shift) => (
              <tr
                key={shift.id}
                className="border border-t-gray-600 border-x-0 border-b-0"
              >
                <td className="p-4">
                  {new Date(shift.start?.seconds * 1000).toLocaleString()}
                </td>
                {shift.duration ? (
                  <>
                    <td className="p-4">{shift.duration}</td>
                    <td className="p-4 font-bold text-emerald-500">nigga</td>
                  </>
                ) : (
                  <>
                    <td className="p-4 font-bold">undended shift</td>
                    <td className="p-4 font-bold text-red-500">not available</td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
