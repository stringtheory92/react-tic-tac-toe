import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./clock.jsx";
//import Game from "./game.jsx";
//import "./index.css";

const page = (
  <div className="div-class">
    {/*<Game />*/}
    <Clock />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);
