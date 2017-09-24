import React from "react";
import Axios from "axios";

export class Github extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: null,
      value: ""
    };
  }

  componentDidMount() {
    Axios.get("https://api.github.com/users").then(response => {
      console.log(response);
      setTimeout(
        () =>
          this.setState({
            username: response.data
          }),
        5000
      );
    });
  }

  renderUser({ filterUser }) {
    if (this.state.username !== null) {
      return this.filterUser.map((tampil, index) => (
        <div key={index}> {tampil.login} </div>
      ));
    }
    return <div> Loading ... </div>;
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log(this.state.value);
  }

  render() {
    let filterUser;
    if (this.state.username !== null) {
      filterUser = this.state.username.filter(user => {
        return user.login.indexOf(this.state.value) !== -1;
      });
    }
    return (
      <div className="container">
        <h3>Username : </h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        {this.state.username !== null ? (
          filterUser.map((tampil, index) => (
            <div key={index}> {tampil.login} </div>
          ))
        ) : (
          <div> Loading .. </div>
        )}
      </div>
    );
  }
}
