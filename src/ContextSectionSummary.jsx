import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextWhoInvestigated from "./ContextWhoInvestigated";

function ContextNav({
  schema,
  summary,
  successes,
  challenges,
  sandtraps,
  logo
}) {
  return (
    <section
      id="summary"
      className="relative m-4 border-gray-300 border-2 rounded-lg shadow-xl"
    >
      <div className="p-4 bg-gradient-to-l from-purple-600 to-purple-900 text-gray-200 rounded-t-lg">
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <h2 className="text-2xl font-bold tracking-wider text-white">
              {schema?.title}
            </h2>
            {/* <h3 className="text-sm">Type: {dataset.dataType}</h3> */}
            <div>
              <div className="inline-block p-1 ml-4 -mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block align-text-bottom"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="inline text-sm font-semibold">
                {schema?.subComponentOf}
              </h3>
            </div>
            <div>
              <div className="inline-block p-1 -mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block align-text-bottom"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="inline text-xs">
                {schema?.officialMaintenance?.officialMaintainer}
              </h3>
            </div>
            <div>
              <div className="inline-block p-1 -mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block align-text-bottom"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="inline text-xs">{schema?.dateRange}</h3>
              <div className="inline-block p-1 ml-4 -mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block align-text-bottom"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="inline text-xs">Multnomah County, Oregon, US</h3>
            </div>
            <div className="absolute right-4 top-4 items-center">
              <img
                src={logo?.url}
                alt={logo?.description}
                height={logo?.height}
                width={logo?.width}
                className="w-36"
              />
              <div className="flex h-full w-full items-center mt-2">
                <a
                  href="#TODO"
                  className="flex p-1 uppercase text-center bg-white text-purple-900 rounded text-sm font-semibold border-4 border-purple-300 hover:bg-purple-50 hover:border-purple-400 hover:shadow-2xl"
                >
                  <h2>Contact Org</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 prose-md">
        <h3 className="text-xl font-bold">What is it?</h3>
        {summary?.json ? (
          documentToReactComponents(summary?.json)
        ) : (
          <p>TODO: convert summary to Contentful</p>
        )}
      </div>
      <div className="px-4 mb-4 text-sm">
        <div className="bg-yellow-50 rounded box-content p-4">
          <ul className="font-medium prose-sm">
            {sandtraps?.json ? (
              documentToReactComponents(sandtraps?.json)
            ) : (
              <p>TODO: Convert to contentful</p>
            )}
            {/* {schema?.sandtraps?.map(sandtrap => (
              <li key={sandtrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 mr-1 inline-block align-text-bottom"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {sandtrap}
              </li>
            ))} */}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="prose-sm">
            <h3 className="text-lg font-bold">Successes</h3>
            {successes?.json ? (
              documentToReactComponents(successes?.json)
            ) : (
              <p>TODO: Convert to contentful</p>
            )}
          </div>
          <div className="prose-sm">
            <h3 className="text-lg font-bold">Challenges</h3>
            {challenges?.json ? (
              documentToReactComponents(challenges?.json)
            ) : (
              <p>TODO: Convert to contentful</p>
            )}
          </div>
        </div>
        {/* <div className="mt-4 bg-pink-50 rounded box-content p-4">
              <h3 className="text-lg font-bold">Missing information</h3>
              <ul>
                <li className="mt-2 grid grid-cols-12">
                  <div className="text-md font-bold col-span-2 border-r-4">
                    Stewardship
                  </div>
                  <div className="col-span-10 pl-2">
                    {dataset.missingInformation.gapsInStewardship}
                  </div>
                </li>
                <li className="mt-2 grid grid-cols-12">
                  <div className="text-md font-bold col-span-2 border-r-4">
                    Information
                  </div>
                  <div className="col-span-10 pl-2">
                    {dataset.missingInformation.gapsInInformation}
                  </div>
                </li>
                <li className="mt-2 grid grid-cols-12">
                  <div className="text-md font-bold col-span-2 border-r-4">
                    Classification
                  </div>
                  <div className="col-span-10 pl-2">
                    {
                      dataset.missingInformation
                        .gapsInClassificationRaceEthnicity
                    }
                  </div>
                </li>
              </ul>
            </div> */}
        <h3 className="text-lg font-bold mt-4">
          {schema?.other?.definitions && "Definitions"}
        </h3>
        <dl>
          {schema?.other?.definitions?.map(definition => (
            <div key={definition.term} className="mt-2 grid grid-cols-12">
              <dt className="text-md font-bold col-span-2 border-r-4">
                {definition.term}
              </dt>
              <dd className="col-span-10 pl-2">
                {definition.definition}{" "}
                <p className="text-xs italic">({definition.source})</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-2 bg-purple-900 text-white">
        <div className="p-4 text-xs">
          <h3 className="text-lg font-bold tracking-wide">Data Details</h3>
          {/* TODO Dynamic indicator */}
          <ContextWhoInvestigated
            className="-ml-0 mb-4"
            color="purple"
            completeness="1"
          />
          <div className=" font-bold">{schema?.rawData?.rawTitle}</div>
          <div className="">
            <span className="font-semibold">Date Range: </span>
            {schema?.rawData?.dateRangeStart} - {schema?.rawData?.dataRangeEnd}
          </div>
          <div className="">
            <span className="font-semibold">Data Type: </span>
            {schema?.dataType}
          </div>
          <div className="">
            <span className="font-semibold">Language: </span>
            {schema?.rawData?.lang || "Unknown"}
          </div>
          <div className="">
            <span className="font-semibold">URI: </span>
            <a href="#TODO" className=" font-medium underline">
              {schema?.rawData?.rawStableURI}
            </a>
          </div>
          <div className="mt-4 ">{schema?.rawData?.notes}</div>
        </div>
        <div className="p-4 text-xs">
          <h3 className="text-lg font-bold tracking-wide">Maintenance</h3>
          {/* TODO Dynamic indicator */}
          <ContextWhoInvestigated
            className="-ml-0 mb-4"
            color="purple"
            completeness="1"
          />
          <div className="font-bold">
            {schema?.officialMaintenance?.officialMaintainer}
          </div>
          <div className="">
            <span className="font-semibold">Contributors: </span>
            {schema?.officialMaintenance?.dataContributor}
          </div>
          <div className="">
            <span className="font-semibold">Last updated: </span>
            {schema?.officialMaintenance?.lastOfficialMaintainence || "Unknown"}
          </div>
          <div className="">
            <span className="font-semibold">Update frequency: </span>
            {schema?.officialMaintenance?.maintenanceInterval}
          </div>
          <div className="mt-4 ">
            {schema?.officialMaintenance?.typicalUpdates}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-purple-50 rounded box-content p-4 text-sm">
        <div className="">
          <span className="font-semibold">Included in : </span>
          {schema?.includedIn}
        </div>
        <div className="">
          <span className="font-semibold">Related to: </span>
          {schema?.relatedTo}
        </div>
      </div>
    </section>
  );
}

ContextNav.propTypes = contextSchemaPropTypes;

export default ContextNav;
