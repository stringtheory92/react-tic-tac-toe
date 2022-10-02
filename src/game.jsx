import React, { Component } from "react";
import Board from "./board.jsx";
import Square from "./square.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), x: null, y: null }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const newLoc = moveLocation(i);
    console.log("moveLocation: ", newLoc);

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";
    //console.log(this.state.history.concat([{ squares: squares }]));

    this.setState({
      history: history.concat([{ squares: squares, ...newLoc }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
    console.log(this.state);
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      //   console.log("step: ", step);
      //   console.log("move ", move);
      console.log("this.state.history: ", this.state);
      const desc = move
        ? "Go to move #" + move + ` (x:${current.x} y:${current.y})`
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else if (this.state.stepNumber < 9) {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    } else {
      status = "Draw";
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => {
              this.handleClick(i);
              //   console.log("this: ", this);
              //   console.log("i: ", i);
              //   console.log("current.squares: ", current.squares);
              //   console.log("this.state.history: ", history);
            }}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function moveLocation(i) {
  const loc = {};
  switch (i) {
    case 0:
      loc.x = 1;
      loc.y = 3;
      break;
    case 1:
      loc.x = 2;
      loc.y = 3;
      break;
    case 2:
      loc.x = 3;
      loc.y = 3;
      break;
    case 3:
      loc.x = 1;
      loc.y = 2;
      break;
    case 4:
      loc.x = 2;
      loc.y = 2;
      break;
    case 5:
      loc.x = 3;
      loc.y = 2;
      break;
    case 6:
      loc.x = 1;
      loc.y = 1;
      break;
    case 7:
      loc.x = 2;
      loc.y = 1;
      break;
    case 8:
      loc.x = 3;
      loc.y = 1;
      break;
  }
  return loc;
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[c] && squares[a] === squares[c])
      return squares[a];
  }
}

export default Game;
