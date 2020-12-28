import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

function ContextSectionMaintenance({ dataset }) {
  return (
    <section
      id="maintenance"
      className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl"
    >
      <div className="absolute bottom-4 right-4">
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
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </div>
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
          {dataset.officialMaintenance.officialMaintainer}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Contributors: </span>
          {dataset.officialMaintenance.dataContributor}
        </div>
        <div className="mt-4 text-sm">
          <span className="font-semibold">Last updated: </span>
          {dataset.officialMaintenance?.lastOfficialMaintainence || "Unknown"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Update frequency: </span>
          {dataset.officialMaintenance.maintenanceInterval}
        </div>
        <div className="mt-4 text-sm">
          {dataset.officialMaintenance.typicalUpdates}
        </div>
      </div>
    </section>
  );
}

ContextSectionMaintenance.propTypes = contextSchemaPropTypes;

export default ContextSectionMaintenance;
