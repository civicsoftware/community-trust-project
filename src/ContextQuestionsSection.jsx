import { kebabCase } from "lodash";
import { arrayOf, string } from "prop-types";
import React from "react";
import ContextQuestion from "./ContextQuestion";
import { answerPropTypes, questionPropTypes } from "./contextSchemaPropTypes";
import ContextWhoInvestigated from "./ContextWhoInvestigated";

function ContextQuestionsSection({ title, questions, answers }) {
  const answersForSection = answers.filter(a =>
    questions.find(
      question => question?.questionText === a?.question?.questionText
    )
  );
  const answered = answersForSection.length;
  const total = questions.length;
  let completeness = 0;
  if (answered > 0) {
    completeness = 1;
  }
  if (answered === total) {
    completeness = 2;
  }

  return (
    <section id={kebabCase(title)} className="grid">
      <div className="relative m-4 border-gray-200 rounded-lg border-2 shadow-xl">
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
          <h2 className="inline-block -mt-4 ml-2 text-xl font-bold capitalize">
            {title}
          </h2>
          <div className="absolute inline-block h-full right-4 top-0 items-center">
            <button className="inline-block h-full" type="button">
              <p className="text-md font-semibold capitalize">Contribute</p>
              <p className="text-sm capitalize">Call To Action</p>
            </button>
          </div>
          <ContextWhoInvestigated completeness={completeness} />
        </div>
        {questions && questions.length > 0 && (
          <ul className="mb-2 p-4 text-sm">
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
