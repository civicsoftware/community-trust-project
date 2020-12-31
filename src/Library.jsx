import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import CivicLogo from "../public/CIVIC_LOGO.svg";

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

function QuestionOne() {
  return (
    <div
      id="question-card-1"
      className="col-span-1 relative m-4 rounded-lg border-2 shadow-xl bg-gray-50  border-gray-500"
    >
      <div className="relative p-4 rounded-t-lg flex flex-row">
        <div
          className={`inline-block p-1 border-2 rounded-full text-gray bg-gray-100 border-gray-500 `}
        >
          <svg
            className="h-6 w-6"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold">
          What is the data library?
        </h2>
      </div>
      <div className="p-4">
        <p>
          The Community Data Library is a structured and curated collection of
          information about datasets, and is different from a traditional data
          portal because it focuses on context that makes the data useful and
          impactful.
        </p>
        <p>
          Most datasets do not include public visibility into methods of
          collection, how data is used, how people are represented, or why a
          dataset came to exist at all. In fact, finding answers to these
          questions may be harder than you think--- and some of the most
          meaningful information is what answers <i>aren’t</i> there.
        </p>
      </div>
    </div>
  );
}
function QuestionTwo() {
  return (
    <div
      id="question-card-2"
      className="col-span-1 relative m-4 rounded-lg border-2 shadow-xl bg-gray-50  border-gray-500"
    >
      <div className="relative p-4 rounded-t-lg flex flex-row">
        <div
          className={`inline-block p-1 border-2 rounded-full text-gray bg-gray-100 border-gray-500 `}
        >
          <svg
            className="h-6 w-6"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold text-gray-900">
          Who is it for?
        </h2>
      </div>
      <div className="p-4">
        <p>
          For anyone attempting to draw conclusions or perform ethically sound
          analysis, it’s important to have clear and structured models that
          communicate assumptions, gaps, and limitations of data.
        </p>
        <p>
          For data practitioners, structured context and robust metadata saves
          engineering time and helps to ensure results are reliable.
        </p>
        <p>
          But this isn’t just a resource for technical practitioners. The
          Community Data Library is a resource for the public to have
          transparency into systems that are meant to represent them, and
          reinforce the diverse humanity data is meant to capture.
        </p>
      </div>
    </div>
  );
}
function QuestionThree() {
  return (
    <div
      id="question-card-3"
      className="col-span-1 relative m-4 rounded-lg border-2 shadow-xl bg-gray-50  border-gray-500"
    >
      <div className="relative p-4 rounded-t-lg flex flex-row">
        <div
          className={`inline-block p-1 border-2 rounded-full bg-gray-100 border-gray-500 `}
        >
          <svg
            className="h-6 w-6"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold">
          Who can publish to the library?
        </h2>
      </div>
      <div className="p-4">
        <p>
          For <b>organizations</b> whose goal is to cross-collaborate and share
          information, making your metadata more discoverable can help you
          connect to the groups you want to hear from.
        </p>
        <p>
          For our <b>government</b> TRUST partners, who have a commitment to
          serve the public interest equitably, publishing metadata is a practice
          that demonstrates action toward remediating bias and preventing future
          harm.
        </p>
      </div>
    </div>
  );
}
function QuestionFour() {
  return (
    <div
      id="question-card-4"
      className="col-span-1 relative m-4 rounded-lg border-2 shadow-xl bg-gray-50  border-gray-500"
    >
      <div className="relative p-4 rounded-t-lg flex flex-row">
        <div
          className={`inline-block p-1 border-2 rounded-full bg-gray-100 border-gray-500 `}
        >
          <svg
            className="h-6 w-6"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold">
          What is a TRUST Partnership?
        </h2>
      </div>
      <div className="p-4">
        <p>
          TRUST stands for Technology for Relationships, Understanding, Service
          and Transparency. For government agencies, creating public data
          resources that drive equitable outcomes involves more than just
          building technology. In order to create sustainable change,
          modernizing workflows and practices that prioritize inclusion means
          adapting existing data governance models and involves many people and
          sometimes, inflexible systems. Through the TRUST program, CIVIC works
          with partners to integrate standards for structured context
          collaboration and engage community stakeholders.
        </p>
      </div>
    </div>
  );
}
function QuestionFive() {
  return (
    <div
      id="question-card-5"
      className="col-span-1 relative m-4 rounded-lg border-2 shadow-xl 2xl:bg-gray-50   border-gray-500"
    >
      <div className="relative p-4 rounded-t-lg flex flex-row">
        <div
          className={`inline-block p-1 border-2 rounded-full bg-gray-100 border-gray-500 `}
        >
          <svg
            className="h-6 w-6"
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold">
          Who does the library belong to?
        </h2>
      </div>
      <div className="p-4">
        The Community Data Library is designed to build and hold value in the
        public interest, It is a project that is created and facilitated by{" "}
        <a href="www.civicsoftwarefoundation.org">Civic Software Foundation</a>{" "}
        (CIVIC), a 501c3 nonprofit using open source technology. CIVIC’s program
        supports the growth and maintenance of the Community Data Library by
        providing technical frameworks in addition to process support and
        training for our library publishers. The CIVIC Blueprint for
        Context-Aware Systems (link) provides the backbone and principles for
        our collaboration model.
        <p>
          The library does not publish raw data, and all metadata published in
          the library remains in the custodianship of the data owner.
        </p>
      </div>
    </div>
  );
}

