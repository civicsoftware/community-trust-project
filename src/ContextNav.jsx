import { startCase, toLower } from "lodash";
import { arrayOf, string } from "prop-types";
import React from "react";

function ContextNav({ sections }) {
  return (
    <section
      id="nav"
      className="mx-auto sticky bg-gray-50 border-gray-300 border-2 top-0 z-10"
    >
      <div className="p-1 flex flex-row justify-center text-gray-600 text-sm underline w-min-content">
        {sections?.map(section => (
          <a href={`#${section}`} className="m-2">
            {startCase(toLower(section))}
          </a>
        ))}
      </div>
    </section>
  );
}

ContextNav.propTypes = {
  sections: arrayOf(string)
};

export default ContextNav;
