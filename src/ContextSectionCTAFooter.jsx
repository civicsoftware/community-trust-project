import React from "react";
import { default as Windmill } from "@windmill/react-ui";
import { bool, string } from "prop-types";

function ContextSectionCTAFooter({ cta, buttonText, className, narrow }) {
  return (
    <div
      className={`grid grid-cols-12 px-4 py-2 rounded-b-lg  bg-gray-200 ${className}`}
    >
      <p
        className={`col-span-12 mb-10 md:mb-0 ${
          narrow ? "md:mb-10" : "md:col-span-10"
        }`}
      >
        {cta}
      </p>
      <div
        className={`md:col-span-12 md:ml-auto absolute right-2 bottom-2 ${
          narrow ? "" : "md:col-span-2"
        }`}
      >
        <Windmill.Button>
          <p className="text-md font-semibold capitalize">{buttonText}</p>
        </Windmill.Button>
      </div>
    </div>
  );
}

ContextSectionCTAFooter.propTypes = {
  cta: string,
  buttonText: string,
  className: string,
  narrow: bool
};

ContextSectionCTAFooter.defaultProps = {
  cta:
    "This is where a call to action would go. This is a placeholder for now but the text would be about this log. Do the thing!",
  buttonText: "Contribute"
};

export default ContextSectionCTAFooter;
