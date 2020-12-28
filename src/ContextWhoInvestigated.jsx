import { oneOf, string } from "prop-types";
import React from "react";

const COMPLETENESS_TEXT = {
  0: "Open for participation",
  1: "Partially completed",
  2: "Completed"
};

function ContextWhoInvestigated({ completeness, sources }) {
  return (
    <>
      <div className="flex items-center gap-1 ml-0.5 z-50 -mt-2.5">
        <div
          className={`h-2 w-2 bg-gray-100 ring-2 ring-gray-500 rounded-full ${
            completeness >= 0 ? "bg-gray-700" : ""
          }`}
        />
        <div
          className={`h-2 w-2  bg-gray-100 ring-2 ring-gray-500 rounded-full ${
            completeness >= 1 ? "bg-gray-700" : ""
          }`}
        />
        <div
          className={`h-2 w-2 bg-gray-100 ring-2 ring-gray-500 rounded-full  ${
            completeness >= 2 ? "bg-gray-700" : ""
          }`}
        />
        <div className="mt-0.5 ml-1.5 h-4 text-xs capitalize items-baseline italic">
          {COMPLETENESS_TEXT?.[completeness]}
          {sources}
        </div>
      </div>
    </>
  );
}

ContextWhoInvestigated.propTypes = {
  completeness: oneOf([0, 1, 2]),
  sources: string
};

export default ContextWhoInvestigated;
