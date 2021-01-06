import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import FullLogo from "../public/trust_logo_full.svg";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import LibraryHero from "../public/LIBRARY_HERO.svg";

function Home() {
  return (
    <>
      <section
        id="hero"
        className="bg-gray-50 border-gray-300 border-2 top-0 pt-20 pb-20"
      >
        <div className="container mx-auto lg:px-72 p-6 grid lg:grid-cols-4 gap-12 justify-items-stretch items-start">
          <div className="col-span-2">
            <img
              src={FullLogo}
              className="pb-5 justify-self-end pt-2"
              alt="Trust Project Logo"
            />
            <p className="text-sm -mt-9">
              <a
                href="http://www.civicsoftwarefoundation.org"
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer hover:underline"
              >
                Built by Civic Software Foundation
              </a>
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-xl justify-self-start">
              The Community TRUST Project represents a commitment from local
              government to assess institutional bias embedded in data models
              and systems that represent diverse identities and lived
              experiences of the communities they serve.
            </p>
            <div className="justify-self-center self-start pt-4 pb-2 mb-4 flex flex-row">
              <Windmill.Button className="lg:whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                <a href="mailto:hi@civicsoftwarefoundation.org?subject=Bring TRUST to my Community">
                  Bring TRUST to your community
                </a>
              </Windmill.Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <section id="blueprint">
          <div className="lg:mx-12 mx-6 max-w-7xl lg:px-12 py-12">
            <div className="flex items-center text-gray-900 mb-4">
              {/* <svg
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
              </svg> */}
              <img src={CivicLogo} className="w-7 pt-1 mr-3" alt="CIVIC Logo" />
              <h2 className="text-2xl font-semibold">
                TRUST Community Data Library
              </h2>
            </div>
            <p className="block">
              The TRUST Community Data Library is a resource that reflects an
              active anti-oppression practice, and a structured process of
              creating metadata context for datasets that can be curated
              collaboratively and shared publicly.
            </p>
          </div>
        </section>

        <section id="library">
          <div className="text-4xl mx-6 lg:mx-12 -mt-6 max-w-7xl lg:px-12 pb-0 flex flex-col">
            <img
              src={LibraryHero}
              className="w-full"
              alt="Community Data Library Graphic"
            />
            <div className="mt-6 font-semibold flex flex-row">
              <Link to="/blueprint">
                <Windmill.Button
                  block
                  className="lg:whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                >
                  Read the CIVIC Blueprint for Context-Aware Systems
                </Windmill.Button>
              </Link>
            </div>
            <div className="mt-6 font-semibold flex flex-row">
              <Link to="/library">
                <Windmill.Button className="lg:whitespace-nowrap inline-flex items-start px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Explore the Data Library
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="compass">
          <div className="mx-6 my-12 lg:m-12 mt-24 max-w-7xl lg:px-12">
            <div className="flex items-center text-blue mb-4">
              <svg
                className="h-7 w-7 mr-3 text-blue-dark"
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
              <h2 className="text-2xl font-semibold text-gray-900 ">
                Everything is Intersectional
              </h2>
            </div>
            <p className="block">
              Recognition of how systemic forces contribute to bias and can
              perpetuate harm is an essential (and complex) part of
              understanding how to do work in our current environment.
            </p>
            <div className="mt-6 font-semibold flex flex-row">
              <Link to="/compass">
                <Windmill.Button className="lg:whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Navigate the Compass of Oppression
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="stakeholders">
          <div className="mx-6 my-12 lg:m-12 mt-24 max-w-7xl lg:px-12">
            <div className="flex items-center text-yellow-dark mb-4">
              <svg
                className="h-7 w-7 mr-3"
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
              <h2 className="text-2xl font-semibold text-gray-900 ">
                Story-Centered Stakeholders
              </h2>
            </div>
            <p className="block">
              Context-aware systems are built on a collaborative model that
              places lived experiences at the center of impact.{" "}
            </p>
            <div className="mt-6 font-semibold flex flex-row">
              <Link to="/avatars">
                <Windmill.Button className="lg:whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Get to Know the Actors
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="flower">
          <div className="mx-6 my-12 lg:m-12 mt-24 max-w-7xl lg:px-12">
            <div className="flex items-center text-pink-dark mb-4">
              <svg
                className="h-7 w-7 mr-3"
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
              <h2 className="text-2xl font-semibold text-gray-900 ">
                Plant the Seed of Change
              </h2>
            </div>
            <p className="block">
              Participation, acknowledgment, accountability are the foundation
              of the theory to drive long-term transformation.{" "}
            </p>
            <div className="mt-6 font-semibold flex flex-row">
              <Link to="/flower">
                <Windmill.Button className="lg:whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
                  Explore the Flower of Hope
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
          <p>
            The Community TRUST Project is built and maintained by Civic
            Software Foundation and{" "}
            <a
              href="/attribution"
              className="inline text-teal-dark hover:text-teal-light"
            >
              inspired by many others
            </a>
            .
          </p>
          <p>
            <a
              className="inline text-teal-dark hover:text-teal-light"
              href="mailto:hi@civicsoftwarefoundation.org"
            >
              Contact us
            </a>{" "}
            for questions.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
