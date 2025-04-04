import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePageCards = ({setRole}) => {

  const navigate = useNavigate()

  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 justify-center p-10 gap-10">
      <div className="card bg-base-100 image-full border-white border-2  shadow-gray-700 shadow-xs">
        <figure>
          <img src="./Hra.jpg" alt="Hr" className="w-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Sign in as a HR worker</h2>
          <p className="cardtext text-xl">Manage workers and applicants.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={
              ()=> {setRole("Sign in as a HR worker"); 
                navigate('/signin')}
              }>Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2  shadow-gray-700 shadow-xs">
        <figure>
          <img src="./worker.jpg" alt="worker" className="w-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl ">Sign in as a worker</h2>
          <p className="cardtext text-xl">Examine your statistics.</p>
          <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={()=> {setRole("Sign in as a worker"); navigate('/signin')}}>Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2  shadow-gray-700 shadow-xs">
        <figure>
          <img src="./apply.jpg" alt="apply" className="w-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Apply</h2>
          <p className="cardtext text-xl">Apply for a job.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>{setRole("Apply for a job"); navigate("/apply")}}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};
