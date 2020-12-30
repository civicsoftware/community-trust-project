import React from "react";
import { gql, useQuery } from "@apollo/client";

const DATASETS = gql`
  query {
    datasetCollection(limit: 20) {
      items {
        sys {
          id
        }
        title
      }
    }
    reportCollection(limit: 20) {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`;

function Library() {
  const { loading, error, data } = useQuery(DATASETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  return (
    <>
      <div className="text-xl justify-self-center">Data Library</div>
      <div className="text-lg justify-self-center">Datasets</div>
      {data?.datasetCollection?.items?.map(dataset => (
        <a
          href={`/context?data=${dataset?.sys?.id}`}
          className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
        >
          {dataset?.title}
        </a>
      ))}
      <div className="text-lg justify-self-center">Reports</div>
      {data?.reportCollection?.items?.map(dataset => (
        <a
          href={`/context?data=${dataset?.sys?.id}&isReport=true`}
          className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
        >
          {dataset?.title}
        </a>
      ))}
    </>
  );
}

export default Library;
