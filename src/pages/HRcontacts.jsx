import React, { useState } from "react";
import { readHRWorkers } from "../utils/crudUtil";

export const HRcontacts = () => {
  const [hrContacts, setHrContacts] = useState([]);
  readHRWorkers(setHrContacts);

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col justify-center items-center gap-10 pb-10">
      <div className="text-center justify-center flex flex-wrap items-center">
        <h1 className="text-3xl mt-17 wlh12 font-bold">Our team</h1>
      </div>

      <div className="flex bg-gray-800 flex-col justify-center items-center p-4 md:p-10 gap-5 rounded-xl mx-5 shadow-md shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/70 transition-shadow">
        <img
          src="https://res.cloudinary.com/gb-cloud-blog/image/upload/v1744652272/OT_rzd4tf.jpg"
          alt="our team"
          className="rounded-xl border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 w-full max-w-2xl"
        />
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <h1 className="font-bold text-4xl md:text-4xl text-center">
            About us
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full gap-6 md:gap-2">
            {hrContacts &&
              hrContacts.map((hr) => (
                <div
                  key={hr.id}
                  className="flex justify-center bg-gray-600 min-w-sm  p-5 rounded-xl border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50"
                >
                  <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
                    <li>
                      <span className="font-semibold">Name:</span> {hr.name}
                    </li>
                    <li>
                      <span className="font-semibold">E-mail:</span> {hr.email}
                    </li>
                    <li>
                      <span className="font-semibold">Role:</span>{" "}
                      {hr.description}
                    </li>
                    <li>
                      <span className="font-semibold">Profile:</span>{" "}
                      <a
                        href={hr.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-500 hover:text-blue-700"
                      >
                        {hr.profileLink}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
