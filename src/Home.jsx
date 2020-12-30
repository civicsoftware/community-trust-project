import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";
import Compass from "./Compass";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {/* Hero Card */}
      <div className="container mx-auto m-6 px-4 grid grid-cols-1 justify-center">
        <p className="text-6xl mb-4 mt-20 font-semibold justify-self-center">
          Community data, in context.
        </p>
        <div className="text-xl justify-self-center">
          This is a very good mission statement that is concise and inspiring.
          Collaboration to center community.
        </div>
        <div className="text-4xl justify-self-center mt-40">
          <a
            href="/library"
            className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
          >
            → Explore the Data Library ←
          </a>
          <p className="text-xl justify-self-center">
            (maybe there is a cool graphic here)
          </p>
        </div>

        {/* <Compass /> */}

        <div className="bg-gray-50 mt-40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                We&apos;re building something important.
              </span>
              <span className="block text-indigo-600">Want to be a part?</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
              <Windmill.Button
                onClick={openModal}
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 m-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contribute Your Data
              </Windmill.Button>
              <Windmill.Button
                onClick={openModal}
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 m-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Request a Dataset
              </Windmill.Button>
            </div>
          </div>
        </div>
      </div>
      {/* End hero card */}

      {/* Modals for data submission forms */}
      <Windmill.Modal isOpen={isModalOpen} onClose={closeModal}>
        <Windmill.ModalHeader>Request a Dataset</Windmill.ModalHeader>
        <Windmill.ModalBody>
          This is a very neat way to request a dataset. It will probably have
          some form fields and stuff.
        </Windmill.ModalBody>
        <Windmill.ModalFooter>
          <Windmill.Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Cancel
          </Windmill.Button>
          <Windmill.Button className="w-full sm:w-auto">Accept</Windmill.Button>
        </Windmill.ModalFooter>
      </Windmill.Modal>
      {/* End modals */}
    </>
  );
}

export default Home;
