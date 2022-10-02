import React, { Component } from "react";
//import Tick from "./tick";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    //console.log(this.state.date.toLocaleTimeString());
    return (
      <div>
        <h1>Hello</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
// export class Clock extends Component {
//   setTick() {
//     return setInterval(tick, 1000);
//   }
//   render() {
//     return <div>{this.setTick()}</div>;
//   }
// }

// function tick() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>It's {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// export default Clock;
