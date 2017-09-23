import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    onGreet() {
        alert("hello!");
    }
    render () {
        return (
            <div className="container">
                < Header homeLink = "Home" />
                <div className="container">
                    <hr/>
                    < Home name={"max"} initialAge={23} greet={this.onGreet} />
                </div>
            </div>
        );
    }
}

render (<App/>, window.document.getElementById("app"));