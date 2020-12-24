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
    </>
  );
}

export default Library;
