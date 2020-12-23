import { gql, useQuery } from "@apollo/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// note

const AVATAR = gql`
  query {
    avatarCollection(limit: 1) {
      items {
        name
        organization
        role
        location
        photo {
          title
          description
          url
        }
        bio {
          json
        }
        goals {
          json
        }
        frustrations {
          json
        }
        dataNeeds {
          json
        }
      }
    }
  }
`;

function Avatar() {
  const { loading, error, data } = useQuery(AVATAR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const avatar = data.avatarCollection.items[0];
  const {
    name,
    organization,
    role,
    location,
    photo,
    bio,
    goals,
    frustrations,
    dataNeeds
  } = avatar;

  return (
    <>
      <strong>AVATAR</strong>
      <ul>
        <li>{name}</li>
        <li>{organization}</li>
        <li>{role}</li>
        <li>{location}</li>
        <br />
        <img src={photo.url} alt={photo.description} className="h-72 w-72" />
        <p>{documentToReactComponents(bio.json)}</p>
        <p>{documentToReactComponents(goals.json)}</p>
        <p>{documentToReactComponents(frustrations.json)}</p>
        <p>{documentToReactComponents(dataNeeds.json)}</p>
      </ul>
    </>
  );
}

export default Avatar;
