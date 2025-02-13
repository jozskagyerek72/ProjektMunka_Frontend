import React from "react";
import { NavLink } from "react-router-dom";
import { readWorkers } from "../utils/crudUtil";
import { useState } from "react";
export const Workers = () => {

  const [workers, setWorkers] = useState([])
  readWorkers(setWorkers)
  return (
    <div className="home justify-center flex bg-gray-950">
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 justify-center m-auto p-10 gap-10">
        {[...Array(10).keys()].map(key => 
        <div key={key} className="card bg-gray-600 border-2 border-white text-white w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="worker.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Huan Alvador Sicilius the {key}th</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>)}
        
      </div>
    </div>
  );
};
