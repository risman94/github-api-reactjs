import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet() {
        alert("hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    };

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render () {
        let homeCmp="";
        if(this.state.homeMounted) {
            homeCmp = (
                < Home 
                    name={"max"} 
                    initialAge={23} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                < Header homeLink={this.state.homeLink} />
                <div className="container">
                    <hr/>
                    {homeCmp}
                </div>
                <div className="container">
                    <hr/>
                    <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-dark">
                        (Un)Mount Home Component
                    </button>
                </div>
            </div>
        );
    }
}

render (<App/>, window.document.getElementById("app"));