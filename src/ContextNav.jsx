import { startCase, toLower } from "lodash";
import { arrayOf, string } from "prop-types";
import React from "react";

import CivicLogo from "../public/CIVIC_LOGO.svg";

function ContextNav({ sections }) {
  return (
    <section
      id="nav"
      className="mx-auto sticky bg-gray-50 border-gray-300 border-2 top-0 left-0 z-50"
    >
      <div className="p-1 flex flex-row lg:flex-col lg:absolute lg:m-4 text-gray-600 text-sm w-min-content overflow-x-scroll">
        <img
          src={CivicLogo}
          className="w-7 m-2 block lg:hidden"
          alt="CIVIC Logo"
        />
        <div className="flex flex-col">
          <img
            src={CivicLogo}
            className="w-7 m-2 hidden lg:block"
            alt="CIVIC Logo"
          />
          <div className="mx-2 lg:text-md lg:font-bold text-black ">
            Structured
          </div>
          <div className="mx-2 lg:text-md lg:font-bold text-black ">
            Context
          </div>
          <div className="mx-2 lg:text-md lg:font-bold text-black ">Schema</div>
        </div>
        <a
          href="/library"
          className="m-2 text-cobalt hover:underline text-xs hidden lg:block w-36"
        >
          &#x3c; Back to Library Directory
        </a>
        {sections?.map(section => (
          <a href={`#${section}`} className="m-2 underline">
            {startCase(toLower(section))}
          </a>
        ))}
        <a
          href="/blueprint"
          className="m-2 text-cobalt hover:underline text-xs hidden lg:block w-36"
        >
          Learn more about context-aware systems
        </a>
      </div>
    </section>
  );
}

ContextNav.propTypes = {
  sections: arrayOf(string)
};

export default ContextNav;