function randomBgColor() {
  const colors = ["bg-purple", "bg-pink", "bg-yellow", "bg-blue", "bg-teal"];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// TODO: this is an extremely fast/bad implementation of the 'end' concept
function Book(dataset) {
  let bookElement;

  if (dataset === "end") {
    bookElement = (
      <Link
        to={`/context?data=${dataset?.sys?.id}`}
        className="text-white px-4 py-2"
      >
        <div
          id={dataset}
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial ${randomBgColor()}  shadow-l border-gray-900 hover:opacity-100 `}
        >
          <div className="rounded-t-md bg-white">
            <img
              src={CivicLogo}
              className="w-7 m-1 ml-1"
              alt="Trust Project Logo"
            />
          </div>
          <div className=" p-4 flex-grow bg-gray-900 text-center">
            <p className="font-normal text-8xl mt-8">+</p>
          </div>
          <div className="text-gray-900 text-xs p-1 my-1 text-center font-medium">
            CIVIC STRUCTURED CONTENT
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
          className={`opacity-90 relative m-0 w-48 h-72 rounded-md border-2 flex flex-col flex-initial ${randomBgColor()}  shadow-l border-gray-900 hover:opacity-100 `}
        >
          <div className="rounded-t-md bg-white">
            <img
              src={CivicLogo}
              className="w-7 m-1 ml-1"
              alt="Trust Project Logo"
            />
          </div>
          <div className=" p-4 flex-grow bg-gray-900 text-right">
            <p className="font-semibold"> {dataset?.title}</p>
            <p className="text-xs mt-1">Multnomah County</p>
          </div>
          <div className="text-gray-900 text-xs p-1 my-1 text-center font-medium">
            CIVIC STRUCTURED CONTENT
          </div>
        </div>
      </Link>
    );
  }
  return bookElement;
}

const QUESTIONS = [
  { Component: QuestionOne, title: "What is the data library?" },
  { Component: QuestionTwo, title: "Who is it for?" },
  { Component: QuestionThree, title: "Who can publish to the library?" },
  { Component: QuestionFour, title: "What is a TRUST Partnership?" },
  { Component: QuestionFive, title: "Who does the library belong to?" }
];

function Library() {
  const { loading, error, data } = useQuery(DATASETS);
  const [question, setQuestion] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  return (
    <>
      <div className="m-12 mt-20 mb-36 max-w-7xl mx-auto px-12">
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
          className="flex flex-cols justify-evenly font-medium mt-6"
        >
          {QUESTIONS?.map(({ title }, index) => (
            <button
              className={`font-medium ${
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
          <div className="col-span-1 relative m-4 mt-10 rounded-lg border-2 shadow-xl bg-gray-50  border-gray-500 divide-y-2 divide-gray-500">
            <div className="relative p-4 rounded-t-lg flex flex-row ">
              <h2 className="inline-block mt-1 ml-2 text-xl font-semibold">
                Community Data Library {">"} Region {">"} Multnomah County
              </h2>
            </div>

            <section id="bookshelf">
              <div className="p-4 mr-0 flex flex-row overflow-x-scroll">
                <p className="absolute right-4 top-52 z-20 w-12 h-12 text-gray-900 shadow-2xl">
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
              className="h-7 w-7 mr-1"
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 ">
              Grow the Library
            </h2>
          </div>

          <div className="m-4 grid grid-cols-2 items-start max-w-7xl gap-20 mx-auto">
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">
                Is there a dataset that you would like to see added to a
                collection?
              </h1>
              <p className="mt-4">
                Knowing what types of information community members need and
                care about is important, and we want to hear from you. You can
                send us a request for a dataset or subject area, and we’ll work
                with one of our TRUST Partners or a city, county, or government
                agency that isn’t a partner yet to get the conversation started.
              </p>
              <Windmill.Button className="mt-4 w-80">
                Request a Dataset be Added to the Library
              </Windmill.Button>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">
                Are you an organization that has data you would like to see in
                the Community Data Library?
              </h1>
              <p className="mt-4">
                Creating and publishing open context at the organizational level
                is a powerful way to create value and build connections in
                community. If your organization receives requests for access to
                your data, having metadata context and governance models
                publicly available is a great way to protect integrity of use
                and set guidelines before sharing raw data.
              </p>

              <p className="mt-4">
                We can help you start the process of adding to an existing
                collection or starting your own.
              </p>
              <Windmill.Button className="mt-4 w-72">
                Add Your Data Source to the Library
              </Windmill.Button>
            </div>
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
