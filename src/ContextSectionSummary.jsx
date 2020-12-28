import React from "react";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

function ContextNav({ dataset }) {
  return (
    <section
      id="summary"
      className="relative m-4 border-gray-300 border-2 rounded-lg shadow-xl"
    >
      <div className="p-4 bg-gradient-to-l from-purple-600 to-purple-900 text-gray-200 rounded-t-lg">
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <h2 className="text-2xl font-bold tracking-wider text-white">
              {dataset.title}
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
                {dataset.subComponentOf}
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
                {dataset.officialMaintenance.officialMaintainer}
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
              <h3 className="inline text-xs">{dataset.dateRange}</h3>
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
          </div>
          <div className="flex h-full w-full items-center">
            <a
              href="#TODO"
              className="flex p-2 uppercase text-center bg-white text-purple-900 rounded text-md font-semibold border-4 border-purple-300 hover:bg-purple-50 hover:border-purple-400 hover:shadow-2xl"
            >
              <h2>Request Data</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4 mx-8">
        <div className="bg-green-100 text-center rounded-full">✅ Lineage</div>
        <div className="bg-yellow-100 text-center rounded-full">
          ⚠️ Social Justice
        </div>
        <div className="bg-pink-100 text-center rounded-full">
          ❌ Governance
        </div>
      </div>
      <div className="p-4 text-sm">
        <h3 className="text-xl font-bold">What is it?</h3>
        <p>{dataset.summary}</p>
      </div>
      <div className="px-4 mb-4 text-sm">
        <div className="bg-yellow-50 rounded box-content p-4">
          <ul className="font-medium">
            {dataset.sandtraps.map(sandtrap => (
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
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 mt-2">
          <div className="">
            <h3 className="text-lg font-bold">Successes</h3>
            <p className="">{dataset.successes}</p>
          </div>
          <div className="">
            <h3 className="text-lg font-bold">Challenges</h3>
            <p className="">{dataset.challenges}</p>
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
          {dataset?.other?.definitions && "Definitions"}
        </h3>
        <dl>
          {dataset?.other?.definitions?.map(definition => (
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
    </section>
  );
}

ContextNav.propTypes = contextSchemaPropTypes;

export default ContextNav;
