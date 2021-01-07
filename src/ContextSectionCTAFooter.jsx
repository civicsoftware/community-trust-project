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
    <div className={`px-4 py-2 text-black bg-${color}-100 ${className}`}>
      <div
        className={`prose prose-sm max-w-none mb-16 text-black ${
          narrow ? "" : "md:mb-6"
        }`}
      >
        {description && documentToReactComponents(description)}
      </div>

      {buttonSubText && (
        <p className="absolute bottom-2 left-4 w-1/2 text-sm">
          {buttonSubText}
        </p>
      )}
      {buttonText && (
        <div className="absolute bottom-2 right-2 md:col-span-12 md:ml-auto">
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
