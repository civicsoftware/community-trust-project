import React from "react";
import { arrayOf, string, shape, bool, func } from "prop-types";
import ContextQuestion from "./ContextQuestion";
import { answerPropTypes, questionPropTypes } from "./contextSchemaPropTypes";
import ContextSectionWrapper from "./ContextSectionWrapper";
import Collapsable from "./Collapsable";

function ContextQuestionsSection({
  title,
  questions,
  answers,
  description,
  callToAction,
  narrow,
  color,
  Icon
}) {
  const answersForSection = answers.filter(a =>
    questions.find(
      question =>
        question?.questionText === a?.question?.questionText &&
        (a?.answerBoolean || a?.answerShortText || a?.answerShortText)
    )
  );
  const answered = answersForSection.length;
  const total = questions.length;
  let completeness = 0;
  if (answered >= 1) {
    completeness = 1;
  }
  if (Math.round((answered * 3) / total) === 2) {
    completeness = 2;
  }
  if (Math.round((answered * 3) / total) === 3) {
    completeness = 3;
  }
  if (answered === total) {
    completeness = 4;
  }

  return (
    <ContextSectionWrapper
      title={title}
      completeness={completeness}
      answered={answered}
      total={total}
      description={description}
      callToAction={callToAction}
      narrow={narrow}
      color={color}
      cta
      Icon={Icon}
    >
      {questions && questions.length > 0 && (
        <ul className="mb-2 p-4 text-sm">
          {questions.slice(0, 2).map(question => {
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
          {questions.length > 2 && (
            <Collapsable buttonClassName="text-cobalt">
              <Collapsable.Section hidden>
                {questions.slice(3, 500).map(question => {
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
              </Collapsable.Section>
            </Collapsable>
          )}
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
  }),
  callToAction: shape,
  narrow: bool,
  color: string,
  Icon: func
};

export default ContextQuestionsSection;
