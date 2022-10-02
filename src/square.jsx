import { Component } from "react";
import Board from "./board";
import Game from "./game";
//import Board from "./board.jsx";

// class Square extends Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  //console.log(props);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
