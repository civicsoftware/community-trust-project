import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";

function BookmarkIcon() {
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
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
function ContextSectionAttribution({ schema }) {
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
      title="Attribution"
      Icon={BookmarkIcon}
      color="purple"
      completeness={completeness}
      cta
    >
      <div className="mt-4 p-4 text-sm">
        <div className="text-sm">
          <span className="font-semibold">Context contributors: </span>
          {schema?.context?.contextContributor}
        </div>
        <div className="text-sm">
          <span className="font-semibold">On behalf of: </span>
          {schema?.context?.onBehalfOf}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Publication date: </span>
          {schema?.context?.contextPublicationDate}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Update date: </span>
          {schema?.context?.contextUpdateDate}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Updated by: </span>
          {schema?.context?.contextUpdateBy}
        </div>
      </div>
    </ContextSectionWrapper>
  );
}

ContextSectionAttribution.propTypes = contextSchemaPropTypes;

export default ContextSectionAttribution;
