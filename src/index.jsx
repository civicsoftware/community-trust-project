import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import "./index.css";

// GraphiQL: https://graphql.contentful.com/content/v1/spaces/6tnkmr6wtypd/explore?access_token=GuDQhC7mmtc54uXycydPDa3n5uuFvsbC8t1ueJ-CG1I
const contentfulSpaceID = "6tnkmr6wtypd";
const contentfulContentDeliveryKey =
  "GuDQhC7mmtc54uXycydPDa3n5uuFvsbC8t1ueJ-CG1I";

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceID}`
});

const authLink = setContext((_, { headers }) => {
  const token = contentfulContentDeliveryKey;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
