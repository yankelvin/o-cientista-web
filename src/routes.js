import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./pages/Home/Home";
import { CykParser } from "./pages/CykParser/CykParser";

export function Routes() {
  return (
    <Route>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cykParser" exact={true} component={CykParser} />
      </Switch>
    </Route>
  );
}
