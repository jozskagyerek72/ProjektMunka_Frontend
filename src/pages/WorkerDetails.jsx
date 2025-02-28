//import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { readSingleWorker} from "../utils/crudUtil";

export const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    readSingleWorker(id, setWorker);
  }, []);

  return (
    <div className="home bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl m-17 wlh12">Worker details</h1>
      </div>

      {worker && (
        <div className="hero bg-gray-950 min-h-screen">
          <div key={worker.id} className="hero-content bg-gray-700 border-1 border-gray-500 shadow-lg shadow-white flex-col lg:flex-row">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h2 className="text-4xl text-white font-bold">
                {worker && worker.name}
              </h2>
              <div className="badge m-4 badge-primary font-bold border-white border-1">
              {worker && worker.status}
              </div>
              <div className="badge m-4 badge-primary font-bold border-white border-1">
              {worker && worker.field}
              </div>
              <div className="badge badge-primary font-bold border-white border-1 ">
                Wage: 2,000,000Ft
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
