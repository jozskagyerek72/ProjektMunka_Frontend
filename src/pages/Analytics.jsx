//import React from 'react'
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { extractUrlAndId } from "../utils/utilities";
import {
  getWorkedHours,
  getWorkerIdFromEmail,
  getWorkerPayment,
} from "../utils/analytics_systemUtils";

export const Analytics = () => {
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [workedHours, setWorkedHours] = useState(null);
  const [payment, setPayment] = useState(null);

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
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {" "}
      {/* 80px padding to account for 72px navbar + 8px buffer */}
      {/* Title Section - Now properly centered and visible */}
      <div className="flex justify-center w-full mb-10">
        <h1 className="text-3xl font-bold text-center text-white wlh12">Analytics</h1>
      </div>
      {/* Stats Container */}
      <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl pb-10">
        {/* First Stats Group */}
        <div className="stats shadow bg-gray-700 text-white w-full">
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
              Min.work hours per week
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
      </div>
    </div>
  );
};
