import React from "react";
import createHistory from "history/createBrowserHistory";
import { browserHistory } from "react-router";
import Axios from "axios";

export class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      repos: "",
      name: "",
      bio: "",
      image: "",
      location: "",
      followers: "",
      following: ""
    };
  }

  componentDidMount() {
    const api = "https://api.github.com/users";
    Axios.get(`${api}/${this.props.match.params.username}/repos`).then(res => {
      console.log(res.data);
      this.setState({
        repos: res.data
      });
    });
    Axios.get(`${api}/${this.props.match.params.username}`).then(res => {
      console.log(res.data);
      this.setState({
        name: res.data.name,
        bio: res.data.bio,
        image: res.data.avatar_url,
        location: res.data.location,
        followers: res.data.followers,
        following: res.data.following
      });
    });
  }

  onNavigateHome() {
    const history = createHistory;
    this.props.history.push("/home");
  }
  render() {
    return (
      <div className="container">
        <button
          onClick={this.onNavigateHome.bind(this)}
          className="btn btn-dark"
        >
          Go Home!
        </button>
        <hr />
        <div className="text-center">
          <img src={this.state.image} className="img-thumbnail" />
          <h3>{this.state.name}</h3>
          <p className="text-muted">
            {this.props.match.params.username} || {this.state.location}
          </p>
          <p>
            <medium className="text-muted"> Followers : </medium>{" "}
            {this.state.followers}
            <medium className="text-muted"> Following : </medium>{" "}
            {this.state.following}
          </p>
        </div>
        <div className="col-md-12">
          {this.state.repos ? (
            this.state.repos.map((index, tampil) => (
              <div className="card col-md-6 repos" key={tampil}>
                <div className="card-body">
                  <a href={index.html_url} target="_blank">
                    <h4>{index.name}</h4>
                  </a>
                  <p> {index.description} </p>
                  <p>
                    <small className="text-muted">{index.language}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
