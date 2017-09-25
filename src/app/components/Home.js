import React from "react";
import Axios from "axios";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      value: "risman94"
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log(this.state.value);
  }

  componentDidMount() {
    const api = "https://api.github.com/search/users";
    //const quest =  ;
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
    return (
      <div className="container">
        <h3>Home</h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        {this.state.user !== null ? (
          this.state.user.map((tampil, index) => (
            <div key={index}> {tampil.login} </div>
          ))
        ) : (
          <div> Loading .. </div>
        )}
      </div>
    );
  }
}
