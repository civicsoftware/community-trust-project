/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import CompassSvg from "../public/CIVIC_COMPASS.svg";

function Compass() {
  return (
    <div className="m-12 mt-20 mb-36 max-w-4xl mx-auto px-12">
      <div className="flex items-center text-gray-900 mb-4">
        <svg
          className="h-6 w-6 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
        <h2 className="text-2xl font-semibold">Compass of Oppression</h2>
      </div>
      <p className="block">
        The Compass of Oppression (CoO) serves as a visual and interactive
        glossary of an Intersectional Feminist framework that will help us make
        sure that we are on the same page when we are referring to terms such as
        oppression, inequity, justice, racial inequity etc.
      </p>
      {/* TODO: definition card here */}
      <p className="block mt-6">
        FYI, here’s (link to a card that defines this) the definition for Global
        Systems of Domination. This compass is a tool to explain the framework
        from a narrative-focused perspective. It enables us to tell the stories
        of our partners. Read these{" "}
        <span className="font-semibold text-teal">
          <a href="/avatars">stakeholder stories</a>
        </span>{" "}
        that were inspired by the CoO.
      </p>
      <div className="mt-6 font-semibold flex flex-row">
        <Link to="/blueprint">
          <Windmill.Button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
            Read More in the Blueprint
          </Windmill.Button>
        </Link>
      </div>
      <object
        data={CompassSvg}
        type="image/svg+xml"
        className="mt-10"
        aria-label="Compass of Oppression"
      />

      {/* <div className="mt-8 font-semibold flex flex-row">
        <p className="pt-2">Navigate the Compass of Oppression:</p>
        <Link to="/compass">
          <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
            Click here
          </Windmill.Button>
        </Link>
      </div> */}
    </div>
  );
}

export default Compass;
