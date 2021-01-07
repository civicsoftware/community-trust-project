import React from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionSummary from "./ContextSectionSummary";
import ContextSectionMaintenance from "./ContextSectionMaintenance";
import ContextSectionRawData from "./ContextSectionRawData";
// import ContextSectionDataProcess from "./ContextSectionDataProcess";
import ContextSectionResources from "./ContextSectionResources";
import ContextSectionAttribution from "./ContextSectionAttribution";
import ContextSection from "./ContextSection";
import ContextNav from "./ContextNav";
import LibraryOrganizationDataSourceCTA from "./LibraryOrganizationDataSourceCTA";

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
    variables: { datasetId },
    skip: !datasetId
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const schema = data?.dataset?.schema;
  const summary = data?.dataset?.summary;
  const successes = data?.dataset?.successes;
  const challenges = data?.dataset?.challenges;
  const sandtraps = data?.dataset?.sandtraps;
  const logo = data?.dataset?.logo;
  // if (!schema) return <div>No data</div>;

  return (
    <>
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
      <div className="mx-auto max-w-4xl">
        <div className="m-4 my-8">
          <LibraryOrganizationDataSourceCTA />
        </div>
        <ContextSectionSummary
          schema={schema}
          summary={summary}
          challenges={challenges}
          successes={successes}
          sandtraps={sandtraps}
          logo={logo}
        />
        <div className="md:grid md:grid-cols-2">
          <ContextSectionRawData schema={schema} />
          <ContextSectionMaintenance schema={schema} />
        </div>
        {/* <ContextSectionDataProcess schema={schema} /> */}
        {/* Lineage */}
        <ContextSection
          questionGroup="5oOzAK9EEh7rUuBrbInLFx"
          dataset={datasetId}
          narrow
          color="blue"
        />
        {/* Methodology */}
        <ContextSection
          questionGroup="iUwbAs8uk0yiUhPJK2eyX"
          dataset={datasetId}
          narrow
          color="orange"
        />
        {/* Access */}
        <ContextSection
          questionGroup="c7cq4mb35M6zr7LAgjINd"
          dataset={datasetId}
          narrow
          color="purple"
        />
        {/* Ethical Governance */}
        <ContextSection
          questionGroup="2QRPQC441E4cW8Bcu7RZ1e"
          dataset={datasetId}
          narrow
          color="yellow"
        />
        {/* Community Context */}
        <div className="md:grid md:grid-cols-2">
          <ContextSection
            questionGroup="1ZyqfQanm2wGOrV6GVw7WL"
            dataset={datasetId}
            narrow
            color="pink"
          />
          {/* Historic Context */}
          <ContextSection
            questionGroup="2khypcmlN6CBCnl8NS9our"
            dataset={datasetId}
            narrow
            color="blue"
          />
        </div>
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
