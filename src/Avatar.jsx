import { gql, useQuery } from "@apollo/client";
import React from "react";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import sketchFilter from "./sketchFilter.svg"
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

function Avatar(props) {
  const { loading, error, data } = useQuery(AVATAR);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const avatar = data.avatarCollection.items.find(
    element => element.name === props.persona
  );
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
  const { quote, audioFile } = conversation || {};

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-5 bg-pink-200 p-4 rounded-t-lg flex flex-col">
          <h2 className="inline-block ml-2 text-xl font-bold">{name}</h2>
          <div>
          <div className="inline-block p-1 ml-4 -mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 inline-block align-text-bottom"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          </div>
          <h3 className="inline text-xs">
            {organization}
          </h3>
          <div className="inline-block p-1 -mb-2 -mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 inline-block align-text-bottom"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          </div>
          <h3 className="inline text-xs">
            {role}
          </h3>
          <div className="inline-block p-1 -mb-2 -mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 inline-block align-text-bottom"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="inline text-xs">
            {location}
          </h3>
          </div>
        </div>
        <div className="col-span-3">
          <img src={photo?.url} alt={photo?.description} />
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio controls>
              <source src={audioFile?.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="col-span-2 pr-10 py-6 mb-4 text-sm">
            <div className="">
              <h3 className="text-lg font-bold">Bio</h3>
              <p className="">{documentToReactComponents(bio.json)}</p>
            </div>
          </div>
          <div className="col-span-5 px-6 text-sm">
            <div className="pb-4">
              <h3 className="text-lg font-bold">Goals</h3>
              <p className="">{documentToReactComponents(goals.json)}</p>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-bold">Frustrations</h3>
              <p className="">{documentToReactComponents(frustrations.json)}</p>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-bold">Data Needs</h3>
              <p className="">{documentToReactComponents(dataNeeds.json)}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Avatar;

Avatar.propTypes = {
  persona: PropTypes.string
};
