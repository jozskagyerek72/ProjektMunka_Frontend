//import React from 'react'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { extractUrlAndId } from "../utils/utilities";
import {
  getWorkedHours,
  getWorkerIdFromEmail,
  getWorkerPayment,
  getWorkersShiftsFromId,
} from "../utils/analytics_systemUtils";

export const Analytics = () => {
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [workedHours, setWorkedHours] = useState(null);
  const [payment, setPayment] = useState(null);
  const [shifts, setShift] = useState(null)

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);

    !user && setAvatar(null);
  }, [user, user?.photoURL]);

  useEffect(() => {
    (async () => {
      if (!user) return;
      try {
        setWorkedHours(
          await getWorkedHours(await getWorkerIdFromEmail(await user?.email))
        );
        getWorkerPayment(
          await getWorkerIdFromEmail(await user?.email),
          setPayment
        );
        getWorkersShiftsFromId(await getWorkerIdFromEmail(await user?.email), setShift)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="flex justify-center w-full mb-10">
        <h1 className="text-3xl font-bold text-center text-white wlh12">Analytics</h1>
      </div>
      <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl pb-10">
        <div className="stats shadow bg-gray-700 text-white w-full flex">
          <div className="stat">
            <div className="stat-title text-white text-xl">You have worked</div>
            <div className="stat-value text-success">
              {workedHours && workedHours.toFixed(2)} hours
            </div>
            <div className="stat-desc text-white text-xl">so far</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white text-xl">Min. work hours</div>
            <div className="stat-value text-secondary">35hour</div>
            <div className="stat-desc text-white text-xl">
              Min. work hours per week
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-white text-xl">
              The sum of your wage is
            </div>
            <div className="stat-value">
              {payment && payment.toFixed(2)} HUF
            </div>
            <div className="stat-desc text-white text-xl">
              this sum is before tax
            </div>
          </div>

          <div className="stat flex justify-center items-center">
              <div className="w-32">
                <img src={avatar} alt="user profile" className="rounded-full"/>
              </div>  
          </div>
        </div>
        {shifts&& shifts.map((shift)=><p >{new Date(shift.start?.seconds *1000).toLocaleString()} - { shift?.end&& new Date(shift.end?.seconds *1000).toLocaleString()} : {shift.duration}</p>)}

      </div>
    </div>
  );
};
