import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Splash from "./pages/Splash";
//import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";
import Nav from "./Components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  </Router>
);

export default App;