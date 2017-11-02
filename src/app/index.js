import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:username" component={User} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById("app"));
