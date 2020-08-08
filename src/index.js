import ReactDOM from "react-dom";
import React, { Component } from "react";

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
      <div className="container">
        <p>Total Number of Windws: {this.state.number}</p>
      </div>
    );
  }
}

ReactDOM.render(<HomeWindow />, document.getElementById("root"));
