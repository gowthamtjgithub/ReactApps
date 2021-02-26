import ReactDOM from "react-dom";
import React, { Component } from "react";

const DemoComponent = React.forwardRef((props, ref) => {

    function testClick() {

        ref.current.focus();

    }

    return (

        <button onClick={testClick}>Click</button>

    )

});

export default DemoComponent;