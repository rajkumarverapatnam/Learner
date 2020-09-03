import React from "react";

import "./App.css";
import { Login } from "./components/login";
import { LearnerList } from "./components/learnerList";
import { LearnerStats } from "./components/learnerStats";

function App() {
  return (
    <div>
      <Login />
      {/* <LearnerList /> */}
      <LearnerStats />
    </div>
  );
}

export default App;
