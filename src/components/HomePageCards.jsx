//import React from "react";

export const HomePageCards = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 justify-center m-auto p-10 gap-10">
      <div className="card bg-base-100 image-full border-white border-2  shadow-xl">
        <figure>
          <img
            src="./Hra.jpg"

            alt="Hr"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Sign in as a HR worker</h2>
          <p className="cardtext text-xl">Manage workers and applicants.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2  shadow-xl">
        <figure>
          <img
            src="./worker.jpg"

            alt="worker"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl ">Sign in as a worker</h2>
          <p className=" cardtext text-xl">Examine your statistics.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2 shadow-xl">
        <figure>
          <img

            src="./apply.jpg"

            src="./worker.jpg"


            alt="apply"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Apply</h2>
          <p className="cardtext text-xl">Apply for a job.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
