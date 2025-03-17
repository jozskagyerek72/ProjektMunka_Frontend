import React from "react";

export const Contact = () => {
  return (
    <div className="gate bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl m-17 wlh12">Contact</h1>
      </div>
      <div className="container-contact flex flex-wrap justify-center">
        <div className="card border-4  border-white bg-base-100 w-140 h-150 shadow-xl">
          <figure>
            <img src="wr.png" alt="Shoes" />
          </figure>
          <div className="card-body bg-gray-800">
            <h2 className="card-title text-2xl text-white">
              +36 11/111-111
              <div className="badge badge-primary">Call us any time! (we won't pick up though)</div>
            </h2>
            <p className="text-2xl text-white">
              work.linker@worklinker.support.com
            </p>
            <div className="card-actions justify-end">
              <div className="badge-primary badge-outline">
                6000 Kecskemét , Cséplőgép utca 9.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
