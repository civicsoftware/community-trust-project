/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { default as Windmill } from "@windmill/react-ui";
import FlowerSvg from "../public/CIVIC_FLOWER.svg";

function Flower() {
  return (
    <div className="m-12 mb-36 mt-20 mx-auto px-6 max-w-4xl lg:px-12">
      <div className="flex items-center mb-4 text-gray-900">
        <svg
          className="mr-3 w-6 h-6"
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
        <h2 className="text-2xl font-semibold">Flower of Hope</h2>
      </div>
      <section className="font-rubik prose">
        <p>
          The Flower of Hope (FoH) is CIVIC’s version of a{" "}
          <b>theory of change</b> that serves as a metaphor to emphasize the{" "}
          <b>dynamic aspects</b> of change in place of more linear frameworks
          that make it difficult to see the interconnected elements of
          transformation. The Flower represents a living organism that must be
          nurtured, supported to flourish, eventually &quot;blossoming&quot;
          into its final state. Within the FoH, &quot;theory&quot; meets action,
          where{" "}
          <i>
            <b>&quot;actors,&quot;</b>
          </i>{" "}
          in the form of pollinating bees, move from petal to petal and
          transferring (pollinating) the flower’s system with information,
          experience, and more. These{" "}
          <i>
            <b>&quot;petals&quot;</b>
          </i>{" "}
          comprised of goals, objectives, and tactics are the manifestations of
          what must be done for change to flourish and ultimately leads to the
          implementation of the petals’ functions.
        </p>
        <p className="block mt-6">
          The Flower of Hope hinges on the idea that the future can only be
          crafted through active collaboration and agreement while leveraging
          data to create visibility into the experiences of the actors within
          the system. Accountability is inherently a requirement for success and
          informed, and context-aware systems are the driving force within the
          data constructs that we see.
        </p>
        <p className="block mt-6">
          At the center of the Flower of Hope, we see our shared vision, which
          holds the idea that{" "}
          <i>
            &quot;justice is the foundational understanding of a society&quot;
          </i>{" "}
          at the center of our blossoming theory of change.
        </p>
      </section>
      <div className="flex flex-row mt-6 font-semibold">
        <Link to="/blueprint">
          <Windmill.Button className="inline-flex items-center justify-center px-4 py-2 text-white whitespace-nowrap text-base font-medium border border-transparent rounded-md shadow-sm">
            Read more in the CIVIC Blueprint
          </Windmill.Button>
        </Link>
      </div>
      <object
        data={FlowerSvg}
        type="image/svg+xml"
        className="mt-10"
        aria-label="Flower of Hope"
      />
    </div>
  );
}

export default Flower;
