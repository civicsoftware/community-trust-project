/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";

import "./imageFilter.css";

import Avatar from "./Avatar";

const AVATARS = gql`
  query {
    avatarCollection(limit: 20) {
      items {
        name
        photo {
          title
          description
          url
        }
      }
    }
  }
`;

// TODO: fix error is back button pressed when modal is open and renavigated to
function Avatars() {
  const { loading, error, data } = useQuery(AVATARS);
  const [cardShown, setCardShown] = useState(false);
  const [avatarName, setAvatarName] = useState(null);

  function toggleCard(e, name) {
    e.stopPropagation();
    setAvatarName(name);
    setCardShown(!cardShown);
  }

  return (
    <>
      {cardShown && (
        <Windmill.Modal
          isOpen={cardShown}
          onClose={e => toggleCard(e, null)}
          className=""
        >
          <div className="container -m-7 max-w-5xl mx-auto border-gray-300 border-2 rounded-lg shadow-xl">
            <Avatar name={avatarName} />
          </div>
        </Windmill.Modal>
      )}
      <div className="container m-12 p-12 max-w-5xl mx-auto justify-center grid grid-cols-1">
        <p className="text-4xl mt-20 font-semibold justify-self-center">
          Story-Centered Stakeholders
        </p>
        <p className="text-xl mt-4 mb-12 justify-self-center">
          Click below to hear their stories.
        </p>
        <div className="grid grid-cols-3 gap-10">
          {loading && <p className="col-span-3">Loading...</p>}
          {error && <p className="col-span-3">Error loading data :(</p>}
          {!loading &&
            !error &&
            data.avatarCollection.items.map(({ name, photo }) => (
              <div
                className="flex flex-col justify-center border-gray-300 border-2 shadow-xl rounded-lg relative pb-12"
                onClick={e => toggleCard(e, name)}
                role="img"
              >
                <div className="h-52">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                    id="filtered"
                    src={photo?.url}
                    alt={photo?.description}
                    className="object-cover h-full"
                  />
                </div>
                <div className="bg-purple-dark rounded-b-lg p-2 pb-4 absolute bottom-0 inset-x-0">
                  <p className="font-bold text-white text-center">{name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Avatars;
