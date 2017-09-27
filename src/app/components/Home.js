import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

let timeoutId;

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fetch: false,
      user: "",
      value: ""
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      fetch: true
    });
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => this.handleRequest(), 1000);
  }

  handleRequest() {
    const api = "https://api.github.com/search/users";
    console.log("ini pas request");
    if (this.state.value) {
      Axios.get(`${api}?q=${this.state.value}`)
        .then(response => {
          console.log(response.data.items, "ini di axios");
          this.setState({
            user: response.data.items,
            fetch: false
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
    if (!this.state.value) {
      this.setState({
        user: ""
      });
    }
  }
  renderList() {
    if (!this.state.fetch) {
      return this.state.user.map((tampil, index) => (
        <div key={index} className="col-md-3 thumbnail">
          <Link to={`/user/${tampil.login}`}>
            <h3>{tampil.login}</h3>
            <img src={tampil.avatar_url} className="img-thumbnail" />
          </Link>
        </div>
      ));
    } else {
      return <div> Loading .. </div>;
    }
  }
  render() {
    return (
      <div className="container">
        <h3>Github API</h3>
        <input
          className="form-control"
          placeholder="Search user github ..."
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        {this.state.user ? this.renderList() : ""}
      </div>
    );
  }
}
