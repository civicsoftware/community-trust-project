import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSummarySectionWrapper from "./ContextSummarySectionWrapper";

function LibraryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="inline-block align-text-bottom w-6 h-6"
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
  // let completeness = 0;
  // const entries = [
  //   schema?.officialMaintenance?.officialMaintainer,
  //   schema?.officialMaintenance?.dataContributor,
  //   schema?.officialMaintenance?.lastOfficialMaintainence,
  //   schema?.officialMaintenance?.maintenanceInterval,
  //   schema?.officialMaintenance?.typicalUpdates
  // ];
  // if (entries.filter(x => x).length >= 0) {
  //   completeness = 1;
  // }
  // if (entries.filter(x => x).length === entries.length) {
  //   completeness = 2;
  // }

  return (
    <ContextSummarySectionWrapper
      title="Maintenance"
      Icon={LibraryIcon}
      color="pink"
      narrow
    >
      <div className="mb-4 pt-4 px-8 font-sans prose prose-sm">
        <div className="text-purple-800 font-bold">
          {schema?.officialMaintenance?.officialMaintainer || "Needs Input"}
        </div>
        <div className="">
          <span className="font-semibold">Contributors: </span>
          {schema?.officialMaintenance?.dataContributor || "Contributor names"}
        </div>
        <div className="mt-4">
          <span className="font-semibold">Last updated: </span>
          {schema?.officialMaintenance?.lastOfficialMaintainence ||
            "Update date"}
        </div>
        <div className="">
          <span className="font-semibold">Update frequency: </span>
          {schema?.officialMaintenance?.maintenanceInterval ||
            "Frequency of updates"}
        </div>
        <div className="mt-4">
          {schema?.officialMaintenance?.typicalUpdates ||
            "Description of typical updates"}
        </div>
      </div>
    </ContextSummarySectionWrapper>
  );
}

ContextSectionMaintenance.propTypes = contextSchemaPropTypes;

export default ContextSectionMaintenance;
