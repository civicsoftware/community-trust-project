import React, { useState } from "react";
import { default as Windmill } from "@windmill/react-ui";

import ROUTES, { RenderRoutes } from "./routes";
import Navbar from "./Navbar";
import "./fonts.css";
import trustTheme from "./trustTheme";

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

function App() {
  const [auth, setAuth] = useStateWithLocalStorage(false);
  const [password, setPassword] = useState("");

  if (!auth)
    return (
      <Windmill.Windmill theme={trustTheme}>
        <div className="flex items-center justify-center h-screen bg-gray-50">
          <div className="m-2 max-w-xl font-sans prose">
            <Windmill.Label>
              <p>
                At the request of the data provider, Civic Software Foundation
                is temporarily restricting this prototype site to a limited
                audience.
              </p>
              <p>
                Community partners may request access from{" "}
                <a href="mailto:kory.murphy@multco.us?cc=alis.smbatyan@multco.us,matt.conrad@multco.us&subject=Community%20TRUST%20Project%20Access%20Request">
                  Kory Murphy
                </a>{" "}
                at the Multnomah County Department of County Assets.
              </p>
              <Windmill.Input
                className="mt-4"
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter password"
                onKeyDown={
                  password === "trust" ? () => setAuth(true) : () => null
                }
              />
              <Windmill.HelperText>Password</Windmill.HelperText>
            </Windmill.Label>
            <Windmill.Button
              className="mt-4"
              disabled={password !== "trust"}
              type="button"
              onClick={() => setAuth(true)}
            >
              Login
            </Windmill.Button>
          </div>
        </div>
      </Windmill.Windmill>
    );
  return (
    <Windmill.Windmill theme={trustTheme}>
      <Navbar />
      <RenderRoutes routes={ROUTES} />
    </Windmill.Windmill>
  );
}

export default App;
