import { gql, useQuery } from "@apollo/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { string } from "prop-types";
import Carousel from "./Carousel";

// TODO: this is definitely not the right way to do this
const liOptions = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-disc">{children}</li>
    )
  }
};
const pOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>
  }
};

const colors = {
  Community: "bg-yellow-200",
  Civic: "bg-orange-200",
  County: "bg-pink-200"
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
        category
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
        intersection {
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
        videoConversationsCollection(limit: 1) {
          items {
            schemaConvoVideoCollection(limit: 1) {
              items {
                url
              }
            }
          }
        }
      }
    }
  }
`;

function Avatar({ name }) {
  const { loading, error, data } = useQuery(AVATAR, { variables: { name } });

  if (loading)
    return (
      <div className="h-full bg-white">
        <p className="p-96">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="h-full bg-white">
        <p className="p-96">Error loading data :(</p>
      </div>
    );

  const avatar = data?.avatarCollection?.items?.[0];
  if (!avatar)
    return (
      <div className="h-full bg-white">
        <p className="p-96">Error loading data :(</p>
      </div>
    );

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
    intersection,
    conversationsCollection,
    videoConversationsCollection,
    category
  } = avatar;

  const conversation = conversationsCollection?.items?.[0];
  const quote = conversation?.quote || "This is a temporary quote.";
  const audioFile = conversation?.audioFile;
  const video =
    videoConversationsCollection?.items?.[0]?.schemaConvoVideoCollection
      ?.items?.[0];
  const videoFile = video?.url || "";

  return (
    <>
      <div className="-z-10 grid grid-cols-8 pb-6 bg-white">
        <div
          className={`col-span-8 ${colors?.[category]} p-2 flex flex-col z-10`}
        >
          <h2 className="z-10 inline-block ml-2 text-black text-xl font-bold">
            {name}
          </h2>
          <div>
            <div className="inline-block -mt-2 ml-0.5 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="inline-block align-text-bottom w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
            </div>
            <h3 className="inline text-black text-xs">{organization}</h3>
            <div className="inline-block -mt-2 ml-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="inline-block align-text-bottom w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="inline text-black text-xs">{role}</h3>
            <div className="inline-block -mb-2 -mt-2 ml-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="inline-block align-text-bottom w-4 h-4"
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
            <h3 className="inline text-black text-xs">{location}</h3>
          </div>
        </div>
        <div className="col-span-5 pl-4 pr-6 pt-6">
          <Carousel photos={[photo, photo2, photo3, photo4]} />
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio controls className="w-full">
            <source src={audioFile?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="col-span-3 pr-6 pt-4 text-sm">
          <h3 className="text-lg font-bold">Bio</h3>
          <p className="">{documentToReactComponents(bio.json, pOptions)}</p>
          <div className="">
            <h3 className="text-lg font-bold">Intersections</h3>
            <ul className="">{documentToReactComponents(intersection.json)}</ul>
          </div>
        </div>

        <div className="col-span-8">
          <p className="mx-4 my-4 pl-4 py-4 text-lg italic font-bold bg-blue-light rounded-2xl box-content text-m font-delius">
            &quot;{quote}&quot;
          </p>
        </div>

        <div className="col-span-4 pb-10 px-10 text-sm">
          <div className="">
            <h3 className="text-lg font-bold">Goals</h3>
            <ul className="pl-4">
              {documentToReactComponents(goals.json, liOptions)}
            </ul>
          </div>
          <div className="">
            <h3 className="pt-4 text-lg font-bold">Frustrations</h3>
            <ul className="pl-4">
              {documentToReactComponents(frustrations.json, liOptions)}
            </ul>
          </div>
          <div className="">
            <h3 className="pt-4 text-lg font-bold">Needs</h3>
            <ul className="pl-4">
              {documentToReactComponents(dataNeeds.json, liOptions)}
            </ul>
          </div>
        </div>
        <div className="col-span-4 pb-4">
          <h3 className="pb-2 text-lg font-bold">Actions</h3>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video className="pr-6 w-full" controls>
            <source src={videoFile} type="video/mp4" />
          </video>
          <p className="mr-10 my-4 text-sm">
            See a reenactment of the conversations that led to the creation of
            stakeholders and schemas.
          </p>
        </div>
      </div>
    </>
  );
}

Avatar.propTypes = {
  name: string.isRequired
};

export default Avatar;
