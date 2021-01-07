import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSummarySectionWrapper from "./ContextSummarySectionWrapper";

function TableIcon() {
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
        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function ContextSectionRawData({ schema }) {
  // let completeness = 0;
  // const entries = [
  //   schema?.rawData?.rawTitle,
  //   schema?.rawData?.rawStableURI,
  //   schema?.rawData?.dateRangeStart,
  //   schema?.rawData?.dataRangeEnd,
  //   schema?.rawData?.lang,
  //   schema?.rawData?.notes
  // ];
  // if (entries.filter(x => x).length >= 0) {
  //   completeness = 1;
  // }
  // if (entries.filter(x => x).length === entries.length) {
  //   completeness = 2;
  // }

  return (
    <ContextSummarySectionWrapper
      title="Data Details"
      Icon={TableIcon}
      color="pink"
      narrow
    >
      <div className="p-4">
        <div className="text-purple-800 text-sm font-bold">
          {schema?.rawData?.rawTitle || "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Date Range: </span>
          {schema?.rawData?.dateRangeStart
            ? `${schema?.rawData?.dateRangeStart} - ${schema?.rawData?.dataRangeEnd}`
            : "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Data Type: </span>
          {schema?.dataType || "English"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Language: </span>
          {schema?.rawData?.lang || "English"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">URI: </span>
          {schema?.rawData?.rawStableURI ? (
            <a href="#TODO" className="underline text-sm font-medium">
              {schema?.rawData?.rawStableURI}
            </a>
          ) : (
            <p>Needs Input</p>
          )}
        </div>
        <div className="mt-4 text-sm">{schema?.rawData?.notes}</div>
      </div>
    </ContextSummarySectionWrapper>
  );
}

ContextSectionRawData.propTypes = contextSchemaPropTypes;

export default ContextSectionRawData;
