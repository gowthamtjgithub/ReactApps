import ReactDOM from "react-dom";

import React, { Component } from "react";

class Summary extends React.Component {

    constructor(props) {

        super(props);

    }



    focusInput = () => {

        this.props.innerRef.current.focus();

    }

    render() {
        return (

            <div>

                <h2>Summary Details...</h2>

                <p onClick={this.focusInput}>

                    <label>Elevator Name : <b>Name - 1</b></label>

                </p>

                <p>

                    <label>Elevator Speed : <b>10 m/s</b></label>

                </p>

                <p>

                    <label>Elevator Load : <b>550 Kg</b></label>

                </p>

            </div>

        );

    }
}

export default Summary;