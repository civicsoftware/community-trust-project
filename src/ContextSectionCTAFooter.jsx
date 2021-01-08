import React from "react";
import { default as Windmill } from "@windmill/react-ui";
import { shape, string } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ContextSectionCTAFooter({ callToAction, className, color }) {
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
    <div
      className={`h-full flex flex-col items-stretch px-8 py-4 text-black bg-${color}-100 ${className}`}
    >
      <div
        className={`my-4 max-w-none text-black font-sans prose prose-sm
        }`}
      >
        {description && documentToReactComponents(description)}
      </div>

      <div className="flex justify-between mt-auto">
        {buttonSubText && (
          <p className="align-baseline mt-auto pr-2 font-sans prose prose-sm">
            {buttonSubText}
          </p>
        )}
        {buttonText && (
          <div className="flex justify-end ml-auto">
            {emailRecipients && (
              <Windmill.Button tag="a" href={mailTo}>
                <p className="text-center font-semibold capitalize text-md">
                  {buttonText}
                </p>
              </Windmill.Button>
            )}
            {formUrl && (
              <Windmill.Button tag="a" href={formUrl}>
                <p className="text-center font-semibold capitalize text-md">
                  {buttonText}
                </p>
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
  color: string
};

ContextSectionCTAFooter.defaultProps = {
  color: "gray"
};

export default ContextSectionCTAFooter;
