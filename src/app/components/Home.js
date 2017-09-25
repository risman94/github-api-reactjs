import React from "react";
import Axios from "axios";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      value: ""
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handle(e) {
    e.preventDefault();
    const api = "https://api.github.com/search/users";
    Axios.get(api + "?q=" + this.state.value)
      .then(response => {
        console.log(response.data.items);
        this.setState({
          user: response.data.items
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    // let filterUser;
    // if (this.state.user !== null) {
    //   filterUser = this.state.user.filter(user => {
    //     return user.login.indexOf(this.state.value) !== -1;
    //   });
    // }
    return (
      <div className="container">
        <h3>Home</h3>
        <form onSubmit={this.handle.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit" />
        </form>
        {this.state.user !== null ? (
          this.state.user.map((tampil, index) => (
            <div key={index}>{tampil.login}</div>
          ))
        ) : (
          <div> Loading .. </div>
        )}
      </div>
    );
  }
}
