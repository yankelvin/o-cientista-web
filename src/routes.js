import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./pages/Home/Home";

export function Routes() {
  return (
    <Route>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </Route>
  );
}
