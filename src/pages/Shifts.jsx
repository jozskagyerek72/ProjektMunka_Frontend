import React from "react";
import { useState } from "react";
import { readShifts } from "../utils/crudUtil";
import { getWorkersShiftsFromName } from "../utils/analytics_systemUtils";
import { useEffect } from "react";
import { toast } from "sonner";

export const Shifts = () => {
  const [shifts, setShifts] = useState([]);
  const [search, setSearch] = useState("");

  // loads shifts array on page load
  useEffect(() => {
    readShifts(setShifts);
    toast.success("Loaded shifts");
  }, []);

  const handleSearch = () => {
    a;
    if (!search.trim()) {
      readShifts(setShifts);
      toast.info("Showing all shifts");
      return;
    }

    setShifts([]); // clears previous results immediately

    getWorkersShiftsFromName(search, (newShifts) => {
      setShifts(newShifts);
      if (newShifts.length === 0) {
        toast.warning("No shifts found");
        readShifts(setShifts); // loads shifts array with the default parameters, as a fallback
      }
    });
  };

  return (
    <div className="min-h-dvh items-center bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12 font-bold">Shifts</h1>
      </div>
      <div className="flex justify-center m-10">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search a name"
          className="input input-primary"
        />
        <button
          onClick={() => handleSearch()}
          className="btn btn-square ml-1 border-primary border-2"
        >
          <img src="./search.png" alt="" />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 ml-10 pb-10 gap-10 justify-center align-middle grid-rows-5 shiftrow">
        {shifts &&
          shifts.map((shift) => (
            <div
              key={shift.id}
              className="card bg-gray-700 justify-center align-center border border-transparent hover:border-gray-400 text-primary-content w-80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
            >
              {shift.end ? (
                <div className="light w-18 text-white font-bold h-7 p-1 text-center bg-red-500 rounded-xl">
                  Finished
                </div>
              ) : (
                <div className="light w-15 h-7 p-1 text-center text-white font-bold bg-green-400 rounded-xl">
                  Active
                </div>
              )}
              <div className="card-title justify-center">
                <h1 className="font-bold">Shift statistics</h1>
              </div>
              <div className="card-body">
                <h2 className="card-title">{shift.name}</h2>
                <h2 className="card-title">{shift.id}</h2>
                <p>
                  <span className="font-bold">start:</span>{" "}
                  {shift.start &&
                    new Date(shift.start.seconds * 1000).toLocaleString()}
                </p>
                <p>
                  <span className="font-bold">end:</span>{" "}
                  {shift.end
                    ? new Date(shift.end.seconds * 1000).toLocaleString()
                    : "N/A"}
                </p>
                <p>
                  <span className="font-bold">duration:</span>{" "}
                  {shift.duration
                    ? shift.duration.toLocaleString().substring(0, 5) + " h"
                    : "N/A"}
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
