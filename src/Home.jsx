import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <section
        id="hero"
        className="bg-gray-50 border-gray-300 border-2 top-0 pt-20 pb-16"
      >
        <div className="container mx-auto px-36 flex flex-col justify-center text-center">
          <img
            src={FullLogo}
            className="w-1/3 pb-5 self-center"
            alt="Trust Project Logo"
          />
          <p className="text-2xl px-24 self-center">
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
            className="whitespace-nowrap inline-flex self-center w-2/5 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
          >
            Click here to get involved
          </Windmill.Button>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <section id="blueprint">
          <div className="m-12 max-w-7xl p-12">
            <div className="flex items-center text-gray-900 mb-4">
              <svg
                className="h-6 w-6 mr-3"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h2 className="text-2xl font-semibold">
                Community Library of Context
              </h2>
            </div>
            <p className="block">
              The Community Library of Context is a resource that reflects an
              active anti-oppression practice, and a structured process of
              creating metadata context for datasets that can be curated
              collaboratively and shared publicly.
            </p>
            <div className="mt-8 font-semibold flex flex-row">
              <p className="pt-2">
                Learn more about the CIVIC Blueprint for Context-Aware Systems:
              </p>
              <Link to="/blueprint">
                <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Click here
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="library">
          <div className="text-4xl m-12 max-w-7xl p-12 flex flex-col items-center">
            <a
              href="/library"
              className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
            >
              → Explore the Data Library ←
            </a>
            <p className="text-xl justify-self-center">
              (there is a cool graphic here)
            </p>
          </div>
        </section>

        <section id="compass">
          <div className="m-12 mt-24 max-w-7xl px-12">
            <div className="flex items-center text-gray-900 mb-4">
              <svg
                className="h-6 w-6 mr-3"
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
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <h2 className="text-2xl font-semibold">
                Everything is Intersectional
              </h2>
            </div>
            <p className="block">
              Recognition of how systemic forces contribute to bias and can
              perpetuate harm is an essential (and complex) part of
              understanding how to do work in our current environment.
            </p>
            <div className="mt-8 font-semibold flex flex-row">
              <p className="pt-2">Navigate the Compass of Oppression:</p>
              <Link to="/compass">
                <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Click here
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="stakeholders">
          <div className="m-12 mt-24 max-w-7xl px-12">
            <div className="flex items-center text-gray-900 mb-4">
              <svg
                className="h-6 w-6 mr-3"
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
            <p className="block">
              Context-aware systems are built on a collaborative model that
              places lived experiences at the center of impact.{" "}
            </p>
            <div className="mt-8 font-semibold flex flex-row">
              <p className="pt-2">Get to know the actors:</p>
              <Link to="/compass">
                <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Click here
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="flower">
          <div className="m-12 mt-24 max-w-7xl px-12">
            <div className="flex items-center text-gray-900 mb-4">
              <svg
                className="h-6 w-6 mr-3"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-2xl font-semibold">
                Plant the Seed of Change
              </h2>
            </div>
            <p className="block">
              Participation, acknowledgment, accountability are the foundation
              of the theory to drive long-term transformation.{" "}
            </p>
            <div className="mt-8 font-semibold flex flex-row">
              <p className="pt-2">Explore the Flower of Hope:</p>
              <Link to="/flower">
                <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Click here
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section
        id="footer"
        className="bg-gray-50 border-gray-300 border-2 mt-40 pt-12 pb-40"
      >
        <div className="flex flex-col justify-center text-center">
          This is a footer.
        </div>
      </section>

      {/* Modals for data submission forms */}
      <Windmill.Modal isOpen={isModalOpen} onClose={closeModal}>
        <Windmill.ModalHeader>Contact Us</Windmill.ModalHeader>
        <Windmill.ModalBody>
          This is a modal that will have a contact form on it.
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
