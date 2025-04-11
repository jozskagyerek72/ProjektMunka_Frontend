import React, { useEffect, useState } from "react";
import { generateSchema } from "../utils/generateFirebaseSchema";

export const Schema = () => {
  const [schema, setSchema] = useState(null);
  const [collectionName, setCollectionName] = useState("shifts");

  useEffect(() => {
    console.log("Selected collection:", collectionName);
    generateSchema(collectionName, setSchema);
  }, [collectionName]);

  const collections = [
    { name: "Admins", value: "admins" },
    { name: "Applicants", value: "applicants" },
    { name: "Shifts", value: "shifts" },
    { name: "Workers", value: "workers" },
  ];

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col justify-center items-center p-4">
      <h1 className="wlh12">Schemas</h1>

      {schema && (
        <div className="w-full max-w-4xl overflow-x-auto flex flex-col gap-0 justify-start">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-white mb-4">
              Schema for {collectionName}
            </h2>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Collections
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50"
              >
                {collections.map((collection) => (
                  <li key={collection.value}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setCollectionName(collection.value);
                      }}
                    >
                      {collection.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <table className="table w-full bg-gray-800 text-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 px-4 text-left">Field Name</th>
                <th className="py-3 px-4 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(schema).map(([fieldName, fieldData]) => (
                <tr
                  key={fieldName}
                  className="border-t border-gray-700 hover:bg-gray-700"
                >
                  <td className="py-3 px-4">{fieldName}</td>
                  <td className="py-3 px-4">{fieldData}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
