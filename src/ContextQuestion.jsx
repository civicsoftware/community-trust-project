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
  answerLongText
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
      {answer && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block h-4 w-4"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {!answer && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="inline-block h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      )}
      <span
        className={`ml-2 text-md font-medium ${answer ? "" : "text-gray-600"}`}
      >
        {text}
      </span>
      {(showYesNo || answer) && (
        <Collapsable description="question detail" hideText hiddenClassName="">
          <Collapsable.Section hidden>
            <div
              className={`prose prose-sm mt-4 mb-4 ml-2 ${
                answer ? "" : "text-gray-600"
              }`}
            >
              <p>
                {hasYesNo &&
                  answerBoolean !== null &&
                  answerBoolean !== undefined &&
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
  answerBoolean: bool,
  answerShortText: string,
  answerLongText: shape({
    /* contentful rich text */
  })
};

export default ContextQuestion;
