import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder () {
        this.setState({
            age: this.state.age + 4
        });
    }
    render () {
        return (
            <div>
                <p> In a new Component </p>
                <p> Your name is {this.props.name}, your age {this.state.age} </p>
                <p> Status : {this.state.status} </p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary"> Make me older! </button>
                <hr/>
                <button className="btn btn-info" onClick={this.props.greet}> Greet </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};