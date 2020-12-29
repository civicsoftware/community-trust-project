import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

function ContextSectionRawData({ schema }) {
  return (
    <section
      id="rawData"
      className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl"
    >
      <div className="bg-gray-200 p-4 rounded-t-lg">
        <div className="inline-block p-1 border-2 rounded-full bg-gray-100 border-gray-900">
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
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="inline-block ml-2 text-xl font-bold">Raw Data</h2>
      </div>
      <div className="p-4">
        <div className="text-sm font-bold text-purple-800">
          {schema?.rawData?.rawTitle}
        </div>
        <div className="text-sm">
          <span className="font-semibold">URI: </span>
          <a href="#TODO" className="text-sm font-medium underline">
            {schema?.rawData?.rawStableURI}
          </a>
        </div>
        <div className="text-sm">
          <span className="font-semibold">Date Range: </span>
          {schema?.rawData?.dateRangeStart} - {schema?.rawData?.dataRangeEnd}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Language: </span>
          {schema?.rawData?.lang}
        </div>
        <div className="mt-4 text-sm">{schema?.rawData?.notes}</div>
      </div>
    </section>
  );
}

ContextSectionRawData.propTypes = contextSchemaPropTypes;

export default ContextSectionRawData;
