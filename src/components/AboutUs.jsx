import React from "react";

export const AboutUs = () => {
  return (
    <div className="flex flex-col text-white m-5 p-5 justify-center items-center max-w-4xl">
      <h1 className="text-3xl wlh12 font-bold">About us</h1>
      <div className="space-y-4 text-xl indent-5">
        <p className="changeP text-justify p-3 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          WorkLinker is a modern time-tracking platform that helps organizations
          optimize workforce management. Our web-based solution ensures accurate
          work hour logging, streamlined scheduling, and simplified payroll
          processing through an intuitive, secure interface that enhances
          transparency.
        </p>

        <p className="changeP text-justify p-3 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          Employees can easily clock in/out and access work history, while
          managers monitor attendance and approve timesheets. Our centralized
          system automates data collection, improves compliance, and integrates
          with payroll systems for efficient compensation processing.
        </p>

        <p className="changeP text-justify p-3 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02]">
          Designed for accessibility, WorkLinker works across all devices,
          enabling time tracking anywhere. We provide reliable workforce
          management solutions for businesses of all sizes, ensuring fair and
          transparent time tracking for employees.
        </p>
      </div>
    </div>
  );
};
