/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
// import { Link } from "react-router-dom";
// import { default as Windmill } from "@windmill/react-ui";
import FlowerSvg from "../public/CIVIC_FLOWER.svg";

function Flower() {
  return (
    <div className="m-12 mt-20 mb-36 max-w-4xl mx-auto px-12">
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
        <h2 className="text-2xl font-semibold">Flower of Hope</h2>
      </div>
      <p className="block">
        Flower of Hope is our version of a theory of change. Instead of creating
        a linear flow chart, we wanted to use flower as a metaphor to emphasize
        the dynamic aspect of change. A flower is a living and breathing unit,
        growing and blossoming over time, where &quot;theory&quot; meets
        actionable steps so that a future where the flower of hope can blossom
        can be created. We also do acknowledge that change takes time and
        commitment. A better future is possible through collaborative actions
        which the Flower of Hope can inform.
      </p>
      <p className="block mt-6">
        Having our main vision -- “justice as the foundational understanding of
        a society” -- at the center shows we are hopeful; however, we are not
        ignorant. We do acknowledge the pain and suffering systems of
        oppressions have caused. We want to plant positive imagination into the
        gaps we&apos;ve identified via the stories of those whose voices have
        been oppressed for a long time.
      </p>
      <p className="block mt-6">
        The Flower of Hope helps you see the power data has and can answer many
        questions including:
        <ul className="pl-5">
          <li className="list-disc">
            How does change happen toward creating a better society for
            everyone?
          </li>
          <li className="list-disc">
            {" "}
            What are the elements that make change happen?
          </li>
          <li className="list-disc">
            What is the role of data in social change and how it can accelerate
            change through visibility?
          </li>
          <li className="list-disc">
            Why do we need a holistic and collaborative approach to provide
            social justice?
          </li>
          <li className="list-disc">
            What does it take to maintain the blossoming of the Flower of Hope?
          </li>
        </ul>
      </p>
      <img src={FlowerSvg} className="mt-20" alt="Flower of Hope" />

      {/* <div className="mt-8 font-semibold flex flex-row">
        <p className="pt-2">Navigate the Compass of Oppression:</p>
        <Link to="/compass">
          <Windmill.Button className="w-65 ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white">
            Click here
          </Windmill.Button>
        </Link>
      </div> */}
    </div>
  );
}

export default Flower;
