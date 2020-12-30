import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";
// import Compass from "./Compass";
import FullLogo from "../public/trust_logo_full.svg";

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
      <div className="container mx-auto m-6 mt-20 px-4 flex flex-col">
        <section id="hero" className="">
          <div className="flex flex-col justify-center text-center">
            <img src={FullLogo} className={"w-2/5 pb-5 self-center"} />
            <p className="text-2xl">
              The Community TRUST Project represents a commitment from local
              government to assess institutional bias embedded in data models and
              systems that represent diverse identities and lived experiences of
              the communities they serve.
            </p>
            <p className="text-xl mb-2 mt-12 font-semibold self-center">
              Bring TRUST to your community.
            </p>
            <Windmill.Button
              onClick={openModal}
              className="whitespace-nowrap inline-flex self-center w-2/5 px-4 py-2 m-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
            >
              Click here to get involved
            </Windmill.Button>
          </div>
        </section>

        <section id="blueprint">
          <div className="bg-gray-50 mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4">
              <h2 className="text-2xl text-gray-900">
                Community Library of Context
              </h2>
              <p className="block text-pink">
                  The Community Library of Context is a resource that reflects
                  an active anti-oppression practice, and a structured process
                  of creating metadata context for datasets that can be curated
                  collaboratively and shared publicly.
              </p>
              <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                Learn more about the CIVIC Blueprint for Context-Aware Systems
                <Windmill.Button
                  onClick={openModal}
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 m-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-dark hover:bg-pink-light"
                >
                  Click here
                </Windmill.Button>
              </div>
            </div>
          </div>
        </section>

        <section id="library">
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
        </section>

        <section id="compass"></section>

        <section id="stakeholders"></section>

        <section id="flower"></section>
      </div>

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
