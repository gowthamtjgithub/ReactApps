import ReactDOM from "react-dom";
import React, { Component } from "react";
import Summary from './Summary';
import DemoComponent from './Demo';

class Elevator extends React.Component {

    constructor(props) {

        super(props);

        this.elevatorRef = React.createRef();

    }



    render() {
        return (

            <div>

                <h2>Welcome to Elevator Ordering Screen...</h2>

                <p>

                    <label>Elevator Name : <input ref={this.elevatorRef} type="text"></input></label>

                </p>

                <p>

                    <label>Elevator Speed : <input type="text"></input></label>

                </p>

                <p>

                    <label>Elevator Load : <input type="text"></input></label>

                </p>

                <Summary innerRef={this.elevatorRef}></Summary>

                <DemoComponent ref={this.elevatorRef}></DemoComponent>

            </div>

        );
    }
}

export default Elevator;