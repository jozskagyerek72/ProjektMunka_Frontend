import React from "react";
import { readWorkers } from "../utils/crudUtil";
import { useState } from "react";
export const Workers = () => {
  const [workers, setWorkers] = useState([]);
  readWorkers(setWorkers);

  return (
    <div className="home justify-center mt-15 flex bg-gray-950">
      {/* concept2 */}

      <div className="overflow-x-auto mt-10 rounded-md">
        <table className="table bg-gray-500 border-2 border-white rounded-md">
          {/* head */}
          <thead>
            <tr className="border-2 bg-gray-800 text-white border-white">
              <th className="bg-gray-800 text-white">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="rounded-md">
            {/* row 1 */}
            {workers &&
              workers.map((worker) => (
                <tr className="border-2 bg-gray-800 text-white border-white rounded-md">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox border-1 border-white text-white" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={worker.imageURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{worker.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {worker.field}
                    <br />
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          <tfoot className="rounded-md bg-gray-800 text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
