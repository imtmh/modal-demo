import React from "react";
import { NavLink, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Basic from "./Pages/Basic";
import MultipleModals from "./Pages/MultipleModals";
import EmbeddedModals from "./Pages/EmbeddedModals";

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="header-navbar">
          <NavLink to="/">Basic</NavLink>
          <NavLink to="/multi">Multiple</NavLink>
          <NavLink to="/embedd">Embedded</NavLink>
          <NavLink to="/pink">Pink</NavLink>
        </ul>
        <Switch>
          <Route exact path="/">
            <Basic />
          </Route>
          <Route path="/multi">
            <MultipleModals />
          </Route>
          <Route path="/embedd">
            <EmbeddedModals />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
