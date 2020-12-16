import React from "react";
import Home from "./Home";
import Avatars from "./Avatars";
import Context from "./Context";
import Library from "./Library";
import { Switch, Route } from "react-router-dom";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/home",
        key: "HOME",
        exact: true,
        component: Home  
      },
      {
        path: "/library",
        key: "LIBRARY",
        exact: true,
        component: Library  
      },
      {
        path: "/context",
        key: "CONTEXT",
        exact: true,
        component: Context  
      },
      {
        path: "/avatars",
        key: "AVATARS",
        exact: true,
        component: Avatars
      },
    ],
  },
];

export default ROUTES;

/* *
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

/* *
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
      </Switch>
    );
  }