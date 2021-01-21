import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
// import FullLogo from "../public/trust_logo_full.svg";
import CivicLogo from "../public/CIVIC_LOGO.svg";
import Origin from "../public/ORIGIN_LG.svg";
import Archive from "../public/ARCHIVE_LG.svg";
import Power from "../public/POWER_LG.svg";
// import LibraryHero from "../public/LIBRARY_HERO.svg";

function Home() {
  return (
    <>
      {/* <section
        id="hero"
        className="top-0 pb-20 pt-20 bg-gray-50 border-2 border-gray-300"
      >
        <div className="container grid gap-12 items-start justify-items-stretch mx-auto p-6 lg:grid-cols-4 lg:px-72">
          <div className="col-span-2">
            <img
              src={FullLogo}
              className="justify-self-end pb-5 pt-2"
              alt="Trust Project Logo"
            />
            <p className="-mt-9 text-sm">
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
          <div className="col-span-2">
            <p className="justify-self-start font-rubik prose prose-lg">
              The Community TRUST Project represents a commitment from local
              government to assess institutional bias embedded in data models
              and systems that represent diverse identities and lived
              experiences of the communities they serve.
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
      </section> */}

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
                CIVIC Data Library Of Context
              </h2>
            </div>
            <p className="block mt-4 font-rubik prose prose-lg">
              The CIVIC Data Library Of Context is a resource that reflects an
              active anti-oppression practice, and a structured process of
              creating metadata context for datasets that can be curated
              collaboratively and shared publicly.
            </p>
          </div>
          <div className="flex flex-col mt-4 mx-6 pb-0 max-w-7xl text-4xl lg:mx-12 lg:px-12">
            {/* <img
              src={LibraryHero}
              className="w-full"
              alt="Community Data Library Graphic"
            /> */}
            {/* <div className="flex flex-row mt-6 font-semibold">
              <Link to="/blueprint">
                <Windmill.Button
                  block
                  className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap"
                >
                  Read the CIVIC Blueprint for Context-Aware Systems
                </Windmill.Button>
              </Link>
            </div> */}
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/context">
                <Windmill.Button className="inline-flex items-start px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  View Sample Schema
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="compass">
          <div className="mx-6 max-w-7xl lg:mx-12 lg:px-12">
            <div className="flex items-center mb-4">
              <img
                src={Origin}
                className="mr-3 pt-1 w-14 lg:w-20"
                alt="ORIGIN Logo"
              />
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                For Governments
              </h2>
            </div>
            <h3 className="text-gray-700 text-xl font-medium lg:text-2xl">
              Open, Responsive, Iterative Governance (centering) Inclusive
              Narratives
            </h3>
            <p className="block font-rubik prose prose-lg">
              Mint cookies and cream pistachio cake batter chocolate french
              vanilla. Dark chocolate cookies and cream chocolate chip
              strawberry rocky road vanilla french vanilla chocolate coffee
              pistachio french vanilla.
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/compass">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Get Involved
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="stakeholders">
          <div className="mx-6 max-w-7xl lg:m-12 lg:px-12">
            <div className="flex items-center mb-4">
              <img
                src={Archive}
                className="mr-3 pt-1 w-14 lg:w-20"
                alt="ARCHIVE Logo"
              />
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                For Academia
              </h2>
            </div>
            <h3 className="text-gray-700 text-xl font-medium lg:text-2xl">
              Accessible, Reviewable, Collaborative, Historically Inclusive,
              Validated, Exchange
            </h3>
            <p className="block font-rubik prose prose-lg">
              Peanut butter pistachio chocolate cake batter strawberry chocolate
              cake batter mint chocolate chip chocolate strawberry cookies and
              cream french vanilla french vanilla pistachio.
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/avatars">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Get Involved
                </Windmill.Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="my-24" id="flower">
          <div className="mx-6 max-w-7xl lg:m-12 lg:px-12">
            <div className="flex items-center mb-4">
              <img
                src={Power}
                className="mr-3 pt-1 w-14 lg:w-20"
                alt="Power Logo"
              />
              <h2 className="text-gray-900 text-2xl font-semibold lg:text-3xl">
                For Organizations
              </h2>
            </div>
            <h3 className="text-gray-700 text-xl font-medium lg:text-2xl">
              Preventing Oppression With Equitable Remediation
            </h3>
            <p className="block font-rubik prose prose-lg">
              Coffee mint chocolate chip chocolate chip pistachio chocolate,
              cookies and cream mint chocolate chip cookies and cream cake
              batter french vanilla.
            </p>
            <div className="flex flex-row mt-6 font-semibold">
              <Link to="/flower">
                <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white text-base font-medium border border-transparent rounded-md shadow-sm lg:whitespace-nowrap">
                  Get Involved
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
              The CIVIC Data Library is built and maintained by{" "}
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
