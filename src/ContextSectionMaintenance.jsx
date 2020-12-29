import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";

function LibraryIcon() {
  return (
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
  );
}
function ContextSectionMaintenance({ schema }) {
  let completeness = 0;
  const entries = [
    schema?.officialMaintenance?.officialMaintainer,
    schema?.officialMaintenance?.dataContributor,
    schema?.officialMaintenance?.lastOfficialMaintainence,
    schema?.officialMaintenance?.maintenanceInterval,
    schema?.officialMaintenance?.typicalUpdates
  ];
  if (entries.filter(x => x).length >= 0) {
    completeness = 1;
  }
  if (entries.filter(x => x).length === entries.length) {
    completeness = 2;
  }

  return (
    <ContextSectionWrapper
      title="Maintenance"
      Icon={LibraryIcon}
      color="gray"
      completeness={completeness}
      cta
    >
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
    </ContextSectionWrapper>
  );
}

ContextSectionMaintenance.propTypes = contextSchemaPropTypes;

export default ContextSectionMaintenance;
