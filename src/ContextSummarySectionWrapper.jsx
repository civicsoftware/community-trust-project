import React from "react";
import { node, shape, string } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function DefaultIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="inline-block align-text-bottom w-6 h-6"
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

function ContextSummarySectionWrapper({
  title,
  children,
  color,
  description,
  Icon
}) {
  return (
    <section id="summary" className="grid">
      <div
        className={`relative mx-4 my-8 rounded-lg border-4 shadow-xl border-${color}-200 bg-white`}
      >
        <div className={`px-4 py-2 bg-${color}-200`}>
          <div
            className={`inline-block p-1 border-2  shadow-xl rounded-full text-black bg-${color}-200`}
          >
            <Icon />
          </div>
          <h2 className="inline-block -mt-4 ml-2 text-black text-2xl font-bold capitalize">
            {title}
          </h2>
        </div>
        <div className={`bg-white ${description ? "py-4" : ""}`}>
          <div className="px-4 w-full">
            {documentToReactComponents(description?.json)}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

ContextSummarySectionWrapper.propTypes = {
  title: string,
  children: node,
  color: string,
  description: shape({
    json: shape({
      /* contentful rich text json */
    })
  }),
  Icon: node
};

ContextSummarySectionWrapper.defaultProps = {
  color: "gray",
  Icon: DefaultIcon
};

export default ContextSummarySectionWrapper;
