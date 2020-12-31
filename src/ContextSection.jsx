import { gql, useQuery } from "@apollo/client";
import { bool, string } from "prop-types";
import React from "react";
import ContextQuestionsSection from "./ContextQuestionsSection";

const SECTION = gql`
  query Section($questionGroup: String!, $dataset: String!) {
    questionGroup(id: $questionGroup) {
      title
      attribution {
        json
      }
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
      callToAction {
        description {
          json
        }
        buttonText
        buttonSubText
        emailRecipients
        emailSubject
        emailBody
        formUrl
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

function ContextSection({ questionGroup, dataset, narrow }) {
  const { loading, error, data } = useQuery(SECTION, {
    variables: { questionGroup, dataset }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;

  const title = data?.questionGroup?.title;
  const questions = data?.questionGroup?.questionsCollection?.items;
  const callToAction = data?.questionGroup?.callToAction;
  const answers = data?.dataset?.answersCollection?.items;

  return (
    <ContextQuestionsSection
      title={title}
      questions={questions}
      answers={answers}
      description={data?.questionGroup?.attribution}
      narrow={narrow}
      callToAction={callToAction}
    />
  );
}

ContextSection.propTypes = {
  questionGroup: string.isRequired,
  dataset: string.isRequired,
  narrow: bool
};

export default ContextSection;
