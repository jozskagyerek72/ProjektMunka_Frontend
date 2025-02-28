import React, { useState } from "react";
import { readWorkers } from "../utils/crudUtil";
import QRCode from "react-qr-code";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
export const Gate = () => {
  const [workers, setWorkers] = useState([]);
  const [useremail, setUserEmail] = useState()
  const { user } = useContext(UserContext);
  readWorkers(setWorkers);
  useEffect(()=>{
    //console.log(user?.email);
    
    user?.email && setUserEmail(user.email)
    //console.log(useremail);
    
  },[user])
  

  return (
    <div className="gate grid bg-gray-950  justify-center">
      <div className="write grid mt-10">
        <h1 className="text-3xl wlh12 m-auto">Check-in</h1>
        <h2 className="m-5 text-xl text-justify text-white">
          Scan the QR code with your mobile to check in/check out!
        </h2>
      </div>
      <div className="qrHolder justify-center flex flex-wrap ">
        <div className="mockup-phone bg-white text-center h-150 w-80">
          <div className="camera rounded-2xl bg-black h-5 w-5 "></div>
          <div className="display flex text-center">
            <div className="flex text-center flex-wrap ">
              <h2 className="text-2xl text-black  m-15">Worker Name</h2>
              {/*<img
                src="./websiteQR.png"
                className="w-70 h-70 ml-1"
                alt="YourQR"
              />*/}
              {user&& <QRCode value={useremail+""}/>}
              <h3 className="text-center font-bold  text-black float-end m-5">
                Job description
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
