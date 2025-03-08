import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  addWorker,
  endShift,
  
  
  readShifts,
  readWorkers,
  startShift,
} from "../utils/crudUtil";

import { data } from "react-router-dom";

import QRCode from 'react-qr-code'
import { getWorkedHours, getWorkerPayment } from "./analytics_systemUtils";
//import { data } from 'react-router-dom'

export const Backendtests = () => {
  /*const [workers, setWorkers] = useState([]);
  //useEffect(()=>{readWorkers(setWorkers)},[workers])
  readWorkers(setWorkers)
  const [shiftID, setShiftID] = useState(null)

  const [shifts,setShifts] = useState([])
  readShifts(setShifts)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    let newWorkerData = { ...data };
    addWorker(newWorkerData);
  };

  const onShiftStart = async (data) => {
    let startShiftData = { ...data };
    startShift(startShiftData, setShiftID);
  };

  useEffect(()=> {
    checkShiftStatus("battya");
  },[])*/
  const [payment, setpayment] = useState(null)
  
  useEffect(()=>{ setpayment(getWorkerPayment("WFZUQ5L3G7TbbTHoWRIc")) },[])
  
 
  

  return (
    <div>
     
      {/*
      <div>
        <h2>workers:</h2>
        {workers &&
          workers.map((worker) => (
            <div key={worker.id}>
              <p style={{ color: "white" , backgroundColor:"black"}}>
                {" "}
                {worker.id} : {worker.name} : {worker.field} :{" "}
                {worker.hourlypay}
              </p>
              <QRCode value={worker.id} />
            </div>
          ))}
      </div>

      <h2>add worker:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="name"
        />
        <input
          {...register("field", { required: true })}
          type="text"
          placeholder="field"
        />
        <input
          {...register("hourlypay", { required: true })}
          type="text"
          placeholder="hourlypay"
        />
        <input type="submit" />
      </form>

      <h2>shift:</h2>
      {shifts &&
        shifts.map((shift) => (
          <p style={{ color: "black" }} key={shift.id}>
            {shift.workerid} : {shift.workername} |{" "}
            {new Date(shift.start.seconds * 1000).toLocaleString()} -{" "}
            {new Date(shift.end.seconds * 1000).toLocaleString()} :{" "}
            {shift.totalhours}
          </p>
        ))}

      <h2>local shifts</h2>
      {shifts &&
        shifts.map((shift) => (
          <h3 key={shift.start}>
            {new Date(shift.start.seconds * 1000).toLocaleString()} -{" "}
            {shift.end
              ? new Date(shift.end.seconds * 1000).toLocaleString()
              : "Not Available"}
          </h3>
        ))}

      <h2>startshift @workerId:</h2>
      <form onSubmit={handleSubmit(onShiftStart)}>
        <input {...register("name", { required: true })} type='text' placeholder='name' />
        <input type="submit"   />
      </form>
        <button onClick={()=>checkShiftStatus("battya")}>niga</button>*/}
        
    </div>
  );
};
