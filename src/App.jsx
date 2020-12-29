import React from "react";
import { default as Windmill } from "@windmill/react-ui";

import ROUTES, { RenderRoutes } from "./routes";
import Navbar from "./Navbar";

function App() {
  return (
    <Windmill.Windmill>
      <Navbar />
      <RenderRoutes routes={ROUTES} />
    </Windmill.Windmill>
  );
}

export default App;
