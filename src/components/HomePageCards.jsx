import React from "react";

export const HomePageCards = () => {
  return (
    <div className="flex flex-wrap justify-center m-auto p-10 gap-10">
      <div className="card bg-base-100 image-full border-white border-2 w-95 shadow-xl">
        <figure>
          <img
            src="./Hra.jpg"

            alt="Hr"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sign in as a HR worker</h2>
          <p>Manage workers and applicants.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2 w-95 shadow-xl">
        <figure>
          <img
            src="./worker.jpg"

            alt="worker"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sign in as a worker</h2>
          <p>Examine your statistics.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full border-white border-2 w-95 shadow-xl">
        <figure>
          <img
            src="./worker.jpg"

            alt="apply"

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Apply</h2>
          <p>Apply for a job.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
