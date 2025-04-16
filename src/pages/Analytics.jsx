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
    setAvatar(user?.photoURL ? extractUrlAndId(user.photoURL).url : null);
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
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-950 pt-20 flex flex-col items-center justify-center gap-15 pb-10">
      <h1 className="text-3xl font-bold text-center text-white wlh12">
        Analytics
      </h1>
      <div className="stats text-center shadow bg-gray-900 w-fit gap-10 p-5 flex flex-col md:flex-row rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
        <div className="stat p-4 rounded-lg flex-col justify-between bg-gray-700 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          <div className="stat-title text-white text-xl">You have worked</div>
          <div className="stat-value text-success">
            {workedHours ? workedHours.toFixed(2) : "0.00"} hours
          </div>
          <div className="stat-desc text-white text-xl">so far</div>
        </div>

        <div className="stat p-4 rounded-lg flex-col justify-between bg-gray-700 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          <div className="stat-title text-white text-xl">You have worked</div>
          <div className="stat-value text-secondary">
            {shifts ? shifts.length : "0"}
          </div>
          <div className="stat-desc text-white text-xl">successful shifts so far</div>
        </div>

        <div className="stat flex rounded-full justify-center items-center p-2 bg-gray-700 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          <img
            src={avatar || "../public/blankpeople.jpg"}
            alt="user profile"
            className="rounded-full border-4 border-gray-500 object-cover w-32 h-32"
          />
        </div>

        <div className="stat p-4 rounded-lg flex-col justify-between bg-gray-700 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          <div className="stat-title flex text-white text-xl">
            The sum of your wage is
          </div>
          <div className="stat-value text-white">
            {payment
              ? ((Math.round(payment) / 100) * 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "HUF",
                })
              : "HUF 0.00"}
          </div>
          <div className="stat-desc text-white text-xl">
            this sum is before tax
          </div>
        </div>
      </div>

      {/* Shifts table */}
      <div className="w-full flex flex-col justify-center items-center">
        {!shifts || shifts.length === 0 ? (
          <div className="text-center mt-5">
            <h1 className="font-bold text-3xl text-white">No recent shifts</h1>
          </div>
        ) : (
          <>
            <div className="text-center mt-5">
              <h1 className="font-bold text-3xl text-white">Recent shifts</h1>
            </div>
            <table className="table-fixed border-collapse mt-3 bg-gray-700 text-center text-white shadow-md shadow-gray-700 mb-5 mx-4 rounded-2xl  transition-all duration-300 hover:scale-[1.02]">
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
                    className="border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]"
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
  );
};
