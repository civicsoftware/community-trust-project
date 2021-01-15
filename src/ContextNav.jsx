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
      <div className="flex flex-row items-center mt-4 p-1 text-sm overflow-x-scroll lg:absolute lg:flex-col lg:items-baseline lg:mx-4 w-min-content">
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
          <div className="mx-2 text-black lg:text-lg lg:font-bold">
            Structured
          </div>
          <div className="mx-2 text-black lg:text-lg lg:font-bold">Context</div>
          <div className="mx-2 text-black lg:text-lg lg:font-bold">Schema</div>
        </div>
        {/* <a
          href="/library"
          className="hidden m-2 w-36 text-cobalt hover:underline text-sm lg:block"
        >
          &#x3c; Back to Library Directory
        </a> */}
        {sections?.map(section => (
          <a
            href={`#${section}`}
            className="m-2 w-36 hover:text-gray-500 text-base font-medium"
          >
            {startCase(toLower(section))}
          </a>
        ))}
        <a
          href="/"
          className="hidden m-2 w-36 text-cobalt hover:underline text-sm lg:block"
        >
          Learn how to add your data
        </a>
      </div>
    </section>
  );
}

ContextNav.propTypes = {
  sections: arrayOf(string)
};

export default ContextNav;
