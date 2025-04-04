import React from "react";
import { useState } from "react";
import { readShifts } from "../utils/crudUtil";
import { getWorkersShiftsFromName } from "../utils/analytics_systemUtils";
import { useEffect } from "react";

export const Shifts = () => {
  const [shifts, setShifts] = useState([]);
  const [search, setSearch] = useState(null)
  readShifts(setShifts);

  const HandleSearch = () =>{
    console.log(search)
    getWorkersShiftsFromName(search, setShifts)
  }


  return (
    <div className="min-h-dvh items-center bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12 font-bold">Shifts</h1>
      </div>
      <div className="flex justify-center m-10">
        <input onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search a name"
          className="input input-primary"
        />
        <button onClick={()=>HandleSearch()} className="btn btn-square ml-1 border-primary border-2">
          <img src="./search.png" alt="" />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 ml-10 pb-10 gap-10 justify-center align-middle  grid-rows-5 shiftrow">
        {shifts &&
          shifts.map((shift) => (
            <div  key={shift.id} className="card bg-gray-700 justify-center align-center border-white hover:border-2 hover:shadow-md shadow-white  text-primary-content w-80">
              {shift.end ? (
                <div className="light w-18 text-white font-bold h-7 p-1 text-center bg-red-500 rounded-xl">
                  Finished
                </div>
              ) : (
                <div className="light w-15 h-7 p-1 text-center text-white font-bold bg-green-400 rounded-xl">
                  Active
                </div>
              )}
              <div className="card-body">
                <h2 className="card-title">
                  {shift.name + " " + shift.workerId}
                </h2>
                <p>
                  {shift.start &&
                    new Date(shift.start.seconds * 1000).toLocaleString()}
                </p>
                <p>
                  {shift.end &&
                    new Date(shift.end.seconds * 1000).toLocaleString()}
                </p>
                <p>
                  {shift.duration &&
                    shift.duration.toLocaleString().substring(0, 5)}{" "}
                  h
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
