import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

function ContextSectionMaintenance({ schema }) {
  return (
    <section
      id="maintenance"
      className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl"
    >
      <div className="bg-blue-200 p-4 rounded-t-lg">
        <div className="inline-block p-1 border-2 rounded-full bg-blue-100 border-blue-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 inline-block align-text-bottom"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
        </div>
        <h2 className="inline-block ml-2 text-xl font-bold">Maintenance</h2>
      </div>
      <div className="p-4">
        <div className="text-sm font-bold text-purple-800">
          {schema?.officialMaintenance?.officialMaintainer}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Contributors: </span>
          {schema?.officialMaintenance?.dataContributor}
        </div>
        <div className="mt-4 text-sm">
          <span className="font-semibold">Last updated: </span>
          {schema?.officialMaintenance?.lastOfficialMaintainence || "Unknown"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Update frequency: </span>
          {schema?.officialMaintenance?.maintenanceInterval}
        </div>
        <div className="mt-4 text-sm">
          {schema?.officialMaintenance?.typicalUpdates}
        </div>
      </div>
    </section>
  );
}

ContextSectionMaintenance.propTypes = contextSchemaPropTypes;

export default ContextSectionMaintenance;
