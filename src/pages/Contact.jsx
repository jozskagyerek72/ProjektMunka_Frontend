import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-dvh bg-gray-950 flex justify-center items-center flex-col">
      <div className="text-center justify-center flex flex-wrap mt-10">
        <h1 className="text-3xl m-17 wlh12 font-bold">Contact us</h1>
      </div>
      <div className="card bg-base-100 w-150 h-150 border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50">
        <figure>
          <img
            src="WL(good).png"
            alt="WorkLinker inc."
            className="object-cover"
          />
        </figure>
        <div className="card-body bg-gray-800 rounded-b-xl">
          <h2 className="card-title text-2xl text-white">
            +36 11/111-111
            <div className="badge badge-primary ml-15 h-10">
              Our agents are available around the clock
            </div>
          </h2>
          <p className="text-2xl text-white">
            work.linker@worklinker.support.com
          </p>
          <div className="card-actions justify-end">
            <div className="badge-primary badge-outline">
              <a
                href="https://maps.app.goo.gl/Wq98naiyTmkFh9rC6"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500 hover:text-blue-700"
              >
                Kecskemét, Bethlen krt. 63, 6000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
