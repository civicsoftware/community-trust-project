import React from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import EarlyPrototype from "./ContextComponents/EarlyPrototype";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";
import ContextSectionSummary from "./ContextSectionSummary";
import ContextSectionMaintenance from "./ContextSectionMaintenance";
import ContextSectionRawData from "./ContextSectionRawData";
import ContextSectionDataProcess from "./ContextSectionDataProcess";
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
  const dataset = data?.dataset?.schema;
  if (!dataset) return <div>No data</div>;

  return (
    <>
      <EarlyPrototype />
      <ContextNav />
      <div className="max-w-4xl mx-auto">
        <ContextSectionSummary dataset={dataset} />
        <div className="grid grid-cols-2">
          <ContextSectionMaintenance dataset={dataset} />
          <ContextSectionRawData dataset={dataset} />
        </div>
        <ContextSectionDataProcess />
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
        <ContextSectionResources dataset={dataset} />
        <ContextSectionAttribution dataset={dataset} />
      </div>
    </>
  );
}

Context.propTypes = contextSchemaPropTypes;

export default ContextPage;
