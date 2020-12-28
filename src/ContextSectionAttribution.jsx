import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

function ContextSectionAttribution({ dataset }) {
  return (
    <section id="attribution" className="grid">
      <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
        <div className="bg-purple-200 p-4 rounded-t-lg">
          <div className="inline-block p-1 border-2 rounded-full bg-purple-100 border-purple-900">
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
          </div>
          <h2 className="inline-block ml-2 text-xl font-bold">Attribution</h2>
        </div>
        <div className="mt-4 p-4 text-sm">
          <div className="text-sm">
            <span className="font-semibold">Context contributors: </span>
            {dataset.context.contextContributor}
          </div>
          <div className="text-sm">
            <span className="font-semibold">On behalf of: </span>
            {dataset.context.onBehalfOf}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Publication date: </span>
            {dataset.context.contextPublicationDate}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Update date: </span>
            {dataset.context.contextUpdateDate}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Updated by: </span>
            {dataset.context.contextUpdateBy}
          </div>
        </div>
      </div>
    </section>
  );
}

ContextSectionAttribution.propTypes = contextSchemaPropTypes;

export default ContextSectionAttribution;
