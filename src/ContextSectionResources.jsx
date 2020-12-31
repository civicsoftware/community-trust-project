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

function BookIcon() {
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

  return (
    <ContextSectionWrapper
      title="Resources"
      Icon={BookIcon}
      color="purple"
      callToAction={callToAction}
      narrow
      expandable
    >
      <div className="mt-4 p-4 text-sm">
        <h3 className="text-lg font-bold">Resources</h3>
        <ul className="">
          {schema?.referenceDocumentation?.map(resource => (
            <li key={resource.title} className="mt-2">
              <a className="font-medium underline" href={resource.stableURI}>
                {resource?.title}
              </a>
              <p className="">{resource?.notes}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 text-sm">
        <h3 className="text-lg font-bold">Service Providers</h3>
        <ul className="">
          {schema?.other?.serviceProviders?.map(provider => (
            <li key={provider?.serviceProvider} className="mt-2">
              <a className="font-medium underline" href={provider?.website}>
                {provider?.serviceProvider}
              </a>
              <p className="text-xs">{provider?.address}</p>
              <p className="">{provider?.servicesProvided}</p>
              <p className="text-xs">
                <span
                  className={`inline-block mr-2 p-0.5 text-xs rounded ${
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
