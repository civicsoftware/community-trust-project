/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { gql, useQuery } from "@apollo/client";

const ATTRIBUTION = gql`
  query Attribution($attribution: String!) {
    attribution(id: $attribution) {
      description {
        json
      }
      name
    }
  }
`;

function Attribution() {
  const { loading, error, data } = useQuery(ATTRIBUTION, {
    variables: { attribution: "4vHsxGvYDGOBUY2f38SMvm" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const attribution = data?.attribution;

  return (
    <div className="m-12 mt-20 mb-36 max-w-4xl mx-auto px-12">
      <div className="flex items-center text-gray-900 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h2 className="text-2xl font-semibold">Attribution</h2>
      </div>
      <div className="prose prose-sm">
        {documentToReactComponents(attribution?.description?.json)}
      </div>
      <div className="mt-6 font-semibold flex flex-row">
        <Link to="/blueprint">
          <Windmill.Button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
            Read More in the Blueprint
          </Windmill.Button>
        </Link>
      </div>
    </div>
  );
}

export default Attribution;
