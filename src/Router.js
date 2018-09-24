import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
