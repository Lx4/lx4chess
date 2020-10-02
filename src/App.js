import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main.css";
import ProfileState from "./context/profile/profileState";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <ProfileState>
      <Router>
        <div className="container mx-auto">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:username" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ProfileState>
  );
}

export default App;
