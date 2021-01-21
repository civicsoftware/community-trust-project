import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import { gql, useQuery } from "@apollo/client";
import FullLogo from "../public/trust_logo_full.svg";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import LibraryHero from "../public/LIBRARY_HERO.svg";

const PARTNERS = gql`
  query Partners {
    partnerCollection {
      items {
        name
        logo {
          description
          url
        }
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(PARTNERS, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;

  const partners = data?.partnerCollection?.items;

  return (
    <>
      <section
        id="hero"
        className="top-0 pb-20 pt-20 bg-gray-50 border-2 border-gray-300"
      >
        <div className="container flex flex-col gap-12 grid-rows-3 items-start justify-items-stretch mx-auto p-6 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:px-72">
          <div className="col-span-2 w-full lg:w-auto">
            <img
              src={FullLogo}
              className="justify-self-end pb-5 pt-2"
              alt="Trust Project Logo"
            />
            <p className="-mt-9 text-center text-sm">
              <a
                href="http://www.civicsoftwarefoundation.org"
                rel="noreferrer"
                target="_blank"
                className="hover:underline cursor-pointer"
              >
                Built by Civic Software Foundation
              </a>
            </p>
          </div>
          {partners && partners.length > 0 && (
            <div className="col-span-2 p-2 w-full rounded-lg lg:col-span-2 lg:row-start-2 lg:w-auto">
              {partners.map(partner => (
                <img
                  src={partner?.logo?.url}
                  alt={partner?.logo?.description}
                  className="m-auto h-20"
                />
              ))}
            </div>
          )}
          <div className="col-span-2 w-full lg:row-span-2 lg:w-auto">
            <p className="justify-self-start font-rubik prose prose-lg">
              The Multnomah County Community TRUST Project represents a
              commitment from local government to assess institutional bias
              embedded in data models and systems that represent diverse
              identities and lived experiences of the communities they serve.
            </p>
            <div className="flex flex-row self-start justify-self-center pt-4">
              <Windmill.Button className="px-4 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                <a href="mailto:hi@civicsoftwarefoundation.org?subject=Bring TRUST to my Community">
                  Bring TRUST to your community
                </a>
              </Windmill.Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl">
        <section className="my-24" id="library">
          <div className="mx-6 max-w-7xl lg:mx-12 lg:px-12">
            <div className="flex items-center text-gray-900">
              <img
                src={CivicLogo}
                className="mr-3 pt-1 w-7 lg:w-10"
                alt="CIVIC Logo"
              />
              <h2 className="text-2xl font-semibold lg:text-3xl">
                Community Data Library
              </h2>
            </div>
            <p className="block mt-4 font-rubik prose prose-lg">
              The Community Data Library is a resource that reflects an active
              anti-oppression practice, and a structured process of creating
              metadata context for datasets that can be curated collaboratively
              and shared publicly.
            </p>
          </div>
          <div className="flex flex-col mt-4 mx-6 pb-0 max-w-7xl text-4xl lg:mx-12 lg:px-12">
            <img
              src={LibraryHero}
              className="w-full"
              alt="Community Data Library Graphic"
            />
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/blueprint">
                <Windmill.Button
                  block
                  className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap"
                >
                  Read the CIVIC Blueprint for Context-Aware Systems
                </Windmill.Button>
              </Link>
            </div>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/library">
                <Windmill.Button className="inline-flex items-start px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Explore the Data Library
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="compass">
          <div className="mx-6 max-w-7xl lg:mx-12 lg:px-12">
            <div className="flex items-center mb-4 text-blue">
              <svg
                className="mr-3 w-7 h-7 text-blue-dark lg:w-10 lg:h-10"
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
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                Everything is Intersectional
              </h2>
            </div>
            <p className="block font-rubik prose prose-lg">
              Recognition of how systemic forces contribute to bias and can
              perpetuate harm is an essential (and complex) part of
              understanding how to do work in our current environment.
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/compass">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Navigate the Compass of Oppression
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="stakeholders">
          <div className="mx-6 max-w-7xl lg:m-12 lg:px-12">
            <div className="flex items-center mb-4 text-yellow-dark">
              <svg
                className="mr-3 w-7 h-7 lg:w-10 lg:h-10"
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
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                Story-Centered Stakeholders
              </h2>
            </div>
            <p className="block font-rubik prose prose-lg">
              Context-aware systems are built on a collaborative model that
              places lived experiences at the center of impact.{" "}
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/avatars">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Get to Know the Actors
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="flower">
          <div className="mx-6 max-w-7xl lg:m-12 lg:px-12">
            <div className="flex items-center mb-4 text-pink-dark">
              <svg
                className="mr-3 w-7 h-7 lg:w-10 lg:h-10"
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
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                Plant the Seed of Change
              </h2>
            </div>
            <p className="block font-rubik prose prose-lg">
              Participation, acknowledgment, accountability are the foundation
              of the theory to drive long-term transformation.{" "}
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/flower">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Explore the Flower of Hope
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section
        id="footer"
        className="mx-auto py-12 bg-gray-50 border-2 border-gray-300"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mx-6 max-w-7xl font-rubik lg:m-12 lg:px-12 prose">
            <p className="block">
              The Community TRUST Project is built and maintained by{" "}
              <a
                className="hover:text-teal-dark"
                href="https://www.civicsoftwarefoundation.org/"
              >
                Civic Software Foundation
              </a>{" "}
              and{" "}
              <a href="/attribution" className="hover:text-teal-dark">
                inspired by many others
              </a>
              .
            </p>
            <p className="block">
              <a
                className="hover:text-teal-dark"
                href="mailto:hi@civicsoftwarefoundation.org"
              >
                Contact us
              </a>{" "}
              for questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
