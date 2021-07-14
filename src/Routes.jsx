import React from "react";
import { Route, Switch } from "react-router-dom";
//Pages
import Home from "./pages/home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
