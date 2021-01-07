import React from "react";
import { Link } from "react-router-dom";
import { node, string } from "prop-types";

function QuestionCard({ title, color, children }) {
  return (
    <div
      id="question-card-1"
      className={`col-span-1 relative my-4 lg:m-4 rounded-lg shadow-xl bg-${color}-50  border-gray-500`}
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
        <h2 className="inline-block mt-1 ml-2 text-xl font-bold">{title}</h2>
      </div>
      <div className="p-4 bg-white prose font-rubik max-w-none">{children}</div>
    </div>
  );
}

QuestionCard.propTypes = {
  title: string,
  color: string,
  children: node
};

function QuestionOne() {
  return (
    <QuestionCard color="purple" title="What is the data library?">
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
        questions may be harder than you think – and some of the most meaningful
        information is what answers <i>aren’t</i> there.
      </p>
    </QuestionCard>
  );
}
function QuestionTwo() {
  return (
    <QuestionCard color="pink" title="Who is it for?">
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
        Community Data Library is a resource for the public to have transparency
        into systems that are meant to represent them, and reinforce the diverse
        humanity data is meant to capture.
      </p>
    </QuestionCard>
  );
}
function QuestionThree() {
  return (
    <QuestionCard color="yellow" title="Who can publish to the library?">
      <p>
        For <b>organizations</b> whose goal is to cross-collaborate and share
        information, making your metadata more discoverable can help you connect
        to the groups you want to hear from.
      </p>
      <p>
        For our <b>government</b> TRUST partners, who have a commitment to serve
        the public interest equitably, publishing metadata is a practice that
        demonstrates action toward remediating bias and preventing future harm.
      </p>
    </QuestionCard>
  );
}
function QuestionFour() {
  return (
    <QuestionCard color="blue" title="What is a TRUST Partnership?">
      <p>
        TRUST stands for Technology for Relationships, Understanding, Service
        and Transparency. For government agencies, creating public data
        resources that drive equitable outcomes involves more than just building
        technology. In order to create sustainable change, modernizing workflows
        and practices that prioritize inclusion means adapting existing data
        governance models and involves many people and sometimes, inflexible
        systems. Through the TRUST program, CIVIC works with partners to
        integrate standards for structured context collaboration and engage
        community stakeholders.
      </p>
    </QuestionCard>
  );
}
function QuestionFive() {
  return (
    <QuestionCard color="teal" title="Who does the library belong to?">
      <p>
        The Community Data Library is designed to build and hold value in the
        public interest, It is a project that is created and facilitated by{" "}
        <a href="www.civicsoftwarefoundation.org">Civic Software Foundation</a>{" "}
        (CIVIC), a 501c3 nonprofit using open source technology. CIVIC’s program
        supports the growth and maintenance of the Community Data Library by
        providing technical frameworks in addition to process support and
        training for our library publishers. The{" "}
        <Link to="/blueprint">CIVIC Blueprint for Context-Aware Systems</Link>{" "}
        provides the backbone and principles for our collaboration model.
      </p>
      <p>
        The library does not publish raw data, and all metadata published in the
        library remains in the custodianship of the data owner.
      </p>
    </QuestionCard>
  );
}

// eslint-disable-next-line import/prefer-default-export
export const QUESTIONS = [
  {
    Component: QuestionOne,
    title: "What is the data library?",
    color: "purple"
  },
  { Component: QuestionTwo, title: "Who is it for?", color: "pink" },
  {
    Component: QuestionThree,
    title: "Who can publish to the library?",
    color: "yellow"
  },
  {
    Component: QuestionFour,
    title: "What is a TRUST Partnership?",
    color: "blue"
  },
  {
    Component: QuestionFive,
    title: "Who does the library belong to?",
    color: "teal"
  }
];
