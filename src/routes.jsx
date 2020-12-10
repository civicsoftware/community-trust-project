import React from "react";
import Avatars from "./Avatars";
import Context from "./Context";
import { Switch, Route } from "react-router-dom";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/context",
        key: "APP_PAGE",
        exact: true,
        component: Context  
      },
      {
        path: "/avatars",
        key: "APP_PAGE",
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