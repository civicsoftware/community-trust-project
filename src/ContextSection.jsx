import { gql, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { kebabCase } from "lodash";
import { arrayOf, oneOf, shape, string } from "prop-types";
import React from "react";
import Collapsable from "./Collapsable";

const SECTION = gql`
  query Section($questionGroup: String!, $dataset: String!) {
    questionGroup(id: $questionGroup) {
      title
      questionsCollection(limit: 50) {
        items {
          questionType
          questionText
          questionTextYes
          questionTextNo
          description {
            json
          }
        }
      }
    }
    dataset(id: $dataset) {
      answersCollection {
        items {
          question {
            questionText
          }
          answerBoolean
          answerShortText
          answerLongText {
            json
          }
        }
      }
    }
  }
`;

function ContextSection({ questionGroup, dataset }) {
  const { loading, error, data } = useQuery(SECTION, {
    variables: { questionGroup, dataset }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const title = data?.questionGroup?.title;
  const questions = data?.questionGroup?.questionsCollection?.items;
  const answers = data?.dataset?.answersCollection?.items;

  return (
    <ContextSectionDisplay
      title={title}
      questions={questions}
      answers={answers}
    />
  );
}

ContextSection.propTypes = {
  questionGroup: string.isRequired,
  dataset: string.isRequired
};

function ContextSectionDisplay({ title, questions, answers }) {
  return (
    <section id={kebabCase(title)} className="grid">
      <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
        <div className="absolute bottom-4 right-4">
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
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
        <div className="bg-gray-200 p-4 rounded-t-lg">
          <div className="inline-block p-1 border-2 rounded-full bg-gray-100 border-gray-900">
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
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="inline-block ml-2 text-xl font-bold capitalize">
            {title}
          </h2>
        </div>
        {questions && questions.length > 0 && (
          <ul className="mb-12 p-4 text-sm">
            {questions.map(question => {
              const answer = answers?.find(
                a => a?.question?.questionText === question?.questionText
              );
              return (
                <QuestionDisplay
                  type={question.questionType}
                  text={question?.questionText}
                  textYes={question?.questionTextYes}
                  textNo={question?.questionTextNo}
                  description={question?.description}
                  answerBoolean={answer?.answerBoolean}
                  answerShortText={answer?.answerShortText}
                  answerLongText={answer?.answerLongText}
                />
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

const question = {
  type: oneOf([
    "short answer",
    "long answer",
    "yes no",
    "yes no with short answer",
    "yes no with long answer"
  ]).isRequired,
  text: string,
  textYes: string,
  textNo: string,
  description: shape({
    /* contentful rich text */
  })
};

ContextSectionDisplay.propTypes = {
  title: string,
  questions: arrayOf(question)
};

function QuestionDisplay({
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
    answerBoolean !== undefined || answerShortText || answerLongText;

  return (
    <li
      key={text}
      className={`mt-2 p-2 bg-gray-50 w-full ${answer ? "" : "text-gray-600"}`}
    >
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
        className={`ml-4 text-md font-medium ${answer ? "" : "text-gray-600"}`}
      >
        {text}
      </span>
      {(showYesNo || answer) && (
        <Collapsable description="question detail" hideText>
          <Collapsable.Section hidden>
            <div>
              <p>
                {hasYesNo &&
                  answerBoolean !== undefined &&
                  (answerBoolean ? "Yes" : "No")}
              </p>
              <p>{hasText && !hasYesNo && answerShortText}</p>
              <p>{hasText && !hasYesNo && answerLongText?.json}</p>
              <p>{showYesNo && textYes}</p>
              <p>{showYesNo && textNo}</p>
              {documentToReactComponents(description?.json)}
            </div>
          </Collapsable.Section>
        </Collapsable>
      )}
    </li>
  );
}

QuestionDisplay.propTypes = question;

export default ContextSection;
