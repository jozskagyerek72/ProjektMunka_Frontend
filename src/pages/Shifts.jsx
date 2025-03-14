import React from "react";
import { useState } from "react";
import { readShifts } from "../utils/crudUtil";

export const Shifts = () => {
    const [shifts, setShifts] = useState([]);
    readShifts(setShifts);


  return (
    <div className="gate bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12">Shifts</h1>

       

      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-3 shiftrow">
        {shifts && shifts.map((shift)=>
        <div className="card bg-gray-700 border-white hover:border-2 hover:shadow-md shadow-white m-30 text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">{shift.name}</h2>
            <p>
             {shift.start && new Date(shift.start.seconds *1000).toLocaleString()}
            </p>
            <p>
            {shift.end&& new Date(shift.end.seconds *1000).toLocaleString()}
            </p>
            <p>
                {
                    shift.duration && shift.duration.toLocaleString().substring(0, 5)
                } h
            </p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
    )}
        </div>
    </div>
  );
};
