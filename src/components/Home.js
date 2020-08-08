import React, { Component } from "react";
import "bulma/css/bulma.css";
import HomeWindow from "./HomeWindow";
import HomeDoor from "./HomeDoor";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNumber: 0
    };
  }

  render() {
    return (
      <div>
        <HomeWindow />
        <HomeDoor />
      </div>
    );
  }
}
