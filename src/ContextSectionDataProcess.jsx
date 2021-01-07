import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";

function ProcessIcon() {
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
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  );
}
function ContextSectionDataProcess({ schema }) {
  let completeness = 0;
  const entries = [
    schema?.processedData?.processDescriber,
    schema?.processedData?.processOverview,
    schema?.processedData?.droppedFields,
    schema?.processedData?.addedFields,
    schema?.processedData?.processStepsZ
  ];
  if (entries.filter(x => x).length >= 0) {
    completeness = 1;
  }
  if (entries.filter(x => x).length === entries.length) {
    completeness = 2;
  }

  return (
    <ContextSectionWrapper
      title="Process"
      Icon={ProcessIcon}
      color="gray"
      completeness={completeness}
      cta
    >
      <div className="p-4 text-sm">
        <div>
          <span className="font-semibold">Contributors: </span>
          {schema?.processedData?.processDescriber}
        </div>
        <div>{schema?.processedData?.processOverview}</div>
      </div>
      <div className="m-0 w-full font-mono text-xs bg-gray-100">
        <div className="inline-block ml-0 mt-0 px-2 text-white text-sm font-semibold bg-gray-800 rounded-br shadow-sm uppercase">
          Field changes
        </div>
        <div className="p-4">
          <div className="text-red-800">
            {schema?.processedData?.droppedFields}
          </div>
          <div className="text-green-800">
            {schema?.processedData?.addedFields}
          </div>
        </div>
      </div>
      <div className="px-4 py-4 text-sm">
        <h3 className="text-lg font-bold">Process Steps</h3>
        <ol>
          {schema?.processedData?.processSteps?.map(step => (
            <li
              key={step.stepNumber}
              className="mt-4 p-2 rounded-lg shadow-md bg-indigo-50"
            >
              <div className="grid grid-cols-12">
                <div className="col-span-1 font-mono text-2xl">
                  {step?.stepNumber}
                </div>
                <div className="col-span-11">
                  <span className="font-semibold text-md">{step.action}</span>
                  <p className="italic">{step.stepWho}</p>
                  <p className="mb-2">{step.stepExplanation}</p>
                  <p className="text-xs">Resources used:</p>
                  {step?.relatedResources?.map(resource => (
                    <div
                      key={`${step?.stepNumber}${resource}`}
                      className="inline-block mr-2 p-0.5 text-white text-xs rounded bg-indigo-800"
                    >
                      {resource}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </ContextSectionWrapper>
  );
}

ContextSectionDataProcess.propTypes = contextSchemaPropTypes;

export default ContextSectionDataProcess;
