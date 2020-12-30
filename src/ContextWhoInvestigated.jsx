import { oneOf, string } from "prop-types";
import React from "react";

const COMPLETENESS_TEXT = {
  0: "Open for participation",
  1: "Partially completed",
  2: "Completed"
};

// TODO: Don't dynamically generate class names so purge works properly
// eslint-disable-next-line no-unused-vars
const gray =
  "from-gray-100 to-gray-400 from-gray-400 to-gray-700 from-gray-700 to-gray-900";
// eslint-disable-next-line no-unused-vars
const purple =
  "from-purple-100 to-purple-400 from-purple-400 to-purple-700 from-purple-700 to-purple-900";

function ContextWhoInvestigated({ completeness, sources, color, className }) {
  return (
    <div
      className={`relative flex items-center gap-1 ml-12 -mt-1 ${className}`}
    >
      {/* <div className="absolute left-1 top-0 bottom-0 m-auto w-16 h-1 bg-gray-400 z-10" /> */}
      {completeness >= 0 && (
        <>
          <div
            className={`h-2 w-8 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 0 ? `from-${color}-100 to-${color}-400` : ""
            }`}
          />
          <div
            className={`h-2 w-8 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 1 ? `from-${color}-400 to-${color}-700` : ""
            }`}
          />
          <div
            className={`h-2 w-8 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 2 ? `from-${color}-700 to-${color}-900` : ""
            }`}
          />
        </>
      )}
      <div className="ml-1.5 h-4 text-xs capitalize items-baseline italic">
        {COMPLETENESS_TEXT?.[completeness]}
        {sources}
      </div>
    </div>
  );
}

ContextWhoInvestigated.propTypes = {
  completeness: oneOf([0, 1, 2]),
  sources: string,
  color: string,
  className: string
};

export default ContextWhoInvestigated;
