import React from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import EarlyPrototype from "./ContextComponents/EarlyPrototype";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionSummary from "./ContextSectionSummary";
import ContextSectionMaintenance from "./ContextSectionMaintenance";
import ContextSectionRawData from "./ContextSectionRawData";
// import ContextSectionDataProcess from "./ContextSectionDataProcess";
import ContextSectionResources from "./ContextSectionResources";
import ContextSectionAttribution from "./ContextSectionAttribution";
import ContextSection from "./ContextSection";
import ContextNav from "./ContextNav";

const DATASETS = gql`
  query Dataset($datasetId: String!) {
    dataset(id: $datasetId) {
      sys {
        id
      }
      title
      summary {
        json
      }
      schema
      summary {
        json
      }
      successes {
        json
      }
      challenges {
        json
      }
      sandtraps {
        json
      }
      logo {
        url
        description
        width
        height
      }
    }
  }
`;

const REPORTS = gql`
  query Report($datasetId: String!) {
    report(id: $datasetId) {
      sys {
        id
      }
      title
      summary {
        json
      }
      schema
      summary {
        json
      }
      successes {
        json
      }
      challenges {
        json
      }
      sandtraps {
        json
      }
      logo {
        url
        description
        width
        height
      }
      whatWeHave {
        json
      }
      whatWeNeed {
        json
      }
      questionGroupsCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  }
`;

function useQueryParam() {
  return new URLSearchParams(useLocation().search);
}

function ContextPage() {
  const query = useQueryParam();
  const datasetId = query.get("data");
  const isReport = query.get("isReport");

  return isReport === "true" ? (
    <ReportQuery datasetId={datasetId} />
  ) : (
    <DatasetQuery datasetId={datasetId} />
  );
}

function ReportQuery({ datasetId }) {
  const { loading, error, data } = useQuery(REPORTS, {
    variables: { datasetId }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  return <Context data={data?.report} isReport />;
}

function DatasetQuery({ datasetId }) {
  const { loading, error, data } = useQuery(DATASETS, {
    variables: { datasetId }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  return <Context data={data?.dataset} isDataset />;
}

function Context({ data, isDataset, isReport }) {
  const datasetId = data?.sys?.id;
  const schema = data?.schema;
  const summary = data?.summary;
  const successes = data?.successes;
  const challenges = data?.challenges;
  const sandtraps = data?.sandtraps;
  const logo = data?.logo;

  // Reports only
  const contextSections = data?.questionGroupsCollection?.items;
  const whatWeHave = data?.whatWeHave;
  const whatWeNeed = data?.whatWeNeed;

  if (!schema) return <div>No data</div>;

  return (
    <>
      <EarlyPrototype />
      <ContextNav
        sections={[
          "summary",
          "lineage",
          "methodology",
          "access",
          "ethical-governance",
          "community-context",
          "historic-context",
          "resources",
          "attribution"
        ]}
      />
      <div className="max-w-4xl mx-auto">
        <ContextSectionSummary
          schema={schema}
          summary={summary}
          challenges={challenges}
          successes={successes}
          sandtraps={sandtraps}
          whatWeHave={whatWeHave}
          whatWeNeed={whatWeNeed}
          logo={logo}
        />
        <div className="md:grid md:grid-cols-2">
          <ContextSectionRawData schema={schema} />
          <ContextSectionMaintenance schema={schema} />
        </div>
        {/* <ContextSectionDataProcess schema={schema} /> */}
        {isDataset && (
          <>
            {/* Lineage */}
            <ContextSection
              questionGroup="5oOzAK9EEh7rUuBrbInLFx"
              dataset={datasetId}
            />
            {/* Methodology */}
            <ContextSection
              questionGroup="iUwbAs8uk0yiUhPJK2eyX"
              dataset={datasetId}
            />
            {/* Access */}
            <div className="md:grid md:grid-cols-2">
              <ContextSection
                questionGroup="c7cq4mb35M6zr7LAgjINd"
                dataset={datasetId}
                narrow
              />
              {/* Ethical Governance */}
              <ContextSection
                questionGroup="2QRPQC441E4cW8Bcu7RZ1e"
                dataset={datasetId}
                narrow
              />
            </div>
            {/* Community Context */}
            <div className="md:grid md:grid-cols-2">
              <ContextSection
                questionGroup="1ZyqfQanm2wGOrV6GVw7WL"
                dataset={datasetId}
                narrow
              />
              {/* Historic Context */}
              <ContextSection
                questionGroup="2khypcmlN6CBCnl8NS9our"
                dataset={datasetId}
                narrow
              />
            </div>
          </>
        )}
        {isReport &&
          contextSections.map(item => (
            <ContextSection
              questionGroup={item?.sys?.id}
              dataset={datasetId}
              isReport
            />
          ))}
        <div className="md:grid md:grid-cols-2">
          <ContextSectionResources schema={schema} />
          <ContextSectionAttribution schema={schema} />
        </div>
      </div>
    </>
  );
}

Context.propTypes = contextSchemaPropTypes;

export default ContextPage;
