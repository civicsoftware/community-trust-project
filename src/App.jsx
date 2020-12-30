import React from "react";
import { default as Windmill } from "@windmill/react-ui";

import ROUTES, { RenderRoutes } from "./routes";
import Navbar from "./Navbar";
import "./fonts.css";
import trustTheme from './trustTheme';

function App() {
  return (
    <Windmill.Windmill theme={trustTheme}>
      <Navbar />
      <RenderRoutes routes={ROUTES} />
    </Windmill.Windmill>
  );
}

export default App;
