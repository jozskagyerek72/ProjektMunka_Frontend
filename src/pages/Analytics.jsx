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
import { readSingleWorker } from "../utils/crudUtil";

export const Analytics = () => {
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [workedHours, setWorkedHours] = useState(null);
  const [payment, setPayment] = useState(null);
  const [shifts, setShifts] = useState(null);
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    setAvatar(user?.photoURL ? extractUrlAndId(user.photoURL).url : null)
  }, [user?.photoURL]);

  useEffect(() => {
    (async () => {
      if (!user) return;
      try {
        const workerID = await getWorkerIdFromEmail(await user?.email);
        setWorkedHours(await getWorkedHours(workerID));
        getWorkerPayment(
          await getWorkerIdFromEmail(await user?.email),
          setPayment
        );
        await readSingleWorker(workerID, setWorker);
        await getWorkersShiftsFromId(workerID, setShifts);
        console.log(user?.email);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-950 pt-20 flex flex-col items-center justify-center">
      <div className="flex justify-center w-full mb-10">
        <h1 className="text-3xl font-bold text-center text-white wlh12">
          Analytics
        </h1>
      </div>
      <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl pb-10">
        <div className="stats shadow bg-gray-700 text-white w-fit flex flex-col md:flex-row">
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

          <div className="stat flex flex-col">
            <div className="stat-title flex text-white text-xl">
              The sum of your wage is
            </div>
            <div className="stat-value flex">
              {payment &&
                ((Math.round(payment) / 100) * 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "HUF",
                })}
            </div>
            <div className="stat-desc text-white text-xl">
              this sum is before tax
            </div>
          </div>

          <div className="stat flex justify-center items-center">
            <div className="w-32">
              <img
                src={avatar ? avatar : '../public/blankpeople.jpg'}
                alt="user profile"
                className="rounded-full border-5 border-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Shifts table */}
        <div className="w-full">
          {!shifts || shifts.length === 0 ? (
            <div className="text-center mt-5">
              <h1 className="font-bold text-3xl text-white">No recent shifts</h1>
            </div>
          ) : (
            <>
              <div className="text-center mt-5">
                <h1 className="font-bold text-3xl text-white">Recent shifts</h1>
              </div>
              <table className="table-fixed border-collapse mt-3 bg-gray-700 rounded-xl text-center text-white shadow-md shadow-gray-700 mb-5 mx-4 w-full">
                <thead>
                  <tr>
                    <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                      Shift start
                    </th>
                    <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                      Shift duration
                    </th>
                    <th className="border border-b-gray-600 border-x-0 border-t-0 text-sm md:text-xl py-2 px-2">
                      Earned wage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((shift) => (
                    <tr
                      key={shift.id}
                      className="border border-t-gray-600 border-x-0 border-b-0"
                    >
                      <td className="p-4">
                        {new Date(shift.start?.seconds * 1000).toLocaleString()}
                      </td>
                      {shift.duration ? (
                        <>
                          <td className="p-4">
                            {Math.round(shift.duration * 100) / 100}h
                          </td>
                          <td className="p-4 font-bold text-emerald-500">
                            +
                            {(
                              Math.round(
                                shift.duration * worker.hourlypay * 100
                              ) / 100
                            ).toLocaleString("en-US", {
                              style: "currency",
                              currency: "HUF",
                            })}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-4 font-bold">undended shift</td>
                          <td className="p-4 font-bold text-red-500">
                            not available
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
