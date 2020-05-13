import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./views/Welcome";
import NotFound from "./components/NotFound";

export default function Routes() {
  return (
    <header className="masterhead">
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="*" component={NotFound} />
        </Switch>
    </header>
  );
}