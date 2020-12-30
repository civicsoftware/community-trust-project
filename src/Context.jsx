import React from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import EarlyPrototype from "./ContextComponents/EarlyPrototype";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionSummary from "./ContextSectionSummary";
// import ContextSectionMaintenance from "./ContextSectionMaintenance";
// import ContextSectionRawData from "./ContextSectionRawData";
// import ContextSectionDataProcess from "./ContextSectionDataProcess";
import ContextSectionResources from "./ContextSectionResources";
import ContextSectionAttribution from "./ContextSectionAttribution";
import ContextSection from "./ContextSection";
import ContextNav from "./ContextNav";

const DATASETS = gql`
  query Dataset($datasetId: String!) {
    dataset(id: $datasetId) {
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

function useQueryParam() {
  return new URLSearchParams(useLocation().search);
}

function ContextPage() {
  const query = useQueryParam();
  const datasetId = query.get("data");

  return <Context datasetId={datasetId} />;
}

function Context({ datasetId }) {
  const { loading, error, data } = useQuery(DATASETS, {
    variables: { datasetId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const schema = data?.dataset?.schema;
  const summary = data?.dataset?.summary;
  const successes = data?.dataset?.successes;
  const challenges = data?.dataset?.challenges;
  const sandtraps = data?.dataset?.sandtraps;
  const logo = data?.dataset?.logo;
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
          logo={logo}
        />
        {/* <div className="grid grid-cols-2">
          <ContextSectionMaintenance schema={schema} />
          <ContextSectionRawData schema={schema} />
        </div>
        <ContextSectionDataProcess schema={schema} /> */}
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
        <ContextSection
          questionGroup="c7cq4mb35M6zr7LAgjINd"
          dataset={datasetId}
        />
        {/* Ethical Governance */}
        <ContextSection
          questionGroup="2QRPQC441E4cW8Bcu7RZ1e"
          dataset={datasetId}
        />
        {/* Community Context */}
        <ContextSection
          questionGroup="1ZyqfQanm2wGOrV6GVw7WL"
          dataset={datasetId}
        />
        {/* Historic Context */}
        <ContextSection
          questionGroup="2khypcmlN6CBCnl8NS9our"
          dataset={datasetId}
        />
        <ContextSectionResources schema={schema} />
        <ContextSectionAttribution schema={schema} />
      </div>
    </>
  );
}

Context.propTypes = contextSchemaPropTypes;

export default ContextPage;