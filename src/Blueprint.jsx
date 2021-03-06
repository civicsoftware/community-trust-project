/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { default as Windmill } from "@windmill/react-ui";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import InfinityLoop from "../public/INFINITY_LOOP.jpg";

const ATTRIBUTION = gql`
  query Attribution($attribution: String!) {
    attribution(id: $attribution) {
      description {
        json
      }
      name
    }
    asset(id: "6GsjLrn3K6VuYjRy8FwFIQ") {
      url
    }
  }
`;

function Blueprint() {
  const [overlayShown, setOverlayShown] = useState(false);
  const { loading, error, data } = useQuery(ATTRIBUTION, {
    variables: { attribution: "7K9Gt2OBsG1A4gR6pUstMi" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const attribution = data?.attribution;

  function toggleOverlay() {
    setOverlayShown(!overlayShown);
  }

  return (
    <>
      <Windmill.Modal
        isOpen={overlayShown}
        onClose={() => toggleOverlay()}
        className="mx-40 max-w-full bg-white border-2 border-gray-300 rounded-lg shadow-xl"
      >
        {" "}
        <img
          src={InfinityLoop}
          onClick={() => toggleOverlay()}
          className="w-full"
          alt="Infinity Loop"
        />
      </Windmill.Modal>

      <div className="mb-36 mt-24 mx-auto px-6 max-w-3xl lg:px-12">
        <div className="flex items-center text-gray-900">
          <img
            src={CivicLogo}
            className="mr-3 w-6 lg:w-8"
            alt="Trust Project Logo"
          />
          <h2 className="text-2xl font-semibold lg:text-3xl">
            The CIVIC Blueprint
          </h2>
        </div>
        <h3 className="block text-xl">
          Building Inclusionary Practices for Context-Aware Systems
        </h3>
        <div className="flex justify-center mb-8 mt-4">
          <p className="block mx-auto pt-4 text-xl font-semibold">
            Infinity Loop Collaboration Model{" "}
            <span className="italic font-normal">(Click to enlarge)</span>:
          </p>
        </div>
        <img
          src={InfinityLoop}
          onClick={() => toggleOverlay()}
          className={`mt-10 ${overlayShown ? "" : "cursor-zoom-in"}`}
          alt="Infinity Loop"
        />
        <div className="flex flex-col my-12">
          <article className="font-rubik prose prose-lg">
            {documentToReactComponents(attribution?.description?.json)}
          </article>
        </div>
        <div className="flex flex-row justify-center mb-8 mt-4">
          <a href={data?.asset?.url}>
            <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
              Read the CIVIC Blueprint for Context-Aware Systems
            </Windmill.Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Blueprint;
