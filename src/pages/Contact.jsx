import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-dvh bg-gray-950">
      <div className="text-center justify-center flex flex-wrap mt-10">
        <h1 className="text-3xl m-17 wlh12 font-bold">Contact us</h1>
      </div>
      <div className="container-contact flex flex-wrap justify-center">
        <div className="card border-4  border-white bg-base-100 w-150 h-150 shadow-xl">
          <figure>
            <img src="WL(good).png" alt="Shoes"  />
          </figure>
          <div className="card-body bg-gray-800">
            <h2 className="card-title text-2xl text-white">
              +36 11/111-111
              <div className="badge badge-primary ml-15 h-10">Our agents are available around the clock</div>
            </h2>
            <p className="text-2xl text-white">
              work.linker@worklinker.support.com
            </p>
            <div className="card-actions justify-end">
              <div className="badge-primary badge-outline">
               <a href="https://maps.app.goo.gl/Wq98naiyTmkFh9rC6" target="_blank">
               Kecskemét, Bethlen krt. 63, 6000</a>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
