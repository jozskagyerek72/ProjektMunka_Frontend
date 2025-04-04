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
    <div className="min-h-screen bg-gray-950 pt-20 flex flex-col items-center justify-center">
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
       

      </div>
      <div className="text-center mt-5">
        <h1 className="font-bold text-3xl text-white">Recent shifts</h1>
      </div>
      <table className="table-fixed border-collapse mt-3 bg-gray-700 rounded-xl text-center text-white shadow-md shadow-gray-700 mb-5">
        <thead>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl  py-2 px-2">
            Shift start
          </th>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl  py-2 px-2">
            Shift duration
          </th>
          <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl  py-2 px-2">
            Earned wage
          </th>
        </thead>
        <tbody>
          {shifts &&
            shifts.map((shift) => (
              <tr
                key={shift.id}
                className="border border-t-gray-600 border-x-0 border-b-0"
              >
                <td className="p-4">
                  {new Date(shift.start?.seconds * 1000).toLocaleString()}
                </td>
                {shift.duration ? (
                  <>
                    <td className="p-4">{shift.duration}</td>
                    <td className="p-4 font-bold text-emerald-500">nigga</td>
                  </>
                ) : (
                  <>
                    <td className="p-4 font-bold">undended shift</td>
                    <td className="p-4 font-bold text-red-500">not available</td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      
      
    </div>
  );
};
