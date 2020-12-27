import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { default as Windmill } from "@windmill/react-ui";
import Avatar from "./Avatar";

const AVATARS = gql`
  query {
    avatarCollection(limit: 20) {
      items {
        name
      }
    }
  }
`;

// TODO: fix error is back button pressed when modal is open and renavigated to
function Avatars() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarName, setAvatarName] = useState();
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  const { loading, error, data } = useQuery(AVATARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <strong>AVATARS</strong>
      <ul>
        {data.avatarCollection.items.map(({ name }) => (
          <li>
            <button
              onClick={() => {
                setAvatarName(name);
                openModal();
              }}
              type="button"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      {/* Modals for data submission forms */}
      <Windmill.Modal isOpen={isModalOpen} onClose={closeModal}>
        <Windmill.ModalHeader>{avatarName}</Windmill.ModalHeader>
        <Avatar name={avatarName} />
        <Windmill.ModalFooter>
          <Windmill.Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Close
          </Windmill.Button>
        </Windmill.ModalFooter>
      </Windmill.Modal>
      {/* End modals */}
    </>
  );
}

export default Avatars;
