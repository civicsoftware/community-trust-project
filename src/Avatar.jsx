import { gql, useQuery } from "@apollo/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// TODO: Null checks for non-required fields

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
        conversationsCollection(limit: 1) {
          items {
            quote
            audioFile {
              url
              contentType
            }
          }
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
    dataNeeds,
    conversationsCollection
  } = avatar;

  const conversation = conversationsCollection.items[0];
  const { quote, audioFile } = conversation;

  return (
    <>
      <strong>AVATAR</strong>
      <ul>
        <li>{name}</li>
        <li>{organization}</li>
        <li>{role}</li>
        <li>{location}</li>
        <br />
      </ul>
      <img src={photo.url} alt={photo.description} className="h-72 w-72" />
      <section>{documentToReactComponents(bio.json)}</section>
      <section>{documentToReactComponents(goals.json)}</section>
      <section>{documentToReactComponents(frustrations.json)}</section>
      <section>{documentToReactComponents(dataNeeds.json)}</section>
      <q>{quote}</q>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio controls>
        <source src={audioFile.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default Avatar;
