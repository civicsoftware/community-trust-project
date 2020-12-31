import { number, oneOf, string } from "prop-types";
import React from "react";

const COMPLETENESS_TEXT = {
  0: "Open for participation",
  1: false,
  2: false,
  3: false,
  4: "Completed"
};

// TODO: Don't dynamically generate class names so purge works properly
// eslint-disable-next-line no-unused-vars
const gray =
  "from-gray-100 to-gray-400 from-gray-400 to-gray-700 from-gray-700 to-gray-900";
// eslint-disable-next-line no-unused-vars
const purple =
  "from-purple-100 to-purple-400 from-purple-400 to-purple-700 from-purple-700 to-purple-900";

function ContextWhoInvestigated({
  completeness,
  answered,
  total,
  sources,
  color,
  className
}) {
  return (
    completeness >= 0 && (
      <div
        className={`relative flex items-center gap-1 ml-12 -mt-1 ${className}`}
      >
        <div className="bg-white">
          <div
            className={`h-2 w-6 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 0 ? `bg-${color}-900 bg-opacity-20` : ""
            }`}
          />
        </div>

        <div className="bg-white">
          <div
            className={`h-2 w-6 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 1 ? `bg-${color}-900 bg-opacity-40` : ""
            }`}
          />
        </div>

        <div className="bg-white">
          <div
            className={`h-2 w-6 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 2 ? `bg-${color}-900 bg-opacity-60` : ""
            }`}
          />
        </div>

        <div className="bg-white">
          <div
            className={`h-2 w-6 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 3 ? `bg-${color}-900 bg-opacity-80` : ""
            }`}
          />
        </div>

        <div className="bg-white">
          <div
            className={`h-2 w-6 bg-gray-100 ring-2 ring-gray-500 z-20 bg-gradient-to-r ${
              completeness >= 4 ? `bg-${color}-900 bg-opacity-100` : ""
            }`}
          />
        </div>
        <div className="ml-1.5 h-4 text-xs capitalize items-baseline italic text-white">
          {COMPLETENESS_TEXT?.[completeness] ||
            `${answered}/${total} answered fields`}
          {sources}
        </div>
      </div>
    )
  );
}

ContextWhoInvestigated.propTypes = {
  completeness: oneOf([0, 1, 2, 3, 4]),
  answered: number,
  total: number,
  sources: string,
  color: string,
  className: string
};

export default ContextWhoInvestigated;
