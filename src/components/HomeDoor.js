import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class HomeDoor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
      material: "glass",
      isSingle: false
    };
  }

  render() {
    return (
      <div class="container is-danger mx-2 my-2">
        <section class="hero is-info is-bold has-text-centered">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Door Information</h1>
              <div class="columns is-mobile"></div>
              <div class="columns is-mobile">
                <div class="column">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">Color</span>
                      <span class="tag is-secondary">{this.state.color}</span>
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
                      <span class="tag is-dark">Is Single Door: </span>
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
