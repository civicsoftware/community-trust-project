import { startCase, toLower } from "lodash";
import { arrayOf, string } from "prop-types";
import React from "react";

import CivicLogo from "../public/CIVIC_LOGO.svg";

function ContextNav({ sections }) {
  return (
    <section
      id="nav"
      className="sticky z-50 left-0 top-0 mx-auto bg-gray-50 border-2 border-gray-300"
    >
      <div className="flex flex-row p-1 text-gray-600 text-sm overflow-x-scroll lg:absolute lg:flex-col lg:m-4 w-min-content">
        <img
          src={CivicLogo}
          className="block m-2 w-7 lg:hidden"
          alt="CIVIC Logo"
        />
        <div className="flex flex-col">
          <img
            src={CivicLogo}
            className="hidden m-2 w-7 lg:block"
            alt="CIVIC Logo"
          />
          <div className="mx-2 text-black lg:font-bold lg:text-md">
            Structured
          </div>
          <div className="mx-2 text-black lg:font-bold lg:text-md">Context</div>
          <div className="mx-2 text-black lg:font-bold lg:text-md">Schema</div>
        </div>
        <a
          href="/library"
          className="hidden m-2 w-36 text-cobalt hover:underline text-xs lg:block"
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
          className="hidden m-2 w-36 text-cobalt hover:underline text-xs lg:block"
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
