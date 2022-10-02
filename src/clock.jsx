import { Component } from "react";
import { render } from "@testing-library/react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Here's a clock!</h1>
        <h2>It is {this.props.date}</h2>
      </div>
    );
  }
}

let count = 0;
function tick() {
  //console.log("tick", count);
  count++;
  return <Clock date={new Date()} />;
}

setInterval(tick, 1000);

export default Clock;
