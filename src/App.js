import React from "react";
import { NavLink, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Basic from "./Pages/Basic";
import MultipleModals from "./Pages/MultipleModals";
import MultipleModalsStack from "./Pages/MultipleModalsStack";
import EmbeddedModals from "./Pages/EmbeddedModals";
import HeightWidthConfig from "./Pages/HeightWidthConfig";

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="header-navbar">
          <NavLink to="/">Basic</NavLink>
          <NavLink to="/multi">Multiple</NavLink>
          <NavLink to="/multi-stack">Multiple-stack</NavLink>
          <NavLink to="/embedd">Embedded</NavLink>
          <NavLink to="/configurable">Customised config</NavLink>
        </ul>
        <Switch>
          <Route exact path="/">
            <Basic />
          </Route>
          <Route path="/multi">
            <MultipleModals />
          </Route>
          <Route path="/multi-stack">
            <MultipleModalsStack />
          </Route>

          <Route path="/embedd">
            <EmbeddedModals />
          </Route>

          <Route exact path="/configurable">
            <HeightWidthConfig />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
