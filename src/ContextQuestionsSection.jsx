import { kebabCase } from "lodash";
import { arrayOf, string } from "prop-types";
import React from "react";
import ContextQuestion from "./ContextQuestion";
import { answerPropTypes, questionPropTypes } from "./contextSchemaPropTypes";

function ContextQuestionsSection({ title, questions, answers }) {
  const answersForSection = answers.filter(a =>
    questions.find(
      question => question?.questionText === a?.question?.questionText
    )
  );
  const answered = answersForSection.length;
  const total = questions.length;
  let status = "Open For Participation";
  if (answered > 0) {
    status = "In Progress";
  }
  if (answered === total) {
    status = "Completed";
  }

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
        <div className="relative bg-gray-200 p-4 rounded-t-lg">
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
          <div className="absolute inline-block h-full right-4 top-0 items-center">
            <button className="inline-block h-full" type="button">
              <p className="text-md font-semibold capitalize">{status}</p>
              <p className="text-sm capitalize">Call To Action</p>
            </button>
          </div>
        </div>
        {questions && questions.length > 0 && (
          <ul className="mb-12 p-4 text-sm">
            {questions.map(question => {
              const answer = answers?.find(
                a => a?.question?.questionText === question?.questionText
              );
              return (
                <ContextQuestion
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

ContextQuestionsSection.propTypes = {
  title: string,
  questions: arrayOf(questionPropTypes),
  answers: arrayOf(answerPropTypes)
};

export default ContextQuestionsSection;
