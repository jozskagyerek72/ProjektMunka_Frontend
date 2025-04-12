import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeCards = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-evenly gap-10 items-center flex-col md:flex-row flex-wrap w-full px-5 md:px-0">
      {/* Card 1 - HR Worker */}
      <div className="card bg-base-100 h-full w-full md:h-100 md:w-140 image-full border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 shadow-xs">
        <figure>
          <img
            src="./Hra.jpg"
            alt="Hr"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">HR Portal</h2>
          <p>Manage workers and applicants</p>
          <div className="card-actions justify-end mt-auto">
            <button
              className="btn btn-primary hover:scale-[1.03] duration-300 transition-all hover:border-primary-content"
              onClick={() => navigate("/signin")}
            >
              HR Login
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 - Worker */}
      <div className="card bg-base-100 h-full w-full md:h-100 md:w-140 image-full border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 shadow-xs">
        <figure>
          <img
            src="./worker.jpg"
            alt="worker"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Worker portal</h2>
          <p>Examine your statistics</p>
          <div className="card-actions justify-end mt-auto">
            <button
              className="btn btn-primary hover:scale-[1.03] duration-300 transition-all hover:border-primary-content"
              onClick={() => navigate("/signin")}
            >
              Worker sign in
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 - Apply */}
      <div className="card bg-base-100 h-full w-full md:h-100 md:w-140 image-full border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 shadow-xs">
        <figure>
          <img
            src="./apply.jpg"
            alt="apply"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Apply</h2>
          <p>Join WorkLinker</p>
          <div className="card-actions justify-end mt-auto">
            <button
              className="btn btn-primary hover:scale-[1.03] duration-300 transition-all hover:border-primary-content"
              onClick={() => navigate("/apply")}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
