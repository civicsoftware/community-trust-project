import React from "react";
import { bool, node, oneOf, shape, string } from "prop-types";
import { kebabCase } from "lodash";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContextWhoInvestigated from "./ContextWhoInvestigated";
import Collapsable from "./Collapsable";

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
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  );
}

// TODO: Don't dynamically generate class names so purge works properly
// eslint-disable-next-line no-unused-vars
const gray = "border-gray-200, bg-gray-200 bg-gray-100 border-gray-900";
// eslint-disable-next-line no-unused-vars
const purple =
  "border-purple-200, bg-purple-200 bg-purple-100 border-purple-900";

function ContextSectionWrapper({
  title,
  completeness,
  cta,
  children,
  color,
  description,
  Icon
}) {
  return (
    <section id={kebabCase(title)} className="grid scroll-mt-14">
      <div
        className={`relative m-4 rounded-lg border-2 shadow-xl border-${color}-200`}
      >
        <div className={`relative p-4 rounded-t-lg  bg-${color}-200`}>
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
        <div className={`p-4 w-full bg-${color}-200`}>
          {documentToReactComponents(description?.json)}
        </div>
        <Collapsable
          description="section detail"
          hideText
          iconClassName="h-6 w-6"
          buttonClassName="absolute right-2 bottom-2"
        >
          <Collapsable.Section hidden> {children}</Collapsable.Section>
        </Collapsable>
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
  description: shape({
    json: shape({
      /* contentful rich text json */
    })
  }),
  Icon: node
};

ContextSectionWrapper.defaultProps = {
  color: "gray",
  Icon: DefaultIcon
};

export default ContextSectionWrapper;
