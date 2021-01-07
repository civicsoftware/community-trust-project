/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";

import "./imageFilter.css";

import Avatar from "./Avatar";

const colors = {
  Community: "bg-yellow-200",
  Civic: "bg-orange-200",
  County: "bg-pink-200"
};

const AVATARS = gql`
  query {
    avatarCollection(limit: 20) {
      items {
        name
        thumbnail {
          title
          description
          url
        }
        category
      }
    }
  }
`;

// TODO: fix error is back button pressed when modal is open and renavigated to
function Avatars() {
  const { loading, error, data } = useQuery(AVATARS);
  const [cardShown, setCardShown] = useState(false);
  const [avatarName, setAvatarName] = useState(null);
  const [categoryName, setCategoryName] = useState("Community");

  function toggleCard(e, name, category) {
    setAvatarName(name);
    setCategoryName(category);
    setCardShown(!cardShown);
  }

  return (
    <>
      {cardShown && (
        <Windmill.Modal
          isOpen={cardShown}
          onClose={e => toggleCard(e, null)}
          className={`max-w-screen-lg h-3/4 overflow-y-scroll ${colors?.[categoryName]} border-gray-300 border-2 rounded-lg shadow-xl`}
        >
          <Avatar name={avatarName} />
        </Windmill.Modal>
      )}

      <div className="m-12 mb-36 mt-20 mx-auto px-6 max-w-4xl lg:px-12">
        <div className="flex flex-col mb-4">
          <div className="flex items-center text-gray-900">
            <svg
              className="mr-3 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold">
              Story-Centered Stakeholders
            </h2>
          </div>
          <p className="text-xl"> Click below to hear their stories.</p>
        </div>
        <p className="block font-sans prose">
          Story-Centered Stakeholders (also called personas) are a key component
          in our storytelling methodology. We use them to build and extend
          empathy and define the unique needs of each stakeholder.
          Narrative-centered design is one of CIVIC’s guiding principles and
          these personas allow us to incorporate the human perspective through
          every phase of the Trust Project. Each persona has a North Star,
          goals, and frustrations. As users interact with the Story-Centered
          Stakeholders, they will learn how their intersections, histories and
          experiences influence the way they navigate the world.
        </p>
        <p className="block mt-6">
          Hear the stakeholders share their experiences in their own voice, via
          a multimedia experience:
        </p>

        <h2 className="mt-6 text-xl font-semibold">Community</h2>
        <div className="grid gap-10 mt-6 bg-white lg:grid-cols-3">
          {loading && <p className="col-span-3">Loading...</p>}
          {error && <p className="col-span-3">Error loading data :(</p>}
          {!loading &&
            !error &&
            data.avatarCollection.items
              .filter(avatar => avatar?.category === "Community")
              .map(({ name, thumbnail }) => (
                <div
                  className="relative flex flex-col justify-center pb-12 border-2 border-gray-300 rounded-lg shadow-xl"
                  onClick={e => toggleCard(e, name, "Community")}
                  role="img"
                >
                  <div className="h-52">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      id="filtered"
                      src={thumbnail?.url}
                      alt={thumbnail?.description}
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-2 pb-4 bg-yellow-light rounded-b-lg">
                    <p className="text-center text-black">{name}</p>
                  </div>
                </div>
              ))}
        </div>
        <h2 className="mt-6 text-xl font-semibold">County</h2>
        <div className="grid gap-10 mt-6 bg-white lg:grid-cols-3">
          {loading && <p className="col-span-3">Loading...</p>}
          {error && <p className="col-span-3">Error loading data :(</p>}
          {!loading &&
            !error &&
            data.avatarCollection.items
              .filter(avatar => avatar?.category === "County")
              .map(({ name, thumbnail }) => (
                <div
                  className="relative flex flex-col justify-center pb-12 border-2 border-gray-300 rounded-lg shadow-xl"
                  onClick={e => toggleCard(e, name, "County")}
                  role="img"
                >
                  <div className="h-52">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      id="filtered"
                      src={thumbnail?.url}
                      alt={thumbnail?.description}
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-2 pb-4 bg-pink-light rounded-b-lg">
                    <p className="text-center text-black">{name}</p>
                  </div>
                </div>
              ))}
        </div>
        <h2 className="mt-6 text-xl font-semibold">CIVIC</h2>
        <div className="grid gap-10 mt-6 bg-white lg:grid-cols-3">
          {loading && <p className="col-span-3">Loading...</p>}
          {error && <p className="col-span-3">Error loading data :(</p>}
          {!loading &&
            !error &&
            data.avatarCollection.items
              .filter(avatar => avatar?.category === "Civic")
              .map(({ name, thumbnail }) => (
                <div
                  className="relative flex flex-col justify-center pb-12 border-2 border-gray-300 rounded-lg shadow-xl"
                  onClick={e => toggleCard(e, name, "Civic")}
                  role="img"
                >
                  <div className="h-52">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      id="filtered"
                      src={thumbnail?.url}
                      alt={thumbnail?.description}
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-2 pb-4 bg-orange-200 rounded-b-lg">
                    <p className="text-center text-black">{name}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Avatars;
