import React, { Component } from "react";

class SlName extends Component {
  state = {};
  render() {
    return <h2>It's also for {this.props.name}</h2>;
  }
}

export default SlName;
