import React, { useState, useEffect, useContext } from "react";
import { readSingleWorker } from "../utils/crudUtil";
import QRCode from "react-qr-code";
import { UserContext } from "../context/UserContext";
import { getWorkerIdFromEmail } from "../utils/analytics_systemUtils";
export const Gate = () => {
  const [worker, setWorker] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const loadWorker = async () => {
      if (user?.email) {
        const workerId = await getWorkerIdFromEmail(user.email);
        await readSingleWorker(workerId, setWorker);
      }
    };
    loadWorker();
  }, [user]);
  

  return (
    <div className="min-h-dvh items-center bg-gray-950 flex flex-col justify-center gap-10 pb-10">
      <div className="flex justify-center items-center flex-col flex-wrap">
        <h1 className="text-3xl wlh12 m-20 font-bold text-center">Check-in</h1>
        <h2 className="m-auto text-xs md:text-xl text-justify text-white">
          Scan the QR code with your mobile to check in/check out!
        </h2>
      </div>
      <div className="qrHolder justify-center flex flex-wrap ">
        <div className="mockup-phone bg-white text-center h-150 w-80">
          <div className="camera rounded-2xl bg-black h-5 w-5 "></div>
          <div className="display flex text-center">
            <div className="flex text-center flex-wrap justify-center">
              <h2 className="text-2xl text-black m-15">{worker&& worker.name}</h2>
              {worker&& <QRCode className="m-4" value={worker.id+";"+worker.name}/>}
              <h3 className="text-center font-bold  text-black float-end m-5">
                {worker&& worker.field}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
