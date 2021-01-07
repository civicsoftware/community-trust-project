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
      className="h-6 w-6 inline-block align-text-bottom"
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
      <div className="m-0 bg-gray-100 w-full font-mono text-xs">
        <div className="inline-block ml-0 mt-0 px-2 uppercase bg-gray-800 text-white font-semibold rounded-br shadow-sm text-sm">
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
      <div className="py-4 px-4 text-sm">
        <h3 className="text-lg font-bold">Process Steps</h3>
        <ol>
          {schema?.processedData?.processSteps?.map(step => (
            <li
              key={step.stepNumber}
              className="mt-4 bg-indigo-50 rounded-lg p-2 shadow-md"
            >
              <div className="grid grid-cols-12">
                <div className="col-span-1 font-mono text-2xl">
                  {step?.stepNumber}
                </div>
                <div className="col-span-11">
                  <span className="text-md font-semibold">{step.action}</span>
                  <p className="italic">{step.stepWho}</p>
                  <p className="mb-2">{step.stepExplanation}</p>
                  <p className="text-xs">Resources used:</p>
                  {step?.relatedResources?.map(resource => (
                    <div
                      key={`${step?.stepNumber}${resource}`}
                      className="inline-block mr-2 p-0.5 bg-indigo-800 text-white text-xs rounded"
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
