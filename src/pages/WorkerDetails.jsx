//import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  changeWorkerActiveStatus,
  checkAdmin,
  readSingleWorker,
} from "../utils/crudUtil";

import { getWorkersShiftsFromId } from "../utils/analytics_systemUtils";

import { toast } from "sonner";

export const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [shifts, setShifts] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    readSingleWorker(id, setWorker);
    getWorkersShiftsFromId(id, setShifts);
  }, [id]);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (worker?.email) {
        setAdmin(await checkAdmin(worker.email));
        //console.log("Admin status:", admin, "for email:", worker.email);
      }
    };
    checkAdminStatus();
  }, [worker]);

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
      console.log(error);
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
            className="hero-content bg-gray-700 rounded-xl flex-col lg:flex-row hover:scale-[1.01] transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/50"
          >
            <div className="flex justify-center items-center w-60">
              <img
                src={
                  worker.imageURL != "NaN"
                    ? worker.imageURL
                    : "../public/blankpeople.jpg"
                }
                className="w-full rounded-full shadow-2xl object-cover hover:scale-[1.02] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col flex-wrap gap-5 justify-center items-center">
              <div className="flex flex-col md:flex-row items-end gap-10 text-center">
                <div className="flex flex-col gap-3 w-full">
                  <h2 className="text-4xl text-white font-bold underline">
                    {worker && worker.name}
                  </h2>
                  <div className="badge m-1 flex justify-center items-center badge-success w-full font-bold text-black hover:border-green-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 border-1">
                    Status:
                    <span className="font-bold text-white">
                      {worker && worker.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="badge m-1 flex justify-center items-center badge-success w-full font-bold text-black hover:border-green-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 border-1">
                    Position:{" "}
                    <span className="font-bold text-white">
                      {admin ? "HR" : "worker"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="badge m-1 flex justify-center items-center badge-success w-full font-bold text-black hover:border-green-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 border-1">
                    Field:
                    <span className="font-bold text-white">
                      {worker && worker.field.toUpperCase()}
                    </span>
                  </div>
                  <div className="badge m-1 flex justify-center items-center badge-success w-full font-bold text-black hover:border-green-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 border-1">
                    Hourly pay:
                    <span className="font-bold text-white">
                      {worker && worker.hourlypay}Ft
                    </span>
                  </div>
                  <div className="badge m-1 flex justify-center items-center badge-success w-full font-bold text-black hover:border-green-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 border-1">
                    Contact:
                    <span className="font-bold text-white">
                      {worker && worker.email}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleWorkerStatusChange}
                  className={
                    worker.status == "active"
                      ? "bg-error btn btn-md md:btn-lg py-2 w-50 hover:bg-red-400 font-bold hover:border-1  hover:border-red-500 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
                      : "bg-success btn btn-md md:btn-lg py-2 w-50 hover:bg-green-400 font-bold hover:border-1  hover:border-green-500 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
                  }
                >
                  {worker.status == "active"
                    ? "Deactivate worker"
                    : "Activate Worker"}
                </button>
              </div>
            </div>
            <div className="m-auto"></div>
          </div>
        </div>
      )}

      {!shifts || shifts.length === 0 ? (
        <div className="text-center mt-5">
          <h1 className="font-bold text-3xl text-white">No recent shifts</h1>
        </div>
      ) : (
        <>
          <div className="text-center mt-5">
            <h1 className="font-bold text-3xl text-white">Recent shifts</h1>
          </div>
          <table className="table-fixed border-collapse mt-3 bg-gray-700 rounded-xl text-center shadow-md shadow-gray-700 mx-5">
            <caption className="caption-bottom">
              Shifts table: 'N/A' means the shift has not ended yet
            </caption>
            <thead>
              <tr>
                <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                  Shift start
                </th>
                <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                  Shift duration
                </th>
                <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                  Earned wage
                </th>
              </tr>
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
                        <td className="p-4">
                          {Math.round(shift.duration * 100) / 100} hours
                        </td>
                        <td className="p-4 font-bold text-emerald-500">
                          +
                          {(
                            Math.round(
                              shift.duration * worker.hourlypay * 100
                            ) / 100
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "HUF",
                          })}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4 font-bold">N/A</td>
                        <td className="p-4 font-bold text-red-500">N/A</td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
