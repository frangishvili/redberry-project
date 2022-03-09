import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import PersonalInfo from "./pages/PersonalInfo";
import TechSkills from "./pages/TechSkills";
import Covid from "./pages/Covid";
import DevTalks from "./pages/DevTalks";
import Thancks from "./pages/Thancks";
import Submit from "./pages/Submit";
import ApplicationList from "./pages/ApplicationList";

function App() {
  return (
    <div className="app_container">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/personal-info">
          <PersonalInfo />
        </Route>
        <Route path="/tech-skills">
          <TechSkills />
        </Route>
        <Route path="/covid-info">
          <Covid />
        </Route>
        <Route path="/devtalks">
          <DevTalks />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/thancks-page">
          <Thancks />
        </Route>
        <Route path="/applications">
          <ApplicationList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
