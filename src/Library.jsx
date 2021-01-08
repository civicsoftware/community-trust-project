import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import { QUESTIONS } from "./LibraryQuestions";
import LibraryOrganizationDataSourceCTA from "./LibraryOrganizationDataSourceCTA";
import LibraryDataSourceRequestCTA from "./LibraryDataSourceRequestCTA";

const DATASETS = gql`
  query {
    datasetCollection(limit: 20) {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`;

// TODO: this is an extremely fast/bad implementation of the 'end' concept
function Book(dataset) {
  let bookElement;

  if (dataset === "end") {
    bookElement = (
      <Link to="/context" className="px-4 py-2 text-white">
        <div
          id={dataset}
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial shadow-lg border-gray-300 hover:opacity-100 `}
        >
          <div className="bg-white rounded-t-md">
            <img
              src={CivicLogo}
              className="m-1 ml-1 w-7"
              alt="Trust Project Logo"
            />
          </div>
          <div className="flex-grow p-4 text-right text-black bg-white">
            <p className="font-semibold">Your Data</p>
            <p className="mt-1 text-xs">Your Organization</p>
          </div>
          <div className="my-1 p-1 text-center text-gray-900 text-xs font-medium">
            CIVIC STRUCTURED CONTEXT
          </div>
        </div>
      </Link>
    );
  } else {
    bookElement = (
      <Link
        to={`/context?data=${dataset?.sys?.id}`}
        className="px-4 py-2 text-white"
      >
        <div
          id={dataset}
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial shadow-lg border-gray-300 hover:opacity-100 `}
        >
          <div className="bg-white rounded-t-md">
            <img
              src={CivicLogo}
              className="m-1 ml-1 w-7"
              alt="Trust Project Logo"
            />
          </div>
          <div className="flex-grow p-4 text-right text-black bg-white">
            <p className="font-semibold"> {dataset?.title}</p>
            <p className="mt-1 text-xs">Multnomah County</p>
          </div>
          <div className="my-1 p-1 text-center text-gray-900 text-xs font-medium">
            CIVIC STRUCTURED CONTEXT
          </div>
        </div>
      </Link>
    );
  }
  return bookElement;
}

function Library() {
  const { loading, error, data } = useQuery(DATASETS);
  const [question, setQuestion] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  return (
    <>
      <div className="m-12 mx-auto px-6 py-12 max-w-4xl lg:px-12">
        <div className="flex flex-col text-gray-900">
          <div className="flex flex-row">
            <div className="flex items-center text-gray-900">
              <img
                src={CivicLogo}
                className="mr-3 w-6 lg:w-8"
                alt="Trust Project Logo"
              />
              <h2 className="text-2xl font-semibold lg:text-3xl">
                Community Data Library
              </h2>
            </div>
          </div>
          <p className="text-xl">A Platform for Open Context</p>
          {/* <p className="mt-4 text-xl">A Platform for Open Context</p> */}
        </div>

        <section id="about" className="py-12">
          <div className="flex items-center">
            <svg
              className="mb-1 mr-1 w-7 h-7 text-purple-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <h2 className="text-gray-900 text-2xl font-semibold">
              About the Library
            </h2>
          </div>
          <div className="flex flex-col flex-wrap gap-4 justify-around mt-6 font-medium lg:flex-row lg:gap-x-6">
            {QUESTIONS?.map(({ title, color }, index) => (
              <button
                className={`font-medium text-lg border-b-4 border-${color} w- ${
                  index === question ? "text-teal-900" : ""
                }`}
                key="title"
                type="button"
                onClick={() => setQuestion(index)}
              >
                {title}
              </button>
            ))}
          </div>

          <div className="grid items-stretch mt-6">
            {QUESTIONS?.[question]?.Component()}
          </div>
        </section>

        <section id="fake-breadcrumb" className="py-12">
          <div className="flex items-center">
            <svg
              className="mr-1 w-7 h-7 text-pink-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Explore the Library
            </h2>
          </div>
          <div className="relative col-span-1 mt-10 bg-gray-50 border-gray-500 rounded-lg shadow-lg">
            <div className="relative flex flex-row p-4 bg-orange-50 rounded-t-lg">
              <h2 className="inline-block ml-2 mt-1 text-xl font-semibold">
                Community Data Library {">"} Region {">"} Multnomah County
              </h2>
            </div>

            <section id="bookshelf">
              <div className="flex flex-row mr-0 p-4 overflow-x-scroll">
                <p className="absolute z-20 right-4 top-56 bg-none rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </p>
                {data?.datasetCollection?.items?.map(dataset => Book(dataset))}
                {Book("end")}
              </div>
            </section>
          </div>
        </section>

        <section id="CTAs" className="py-12">
          <div className="flex items-center">
            <svg
              className="mr-1 w-7 h-7 text-yellow-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-gray-900 text-2xl font-semibold">
              Grow the Library
            </h2>
          </div>

          <div className="grid gap-20 items-start m-4 mx-auto max-w-7xl lg:grid-cols-2">
            <LibraryDataSourceRequestCTA />
            <LibraryOrganizationDataSourceCTA />
          </div>
        </section>
      </div>

      {/* <div className="mt-8 font-semibold flex flex-row">
        <p className="pt-2">Navigate the Compass of Oppression:</p>
        <Link to="/compass">
          <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
            Click here
          </Windmill.Button>
        </Link>
      </div> */}
    </>
  );
}

export default Library;
