import Clock from "./clock";
import ShoppingList from "./shoppingList";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Square from "./square.jsx";
import Board from "./board.jsx";
import Game from "./game.jsx";
import "./index.css";

const page = (
  <div className="div-class">
    <ShoppingList />
    <Game />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
