import React from "react";
import { readWorkers } from "../utils/crudUtil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Workers = () => {
  const [workers, setWorkers] = useState([]);
  readWorkers(setWorkers);
  const navigate = useNavigate();

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
                <tr key={worker.id} className="border-2 bg-gray-800 text-white border-white rounded-md">
                  <th>
                    <label>
                      
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={worker.imageURL?worker.imageURL:'public/blankpeople.jpg'}
                            alt={worker.id}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{worker.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {worker.field}
                    <br />
                  </td>
                  <td>{worker.status=="active"?<p className="bg-green-700 text-center p-1 border-2 rounded-md font-bold border-white">{worker.status}</p>:<p className="bg-red-700 text-center p-1 border-2 rounded-md font-bold border-white">{worker.status}</p>}
                    </td>
                  <th>
                    <button onClick={()=>navigate("/workerdetails/"+worker.id)} className="btn btn-ghost btn-md">details</button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          
        </table>
      </div>
    </div>
  );
};
