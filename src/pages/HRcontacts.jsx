import React from "react";
import { useState } from "react";
import { readHRWorkers } from "../utils/crudUtil";

export const HRcontacts = () => {
    const [hrContacts,setHrContacts] = useState([])
    readHRWorkers(setHrContacts)

  return (
    <div className="home bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12">HR contact</h1>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-1 hrcont">
      {hrContacts && hrContacts.map((hr)=>
              <div className="card bg-base-100 w-96 m-30 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={hr.imgUrl}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{hr.name}</h2>
                <p><b>{hr.email}</b></p>
                <p><b>{hr.description}</b></p>
                <div className="card-actions">
                  <button className="btn btn-primary">{hr.phone}</button>
                </div>
              </div>
            </div>
        )}
         
      </div>
    </div>
  );
};
