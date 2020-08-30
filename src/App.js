import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <Route
      render={({ location }) => (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      )}
    />
  );
}

export default App;
