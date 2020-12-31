import React from "react";
import { bool, node, number, oneOf, shape, string } from "prop-types";
import { kebabCase } from "lodash";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContextWhoInvestigated from "./ContextWhoInvestigated";
import Collapsable from "./Collapsable";
import ContextSectionCTAFooter from "./ContextSectionCTAFooter";

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
  answered,
  total,
  children,
  color,
  description,
  Icon,
  narrow,
  expandable,
  callToAction
}) {
  return (
    <section id={kebabCase(title)} className="grid scroll-mt-14">
      <div
        className={`relative m-4 rounded-lg border-8 shadow-xl border-${color}-900 bg-white`}
      >
        <div className="px-4 py-2 rounded-t-lg">
          <div
            className={`inline-block p-1 border-2  shadow-xl rounded-full  text-white bg-${color}-900`}
          >
            <Icon className="h-6 w-6 inline-block align-text-bottom" />
          </div>
          <h2 className="inline-block -mt-4 ml-2 text-xl font-bold capitalize">
            {title}
          </h2>
          <ContextWhoInvestigated
            completeness={completeness}
            answered={answered}
            total={total}
            color={color}
          />
        </div>
        <div className={`bg-white ${description ? "py-4" : ""}`}>
          <div className="px-4 w-full">
            {documentToReactComponents(description?.json)}
          </div>
          {expandable && (
            <Collapsable
              description="section detail"
              hideText
              iconClassName="h-6 w-6"
              buttonClassName="absolute right-4 top-4"
            >
              <Collapsable.Section hidden> {children}</Collapsable.Section>
            </Collapsable>
          )}
          {!expandable && children}
        </div>
        {callToAction?.buttonText && (
          <ContextSectionCTAFooter
            className=""
            narrow={narrow}
            callToAction={callToAction}
          />
        )}
      </div>
    </section>
  );
}

ContextSectionWrapper.propTypes = {
  title: string,
  completeness: oneOf([1, 2, 3]),
  answered: number,
  total: number,
  children: node,
  color: string,
  description: shape({
    json: shape({
      /* contentful rich text json */
    })
  }),
  narrow: bool,
  Icon: node,
  expandable: bool,
  callToAction: shape({})
};

ContextSectionWrapper.defaultProps = {
  color: "gray",
  Icon: DefaultIcon
};

export default ContextSectionWrapper;
