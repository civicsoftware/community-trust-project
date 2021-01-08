import React from "react";
import { default as Windmill } from "@windmill/react-ui";

function LibraryDataSourceRequestCTA() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-lg font-semibold">
        Is there a dataset that you would like to see added to a collection?
      </h1>
      <p className="mt-4 font-sans prose prose-lg">
        Knowing what types of information community members need and care about
        is important, and we want to hear from you. You can send us a request
        for a dataset or subject area, and we’ll work with one of our TRUST
        Partners or a city, county, or government agency that isn’t a partner
        yet to get the conversation started.
      </p>
      <Windmill.Button className="mt-4 w-80">
        <a href="mailto:datastrategy-grp@civicteam.org?subject=Request for Data Source">
          Request a Dataset be Added to the Library
        </a>
      </Windmill.Button>
    </div>
  );
}

export default LibraryDataSourceRequestCTA;
