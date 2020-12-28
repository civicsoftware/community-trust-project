import React from "react";

function ContextNav() {
  return (
    <section
      id="nav"
      className="m-4 p-4 fixed w-36 bg-gray-50 border-gray-300 border-2 rounded-lg shadow-xl"
    >
      <div className="p-2 flex flex-col justify-center text-gray-600 text-sm underline w-min-content">
        <a href="#summary" className="">
          Summary
        </a>
        <a href="#maintenance" className="mt-2">
          Maintenance
        </a>
        <a href="#rawData" className="mt-2">
          Raw Data
        </a>
        <a href="#process" className="mt-2">
          Data Process
        </a>
        <a href="#context" className="mt-2">
          Context
        </a>
        <a href="#resources" className="mt-2">
          Resources
        </a>
        <a href="#attribution" className="mt-2">
          Attribution
        </a>
      </div>
    </section>
  );
}

export default ContextNav;
