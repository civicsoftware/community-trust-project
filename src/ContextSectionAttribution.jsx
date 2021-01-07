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

function BookmarkIcon() {
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
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

function ContextSectionAttribution({ schema }) {
  const { loading, error, data } = useQuery(CTA, {
    variables: { callToAction: "6KawAQtep2kOxmcxs29MlR" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const callToAction = data?.callToAction;

  return (
    <ContextSectionWrapper
      title="Attribution"
      Icon={BookmarkIcon}
      color="purple"
      callToAction={callToAction}
      narrow
      expandable
    >
      <div className="mt-4 p-4 text-sm">
        <div className="text-sm">
          <span className="font-semibold">Context contributors: </span>
          {schema?.context?.contextContributor || "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">On behalf of: </span>
          {schema?.context?.onBehalfOf || "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Publication date: </span>
          {schema?.context?.contextPublicationDate || "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Update date: </span>
          {schema?.context?.contextUpdateDate || "Needs Input"}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Updated by: </span>
          {schema?.context?.contextUpdateBy || "Needs Input"}
        </div>
      </div>
    </ContextSectionWrapper>
  );
}

ContextSectionAttribution.propTypes = contextSchemaPropTypes;

export default ContextSectionAttribution;
