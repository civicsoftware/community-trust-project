import React from "react";
import { gql, useQuery } from "@apollo/client";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";

const CTA = gql`
  query CallToAction($callToAction: String!) {
    callToAction(id: $callToAction) {
      description {
        json
      }
      buttonText
      buttonSubText
      emailRecipients
      emailSubject
      emailBody
      formUrl
    }
  }
`;

const sampleReferences = [
  {
    title: "Resource name",
    notes: "Notes about this resource",
    stableURI: "https://www.youtube.com/watch?v=gJ5hbJsN7Hc"
  }
];

const sampleServiceProviders = [
  {
    serviceProvider: "Service provider name",
    address: "Address, City, Region, Country",
    servicesProvided: "List of services",
    startDate: "Start date",
    endDate: "end date"
  }
];

function BookIcon() {
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
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function ContextSectionResources({ schema }) {
  const { loading, error, data } = useQuery(CTA, {
    variables: { callToAction: "2iZpayYpfqEU4My4uAPooT" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const callToAction = data?.callToAction;

  const references = schema?.referenceDocumentation || sampleReferences;
  const serviceProviders =
    schema?.other?.serviceProviders || sampleServiceProviders;

  return (
    <ContextSectionWrapper
      title="Resources"
      Icon={BookIcon}
      color="purple"
      callToAction={callToAction}
      narrow
      expandable
    >
      <div className="px-8 py-4">
        <h3 className="text-lg font-bold">Resources</h3>
        <div className="">
          <ul className="">
            {references?.map(resource => (
              <li
                key={resource.title}
                className="mt-4 font-sans prose prose-sm"
              >
                <a className="underline font-medium" href={resource.stableURI}>
                  {resource?.title}
                </a>
                <p className="">{resource?.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-lg font-bold">Service Providers</h3>
        <ul className="">
          {serviceProviders?.map(provider => (
            <li
              key={provider?.serviceProvider}
              className="mt-2 font-sans prose prose-sm"
            >
              <a className="underline font-medium" href={provider?.website}>
                {provider?.serviceProvider}
              </a>
              <p className="">{provider?.address}</p>
              <p className="">{provider?.servicesProvided}</p>
              <p className="">
                <span
                  className={`inline-block mr-2 p-0.5  rounded ${
                    provider?.contractWithMultCo === "Active"
                      ? "bg-indigo-800 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {provider?.contractWithMultCo}
                </span>
                {provider?.startDate} - {provider?.endDate}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ContextSectionWrapper>
  );
}

ContextSectionResources.propTypes = contextSchemaPropTypes;

export default ContextSectionResources;
