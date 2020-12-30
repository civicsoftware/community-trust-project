import { gql, useQuery } from "@apollo/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { string } from "prop-types";
import Carousel from "./Carousel";

const richTextOptions = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-disc">{children}</li>
    )
  }
};

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
        photo2 {
          title
          description
          url
        }
        photo3 {
          title
          description
          url
        }
        photo4 {
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

  if (loading) return <p className="m-20">Loading...</p>;
  if (error) return <p className="m-20">Error loading data :(</p>;

  const avatar = data?.avatarCollection?.items?.[0];
  if (!avatar) return <p className="m-20">Error loading data :(</p>;

  const {
    organization,
    role,
    location,
    photo,
    photo2,
    photo3,
    photo4,
    bio,
    goals,
    frustrations,
    dataNeeds,
    conversationsCollection
  } = avatar;

  const conversation = conversationsCollection?.items?.[0];
  const quote =
    conversation?.quote || "This is a temporary quote so I can style it.";
  const audioFile = conversation?.audioFile;

  return (
    <>
      <div className="grid grid-cols-5 -z-10">
        <div className="col-span-5 bg-pink-200 p-4 pb-2 rounded-t-lg flex flex-col -z-1">
          <h2 className="inline-block ml-2 text-xl font-bold">{name}</h2>
          <div>
            <div className="inline-block p-1 ml-0.5 -mt-2">
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
            <h3 className="inline text-xs">{organization}</h3>
            <div className="inline-block p-1 ml-2 -mt-2">
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3 className="inline text-xs">{role}</h3>
            <div className="inline-block ml-2 p-1 -mb-2 -mt-2">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="inline text-xs">{location}</h3>
          </div>
        </div>
        <div className="col-span-3 bg-white">
          <Carousel photos={[photo, photo2, photo3, photo4]} />
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio controls className="px-10 w-full">
            <source src={audioFile?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="col-span-2 pr-10 pt-4 text-sm bg-white">
          <h3 className="text-lg font-bold">Bio</h3>
          <p className="">{documentToReactComponents(bio.json)}</p>
        </div>
        <div className="col-span-5 px-6 pb-10 pt-3 text-sm bg-white">
          <p className="bg-yellow-50 w-full rounded-lg box-content py-4 mt-2 pl-4 mb-4 text-m">
            <quote>{quote}</quote>
          </p>
          <div className="pb-4">
            <h3 className="text-lg font-bold">Goals</h3>
            <ul className="pl-4">
              {documentToReactComponents(goals.json, richTextOptions)}
            </ul>
          </div>
          <div className="pb-4">
            <h3 className="text-lg font-bold">Frustrations</h3>
            <ul className="pl-4">
              {documentToReactComponents(frustrations.json, richTextOptions)}
            </ul>
          </div>
          <div className="pb-4">
            <h3 className="text-lg font-bold">Data Needs</h3>
            <ul className="pl-4">
              {documentToReactComponents(dataNeeds.json, richTextOptions)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Avatar.propTypes = {
  name: string.isRequired
};

export default Avatar;
