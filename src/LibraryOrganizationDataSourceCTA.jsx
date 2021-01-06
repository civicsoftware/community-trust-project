import React from "react";
import { default as Windmill } from "@windmill/react-ui";

function LibraryOrganizationDataSourceCTA() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-semibold">
        Are you an organization that has data you would like to see in the
        Community Data Library?
      </h1>
      <p className="mt-4">
        Creating and publishing open context at the organizational level is a
        powerful way to create value and build connections in community. If your
        organization receives requests for access to your data, having metadata
        context and governance models publicly available is a great way to
        protect integrity of use and set guidelines before sharing raw data.
      </p>

      <p className="mt-4">
        We can help you start the process of adding to an existing collection or
        starting your own.
      </p>
      <Windmill.Button className="mt-4 w-72">
        <a href="mailto:datastrategy-grp@civicteam.org?subject=Add My Data Source to the Library">
          Add Your Data Source to the Library
        </a>
      </Windmill.Button>
    </div>
  );
}

export default LibraryOrganizationDataSourceCTA;
