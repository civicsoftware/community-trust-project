import { gql, useQuery } from "@apollo/client";
import { string } from "prop-types";
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
    <ContextQuestionsSection
      title={title}
      questions={questions}
      answers={answers}
      description={data?.questionGroup?.attribution}
    />
  );
}

ContextSection.propTypes = {
  questionGroup: string.isRequired,
  dataset: string.isRequired
};

export default ContextSection;
