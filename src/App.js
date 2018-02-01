import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "./App.css";
import SearchRestaurant from "./containers/SearchRestaurant/SearchRestaurant";
import Authenticator from "./containers/Authenticator/Authenticator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/auth" exact component={Authenticator} />
          <Route path="/" exact component={SearchRestaurant} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
