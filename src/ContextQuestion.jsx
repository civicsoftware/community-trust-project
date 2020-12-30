import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { bool, shape, string } from "prop-types";
import React from "react";
import Collapsable from "./Collapsable";
import { questionPropTypes } from "./contextSchemaPropTypes";

function ContextQuestion({
  type,
  text,
  textYes,
  textNo,
  description,
  answerBoolean,
  answerShortText,
  answerLongText,
  important
}) {
  const showYesNo = type.search("yes no with") >= 0;
  const hasText = type.search("answer") >= 0;
  const hasYesNo = type.search("yes no") >= 0;
  const answer =
    !(answerBoolean === undefined || answerBoolean === null) ||
    answerShortText ||
    answerLongText;

  return (
    <li key={text} className="mt-2 p-2 bg-gray-50 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block h-4 w-4"
      >
        {important && (
          <path
            fillRule="evenodd"
            d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
            clipRule="evenodd"
          />
        )}
      </svg>
      {answer && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4"
          >
            {hasYesNo && <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />}
            {hasYesNo && (
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            )}
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4"
          >
            {hasText && (
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </>
      )}
      {!answer && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block h-4 w-4"
          >
            {hasYesNo && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            )}
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="inline-block h-4 w-4"
          >
            {hasText && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            )}
          </svg>
        </>
      )}
      <span
        className={`ml-4 text-md font-medium ${
          answer || important ? "" : "text-gray-600"
        }`}
      >
        {text}
      </span>
      {(showYesNo || answer) && (
        <Collapsable
          description="question detail"
          hideText
          hiddenClassName="ml-12"
        >
          <Collapsable.Section hidden>
            <div className="prose prose-sm mt-4 mb-4 ml-4">
              <p>
                {hasYesNo &&
                  answerBoolean !== null &&
                  (answerBoolean ? "Yes" : "No")}
              </p>
              <p>{hasText && !hasYesNo && answerShortText}</p>
              {hasText &&
                !hasYesNo &&
                documentToReactComponents(answerLongText?.json)}
              <p className="text-md font-medium">
                {answerBoolean !== false && showYesNo && textYes}
              </p>
              <p className="text-md font-medium">
                {answerBoolean !== true && showYesNo && textNo}
              </p>
              <p>{hasText && hasYesNo && answerShortText}</p>
              {hasText &&
                hasYesNo &&
                documentToReactComponents(answerLongText?.json)}
              {documentToReactComponents(description?.json)}
            </div>
          </Collapsable.Section>
        </Collapsable>
      )}
    </li>
  );
}

ContextQuestion.propTypes = {
  ...questionPropTypes,
  important: bool,
  answerBoolean: bool,
  answerShortText: string,
  answerLongText: shape({
    /* contentful rich text */
  })
};

export default ContextQuestion;
