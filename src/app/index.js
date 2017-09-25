import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { Github } from "./components/Github";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Root} />
          <Route path="/user/:id" component={User} />
          <Route path="/home" component={Home} />
          <Route path="/github" component={Github} />
        </div>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById("app"));
