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
    <div className={`px-4 py-2 text-white bg-${color}-900 ${className}`}>
      <div
        className={`prose prose-sm max-w-none mb-16 text-white ${
          narrow ? "" : "md:mb-6"
        }`}
      >
        {description && documentToReactComponents(description)}
      </div>

      {buttonSubText && (
        <p className="absolute left-4 bottom-2 text-sm w-1/2">
          {buttonSubText}
        </p>
      )}
      {buttonText && (
        <div className="md:col-span-12 md:ml-auto absolute right-2 bottom-2">
          {emailRecipients && (
            <Windmill.Button tag="a" href={mailTo}>
              <p className="text-md font-semibold capitalize">{buttonText}</p>
            </Windmill.Button>
          )}
          {formUrl && (
            <Windmill.Button tag="a" href={formUrl}>
              <p className="text-md font-semibold capitalize">{buttonText}</p>
            </Windmill.Button>
          )}
        </div>
      )}
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
