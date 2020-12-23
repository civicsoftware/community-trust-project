import { gql, useQuery } from "@apollo/client";
import React from "react";

const AVATARS = gql`
  query {
    avatarCollection(limit: 20) {
      items {
        name
      }
    }
  }
`;

function Avatars() {
  const { loading, error, data } = useQuery(AVATARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      AVATARS
      <ul>
        {data.avatarCollection.items.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default Avatars;
