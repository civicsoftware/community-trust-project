import { gql, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { kebabCase } from "lodash";
import { arrayOf, oneOf, shape, string } from "prop-types";
import React from "react";
import Collapsable from "./Collapsable";

const SECTION = gql`
  query Section($questionGroup: String!) {
    questionGroup(id: $questionGroup) {
      title
      questionsCollection(limit: 20) {
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
  }
`;

function ContextSection({ questionGroup }) {
  const { loading, error, data } = useQuery(SECTION, {
    variables: { questionGroup }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const title = data?.questionGroup?.title;
  const questions = data?.questionGroup?.questionsCollection?.items;

  return <ContextSectionDisplay title={title} questions={questions} />;
}

ContextSection.propTypes = {
  questionGroup: string.isRequired
};

function ContextSectionDisplay({ title, questions }) {
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
        <div className="bg-purple-200 p-4 rounded-t-lg">
          <div className="inline-block p-1 border-2 rounded-full bg-purple-100 border-purple-900">
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
            {questions.map(question => (
              <QuestionDisplay
                type={question.questionType}
                text={question?.questionText}
                textYes={question?.questionTextYes}
                textNo={question?.questionTextNo}
                description={question?.description}
              />
            ))}
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

function QuestionDisplay({ type, text, textYes, textNo, description }) {
  const showYesNo = type.search("yes no") >= 0;

  return (
    <li key={text} className="mt-2 p-2 bg-pink-50 w-full">
      <span className="text-md font-medium">{text}</span>
      <Collapsable description="question detail" hideText>
        <Collapsable.Section hidden>
          <div>
            {showYesNo && "👍👎"}
            {showYesNo && textYes}
            {showYesNo && textNo}
            {documentToReactComponents(description?.json)}
          </div>
        </Collapsable.Section>
      </Collapsable>
    </li>
  );
}

QuestionDisplay.propTypes = question;

export default ContextSection;
