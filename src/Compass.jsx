/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import CompassSvg from "../public/CIVIC_COMPASS.svg";

function Compass() {
  return (
    <div className="m-12 mb-36 mt-24 mx-auto px-6 max-w-3xl lg:px-12">
      <div className="flex items-center mb-4 text-gray-900">
        <svg
          className="mr-3 w-7 h-7 lg:w-10 lg:h-10"
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
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Compass of Oppression
        </h2>
      </div>
      <section className="py-12 font-rubik prose prose-lg">
        <p className="block">
          The Compass of Oppression (CoO) serves as a visual representation of
          an Intersectional Feminist framework that orients us to the
          ever-present nature of the Global Systems of Domination.
        </p>
        {/* TODO: definition card here */}
        <p className="block mt-6">
          This compass is a narrative-focused tool built from a perspective that
          enables us to tell the system’s individual stories. Experience these{" "}
          <span className="text-cobalt font-semibold">
            <a href="/avatars">stakeholder stories</a>
          </span>{" "}
          that were inspired by the CoO.
        </p>
        <p>The CoO mimics a functional compass in many ways:</p>
        <ul>
          <li>
            The outer ring, labeled “historical,” represents the continuous
            nature of history and how our understanding of oppressive systems
            evolves throughout time. History is a constant that wraps around the
            “structural, “institutional,” and “individual” constructs of
            oppression, which we see in the inner ring.
          </li>
          <li>
            In the center of the ring, we find the Global Systems of Domination,
            which magnetically holds the CoO together and pulls individuals into
            various identifying and limiting categories.
          </li>
          <li>
            A limitation of the constructions of dominance is that they force
            individual identification when intersectionality is the true
            representation of many individuals, especially oppressed and
            marginalized groups. The color gradients tie in the related concept
            and create a colorful spectrum of intersectionality, representing
            how dynamic identity can be.
          </li>
        </ul>
        <p>
          When these elements combine, we see that the compass guides our
          understanding of people’s lived experiences while pointing towards a
          true north of <em>justice</em>. Without this more profound
          understanding of where we are, it is difficult to know how to navigate
          away from these harmful constructs.
        </p>
      </section>
      <div className="flex flex-row py-6 font-semibold">
        <Link to="/blueprint">
          <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white whitespace-nowrap text-base font-medium border border-transparent rounded-md shadow-sm">
            Read More in the CIVIC Blueprint
          </Windmill.Button>
        </Link>
      </div>
      <object
        data={CompassSvg}
        type="image/svg+xml"
        className="py-12"
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
