import ShoppingList from "./shoppingList";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";

import Game from "./game.jsx";
import "./index.css";

const page = (
  <div className="div-class">
    <Game />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
