import React from "react";
import { default as Windmill } from "@windmill/react-ui";
import { bool, shape, string } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ContextSectionCTAFooter({ callToAction, className, narrow, color }) {
  const description = callToAction?.description.json;
  const buttonText = callToAction?.buttonText;
  const buttonSubText = callToAction?.buttonSubText;
  const emailRecipients = callToAction?.emailRecipients;
  const emailSubject = callToAction?.emailSubject;
  const emailBody = callToAction?.emailBody;
  const formUrl = callToAction?.formUrl;

  const mailTo =
    emailRecipients &&
    `mailto:${emailRecipients.join(", ")}?cc=&bcc=&subject=${
      emailSubject ? encodeURIComponent(emailSubject) : ""
    }&body=${emailBody ? encodeURIComponent(emailBody) : ""}`;
  return (
    <div className={`px-8 py-4 text-black bg-${color}-100 ${className}`}>
      <div
        className={`my-4 max-w-none text-black font-sans lg:mb-20 prose prose-sm ${
          narrow ? "mb-20" : ""
        }`}
      >
        {description && documentToReactComponents(description)}
      </div>

      <div
        className={narrow ? "absolute right-0 bottom-0 w-full px-8 py-4" : ""}
      >
        {buttonSubText && (
          <p
            className={`${
              narrow ? "" : "lg:absolute lg:bottom-4 lg:left-8 lg:w-1/2"
            } prose font-sans prose-sm`}
          >
            {buttonSubText}
          </p>
        )}
        {buttonText && (
          <div
            className={`flex justify-end mt-2 ${
              narrow ? "" : "lg:absolute lg:bottom-4 lg:right-8 lg:my-0"
            }`}
          >
            {emailRecipients && (
              <Windmill.Button tag="a" href={mailTo}>
                <p className="font-semibold capitalize text-md">{buttonText}</p>
              </Windmill.Button>
            )}
            {formUrl && (
              <Windmill.Button tag="a" href={formUrl}>
                <p className="font-semibold capitalize text-md">{buttonText}</p>
              </Windmill.Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

ContextSectionCTAFooter.propTypes = {
  callToAction: shape({}),
  className: string,
  narrow: bool,
  color: string
};

ContextSectionCTAFooter.defaultProps = {
  color: "gray"
};

export default ContextSectionCTAFooter;
