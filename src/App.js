import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

import "./App.css";
import { Login } from "./components/login";
import { LearnerList } from "./components/learnerList";
import LearnerStats from "./components/learnerStats";

function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        strict
        component={() => (
          <div>
            <Login />
            <LearnerList />
          </div>
        )}
      ></Route>
      {/* <Route></Route> */}
      <Route
        path="/LearnerStats"
        exact
        strict
        component={() => (
          <div>
            <Login />
            <LearnerStats />
          </div>
        )}
      ></Route>
    </Router>
  );
}

export default App;
