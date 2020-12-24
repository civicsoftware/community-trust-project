import React from "react";
import { useLocation } from "react-router-dom";
import { arrayOf, shape, string } from "prop-types";
import EarlyPrototype from "./ContextComponents/EarlyPrototype";
import runaway from "./contextRunaway";
import mentalHealth from "./contextMentalHealth";

const ALL_DATASETS = {
  runaway,
  mentalHealth
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ContextPage() {
  const query = useQuery();
  const dataset = ALL_DATASETS?.[query.get("data")];

  return <Context dataset={dataset} />;
}

function Context({ dataset }) {
  if (!dataset) return <div>No data</div>;

  return (
    <>
      <EarlyPrototype />
      <section
        id="nav"
        className="m-4 p-4 fixed w-36 bg-gray-50 border-gray-300 border-2 rounded-lg shadow-xl"
      >
        <div className="p-2 flex flex-col justify-center text-gray-600 text-sm underline w-min-content">
          <a href="#summary" className="">
            Summary
          </a>
          <a href="#maintenance" className="mt-2">
            Maintenance
          </a>
          <a href="#rawData" className="mt-2">
            Raw Data
          </a>
          <a href="#process" className="mt-2">
            Data Process
          </a>
          <a href="#context" className="mt-2">
            Context
          </a>
          <a href="#resources" className="mt-2">
            Resources
          </a>
          <a href="#attribution" className="mt-2">
            Attribution
          </a>
        </div>
      </section>
      <div className="max-w-4xl mx-auto">
        <section
          id="summary"
          className="relative m-4 border-gray-300 border-2 rounded-lg shadow-xl"
        >
          <div className="absolute bottom-4 right-4">
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
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
          <div className="p-4 text-sm">
            <h3 className="text-xl font-bold">Summary</h3>
            <p>{dataset.summary}</p>
          </div>
          <div className="px-4 mb-4 text-sm">
            <div className="bg-yellow-50 rounded box-content p-4">
              <p className="font-medium">
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
                {dataset.sandtraps}
              </p>
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
            <div className="mt-4 bg-pink-50 rounded box-content p-4">
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
            </div>
            <h3 className="text-lg font-bold mt-4">Definitions</h3>
            <dl>
              {dataset?.other.definitions.map(definition => (
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
        <div className="grid grid-cols-2">
          <section
            id="maintenance"
            className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl"
          >
            <div className="absolute bottom-4 right-4">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div className="bg-blue-200 p-4 rounded-t-lg">
              <div className="inline-block p-1 border-2 rounded-full bg-blue-100 border-blue-900">
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
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h2 className="inline-block ml-2 text-xl font-bold">
                Maintenance
              </h2>
            </div>
            <div className="p-4">
              <div className="text-sm font-bold text-purple-800">
                {dataset.officialMaintenance.officialMaintainer}
              </div>
              <div className="text-sm">
                <span className="font-semibold">Contributors: </span>
                {dataset.officialMaintenance.dataContributor}
              </div>
              <div className="mt-4 text-sm">
                <span className="font-semibold">Last updated: </span>
                {dataset.officialMaintenance?.lastOfficialMaintainence ||
                  "Unknown"}
              </div>
              <div className="text-sm">
                <span className="font-semibold">Update frequency: </span>
                {dataset.officialMaintenance.maintenanceInterval}
              </div>
              <div className="mt-4 text-sm">
                {dataset.officialMaintenance.typicalUpdates}
              </div>
            </div>
          </section>
          <section
            id="rawData"
            className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl"
          >
            <div className="absolute bottom-4 right-4">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
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
                {dataset.rawData.rawTitle}
              </div>
              <div className="text-sm">
                <span className="font-semibold">URI: </span>
                <a href="#TODO" className="text-sm font-medium underline">
                  {dataset.rawData.rawStableURI}
                </a>
              </div>
              <div className="text-sm">
                <span className="font-semibold">Date Range: </span>
                {dataset.rawData.dateRangeStart} -{" "}
                {dataset.rawData.dataRangeEnd}
              </div>
              <div className="text-sm">
                <span className="font-semibold">Language: </span>
                {dataset.rawData.lang}
              </div>
              <div className="mt-4 text-sm">{dataset.rawData.notes}</div>
            </div>
          </section>
        </div>
        <section id="process" className="grid">
          <div className="m-4 border-gray-200 rounded-lg border-2 shadow-xl">
            <div className="bg-indigo-200 p-4 rounded-t-lg">
              <div className="inline-block p-1 border-2 rounded-full bg-indigo-100 border-indigo-900">
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
              </div>
              <h2 className="inline-block ml-2 text-xl font-bold">
                Data Process
              </h2>
            </div>
            <div className="p-4 text-sm">
              <div>
                <span className="font-semibold">Contributors: </span>
                {dataset.processedData.processDescriber}
              </div>
              <div>{dataset.processedData.processOverview}</div>
            </div>
            <div className="m-0 bg-gray-100 w-full font-mono text-xs">
              <div className="inline-block ml-0 mt-0 px-2 uppercase bg-gray-800 text-white font-semibold rounded-br shadow-sm text-sm">
                Field changes
              </div>
              <div className="p-4">
                <div className="text-red-800">
                  {dataset.processedData.droppedFields}
                </div>
                <div className="text-green-800">
                  {dataset.processedData.addedFields}
                </div>
              </div>
            </div>
            <div className="py-4 px-4 text-sm">
              <h3 className="text-lg font-bold">Process Steps</h3>
              <ol>
                {dataset.processedData.processSteps.map(step => (
                  <li
                    key={step.stepNumber}
                    className="mt-4 bg-indigo-50 rounded-lg p-2 shadow-md"
                  >
                    <div className="grid grid-cols-12">
                      <div className="col-span-1 font-mono text-2xl">
                        {step.stepNumber}
                      </div>
                      <div className="col-span-11">
                        <span className="text-md font-semibold">
                          {step.action}
                        </span>
                        <p className="italic">{step.stepWho}</p>
                        <p className="mb-2">{step.stepExplanation}</p>
                        <p className="text-xs">Resources used:</p>
                        {step.relatedResources.map(resource => (
                          <div
                            key={`${step.stepNumber}${resource}`}
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
          </div>
        </section>
        <section id="context" className="grid">
          <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
            <div className="absolute bottom-4 right-4">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div className="bg-pink-200 p-4 rounded-t-lg">
              <div className="inline-block p-1 border-2 rounded-full bg-pink-100 border-pink-900">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="inline-block ml-2 text-xl font-bold">Context</h2>
            </div>
            <div className="p-4 text-sm">
              <h3 className="text-lg font-bold">Influence</h3>
              <ul>
                {dataset.contextQuestions[0].Influence.map(question => (
                  <li key={question.question} className="mt-2 p-2 bg-pink-50">
                    <p className="text-md font-medium">{question.question}</p>
                    <p className="text-md mb-2 hidden">
                      An answer will go here
                    </p>
                    {question.contextualLayer.map(layer => (
                      <div
                        key={`${question.question}${layer}`}
                        className="hidden inline-block mr-2 p-0.5 bg-pink-800 text-white text-xs rounded"
                      >
                        {layer}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-bold">Accountability</h3>
              <ul>
                {dataset.contextQuestions[0].Accountability.map(question => (
                  <li key={question.question} className="mt-2 p-2 bg-pink-50">
                    <p className="text-md font-medium">{question.question}</p>
                    <p className="text-md mb-2 hidden">
                      An answer will go here
                    </p>
                    {question.contextualLayer.map(layer => (
                      <div
                        key={`${question.question}${layer}`}
                        className="hidden inline-block mr-2 p-0.5 bg-pink-800 text-white text-xs rounded"
                      >
                        {layer}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-bold">Representation</h3>
              <ul>
                {dataset.contextQuestions[0].Representation.map(question => (
                  <li key={question.question} className="mt-2 p-2 bg-pink-50">
                    <p className="text-md font-medium">{question.question}</p>
                    <p className="text-md mb-2 hidden">
                      An answer will go here
                    </p>
                    {question.contextualLayer.map(layer => (
                      <div
                        key={`${question.question}${layer}`}
                        className="hidden inline-block mr-2 p-0.5 bg-pink-800 text-white text-xs rounded"
                      >
                        {layer}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-bold">Impact</h3>
              <ul>
                {dataset.contextQuestions[0].Impact.map(question => (
                  <li key={question.question} className="mt-2 p-2 bg-pink-50">
                    <p className="text-md font-medium">{question.question}</p>
                    <p className="text-md mb-2 hidden">
                      An answer will go here
                    </p>
                    {question.contextualLayer.map(layer => (
                      <div
                        key={`${question.question}${layer}`}
                        className="hidden inline-block mr-2 p-0.5 bg-pink-800 text-white text-xs rounded"
                      >
                        {layer}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="resources" className="grid">
          <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
            <div className="absolute bottom-4 right-4">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div className="bg-green-200 p-4 rounded-t-lg">
              <div className="inline-block p-1 border-2 rounded-full bg-green-100 border-green-900">
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
              <h2 className="inline-block ml-2 text-xl font-bold">Resources</h2>
            </div>
            <div className="mt-4 p-4 text-sm">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="">
                {dataset.referenceDocumentation.map(resource => (
                  <li key={resource.title} className="mt-2">
                    <a
                      className="font-medium underline"
                      href={resource.stableURI}
                    >
                      {resource.title}
                    </a>
                    <p className="">{resource.notes}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 text-sm">
              <h3 className="text-lg font-bold">Service Providers</h3>
              <ul className="">
                {dataset?.other.serviceProviders.map(provider => (
                  <li key={provider.serviceProvider} className="mt-2">
                    <a
                      className="font-medium underline"
                      href={provider.website}
                    >
                      {provider.serviceProvider}
                    </a>
                    <p className="text-xs">{provider.address}</p>
                    <p className="">{provider.servicesProvided}</p>
                    <p className="text-xs">
                      <span
                        className={`inline-block mr-2 p-0.5 text-xs rounded ${
                          provider.contractWithMultCo === "Active"
                            ? "bg-indigo-800 text-white"
                            : "bg-gray-300"
                        }`}
                      >
                        {provider.contractWithMultCo}
                      </span>
                      {provider.startDate} - {provider.endDate}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="attribution" className="grid">
          <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
            <div className="absolute bottom-4 right-4">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
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
              <h2 className="inline-block ml-2 text-xl font-bold">
                Attribution
              </h2>
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
      </div>
    </>
  );
}

const question = shape({
  id: string.isRequired,
  question: string.isRequired,
  contextualLayer: arrayOf(string.isRequired)
});

Context.propTypes = {
  dataset: shape({
    title: string.isRequired,
    subComponentOf: string.isRequired,
    officialMaintenance: shape({
      officialMaintainer: string.isRequired,
      dataContributor: string.isRequired,
      lastOfficialMaintainence: string,
      maintenanceInterval: string.isRequired,
      typicalUpdates: string.isRequired
    }),
    dateRange: string.isRequired,
    summary: string.isRequired,
    sandtraps: string.isRequired,
    successes: string.isRequired,
    challenges: string.isRequired,
    missingInformation: shape({
      gapsInStewardship: string.isRequired,
      gapsInInformation: string.isRequired,
      gapsInClassificationRaceEthnicity: string.isRequired
    }),
    rawData: shape({
      rawTitle: string.isRequired,
      rawStableURI: string.isRequired,
      dateRangeStart: string.isRequired,
      dataRangeEnd: string.isRequired,
      lang: string.isRequired,
      notes: string.isRequired
    }),
    processedData: shape({
      processDescriber: string.isRequired,
      processOverview: string.isRequired,
      droppedFields: string.isRequired,
      addedFields: string.isRequired,
      processSteps: arrayOf(
        shape({
          stepNumber: string.isRequired,
          action: string.isRequired,
          stepWho: string.isRequired,
          stepExplanation: string.isRequired,
          relatedResources: arrayOf(string).isRequired
        })
      ).isRequired
    }),
    // TODO: should be object, not array
    contextQuestions: arrayOf(
      shape({
        Uncategorized: arrayOf(question),
        Influence: arrayOf(question),
        Accountability: arrayOf(question),
        Representation: arrayOf(question),
        Impact: arrayOf(question),
        Access: arrayOf(question)
      })
    ),
    referenceDocumentation: arrayOf(
      shape({
        stableURI: string.isRequired,
        title: string.isRequired,
        notes: string.isRequired
      })
    ),
    other: shape({
      serviceProviders: arrayOf(
        shape({
          website: string,
          serviceProvider: string,
          address: string,
          contractWithMultCo: string,
          startDate: string,
          endDate: string
        })
      ).isRequired,
      definitions: arrayOf(
        shape({
          term: string.isRequired,
          definition: string.isRequired,
          source: string.isRequired
        })
      ).isRequired
    }),
    context: shape({
      contextContributor: string,
      onBehalfOf: string,
      contextPublicationDate: string,
      contextUpdateDate: string,
      contextUpdateBy: string
    })
  })
};

export default ContextPage;
