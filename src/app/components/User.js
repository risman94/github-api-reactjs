import React from "react";
import createHistory from "history/createBrowserHistory";
import { browserHistory } from "react-router";

export class User extends React.Component {
  onNavigateHome() {
    const history = createHistory;
    this.props.history.push("/home");
  }
  render() {
    return (
      <div className="container">
        <h3>The User Page</h3>
        <p>User ID : {this.props.match.params.id} </p>
        <button
          onClick={this.onNavigateHome.bind(this)}
          className="btn btn-primary"
        >
          Go Home!
        </button>
      </div>
    );
  }
}
