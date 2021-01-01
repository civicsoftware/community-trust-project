/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { default as Windmill } from "@windmill/react-ui";
import { Link } from "react-router-dom";
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
        className="max-w-full mx-40 bg-white border-gray-300 border-2 rounded-lg shadow-xl"
      >
        {" "}
        <img
          src={InfinityLoop}
          onClick={() => toggleOverlay()}
          className="w-full"
          alt="Infinity Loop"
        />
      </Windmill.Modal>

      <div className="m-12 mt-20 mb-36 max-w-4xl mx-auto px-12">
        <div className="flex items-center text-gray-900 mb-4">
          <img
            src={CivicLogo}
            className="w-7 pt-1 mr-3"
            alt="Trust Project Logo"
          />
          <h2 className="text-2xl font-semibold">
            Blueprint for Context-Aware Systems
          </h2>
        </div>
        <div className="mt-4 mb-8 flex flex-row justify-center">
          <p className="pt-4 block mx-auto font-bold">
            Infinity Loop Collaboration Model{" "}
            <span className="italic font-normal">(Click to view larger)</span>:
          </p>
        </div>
        <img
          src={InfinityLoop}
          onClick={() => toggleOverlay()}
          className="mt-10"
          alt="Infinity Loop"
        />
        <article className="prose font-rubik mx-auto my-8">
          {documentToReactComponents(attribution?.description?.json)}
        </article>
        {/* TODO: make this link to the PDF document */}
        <div className="mt-4 mb-8 flex flex-row justify-center">
          <Link to="/" target="_blank">
            <Windmill.Button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
              Read the CIVIC Blueprint for Context-Aware Systems
            </Windmill.Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Blueprint;
