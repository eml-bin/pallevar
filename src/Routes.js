import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./views/Welcome";
// import Login from "./views/Login";
// import Signup from "./views/Signup";
import NotFound from "./components/NotFound";

export default function Routes() {
  return (
    <header className="masterhead">
        <Switch>
            <Route exact path="/" component={Welcome} />
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} /> */}
            
            <Route path="*" component={NotFound} />
        </Switch>
    </header>
  );
}