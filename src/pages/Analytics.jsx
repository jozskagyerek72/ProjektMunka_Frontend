//import React from 'react'

import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { extractUrlAndId } from "../utils/utilities";
import { getWorkerIdFromEmail, getWorkedHours, getWorkerPayment } from "../utils/analytics_systemUtils.js";

export const Analytics = () => {

  const { user } = useContext(UserContext)
  const [avatar, setAvatar] = useState(null);

  /*
  const [workerID, setWorkerId] = useState(null)
  const [workedHours, setWorkedHours] = useState(null)
  const [payment, setPayment] = useState(null)
  */

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    !user && setAvatar(null);
  }, [user, user?.photoURL]);
  console.log(user?.email);
   
  /*
  useState(()=>{
    getWorkerIdFromEmail(user?.email, setWorkerId)
    getWorkedHours(workerID, setWorkedHours)
    getWorkerPayment(workerID, setPayment)
  },[])*/

  return (
    <div className="gate bg-gray-950">

        <div className="flex flex-wrap justify-center mt-15">
          <h1 className="text-3xl m-20 wlh12">Analytics</h1>
        </div>
        
        <div className="stat-container justify-center flex flex-wrap gap-10">
        
        
        <div className="statistics text-white justify-center bg-gray-700 rounded-xl flex flex-wrap">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
              </div>
              <div className="stat-title text-white text-xl">Total work hours</div>
              <div className="stat-value text-primary">26 hour</div>
              <div className="stat-desc text-white text-xl">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                
              </div>
              <div className="stat-title text-white text-xl">Min. work hours</div>
              <div className="stat-value text-secondary">35hour</div>
              <div className="stat-desc text-white text-xl">Min.work hours per week</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={avatar} />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title text-white text-xl">Tasks done</div>
              <div className="stat-desc text-white text-xl">31 tasks remaining</div>
            </div>
          </div>
        </div>


        <div className="balance flex-wrap flex">




          <div className="stats bg-primary text-primary-content">
            <div className="stat">
              <div className="stat-title text-white text-xl">Wage</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Add funds</button>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-white text-xl">Wage after tax</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm">Deposit</button>
              </div>
            </div>
          </div>



        </div>
      </div>

      </div>

  );
};
