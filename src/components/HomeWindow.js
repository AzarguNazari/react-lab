import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class HomeWindow extends Component {
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
      <div class="container is-danger mx-2 my-2">
        <section class="hero is-warning is-bold has-text-centered">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Window Information</h1>
              <div class="columns is-mobile">
                <div class="column">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">Number</span>
                      <span class="tag is-secondary">{this.state.number}</span>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">Material</span>
                      <span class="tag is-secondary">
                        {this.state.material}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">isOpenned: </span>
                      <span class="tag is-secondary">
                        {this.state.isOpen ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
