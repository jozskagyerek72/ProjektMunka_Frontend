import React from "react";

export const HRcontacts = () => {
  return (
    <div className="home bg-gray-950">
      <div className="text-center justify-center flex flex-wrap">
        <h1 className="text-3xl mt-17 wlh12">HR contact</h1>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-3">
            <div className="flex w-52 flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
                </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
            </div>
      </div>
    </div>
  );
};
