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
    <div className="min-h-dvh items-center bg-gray-950 flex flex-col justify-center pb-10">
      <div className="text-center justify-center flex flex-wrap mt-10">
        <h1 className="text-3xl wlh12 font-bold m-17">Shifts</h1>
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
          <img src="./search.png" />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-15">
        {shifts &&
          shifts.map((shift) => (
            <div
              key={shift.id}
              className="card bg-gray-700 w-2xs flex gap-5 rounded-4xl justify-center align-center border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
            >
              {shift.end ? (
                <div className="flex justify-center">
                  <div className="light text-white font-bold p-1 text-center bg-red-500 w-35 rounded-b-xl">
                    Finished
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="light text-white font-bold p-1 text-center bg-green-500 w-35 rounded-b-xl">
                    Active
                  </div>
                </div>
              )}
              <div className="card-title justify-center">
                <h1 className="font-bold">Shift statistics</h1>
              </div>
              <div className="card-body py-4 px-5 flex flex-col justify-center items-start">
                <div className="flex flex-col items-center justify-center w-full bg-gray-600 rounded-xl py-3">
                  <h2>Name</h2>
                  <h2 className="font-xl font-semibold">{shift.name}</h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-gray-600 rounded-xl py-3">
                  <h2>ID</h2>
                  <h2 className="font-xl font-semibold">{shift.id}</h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-gray-600 rounded-xl py-3">
                  <h2>Shift start</h2>
                  <h2 className="font-xl font-semibold">
                    {shift.start &&
                      new Date(shift.start.seconds * 1000).toLocaleString()}
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-gray-600 rounded-xl py-3">
                  <h2>Shift end</h2>
                  <h2 className="font-xl font-semibold">
                    {shift.end
                      ? new Date(shift.end.seconds * 1000).toLocaleString()
                      : "N/A"}
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-gray-600 rounded-xl py-3">
                  <h2>Shift duration</h2>
                  <h2 className="font-xl font-semibold">
                    {shift.duration
                      ? shift.duration.toLocaleString().substring(0, 5) + " h"
                      : "N/A"}
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
