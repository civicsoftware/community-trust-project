import React from "react";
import { arrayOf, string, shape } from "prop-types";
import ContextQuestion from "./ContextQuestion";
import { answerPropTypes, questionPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";

function ContextQuestionsSection({ title, questions, answers, description }) {
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
    <ContextSectionWrapper
      title={title}
      completeness={completeness}
      description={description}
      cta
    >
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
                important={answer?.important}
              />
            );
          })}
        </ul>
      )}
    </ContextSectionWrapper>
  );
}

ContextQuestionsSection.propTypes = {
  title: string,
  questions: arrayOf(questionPropTypes),
  answers: arrayOf(answerPropTypes),
  description: shape({
    json: shape({
      /* contentful rich text json */
    })
  })
};

export default ContextQuestionsSection;
