import React from "react";

function Library() {
  return (
    <>
      <div className="text-xl justify-self-center">Data Library</div>
      <a
        href="/context?data=runaway"
        className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
      >
        Runaways Dataset
      </a>
      <a
        href="/context?data=mentalHealth"
        className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
      >
        Mental Health Dataset
      </a>
      <a
        href="/context?data=evictions"
        className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
      >
        Evictions Count Dataset
      </a>
      <a
        href="/context?data=lowBirthRate"
        className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
      >
        Low Birth Rate Dataset
      </a>
      <a
        href="/context?data=teenBirth"
        className="whitespace-nowrap text-gray-500 px-4 py-2 hover:text-gray-900"
      >
        Teen Birth Dataset
      </a>
    </>
  );
}

export default Library;
