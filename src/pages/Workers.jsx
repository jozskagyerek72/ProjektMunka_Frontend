import React from "react";
import { readWorkers } from "../utils/crudUtil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Workers = () => {
  const [workers, setWorkers] = useState([]);
  readWorkers(setWorkers);
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh justify-center mt-15 flex bg-gray-950 pb-10">
      {/* concept2 */}

      <div className="overflow-x-auto mt-10 rounded-md flex items-center justify-center flex-col">
        <div className="text-center justify-center flex flex-wrap">
          <h1 className="text-3xl mt-17 wlh12">Workers</h1>
        </div>
        <table className="table-fixed border-collapse mt-3 bg-gray-700 rounded-xl text-center text-white shadow-md shadow-gray-700 mx-5">
          <thead>
            <tr>
              <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl px-5 py-2">
                Avatar
              </th>
              <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl px-5 py-2">
                Name
              </th>
              <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl px-5 py-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {workers &&
              workers.map((worker) => (
                <tr
                  key={worker.id}
                  className="border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
                >
                  <td className="px-5 py-2">
                    <img
                      src={
                        worker.imageURL != "NaN"
                          ? worker.imageURL
                          : "../public/blankpeople.jpg"
                      }
                      className={`w-16 h-16 rounded-full border-2 object-cover ${
                        worker.status === "active"
                          ? "border-green-500"
                          : "border-red-500"
                      }`}
                      alt={worker.id}
                    />
                  </td>
                  <td className="px-5 py-2 font-bold">{worker.name}</td>
                  <td className="px-5 py-2 space-y-1.5">
                    <div
                      className={`text-center px-3 py-1 rounded-full font-semibold text-sm transition-all
                      ${
                        worker.status === "active"
                          ? "bg-green-600/20 text-green-500 border border-green-500 hover:bg-green-600/30"
                          : "bg-red-600/20 text-red-500 border border-red-500 hover:bg-red-600/30"
                      }`}
                    >
                      {worker.status}
                    </div>

                    <button
                      onClick={() => navigate(`/workerdetails/${worker.id}`)}
                      className="w-full btn btn-outline btn-sm hover:scale-[1.02] transition-transform rounded-full font-bold"
                    >
                      details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
