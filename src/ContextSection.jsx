/* eslint-disable react/prop-types */
import { gql, useQuery } from "@apollo/client";
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

const REPORT_SECTION = gql`
  query ReportSection($questionGroup: String!, $dataset: String!) {
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
    report(id: $dataset) {
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

function ContextSection({ questionGroup, dataset, narrow, isReport }) {
  return isReport ? (
    <ContextSectionReportQuery
      questionGroup={questionGroup}
      dataset={dataset}
      narrow={narrow}
    />
  ) : (
    <ContextSectionDatasetQuery
      questionGroup={questionGroup}
      dataset={dataset}
      narrow={narrow}
    />
  );
}

function ContextSectionDatasetQuery({ questionGroup, dataset, narrow }) {
  const { loading, error, data } = useQuery(SECTION, {
    variables: { questionGroup, dataset }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ContextSectionDatasetQuery {JSON.stringify(error)}</p>;
  return <ContextSectionData data={data} narrow={narrow} />;
}

function ContextSectionReportQuery({ questionGroup, dataset, narrow }) {
  const { loading, error, data } = useQuery(REPORT_SECTION, {
    variables: { questionGroup, dataset }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ContextSectionReportQuery {JSON.stringify(error)}</p>;
  return <ContextSectionData data={data} narrow={narrow} />;
}

function ContextSectionData({ data, narrow }) {
  const title = data?.questionGroup?.title;
  const questions = data?.questionGroup?.questionsCollection?.items;
  const answers =
    data?.dataset?.answersCollection?.items ||
    data?.report?.answersCollection?.items; 
  return (
    <ContextQuestionsSection
      title={title}
      questions={questions}
      answers={answers}
      description={data?.questionGroup?.attribution}
      narrow={narrow}
    />
  );
}

export default ContextSection;
