import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";

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

function Library() {
  const { loading, error, data } = useQuery(DATASETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  return (
    <>
      <div className="m-12 mt-20 mb-36 max-w-7xl mx-auto px-12">
        <div className="flex flex-col text-gray-900 mb-4">
          <div className="flex flex-row">
            <svg
              className="h-6 w-6 mr-2"
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
            <h2 className="text-2xl font-semibold -mt-1">
              CIVIC Community Data Library
            </h2>
          </div>
          <p className="text-xl">Mission Statement</p>
        </div>

        <section
          id="question-cards-row-1"
          className="grid grid-cols-3 items-stretch"
        >
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
                The Community Data Library is a structured and curated
                collection of information about datasets, and is different from
                a traditional data portal because it focuses on context that
                makes the data useful and impactful.
              </p>
              <p>
                Most datasets do not include public visibility into methods of
                collection, how data is used, how people are represented, or why
                a dataset came to exist at all. In fact, finding answers to
                these questions may be harder than you think--- and some of the
                most meaningful information is what answers <i>aren’t</i> there.
              </p>
            </div>
          </div>

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
                For anyone attempting to draw conclusions or perform ethically
                sound analysis, it’s important to have clear and structured
                models that communicate assumptions, gaps, and limitations of
                data.
              </p>
              <p>
                For data practitioners, structured context and robust metadata
                saves engineering time and helps to ensure results are reliable.
              </p>
              <p>
                But this isn’t just a resource for technical practitioners. The
                Community Data Library is a resource for the public to have
                transparency into systems that are meant to represent them, and
                reinforce the diverse humanity data is meant to capture.
              </p>
            </div>
          </div>

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
                For <b>organizations</b> whose goal is to cross-collaborate and
                share information, making your metadata more discoverable can
                help you connect to the groups you want to hear from.
              </p>
              <p>
                For our <b>government</b> TRUST partners, who have a commitment
                to serve the public interest equitably, publishing metadata is a
                practice that demonstrates action toward remediating bias and
                preventing future harm.
              </p>
            </div>
          </div>
        </section>

        <section id="question-cards-row-2" className="grid grid-cols-2 mx-auto">
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
              <p>FILLER TEXT</p>
              <p>FILLER TEXT</p>
            </div>
          </div>

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
              <p>FILLER TEXT</p>
              <p>FILLER TEXT</p>
            </div>
          </div>
        </section>

        <section id="responsive-text">
          <div className="my-20">
            <p className="text-l">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </section>

        <section id="fake-breadcrumb">
          <div className="mt-20 p-6 rounded-lg border-2 border-gray-500">
            <p className="text-3xl font-bold">
              This {">"} Is {">"} A {">"} Fake {">"} Breadcrumb {">"} Nav {"> "}
              Multnomah County
            </p>

            <section id="bookshelf">
              <div className="container mt-4 flex flex-row max-w-7xl">
                {data?.datasetCollection?.items?.map(dataset => (
                  <Link
                    to={`/context?data=${dataset?.sys?.id}`}
                    className="text-pink-500 px-4 py-2 hover:text-gray-900"
                  >
                    <div
                      id={dataset}
                      className="relative p-4 m-0 rounded-lg border-2 flex-initial bg-pink-200 border-pink-500"
                    >
                      {dataset?.title}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="CTAs">
          <div className="m-20 grid grid-cols-2 items-start max-w-7xl gap-20 mx-auto">
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
              <Windmill.Button className="mt-4 w-32">
                Click here
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
              <Windmill.Button className="mt-4 w-32">
                Click here
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
