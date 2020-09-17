import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Hashing from "./Components/Pages/Hashing/Hashing";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/hashing" exact component={Hashing} />
      </Switch>
    </Router>
  );
};

export default Routes;
