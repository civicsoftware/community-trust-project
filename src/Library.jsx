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
      <Link to="/context" className="text-white px-4 py-2">
        <div
          id={dataset}
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial shadow-lg border-gray-300 hover:opacity-100 `}
        >
          <div className="rounded-t-md bg-white">
            <img
              src={CivicLogo}
              className="w-7 m-1 ml-1"
              alt="Trust Project Logo"
            />
          </div>
          <div className=" p-4 flex-grow bg-white text-black text-right">
            <p className="font-semibold">Your Data</p>
            <p className="text-xs mt-1">Your Organization</p>
          </div>
          <div className="text-gray-900 text-xs p-1 my-1 text-center font-medium">
            CIVIC STRUCTURED CONTEXT
          </div>
        </div>
      </Link>
    );
  } else {
    bookElement = (
      <Link
        to={`/context?data=${dataset?.sys?.id}`}
        className="text-white px-4 py-2"
      >
        <div
          id={dataset}
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial shadow-lg border-gray-300 hover:opacity-100 `}
        >
          <div className="rounded-t-md bg-white">
            <img
              src={CivicLogo}
              className="w-7 m-1 ml-1"
              alt="Trust Project Logo"
            />
          </div>
          <div className=" p-4 flex-grow bg-white text-black text-right">
            <p className="font-semibold"> {dataset?.title}</p>
            <p className="text-xs mt-1">Multnomah County</p>
          </div>
          <div className="text-gray-900 text-xs p-1 my-1 text-center font-medium">
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
      <div className="m-12 mt-20 mb-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col text-gray-900 mb-4">
          <div className="flex flex-row">
            <div className="flex items-center text-gray-900">
              <img
                src={CivicLogo}
                className="w-7 pt-1 mr-3"
                alt="Trust Project Logo"
              />
              <h2 className="text-2xl font-semibold">Community Data Library</h2>
            </div>
          </div>
          <p className="text-xl">A Platform for Open Context</p>
        </div>

        <section
          id="questions"
          className="flex flex-col gap-4 lg:flex-row justify-evenly font-medium mt-20"
        >
          {QUESTIONS?.map(({ title, color }, index) => (
            <button
              className={`font-medium border-b-4 border-${color} w- ${
                index === question ? "text-teal-900" : ""
              }`}
              key="title"
              type="button"
              onClick={() => setQuestion(index)}
            >
              {title}
            </button>
          ))}
        </section>

        <section id="answer" className="grid items-stretch">
          {QUESTIONS?.[question]?.Component()}
        </section>

        <section id="fake-breadcrumb">
          <div className="col-span-1 relative lg:m-4 mt-10 rounded-lg shadow-lg bg-gray-50  border-gray-500">
            <div className="relative p-4 rounded-t-lg flex flex-row bg-orange-50 ">
              <h2 className="inline-block mt-1 ml-2 text-xl font-semibold">
                Community Data Library {">"} Region {">"} Multnomah County
              </h2>
            </div>

            <section id="bookshelf">
              <div className="p-4 mr-0 flex flex-row overflow-x-scroll">
                <p className="absolute right-4 top-52 z-20 w-12 h-12 text-gray-500 shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

        <section id="CTAs">
          <div className="flex items-center text-pink mb-4 mt-20">
            <svg
              className="h-7 w-7 mr-1 text-yellow-900"
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
            <h2 className="text-2xl font-semibold text-gray-900 ">
              Grow the Library
            </h2>
          </div>

          <div className="m-4 grid lg:grid-cols-2 items-start max-w-7xl gap-20 mx-auto">
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
