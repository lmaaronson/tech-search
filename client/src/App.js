
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
//import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";
import Nav from "./Components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </div>
  </Router>
);

export default App;

