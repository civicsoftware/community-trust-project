/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { default as Windmill } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import InfinityLoop from "../public/INFINITY_LOOP.jpeg";

function Blueprint() {
  const [overlayShown, setOverlayShown] = useState(false);

  function toggleOverlay(e) {
    setOverlayShown(!overlayShown);
  }

  return (
    <>
      <Windmill.Modal
        isOpen={overlayShown}
        onClose={e => toggleOverlay(e)}
        className="max-w-full mx-40 bg-white border-gray-300 border-2 rounded-lg shadow-xl"
      >        <img
          src={InfinityLoop}
          onClick={e => toggleOverlay(encodeURI)}
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
            Community Library of Context
          </h2>
        </div>
        <p className="block">
          The Community Library of Context is a resource that reflects an active
          anti-oppression practice, and a structured process of creating
          metadata context for datasets that can be curated collaboratively and
          shared publicly.
        </p>

        {/* TODO: make this link to the PDF document */}
        <div className="mt-4 mb-8 flex flex-row">
          <Link to="/compass">
            <Windmill.Button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
              Read the CIVIC Blueprint for Context-Aware Systems
            </Windmill.Button>
          </Link>
        </div>
        <p className="pt-2">
          This is a paragraph about the inifinity loop. This is a paragraph
          about the inifinity loop.This is a paragraph about the inifinity
          loop.This is a paragraph about the inifinity loop.This is a paragraph
          about the inifinity loop.
        </p>
        <p className="pt-2">
          Click to view larger:
        </p>

        <img
          src={InfinityLoop}
          onClick={e => toggleOverlay(e, name)}
          className="mt-10"
          alt="Infinity Loop"
        />
      </div>
    </>
  );
}

export default Blueprint;
