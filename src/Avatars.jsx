import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";

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

function Avatars() {
  const { loading, error, data } = useQuery(AVATARS);
  const [cardShown, setCardShown] = useState(false);
  const [currentPersona, setCurrentPersona] = useState(null);

  function toggleCard(persona) {
    setCurrentPersona(persona);
    setCardShown(!cardShown);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {cardShown && (
        <Windmill.Backdrop onClick={toggleCard} className="z-0">
          <div className="container m-20 bg-white max-w-4xl mx-auto border-gray-300 border-2 rounded-lg shadow-xl">
            <Avatar persona={currentPersona} />
          </div>
        </Windmill.Backdrop>
      )}
      <div className="container m-12 p-12 max-w-4xl mx-auto justify-center grid grid-cols-1 ">
        <p className="text-4xl mb-12 mt-20 font-semibold justify-self-center">
          Data = people
        </p>
        <div className="grid grid-cols-3 gap-4">
          {data.avatarCollection.items.map(({ name, photo }) => (
            <div
              className="flex flex-col justify-center"
              onClick={() => toggleCard(name)}
            >
              <img
                src={photo?.url}
                alt={photo?.description}
                className="h-48 w-72 border-gray-300 border-2 rounded-lg"
              />
              <p className="self-center">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Avatars;
