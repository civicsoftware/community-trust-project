import React from "react";
import { bool, node, oneOf, string } from "prop-types";
import { kebabCase } from "lodash";
import ContextWhoInvestigated from "./ContextWhoInvestigated";

function DefaultIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 inline-block align-text-bottom"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

// TODO: Don't dynamically generate class names so purge works properly

function ContextSectionWrapper({
  title,
  completeness,
  cta,
  children,
  color,
  Icon
}) {
  return (
    <section id={kebabCase(title)} className="grid scroll-mt-14">
      <div
        className={`relative m-4 rounded-lg border-2 shadow-xl border-${color}-200`}
      >
        <div className={`relative p-4 rounded-t-lg  bg-${color}-200 `}>
          <div
            className={`inline-block p-1 border-2 rounded-full bg-${color}-100 border-${color}-900 `}
          >
            <Icon />
          </div>
          <h2 className="inline-block -mt-4 ml-2 text-xl font-bold capitalize">
            {title}
          </h2>
          {cta && (
            <div className="absolute inline-block h-full right-4 top-0 items-center">
              <button className="inline-block h-full" type="button">
                <p className="text-md font-semibold capitalize">Contribute</p>
                <p className="text-sm capitalize">Call To Action</p>
              </button>
            </div>
          )}
          <ContextWhoInvestigated completeness={completeness} color={color} />
        </div>
        {children}
      </div>
    </section>
  );
}

ContextSectionWrapper.propTypes = {
  title: string,
  completeness: oneOf([1, 2, 3]),
  cta: bool,
  children: node,
  color: string,
  Icon: node
};

ContextSectionWrapper.defaultProps = {
  color: "gray",
  Icon: DefaultIcon
};

export default ContextSectionWrapper;
