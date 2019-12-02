import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./container/landing-page";
import AboutPage from "./container/about-page";
import ContactPage from "./container/contact-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={props => <LandingPage source="home" {...props} />}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact/:id" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
