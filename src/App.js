import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
  return (
    <Route
      render={({ location }) => (
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      )}
    />
  );
}

export default App;
