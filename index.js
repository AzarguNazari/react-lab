import ReactDOM from "react-dom";
import React, { Component } from "react";
import "bootstrap";

class HomeWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      material: "glass",
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <p>Total Number of Windws: {this.state.number}</p>
        <p>is Window Openned {this.state.isOpen}</p>
        <p>The material windows are made is {this.state.material}</p>
      </div>
    );
  }
}

ReactDOM.render(<HomeWindow />, document.getElementById("root"));
