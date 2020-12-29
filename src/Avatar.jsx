import { gql, useQuery } from "@apollo/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { string } from "prop-types";

// TODO: Null checks for non-required fields

const AVATAR = gql`
  query Avatar($name: String!) {
    avatarCollection(where: { name: $name }) {
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

function Avatar({ name }) {
  const { loading, error, data } = useQuery(AVATAR, { variables: { name } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const avatar = data?.avatarCollection?.items?.[0];
  if (!avatar) return <p>Error :(</p>;

  const {
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

  const conversation = conversationsCollection?.items?.[0];
  const quote = conversation?.quote;
  const audioFile = conversation?.audioFile;

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
      {photo && (
        <img
          src={`${photo.url}?w=800&f=face&fit=thumb`}
          alt={photo.description}
          className="object-contain h-full max-w-4xl"
        />
      )}
      <section>{documentToReactComponents(bio?.json)}</section>
      <section>{documentToReactComponents(goals?.json)}</section>
      <section>{documentToReactComponents(frustrations?.json)}</section>
      <section>{documentToReactComponents(dataNeeds?.json)}</section>
      {audioFile && quote && (
        <figure>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio controls>
            <figcaption>{quote}</figcaption>
            <source src={audioFile.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </figure>
      )}
    </>
  );
}

Avatar.propTypes = {
  name: string.isRequired
};

export default Avatar;
