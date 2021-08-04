import React from "react";
import HeaderContainer from "./header/HeaderContainer"
import SinglePlanetContainer from "./singlePlanet/SinglePlanetContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import "../App.css";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route
          path="/:name"
          render={({ match }) => <SinglePlanetContainer match={match} />}
        />
      </Switch>
      <Redirect from="/" to="/mercury" />
    </div>
  );
};

export default App;
