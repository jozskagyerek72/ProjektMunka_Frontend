import React from "react";
import testResults from "../../results.json";

export const TestResults = () => {
  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col justify-center items-center p-4">
      <h1 className="wlh12">Tests & results</h1>
      <div className="flex flex-col justify-evenly items-center bg-gray-800 rounded-lg w-auto p-4 gap-5">
        <h1 className="text-3xl font-bold text-white">Tests - summary</h1>
        <div className="flex flex-row items-center justify-evenly w-full gap-5">
          <div className="rounded-xl p-4 bg-gray-600 border-1 border-white flex flex-col justify-center items-center w-full h-full">
            <span className="font-semibold">Total tests</span>
            <p>{testResults.numTotalTests}</p>
          </div>
          <div className="rounded-xl p-4 bg-gray-600 border-1 border-white flex flex-col justify-center items-center w-full h-full">
            <span className="font-semibold">Passed tests</span>
            <p>{testResults.numPassedTests}</p>
          </div>
          <div className="rounded-xl p-4 bg-gray-600 border-1 border-white flex flex-col justify-center items-center w-full h-full">
            <span className="font-semibold">Failed tests</span>
            <p>{testResults.numFailedTests}</p>
          </div>
          <div className="rounded-xl p-4 bg-gray-600 border-1 border-white flex flex-col justify-center items-center w-full h-full">
            <span className="font-semibold">Success </span>
            <p>{testResults.success ? "✅" : "❌"}</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white">Tests - results</h1>

        <div>
          <ul className="space-y-4">
            {testResults.testResults.map((testFile, index) => (
              <li key={index} className="border p-2 rounded-md">
                <h2 className="font-semibold">{testFile.name}</h2>
                <ul className="ml-4 mt-1 list-disc">
                  {testFile.assertionResults.map((assertion, i) => (
                    <li key={i}>
                      {assertion.fullName} -
                      <span
                        className={`ml-1 font-bold ${
                          assertion.status === "passed"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {assertion.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
